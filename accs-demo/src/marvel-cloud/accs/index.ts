
import libAccs, { H5AccsCore, accsResponse } from '@ali/lib-accs';
import * as proto from '../protobuf/model';
import * as EventEmitter from 'eventemitter3';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;

class Accs {
  public conn: H5AccsCore;
  public __EventEmitter: EventEmitter;
  public seqId: number = 0;

  public MarvelNodeAddonViewer;
  public MarvelNodeAddonEditProject;
  public MarvelNodeAddonMeEditor;
  public MarvelNodeAddonExporter;
  public MarvelNodeAddonEngine;
  public MarvelNodeAddonToolbox;

  constructor() {
    this.__EventEmitter = new EventEmitter();
  }

  getSeqId() {
    return this.seqId++;
  }

  public initAccs = async () => {
    let conn: H5AccsCore;
    try {
      conn = await libAccs.init({
        appkey: 'H5_3Cl6Mt52kce4N1', // appkey, 必填，appkey寻找@子琛 申请   32780517  H5_3Cl6Mt52kce4N1
        m_params: {
          api: 'mtop.accs.auth.getH5Token',
          v: '1.0',
          H5Request: true,
          LoginRequest: true,
          ecode: 1
        }
      });
    } catch (e) {
      console.log('[libAccs-error]', e);
    }

    conn.onMessage('multimedia_biz_platform', async (resp: accsResponse) => {
      try {
        const buffer = await resp.getBinaryArray();
        // 解析buffer为pb对象
        const object: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = pkg.Result.decode(buffer);
        console.log('object: ', object);
        if (object.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
          this.__EventEmitter.emit(`event-${object.commandHeader?.seqId}`, object);
        }
      } catch (error) {
        console.error('[Error]: getBinaryArray', error);
      }
    });

    console.log('conn-----', conn);
    this.conn = conn;
    return conn;
  }

  public sendMessage = async (buffer: Uint8Array, seqId: number, noResult?: boolean): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult> => {
    return new Promise((resolve, reject) => {
      if (buffer === null) {
        reject();
      }

      this.__EventEmitter.once(`event-${seqId}`, (msg) => {
        console.log(`__EventEmitter-${seqId}`, msg);
        resolve(msg);
      });

      this.conn.send('multimedia_biz_platform', buffer)
        .then((sendResult: accsResponse) => {
          console.log(`sendResult-${seqId}`, sendResult, sendResult.getText());
          if (sendResult.err !== '0') {
            reject();
          } else if (noResult) {
            const result = new pkg.Result();
            result.errCode = pkg.Result.ERROR_CODE.ERROR_SUCCESS;
            resolve(result);
          }
        }).catch(e => {
          reject();
        });
    });
  }
}

export default Accs;