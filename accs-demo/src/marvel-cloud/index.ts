

import { EventEmitter } from 'events';
import { H5AccsCore } from '@ali/lib-accs';
import MarvelEditor from './editor';
import EditProject from './@types/edit-project';
import Project from './addon/project';
import MarvelAddonMeEditor from './addon/marvelAddonMeEditor';
import MarvelAddonViewer from './addon/marvelAddonViewer';
import { MarvelExporter } from './exporter';
import { MarvelViewer } from './viewer';
import { MarvelToolbox } from './toolbox';

import {
  ColorHEX,
  ExportType,
  IAccsConfig,
  MARVEL_API_VERSION, MARVEL_VERSION, Path, Ret,
} from './@types';
import Viewer from './@types/viewer';
import Accs from './accs';
import * as proto from './protobuf/model';

export * from './@types';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;
class MarvelProject extends EventEmitter {
  private project: EditProject;
  private exporter: MarvelExporter;
  private viewer: MarvelViewer;
  private editor: MarvelEditor;
  private _accs: Accs;
  private _userId: string;
  sessionId = '';
  streamUrl = '';
  msgUrl = '';

  constructor() {
    super();
  }

  triggerError(error: Error, message?: string) {
    const info = `${__filename}::${error.stack.split('\n')[0]} → ${message || error.message} `;
    console.warn(info);
    this.emit('MarvelSdkError', `${__filename}::${error.stack.split('\n')[1].match(/ at ([A-Za-z0-9.]*) /)[1]} → ${message || error.message}`);
  }

  static getVersion(): string {
    return MARVEL_VERSION;
  }

  static getApiVersion(): number {
    return MARVEL_API_VERSION;
  }

  /**
   * 创建会话，返回MarvelProject实例
   *
   * @param userId 用户ID，需要登录后才能创建会话
   * @param appKey marvel app key
   * @param appToken marvel app token
   * @param accsConfig accs 配置信息
   * {
   *   aserverProxy: string; // 日常：msgacs.waptest.taobao.com  预发：msgacs.wapa.taobao.com  生产：msgacs.m.taobao.com
   *   appkey: string;
   *   mParams?: { // 自定义获取token的接口
   *    api: 'mtop.accs.auth.getH5Token',
   *    v: '1.0',
   *    H5Request: true,
   *    LoginRequest: true,
   *    ecode: 1,
   *   };
   *   reconnectInterval: number; // accs重连时间
   * }
   * @returns
   */
  static async create(userId: string, appKey: string, appToken: string, accsConfig: IAccsConfig): Promise<MarvelProject> {
    const _instance = new MarvelProject();
    await _instance._init(userId, appKey, appToken, accsConfig);
    return _instance;
  }

  private async _init(userId: string, appKey: string, appToken: string, accsConfig: IAccsConfig): Promise<void> {
    this._userId = userId;
    // accs注册
    this._accs = new Accs();
    const conn: H5AccsCore = await this._accs.initAccs(accsConfig);
    console.log('_init-conn-----', conn, conn.getStatus());
    if (!conn?.getStatus()) {
      this.triggerError(Error(''), `Accs Error → RetCode: -1, Message: ${''}`);
    }
    this.project = new Project(this._accs, userId, appKey, appToken);
    this.sessionId = await this.project.getSessionId(userId);
    this.editor = new MarvelEditor(this._accs, userId, this.sessionId);
    this.viewer = new MarvelViewer(this._accs, userId, this.sessionId);
    // this.project.setMeEditor(this.editor.getMeProxy());
  }

  getUserId(): string {
    return this._userId;
  }

  getAccsCon(): string {
    return this._accs.conn;
  }

  async destroy() {
    // this.sdk = null;
    await this.project.sessionEndCurrent();
    this.project = null;
    this.editor = null;
    this.viewer = null;
    // this.exporter = null;
  }

  // getSDK(): boolean {
  //   return this.sdk;
  // }

  async load(path: string, keepalive = true): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult> {
    const rtc: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult = await this.project.load(path, keepalive);
    console.log('load----', rtc);
    this.streamUrl = rtc.streamUrl;
    this.msgUrl = rtc.msgUrl;
    return rtc;
  }

  getProject(): EditProject {
    return this.project;
  }

  getViewer(): MarvelViewer {
    return this.viewer;
  }

  async setupViewer(width: number, height: number, canvasWidth: number, canvasHeight: number, bgColor?: ColorHEX): Promise<MarvelViewer> {
    // this.project.setViewer(this.viewer.getProxy(), width, height) // 设置项目的viewer和viewer的尺寸
    // this.editor.setCanvasSize(canvaseWidth, canvasHeight); //  MeEditor 新增设置Canvas画幅接口
    // this.editor.setCanvasScaleType(pkg.ScaleType.CenterCrop) // 画面居中裁剪
    await this.viewer.setProperties(width, height, pkg.ScaleType.CenterCrop);
    await this.editor.setCanvasProperties(canvasWidth, canvasHeight, pkg.ScaleType.CenterCrop, bgColor);
    return this.viewer;
  }

  getEditor(): MarvelEditor {
    return this.editor;
  }

  setExporter(exporter: MarvelExporter) {
    this.exporter = exporter;
  }

  doExporter(exporter?: MarvelExporter): Ret {
    if (exporter) {
      this.setExporter(exporter);
    }
    return this.getProject().doExport(this.exporter.getProxy());
  }

  createExporter(type: ExportType, path: Path): MarvelExporter {
    const exporter = new MarvelExporter(this._accs, this._userId, this.sessionId, type);
    exporter.setOutputPath(path);
    return exporter;
  }
}

export default MarvelProject;

export {
  // MarvelProject,
  // Editor,
  MarvelEditor,
  EditProject as EditorProject,
  MarvelExporter,
  MarvelToolbox,
  MarvelViewer,
  Viewer,
  // Exporter,
  // ExportType,
  // MarvelNodeAddonExporter,
  // MarvelNodeAddonEngine,
  // MarvelNodeAddonEditProject,
  // MarvelNodeAddonToolbox
  MarvelAddonMeEditor,
  MarvelAddonViewer,
  // FrameParam,
};

