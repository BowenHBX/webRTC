import { createElement, useEffect, useRef, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import { Select, Button, Message } from '@alifd/meet';
import * as proto from '../../marvel-cloud/protobuf/model';
// import MarvelCloud from '@ali/marvel-cloud';
import MarvelCloud from '../../marvel-cloud';
import C from '../../marvel-cloud/@types/C';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;

// let conn;
let mc: MarvelCloud;
const userId = '731956302'; // 263662065
const Home = () => {
  const [marvelProject, setMarvelProject] = useState<{
    sessionId: string;
    streamUrl: string;
    msgUrl: string;
  }>({ sessionId: '', streamUrl: '', msgUrl: '' });

  const createMarvelCloud = async () => {
    mc = await MarvelCloud.create(userId, 'test', 'bowen', {
      aserverProxy: 'msgacs.waptest.taobao.com',
      appkey: 'H5_3Cl6Mt52kce4N1',
      reconnectInterval: 2000, 
      timeout: 3000,
    });
    console.log('mc----1', mc);
    await mc.load('demo', true);
    setMarvelProject({
      sessionId: mc.sessionId,
      streamUrl: mc.streamUrl,
      msgUrl: mc.msgUrl
    });
    console.log('mc----2', mc);
  }

  const [destroyResult, setDestroyResult] = useState(false);
  const destroy = async () => {
    await mc.destroy();
    setDestroyResult(true);
    setMarvelProject({
      sessionId: '',
      streamUrl: '',
      msgUrl: '',
    })
  }

  const [trackIdList, setTrackIdList] = useState([]);
  const trackIdListRef = useRef([]);
  useEffect(() => {
    trackIdListRef.current = trackIdList
  }, [trackIdList]);
  const getTrackIdList = async () => {
    const editor = mc.getEditor();
    const trackIds = await editor.getTrackIdList();
    setTrackIdList(trackIds?.data ?? []);
  }

  const [clipIdList, setClipIdList] = useState([]);
  const clipIdListRef = useRef([]);
  useEffect(() => {
    clipIdListRef.current = clipIdList;
  }, [clipIdList]);
  const getClipIdList = async () => {
    const editor = mc.getEditor();
    const clipIds = await editor.getClipIdList(trackIdListRef.current[0]);
    setClipIdList(clipIds?.data ?? []);
  }

  const [width, setWidth] = useState('');
  const widthRef = useRef('');
  useEffect(() => {
    widthRef.current = width;
  }, [width]);
  const [height, setHeight] = useState('');
  const heightRef = useRef('');
  useEffect(() => {
    heightRef.current = height;
  }, [height]);
  const [scaleType, setScaleType] = useState(pkg.ScaleType.CenterInside);
  const scaleTypeRef = useRef(pkg.ScaleType.CenterInside);
  useEffect(() => {
    scaleTypeRef.current = scaleType;
  }, [scaleType]);
  const [bgColor, setBgColor] = useState('');
  const bgColorRef = useRef('');
  useEffect(() => {
    bgColorRef.current = bgColor;
  }, [bgColor]);

  const [cpResult, setCpResult] = useState(false);
  const setCanvasProperties = async () => {
    if (!widthRef.current) {
      Message.show({
        title: '宽度不能为空',
      })
      return;
    }
    if (!heightRef.current) {
      Message.show({
        title: '高度不能为空',
      })
      return;
    }
    if (!bgColorRef.current) {
      Message.show({
        title: '背景色不能为空',
      })
      return;
    }
    const editor = mc.getEditor();
    console.log('setCanvasProperties', widthRef.current, heightRef.current, scaleTypeRef.current, bgColorRef.current);
    const result = await editor.setCanvasProperties(Number(widthRef.current), Number(heightRef.current), scaleTypeRef.current, bgColorRef.current);
    console.log('setCanvasProperties-result', result);
    setCpResult(result);
  };

  const [canvasPro, setCanvasPro] = useState('');
  const getCanvasProperties = async () => {
    const editor = mc.getEditor();
    const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult = await editor.getCanvasProperties();
    console.log('getCanvasProperties-result', result);
    setCanvasPro(JSON.stringify(pkg.EditorGetCanvasPropertiesCommandResult.toObject(result)));
  };

  const [viewerWidth, setViewerWidth] = useState('');
  const viewerWidthRef = useRef('');
  useEffect(() => {
    viewerWidthRef.current = viewerWidth;
  }, [viewerWidth]);
  const [viewerHeight, setViewerHeight] = useState('');
  const viewerHeightRef = useRef('');
  useEffect(() => {
    viewerHeightRef.current = viewerHeight;
  }, [viewerHeight]);
  const [viewerScaleType, setViewerScaleType] = useState(pkg.ScaleType.CenterInside);
  const viewerScaleTypeRef = useRef(pkg.ScaleType.CenterInside);
  useEffect(() => {
    viewerScaleTypeRef.current = viewerScaleType;
  }, [viewerScaleType]);
  const [vpResult, setVpResult] = useState(false);
  const setViewerProperties = async () => {
    if (!viewerWidthRef.current) {
      Message.show({
        title: '宽度不能为空',
      })
      return;
    }
    if (!viewerHeightRef.current) {
      Message.show({
        title: '高度不能为空',
      })
      return;
    }
    const viewer = mc.getViewer();
    console.log('setViewerProperties', viewerWidthRef.current, viewerHeightRef.current, viewerScaleTypeRef.current);
    const result = await viewer.setProperties(Number(viewerWidthRef.current), Number(viewerHeightRef.current), viewerScaleTypeRef.current);
    console.log('setViewerProperties-result', result);
    setVpResult(result);
  };
  const [prepareResult, setPrepareResult] = useState(false);
  const prepare = async () => {
    const viewer = mc.getViewer();

    const result = await viewer.prepare();
    console.log('setViewerProperties-result', result);
    setPrepareResult(result);
  };
  const [startResult, setStartResult] = useState(false);
  const startViewer = async () => {
    const viewer = mc.getViewer();

    const result = await viewer.start();
    console.log('startViewer-result', result);
    setStartResult(result);
  };

  const [seek, setSeek] = useState('0');
  const [seekResult, setSeekResult] = useState('0');
  const seekRef = useRef('0');
  useEffect(() => {
    seekRef.current = seek;
  }, [seek]);
  const seekViewer = async () => {
    const viewer = mc.getViewer();

    const result = await viewer.seekTo(Number(seekRef.current), pkg.SeekFlag.SeekStart);
    console.log('seekViewer-result', result);
    setSeekResult(result);
  };

  const [videoState, setVideoState] = useState({});
  const getState = async () => {
    const viewer = mc.getViewer();

    const result = await viewer.getState();
    console.log('getState-result', result);
    setVideoState(JSON.stringify(pkg.ViewerGetStateCommandResult.toObject(result)));
  };

  const [clipProps, setClipProps] = useState({});
  const getClipPropList = async () => {
    const editor = mc.getEditor();
    const meEditor = editor.getMeProxy();

    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      {
        propKey: C.kClipKeyParentId,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING
      },
      {
        propKey: C.kClipKeySpeed,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE
      },
      {
        propKey: C.kClipKeyRevert,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64
      },
      {
        propKey: C.kClipKeySourceStartTime,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64
      },
      {
        propKey: C.kClipKeySourceEndTime,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64
      },
      {
        propKey: C.kClipKeyClipStartTime,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64
      },
      {
        propKey: C.kClipKeyClipEndTime,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64
      },
      {
        propKey: C.kClipKeyVolume,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE
      },
      {
        propKey: C.kClipKeyType,
        propType: C.kPropertyClipBase,
        propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING
      }
    ]
    let trackId: string;
    let speed: number;
    let revert: number;
    let sourceStartTimeUs: number;
    let sourceEndTimeUs: number;
    let startTimeUs: number;
    let endTimeUs: number;
    let volume: number;
    let clipType: string;
    console.log('getClipPropList-req', clipIdListRef.current[0], def);
    const result = await meEditor.getClipPropList(clipIdListRef.current[0], def);
    result.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      console.log('item[(item as any).value]', item[(item as any).value]);
      switch (item.propKey) {
        case C.kClipKeyParentId:
          trackId = item[(item as any).value];
          break;
        case C.kClipKeySpeed:
          speed = item[(item as any).value];
          break;
        case C.kClipKeyRevert:
          revert = item[(item as any).value];
          break;
        case C.kClipKeySourceStartTime:
          sourceStartTimeUs = item[(item as any).value];
          break;
        case C.kClipKeySourceEndTime:
          sourceEndTimeUs = item[(item as any).value];
          break;
        case C.kClipKeyClipStartTime:
          startTimeUs = item[(item as any).value];
          break;
        case C.kClipKeyClipEndTime:
          endTimeUs = item[(item as any).value];
          break;
        case C.kClipKeyVolume:
          volume = item[(item as any).value];
          break;
        case C.kClipKeyType:
          clipType = item[(item as any).value];
          break;
        default:
          break;
      }
    });
    console.log('getClipPropList-result', result);
    setClipProps(JSON.stringify(pkg.EditorGetClipPropListResult.toObject(result)));
  };
  return (
    <View>
      {/* <TextInput
        multiline={false}
        value={text}
        onChange={(e) => { setText(e.nativeEvent.text); }}
      />
      <Button onClick={() => { sendMsg(); }}>创建会话</Button> */}
      {/* <Text>sessionId: {receive}</Text> */}
      <Button onClick={() => { createMarvelCloud(); }}>创建会话npm</Button>
      <Text>sessionId: {marvelProject?.sessionId}</Text>
      <Text>streamUrl: {marvelProject?.streamUrl}</Text>
      <Text>msgUrl: {marvelProject?.msgUrl}</Text>
      <Button onClick={() => { destroy(); }}>destroy</Button>
      <Text>result: {destroyResult}</Text>
      <Button onClick={() => { getTrackIdList(); }}>GetTrackIdList</Button>
      <Text>trackIds: {trackIdList.join(', ')}</Text>
      <Button onClick={() => { getClipIdList(); }}>getClipIdList {trackIdList[0]}</Button>
      <Text>clipIds: {clipIdList.join(', ')}</Text>
      <TextInput
        placeholder='宽width'
        multiline={false}
        value={width}
        onChange={(e) => { setWidth(e.nativeEvent.text); }}
      />
      <TextInput
        placeholder='高height'
        multiline={false}
        value={height}
        onChange={(e) => { setHeight(e.nativeEvent.text); }}
      />
      <Select
        placeholder={'ScaleType'}
        defaultValue={pkg.ScaleType.Invalid}
        size={'small'}
        onChange={(v) => {
          setScaleType(v);
        }}
      >
        <Select.Option value={pkg.ScaleType.Invalid}>Invalid</Select.Option>
        <Select.Option value={pkg.ScaleType.CenterInside}>CenterInside</Select.Option>
        <Select.Option value={pkg.ScaleType.CenterCrop}>CenterCrop</Select.Option>
        <Select.Option value={pkg.ScaleType.StartCrop}>StartCrop</Select.Option>
        <Select.Option value={pkg.ScaleType.EndCrop}>EndCrop</Select.Option>
        <Select.Option value={pkg.ScaleType.FitEnd}>FitEnd</Select.Option>
        <Select.Option value={pkg.ScaleType.FitStart}>FitStart</Select.Option>
        <Select.Option value={pkg.ScaleType.FixXY}>FixXY</Select.Option>
      </Select>
      <TextInput
        placeholder='bgColor(6位的十六进制number)'
        multiline={false}
        value={bgColor}
        onChange={(e) => { setBgColor(e.nativeEvent.text); }}
      />
      <Button onClick={() => { setCanvasProperties(); }}>Editor setCanvasProperties</Button>
      <Text>状态：{cpResult}</Text>
      <Button onClick={() => { getCanvasProperties(); }}>Editor getCanvasProperties</Button>
      <Text>CanvasProperties:{canvasPro}</Text>
      <TextInput
        placeholder='宽width'
        multiline={false}
        value={viewerWidth}
        onChange={(e) => { setViewerWidth(e.nativeEvent.text); }}
      />
      <TextInput
        placeholder='高height'
        multiline={false}
        value={viewerHeight}
        onChange={(e) => { setViewerHeight(e.nativeEvent.text); }}
      />
      <Select
        placeholder={'ScaleType'}
        defaultValue={pkg.ScaleType.Invalid}
        size={'small'}
        onChange={(v) => {
          setViewerScaleType(v);
        }}
      >
        <Select.Option value={pkg.ScaleType.Invalid}>Invalid</Select.Option>
        <Select.Option value={pkg.ScaleType.CenterInside}>CenterInside</Select.Option>
        <Select.Option value={pkg.ScaleType.CenterCrop}>CenterCrop</Select.Option>
        <Select.Option value={pkg.ScaleType.StartCrop}>StartCrop</Select.Option>
        <Select.Option value={pkg.ScaleType.EndCrop}>EndCrop</Select.Option>
        <Select.Option value={pkg.ScaleType.FitEnd}>FitEnd</Select.Option>
        <Select.Option value={pkg.ScaleType.FitStart}>FitStart</Select.Option>
        <Select.Option value={pkg.ScaleType.FixXY}>FixXY</Select.Option>
      </Select>
      <Button onClick={() => { setViewerProperties(); }}>Viewer setProperties</Button>
      <Text>状态：{vpResult}</Text>
      <Button onClick={() => { prepare(); }}>Viewer prepare</Button>
      <Text>prepare：{prepareResult}</Text>
      <Button onClick={() => { startViewer(); }}>Viewer start</Button>
      <Text>start: {startResult}</Text>
      <TextInput
        placeholder='seek'
        multiline={false}
        value={seek}
        onChange={(e) => { setSeek(e.nativeEvent.text); }}
      />
      <Button onClick={() => { seekViewer(); }}>Viewer seek</Button>
      <Text>seek: {seekResult}</Text>
      <Button onClick={() => { getState(); }}>Viewer getState</Button>
      <Text>state: {videoState}</Text>
      <Button onClick={() => { getClipPropList(); }}>Editor getClipPropList</Button>
      <Text>clipProps: {clipProps}</Text>
    </View>
  );
};

export default Home;
