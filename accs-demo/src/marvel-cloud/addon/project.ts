import { GlobalBaseMarvelAddonMeEditor } from '../@types';
import editor from '../@types/editor';
import exporter from '../@types/exporter';
import viewer from '../@types/viewer';
import Accs from '../accs';
import EditProject, { ViewerInfo } from '../@types/edit-project';
import ProtoMessage from './protoMessage';
import * as proto from '../protobuf/model';
// import { Path } from '../@types';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;

class Project implements EditProject {
  private _accs: Accs;
  private _appKey: string;
  private _appToken: string;
  private _userId: string;
  public sessionId: string | null | undefined;

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
  public async getSessionId(userId: string) {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(userId, currentSeqId);
    let sessionCreateNewCommand = new pkg.SessionCreateNewCommand();
    let command = new pkg.Command();
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
      }
    } catch (error) {
      console.log('[Error]: getSessionId', error);
    }
  }

  /**
   * 获取webRTC信息
   */
  private async getWebRTCInfo(): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    let sessionPrepareRTCCommand = new pkg.SessionPrepareRTCCommand();
    let command = new pkg.Command();
    command.sessionPrepareRTCCommand = sessionPrepareRTCCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      if (result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS && result.sessionPrepareRTCommandResult) {
        return result.sessionPrepareRTCommandResult || null;
      }
      return {}
    } catch (error) {
      console.log('[Error]: getWebRTCInfo', error);
      return {}
    }
  }

  /**
  * sendBeginCommand
  */
  private async sendBeginCommand(): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    let sessionBeginCommand = new pkg.SessionBeginCommand();
    let command = new pkg.Command();
    command.sessionBeginCommand = sessionBeginCommand;
    const buffer = pbMsg.generateMessage(command);
    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.log('[Error]: sendBeginCommand', error);
      return false;
    }
  }

  /**
  * keepAlive
  */
  private async keepAlive(): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    let sessionKeepaliveCommand = new pkg.SessionKeepaliveCommand();
    let command = new pkg.Command();
    command.sessionKeepaliveCommand = sessionKeepaliveCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.log('[Error]: keepAlive', error);
      return false;
    }
  }

  /**
  * project load
  */
  private async projectLoadCommand(path: string): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this.sessionId);
    let projectLoadCommand = new pkg.ProjectLoadCommand();
    projectLoadCommand.projectId = path;
    let command = new pkg.Command();
    command.projectLoadCommand = projectLoadCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      console.log('ProjectLoadCommand-buffer', buffer);
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId, true);
      console.log('ProjectLoadCommand-result', result);

      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.log('[Error]: projectLoadCommand', error);
      return false;
    }
  }

  async load(path: string, keepalive, resoureceCallback: () => void): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult> {
    if (!this.sessionId) {
      await this.getSessionId(this._userId);
    }
    const webRTC = await this.getWebRTCInfo();
    if (webRTC.msgUrl) {
      const beginCommand = await this.sendBeginCommand();
      console.log('beginCommand', beginCommand, keepalive);
      if (beginCommand) {
        if (keepalive) {
          setInterval(this.keepAlive, 10 * 60 * 1000);
        }
        const load = await this.projectLoadCommand(path);
        console.log('beginCommand-load', beginCommand);
        if (load) {
          return webRTC;
        }
        return {};
      } else {
        return {};
      }
    }
    return {};
  }

  setViewer(viewer: viewer, width: number, height: number) {
    throw new Error('Method not implemented.');
  }

  getViewer(): ViewerInfo {
    throw new Error('Method not implemented.');
  }

  setMeEditor(editor: GlobalBaseMarvelAddonMeEditor) {
    throw new Error('Method not implemented.');
  }

  setEditor(editor: editor) {
    throw new Error('Method not implemented.');
  }

  getEditor(): editor {
    throw new Error('Method not implemented.');
  }
  doExport(exporter: exporter): number {
    throw new Error('Method not implemented.');
  }
}
export default Project;