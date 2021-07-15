import * as proto from '../protobuf/model';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;
export default class ProtoMessage {
  private _sessionId = '';
  private _userId: string;
  private _seqId: number;
  constructor(userId: string, seqId: number, sessionId?: string | null | undefined) {
    this._userId = userId;
    this._seqId = seqId;
    if (sessionId) {
      this._sessionId = sessionId;
    }
  }

  /**
   * 构造pb结构数据
   * @param command Command
   * @param forceResp 是否强制返回
   * @returns unit8array
   */
  generateMessage(command: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommand, forceResp = false): Uint8Array {
    const protoMessage = new pkg.ProtoMessage();
    const messageHeader = new pkg.MessageHeader();
    const messageContent = new pkg.MessageContent();
    const result = new pkg.Result();
    const commandHeader = new pkg.CommandHeader();

    messageHeader.protoVer = 1;
    // 初始化获取ID，第一次请求为空，后续所有请求都需要带上
    messageHeader.sessionId = this._sessionId;
    messageHeader.userId = this._userId;

    commandHeader.channelId = pkg.CommandHeader.CHANNEL_ID.CHANNEL_EXECUTE_RANDOMLY;
    // 用一个自增的数字, 用于接收数据
    commandHeader.seqId = this._seqId;

    command.commandHeader = commandHeader;
    command.forceResp = forceResp;

    messageContent.reqList = [command];
    messageContent.rspList = [result];

    protoMessage.msgContent = messageContent;
    protoMessage.msgHeader = messageHeader;

    // console.log('protoMessage', protoMessage);
    if (pkg.ProtoMessage.verify(protoMessage)) {
      return pkg.ProtoMessage.encode(new pkg.ProtoMessage()).finish();
    } else {
      return pkg.ProtoMessage.encode(protoMessage).finish();
    }
  }
}
