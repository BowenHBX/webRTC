import { createElement, useEffect, useRef, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Mtop from '@ali/universal-mtop';
import libAccs, { accsResponse } from '@ali/lib-accs';
import TextInput from 'rax-textinput';
import { Button } from '@alifd/meet';
import * as proto from '@/protobuf/model';
import * as EventEmitter from 'eventemitter3';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;

let conn;

const Home = () => {
  const [text, setText] = useState('');
  const [receive, setReceive] = useState<string | null | undefined>('');
  const textRef = useRef('');
  const __EventEmitter = new EventEmitter();

  useEffect(() => {
    console.log('lib', window?.lib?.accs);

    Mtop.config({
      // dangerouslySetProtocol: 'http',
      prefix: 'msgacs', // mtop的前缀
      subDomain: 'waptest', // mtop的子域
      mainDomain: 'taobao.com' // mtop的主域
    });

    (async () => {
      const con = await libAccs.init({
        aserverProxy: 'msgacs.waptest.taobao.com',
        appkey: 'H5_3Cl6Mt52kce4N1', // appkey, 必填，appkey寻找@子琛 申请   32780517  H5_3Cl6Mt52kce4N1
        m_params: {
          api: 'mtop.accs.auth.getH5Token',
          v: '1.0',
          H5Request: true,
          LoginRequest: true,
          ecode: 1
        }
      });
      console.log('con', con);
      conn = con;

      conn.onMessage('multimedia_biz_platform', async (resp: accsResponse) => {
        const buffer = await resp.getBinaryArray();
        const object = pkg.Result.decode(buffer);
        console.log('object: ', object);
        // resolve(object);
        if (object.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
          __EventEmitter.emit(`event-${object.commandHeader?.seqId}`, object);
        }
      });
    })();
  }, []);

  useEffect(() => {
    // console.log('text', text);
    textRef.current = text;
  }, [text]);

  const getRtc = async (sid: any) => {
    let sessionPrepareRTCCommand = new pkg.SessionPrepareRTCCommand();
    let protoMessage = new pkg.ProtoMessage();
    let messageHeader = new pkg.MessageHeader();
    let messageContent = new pkg.MessageContent();
    let command = new pkg.Command();
    let result = new pkg.Result();
    let commandHeader = new pkg.CommandHeader();

    messageHeader.protoVer = 1;
    // 初始化获取ID，后续所有请求都需要带上
    // console.log('sessionPrepareRTCCommand-sid', sid);
    messageHeader.sessionId = sid;
    messageHeader.userId = '263662065';

    commandHeader.channelId = pkg.CommandHeader.CHANNEL_ID.CHANNEL_EXECUTE_RANDOMLY;
    // 用一个自增的数字, 用于接收数据
    commandHeader.seqId = 2;

    command.commandHeader = commandHeader;
    command.forceResp = false;
    command.sessionPrepareRTCCommand = sessionPrepareRTCCommand;

    messageContent.reqList = [command];
    messageContent.rspList = [result];

    protoMessage.msgContent = messageContent;
    protoMessage.msgHeader = messageHeader;

    pkg.ProtoMessage.verify(protoMessage);
    const buffer = pkg.ProtoMessage.encode(protoMessage).finish();

    // console.log("buffer", buffer, abc);
    // const sendResult = await conn.send('multimedia_biz_platform', buffer);
    const sendResult: any = await sendMessage(buffer, 2);
    console.log("getRtc----", sendResult);
    if (sendResult.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
      sendBeginCommand(sid);
    }
    // console.log('getRtc', sendResult, sendResult.getText());
  }

  const sendBeginCommand = async (sid: string) => {
    let sessionBeginCommand = new pkg.SessionBeginCommand();
    let protoMessage = new pkg.ProtoMessage();
    let messageHeader = new pkg.MessageHeader();
    let messageContent = new pkg.MessageContent();
    let command = new pkg.Command();
    let result = new pkg.Result();
    let commandHeader = new pkg.CommandHeader();

    messageHeader.protoVer = 1;
    // 初始化获取ID，后续所有请求都需要带上
    messageHeader.sessionId = sid;
    messageHeader.userId = '263662065';

    commandHeader.channelId = pkg.CommandHeader.CHANNEL_ID.CHANNEL_EXECUTE_RANDOMLY;
    // 用一个自增的数字, 用于接收数据
    commandHeader.seqId = 3;

    command.commandHeader = commandHeader;
    command.forceResp = false;
    command.sessionBeginCommand = sessionBeginCommand;

    messageContent.reqList = [command];
    messageContent.rspList = [result];

    protoMessage.msgContent = messageContent;
    protoMessage.msgHeader = messageHeader;

    pkg.ProtoMessage.verify(protoMessage);
    const buffer = pkg.ProtoMessage.encode(protoMessage).finish();

    const result2: any = await sendMessage(buffer, 3);
    console.log("sendBeginCommand----", result2);
    if (result2.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
      // sendBeginCommand(sid);
      keepAlive(sid);
      projectLoadCommand(sid);
    } else {
      //  初始化失败
    }
  };

  const projectLoadCommand = async (sid: string) => {
    let projectLoadCommand = new pkg.ProjectLoadCommand();
    let protoMessage = new pkg.ProtoMessage();
    let messageHeader = new pkg.MessageHeader();
    let messageContent = new pkg.MessageContent();
    let command = new pkg.Command();
    let result = new pkg.Result();
    let commandHeader = new pkg.CommandHeader();

    messageHeader.protoVer = 1;
    // 初始化获取ID，后续所有请求都需要带上
    messageHeader.sessionId = sid;
    messageHeader.userId = '263662065';

    commandHeader.channelId = pkg.CommandHeader.CHANNEL_ID.CHANNEL_EXECUTE_RANDOMLY;
    // 用一个自增的数字, 用于接收数据
    commandHeader.seqId = 5;

    projectLoadCommand.projectId = 'test';

    command.commandHeader = commandHeader;
    command.forceResp = false;
    command.projectLoadCommand = projectLoadCommand;

    messageContent.reqList = [command];
    messageContent.rspList = [result];

    protoMessage.msgContent = messageContent;
    protoMessage.msgHeader = messageHeader;

    pkg.ProtoMessage.verify(protoMessage);
    const buffer = pkg.ProtoMessage.encode(protoMessage).finish();

    sendMessage(buffer, 5);
    setInterval(() => {
      editorAddMainClipCommand(sid);
    }, 2000);
  };

  const editorAddMainClipCommand = async (sid: string) => {
    let editorAddMainClipCommand = new pkg.EditorAddMainClipCommand();
    let protoMessage = new pkg.ProtoMessage();
    let messageHeader = new pkg.MessageHeader();
    let messageContent = new pkg.MessageContent();
    let command = new pkg.Command();
    let result = new pkg.Result();
    let commandHeader = new pkg.CommandHeader();

    messageHeader.protoVer = 1;
    // 初始化获取ID，后续所有请求都需要带上
    messageHeader.sessionId = sid;
    messageHeader.userId = '263662065';

    commandHeader.channelId = pkg.CommandHeader.CHANNEL_ID.CHANNEL_EXECUTE_RANDOMLY;
    // 用一个自增的数字, 用于接收数据
    commandHeader.seqId = 6;

    editorAddMainClipCommand.resourceUri = 'test';
    editorAddMainClipCommand.startTime = 0;
    editorAddMainClipCommand.endTime = 10;

    command.commandHeader = commandHeader;
    command.forceResp = false;
    command.editorAddMainClipCommand = editorAddMainClipCommand;

    messageContent.reqList = [command];
    messageContent.rspList = [result];

    protoMessage.msgContent = messageContent;
    protoMessage.msgHeader = messageHeader;

    pkg.ProtoMessage.verify(protoMessage);
    const buffer = pkg.ProtoMessage.encode(protoMessage).finish();

    const result2: any = await sendMessage(buffer, 6);
    console.log("editorAddMainClipCommand----", result2);
    if (result2.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
      // sendBeginCommand(sid);
      // keepAlive(sid);
    } else {
      //  初始化失败
    }
  };

  const keepAlive = async (sid: string) => {
    setInterval(async () => {
      let sessionKeepaliveCommand = new pkg.SessionKeepaliveCommand();
      let protoMessage = new pkg.ProtoMessage();
      let messageHeader = new pkg.MessageHeader();
      let messageContent = new pkg.MessageContent();
      let command = new pkg.Command();
      let result = new pkg.Result();
      let commandHeader = new pkg.CommandHeader();

      messageHeader.protoVer = 1;
      // 初始化获取ID，后续所有请求都需要带上
      messageHeader.sessionId = sid;
      messageHeader.userId = '263662065';

      commandHeader.channelId = pkg.CommandHeader.CHANNEL_ID.CHANNEL_EXECUTE_RANDOMLY;
      // 用一个自增的数字, 用于接收数据
      commandHeader.seqId = 4;

      command.commandHeader = commandHeader;
      command.forceResp = false;
      command.sessionKeepaliveCommand = sessionKeepaliveCommand;

      messageContent.reqList = [command];
      messageContent.rspList = [result];

      protoMessage.msgContent = messageContent;
      protoMessage.msgHeader = messageHeader;

      pkg.ProtoMessage.verify(protoMessage);
      const buffer = pkg.ProtoMessage.encode(protoMessage).finish();

      const result2: any = await sendMessage(buffer, 4);
      console.log("keepAlive----", result2);
    }, 9 * 60 * 1000);
  }

  const sendMsg = async () => {
    // setInterval(async () => {
    let sessionCreateNewCommand = new pkg.SessionCreateNewCommand();
    let protoMessage = new pkg.ProtoMessage();
    let messageHeader = new pkg.MessageHeader();
    let messageContent = new pkg.MessageContent();
    let command = new pkg.Command();
    let result = new pkg.Result();
    let commandHeader = new pkg.CommandHeader();

    messageHeader.protoVer = 1;
    // 初始化获取ID，后续所有请求都需要带上
    messageHeader.sessionId = '';
    messageHeader.userId = '263662065';

    commandHeader.channelId = pkg.CommandHeader.CHANNEL_ID.CHANNEL_EXECUTE_RANDOMLY;
    // 用一个自增的数字, 用于接收数据
    commandHeader.seqId = 1;

    sessionCreateNewCommand.appKey = "test";
    sessionCreateNewCommand.appToken = "bowen";

    command.commandHeader = commandHeader;
    command.forceResp = false;
    command.sessionCreateNewCommand = sessionCreateNewCommand;

    messageContent.reqList = [command];
    messageContent.rspList = [result];

    protoMessage.msgContent = messageContent;
    protoMessage.msgHeader = messageHeader;

    pkg.ProtoMessage.verify(protoMessage);
    const buffer = pkg.ProtoMessage.encode(protoMessage).finish();

    // console.log("buffer", buffer, abc);
    const result1: any = await sendMessage(buffer, 1);
    console.log("sendMsg----", result1);
    if (result1.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
      const sessionId = result1.sessionCreateNewCommandResult?.sessionId;
      setReceive(sessionId);

      getRtc(sessionId);
    }
    // }, 5000);
  };

  const sendMessage = (buffer: Uint8Array, flag) => {
    return new Promise((resolve, reject) => {
      __EventEmitter.once(`event-${flag}`, (msg) => {
        console.log(`__EventEmitter-${flag}`, msg);
        resolve(msg);
      });

      conn.send('multimedia_biz_platform', buffer).then((sendResult: accsResponse) => {
        console.log(`sendResult-${flag}`, sendResult, sendResult.getText());
        if (sendResult.err !== '0') {
          resolve({ errCode: pkg.Result.ERROR_CODE.ERR_UNDEFINE });
        }
      }).catch(e => {
        resolve({ errCode: pkg.Result.ERROR_CODE.ERR_UNDEFINE });
      });
    });
  }

  return (
    <View>
      <TextInput
        multiline={false}
        value={text}
        onChange={(e) => { setText(e.nativeEvent.text); }}
      />
      <Button onClick={() => { sendMsg(); }}>创建会话</Button>
      <Text>sessionId: {receive}</Text>
    </View>
  );
};

export default Home;
