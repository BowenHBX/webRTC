import { createElement, useCallback, useEffect, useRef, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import libAccs from '@ali/lib-accs';
import TextInput from 'rax-textinput';
import { Button } from '@alifd/meet';

import { connect, hangUpCall, handleKey, handleSendButton } from './common/chatclient';
import 'webrtc-adapter/out/adapter.js';

import './index.module.css';
import './shared.css'

const Home = () => {
  const [msg, setMsg] = useState('');
  const msgRef = useRef('');

  useEffect(() => {
    console.log('msg', msg);
    msgRef.current = msg;
  }, [msg]);

  const logIn = () => {
    connect();
  };

  const hangUpCallEvent = () => {
    hangUpCall();
  }

  const handleKeyEvent = (e) => {
    handleKey(e);
  }

  const handleSendButtonEvent = () => {
    handleSendButton();
    setMsg('');
  };

  return (
    <div class="container">
      <div class="infobox">
        <p>
          <span>这是一个使用 WebSockets 实现的简单聊天系统. 用于浏览器和服务器直接来回发送JSON包。</span>

        </p>
        <p class="mdn-disclaimer">
          <span>此文本和音频/视频聊天示例按原样提供仅用于演示目的，不应用于任何其他目的。</span>
        </p>
        <p>单击用户列表中的用户名，要求他们与您进行一对一的视频聊天。</p>
        <p>
          <span>输入用户名: </span>
          <input id="name" type="text" maxlength="12" required autocomplete="username" inputmode="verbatim" placeholder="用户名" />
          <Button onClick={() => { logIn(); }}>登录</Button>
        </p>
      </div>
      <ul class="userlistbox"></ul>
      <div class="chatbox"></div>
      <div class="camerabox">
        <video id="received_video" autoplay></video>
        <video id="local_video" autoplay muted></video>
        <Button onClick={() => { hangUpCallEvent(); }}>挂起</Button>
      </div>
      <div class="empty-container"></div>
      <div class="chat-controls">
        <span>聊天：</span><br />
        <input id="text" type="text" name="text" placeholder="说些什么..." autocomplete="off" disabled />
      
        {/* <TextInput
          onChangeText={(text) => { setMsg(text); }}
          value={msg} name={'text'}
          id={'text'}
          autoComplete={false}
          placeholder="说些什么..."
        // onKeyUp={(e) => { handleKeyEvent(e); }}
        /> */}
        <Button onClick={() => { handleSendButtonEvent(); }}>登录</Button>
        {/* <input type="button" id="send" name="send" value="Send" onclick="handleSendButton()" disabled /> */}
      </div>
    </div>
  );
};

export default Home;
