import { ImageBuffer, ProgressTimeUs, TimeUS } from '.';
import * as proto from '../protobuf/model';

export default interface Viewer {
  setProperties: (width: number, height: number, scaleType: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType) => Promise<boolean>;
  getViewerBuffer: () => ImageBuffer;
  prepare: () => Promise<boolean>;
  start: () => Promise<boolean>;
  pause: () => Promise<boolean>;
  stop: () => Promise<boolean>;
  seekTo: (timeUs: TimeUS, flag: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SeekFlag) => Promise<boolean>;
  setSize: (width: number, height: number) => Promise<boolean>;
  getDurationUs: () => Promise<number>;
  /**
   * 获取当前视频播放状态
   */
  getState: () => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommandResult>;
  setOnStartListener: (startCallback: () => void) => void;
  setOnStopListener: (stopCallback: () => void) => void;
  setOnCompleteListener: (completeCallback: () => void) => void;
  setOnProgressListener: (progressCallback: (process: ProgressTimeUs) => void) => void;
  setOnPrepareListener: (prepareCallback: () => void) => void;
  setOnSeekListener: (seekCallback: (timeUs) => void) => void;
  setOnErrorListener: (errorCallback: (className, funcName, errorCode, message) => void) => void;
  setOnFrameUpdateListener: (callback: () => void) => void;
}
