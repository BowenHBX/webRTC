import { createElement, useEffect, useRef, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import { Button } from '@alifd/meet';
import * as proto from '../../marvel-cloud/protobuf/model';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;

let conn;

const Home = () => {
  const [text, setText] = useState('');
  const [receive, setReceive] = useState<string | null | undefined>('');
  const textRef = useRef('');

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    // console.log('text', text);
    textRef.current = text;
  }, [text]);

  const sendMsg = async () => {
    
  };

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
