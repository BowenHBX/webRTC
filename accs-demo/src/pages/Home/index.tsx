import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import libAccs from '@ali/lib-accs';
import TextInput from 'rax-textinput';
import { Button } from '@alifd/meet';

let conn;

const Home = () => {
  const [text, setText] = useState('');
  const [receive, setReceive] = useState('');

  useEffect(() => {
    // console.log('lib', window?.lib?.accs, libAccs);
    libAccs.init({
      appkey: 'H5_3Cl6Mt52kce4N1', // appkey, 必填，appkey寻找@子琛 申请   32780517  H5_3Cl6Mt52kce4N1
    }).then((con) => {
      conn = con;
      // 监听数据
      con.onMessage('multimedia_biz_platform', (resp) => {
        setReceive(resp.getText());
        console.log('Data Received: ', resp.getText(), resp.getBinaryArray());
      });
    });
  }, []);

  const sendMsg = () => {
    // 发送字符串数据
    conn.send('multimedia_biz_platform', 'hello world!').then((resp) => {
      // console.log('resp.getBinaryArray()', resp.getBinaryArray()); // Uint8Array二进制数组 => [aa, bb, cc]
      console.log('resp.getText()', resp.getText()); // 字符串
    });
    // 发送二进制数据
    conn.send('multimedia_biz_platform', new Uint8Array([97, 98, 99])).then((resp) => {
      // console.log('Uint8Array1', resp.getBinaryArray()); // Uint8Array二进制数组 => [aa, bb, cc]
      console.log('Uint8Array2', resp.getText()); // 字符串
    });
  };

  return (
    <View>
      <TextInput
        multiline={false}
        value={text}
        onChangeText={(value) => { setText(value); }}
      />
      <Button onClick={() => { sendMsg(); }}>发消息</Button>
      <Text>收到的消息：{receive}</Text>
    </View>
  );
};

export default Home;
