import * as proto from '../protobuf/model';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;
export default class ProtoMessage {
  private _sessionId: string = '';
  private _userId: string;
  private _seqId: number;
  constructor(userId: string, seqId: number, sessionId?: string | null | undefined) {
    this._userId = userId;
    this._seqId = seqId;
    if (sessionId) {
      this._sessionId = sessionId;
    }
  }

  public generateMessage(command: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommand): Uint8Array {
    let protoMessage = new pkg.ProtoMessage();
    let messageHeader = new pkg.MessageHeader();
    let messageContent = new pkg.MessageContent();
    let result = new pkg.Result();
    let commandHeader = new pkg.CommandHeader();

    messageHeader.protoVer = 1;
    // 初始化获取ID，后续所有请求都需要带上
    messageHeader.sessionId = this._sessionId;
    messageHeader.userId = this._userId;

    commandHeader.channelId = pkg.CommandHeader.CHANNEL_ID.CHANNEL_EXECUTE_RANDOMLY;
    // 用一个自增的数字, 用于接收数据
    commandHeader.seqId = this._seqId;

    command.commandHeader = commandHeader;
    command.forceResp = false;

    messageContent.reqList = [command];
    messageContent.rspList = [result];

    protoMessage.msgContent = messageContent;
    protoMessage.msgHeader = messageHeader;

    if (pkg.ProtoMessage.verify(protoMessage)) {
      return pkg.ProtoMessage.encode(new pkg.ProtoMessage()).finish();
    } else {
      return pkg.ProtoMessage.encode(protoMessage).finish();
    }
  }
}