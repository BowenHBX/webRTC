import { GlobalBaseMarvelAddonMeEditor } from '../@types';
import Editor from '../@types/editor';
import Exporter from '../@types/exporter';
import Accs from '../accs';
import EditProject, { ViewerInfo } from '../@types/edit-project';
import ProtoMessage from './protoMessage';
import * as proto from '../protobuf/model';
import Viewer from '../@types/viewer';
// import { Path } from '../@types';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;

class Project implements EditProject {
  private _accs: Accs;
  private _appKey: string;
  private _appToken: string;
  private _userId: string;
  sessionId: string | null | undefined;

  constructor(conn: Accs, userId: string, appKey: string, appToken: string) {
    this._accs = conn;
    this._userId = userId;
    this._appKey = appKey;
    this._appToken = appToken;
  }

  /**
   * 获取sessionId
   * @param userId
   */
  async getSessionId(userId: string): Promise<string> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(userId, currentSeqId);
    const sessionCreateNewCommand = new pkg.SessionCreateNewCommand();
    const command = new pkg.Command();
    sessionCreateNewCommand.appKey = this._appKey;
    sessionCreateNewCommand.appToken = this._appToken;
    command.sessionCreateNewCommand = sessionCreateNewCommand;
    const buffer = pbMsg.generateMessage(command);

    let result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult;
    try {
      result = await this._accs.sendMessage(buffer, currentSeqId);

      if (result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS && result.sessionCreateNewCommandResult) {
        // 获取sessionId
        const { sessionId } = result.sessionCreateNewCommandResult;
        this.sessionId = sessionId;
        return sessionId;
      }
      return '';
    } catch (error) {
      console.log('[Error]: getSessionId', error);
      return '';
    }
  }

  /**
   * 请求rtc获取拉流地址，如果用户只是浏览项目，不需要在线编辑，则不需要执行本指令
   */
  private async getWebRTCInfo(): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const sessionPrepareRTCCommand = new pkg.SessionPrepareRTCCommand();
    const command = new pkg.Command();
    command.sessionPrepareRTCCommand = sessionPrepareRTCCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      if (result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS && result.sessionPrepareRTCommandResult) {
        return result.sessionPrepareRTCommandResult || null;
      }
      return {};
    } catch (error) {
      console.error('[Error]: getWebRTCInfo', error);
      return {};
    }
  }

  /**
  * 开始会话，同时设置预热对应的资源
  */
  private async sendBeginCommand(): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const sessionBeginCommand = new pkg.SessionBeginCommand();
    const command = new pkg.Command();
    command.sessionBeginCommand = sessionBeginCommand;
    const buffer = pbMsg.generateMessage(command, true);
    try {
      // console.log('[Start]: sendBeginCommand');
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      // console.log('[End]: sendBeginCommand', result);
      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.error('[Error]: sendBeginCommand', error);
      return false;
    }
  }

  /*
  * 如果空闲太久，需要发这个指令保持会话，否则会释放rtc等资源
  */
  private async keepAlive(): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const sessionKeepaliveCommand = new pkg.SessionKeepaliveCommand();
    const command = new pkg.Command();
    command.sessionKeepaliveCommand = sessionKeepaliveCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.error('[Error]: keepAlive', error);
      return false;
    }
  }

  /**
  * project load
  * @param path projectId
  */
  private async projectLoadCommand(path: string): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const projectLoadCommand = new pkg.ProjectLoadCommand();
    projectLoadCommand.projectId = path;
    const command = new pkg.Command();
    command.projectLoadCommand = projectLoadCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      // console.log('ProjectLoadCommand-buffer', buffer);
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      // console.log('ProjectLoadCommand-result', result);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.error('[Error]: projectLoadCommand', error);
      return false;
    }
  }

  /**
  * new a project
  */
  private async projectNewCommand(path: string): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const projectNewCommand = new pkg.ProjectNewCommand();
    const command = new pkg.Command();
    command.projectNewCommand = projectNewCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      // console.log('projectNewCommand-buffer', buffer);
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      // console.log('projectNewCommand-result', result);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.error('[Error]: projectNewCommand', error);
      return false;
    }
  }

  /**
   * 加载项目
   * getSessionId -> getWebRTCInfo -> sendBeginCommand -> projectLoadCommand/projectNewCommand
   * @param path
   * '' 空串表示新建
   * 有值表示load
   * @param keepalive 是否支持长连接
   * @returns
   */
  async load(path: string, keepalive: boolean): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult> {
    if (!this.sessionId) {
      await this.getSessionId(this._userId);
    }
    const webRTC = await this.getWebRTCInfo();
    if (webRTC.msgUrl) {
      const beginCommand = await this.sendBeginCommand();
      if (beginCommand) {
        if (keepalive) {
          setInterval(this.keepAlive, 10 * 60 * 1000);
        }
        const load = path ? await this.projectLoadCommand(path) : await this.projectNewCommand(path);
        if (load) {
          return webRTC;
        }
        console.error('[Error]: projectLoadCommand');
      } else {
        console.error('[Error]: sendBeginCommand');
      }
    } else {
      console.error('[Error]: getWebRTCInfo');
    }
    return {};
  }

  /*
  * 关闭所有资源，包括本次会话用到的rtc连接
  * 关闭前需要执行相应的指令保存会话资源
  */
  async sessionEndCurrent(): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const sessionEndCurrentCommand = new pkg.SessionEndCurrentCommand();
    const command = new pkg.Command();
    command.sessionKeepaliveCommand = sessionEndCurrentCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.error('[Error]: sessionEndCurrentCommand', error);
      return false;
    }
  }

  /**
   * 保存项目
   * @param projectId
   * @param projectName
   * @returns
   */
  async projectSave(projectId: string, projectName: string): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const projectSaveCommand = new pkg.ProjectSaveCommand();
    projectSaveCommand.projectId = projectId;
    projectSaveCommand.projectName = projectName;
    const command = new pkg.Command();
    command.projectSaveCommand = projectSaveCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.error('[Error]: projectSave', error);
      return false;
    }
  }

  /**
   * projectNew
   * @returns boolean
   */
  async projectNew(): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const projectNewCommand = new pkg.ProjectNewCommand();
    const command = new pkg.Command();
    command.projectNewCommand = projectNewCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.error('[Error]: projectNew', error);
      return false;
    }
  }

  /**
   * projectClose
   * @returns boolean
   */
  async projectClose(): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    const projectCloseCommand = new pkg.ProjectCloseCommand();
    const command = new pkg.Command();
    command.projectCloseCommand = projectCloseCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.log('[Error]: projectClose', error);
      return false;
    }
  }

  setViewer(viewer: Viewer, width: number, height: number) {
    throw new Error('Method not implemented.');
  }

  getViewer(): ViewerInfo {
    throw new Error('Method not implemented.');
  }

  setMeEditor(editor: GlobalBaseMarvelAddonMeEditor) {
    throw new Error('Method not implemented.');
  }

  setEditor(editor: Editor) {
    throw new Error('Method not implemented.');
  }

  getEditor(): Editor {
    throw new Error('Method not implemented.');
  }
  doExport(exporter: Exporter): number {
    throw new Error('Method not implemented.');
  }
}
export default Project;
