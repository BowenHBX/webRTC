
import libAccs, { H5AccsCore, accsResponse } from '@ali/lib-accs';
import * as proto from '../protobuf/model';
import { EventEmitter } from 'events';
import { IAccsConfig } from '../@types';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;

class Accs extends EventEmitter {
  conn: H5AccsCore;
  seqId = 0;

  constructor() {
    super();
  }

  getSeqId() {
    return this.seqId++;
  }

  initAccs = async (accsConfig: IAccsConfig) => {
    const config = {
      reconnect: !!accsConfig.reconnectInterval,
      reconnectInterval: accsConfig.reconnectInterval ?? 0,
      heartbeat: true,
      aserverProxy: accsConfig.aserverProxy ?? 'msgacs.m.taobao.com',
      appkey: accsConfig.appkey, // appkey, 必填，appkey寻找@子琛 申请   32780517  H5_3Cl6Mt52kce4N1
      m_params: null,
    };
    if (accsConfig.mParams) {
      config.m_params = { ...accsConfig.mParams };
    }

    return new Promise((resolve, reject) => {
      try {
        libAccs.init(config).then((con: H5AccsCore) => {
          console.log('conn-----', con);
          this.conn = con;
          con.onMessage('multimedia_biz_platform', async (resp: accsResponse) => {
            try {
              // console.log('multimedia_biz_platform', resp);
              const buffer = await resp.getBinaryArray();
              // 解析buffer为pb对象
              const object: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = pkg.Result.decode(buffer);
              if (object.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
                this.emit(`event-${object.commandHeader?.seqId}`, object);
              }
            } catch (error) {
              console.error('[Error]: getBinaryArray', error);
            }
          });
          resolve(con);
        });
      } catch (e) {
        console.log('[libAccs-error]', e);
        resolve({ _token: '', errMsg: e.toString() });
      }
    });
  };

  sendMessage = async (buffer: Uint8Array, seqId: number, noResult?: boolean): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult> => {
    return new Promise((resolve, reject) => {
      if (buffer === null) {
        reject();
      }

      this.once(`event-${seqId}`, (msg) => {
        console.log(`__EventEmitter-${seqId}`, msg);
        resolve(msg);
      });

      this.conn.send('multimedia_biz_platform', buffer).then((sendResult: accsResponse) => {
        console.log(`sendResult-${seqId}`, sendResult, sendResult.getText());
        if (sendResult.err !== '0') {
          reject();
        } else if (noResult) {
          const result = new pkg.Result();
          result.errCode = pkg.Result.ERROR_CODE.ERROR_SUCCESS;
          resolve(result);
        }
      }).catch((e) => {
        reject();
      });
    });
  };
}

export default Accs;
