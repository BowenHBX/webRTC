import { VideoConfig, AudioConfig, Rate, Path, Ret, TimeUS } from '.';
import * as proto from '../protobuf/model';

export default interface Exporter {
  /**
   * 导出
   * 同一时间仅允许调用一次（同时只能支持一个导出）
   * @param path
   * @param width
   * @param height
   * @param scale
   * @param format
   * @param videoBps
   * @param videoFps
   * @param audioFrequency
   * @param audioBps
   * @param audioEncoding
   * @param channel
   */
  run: (
    path: string,
    width: number,
    height: number,
    scale: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType,
    format: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VideoEncodeFormat,
    videoBps: number,
    videoFps: number,
    audioFrequency: number,
    audioBps: number,
    audioEncoding: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AudioEncoding,
    channel: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AudioChannel
  ) => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommandResult>;

  /**
   * 取消导出
   */
  cancel: () => Promise<Ret>;
  setVideoConfig: (key: VideoConfig, value: number | string) => void;
  setAudioConfig: (key: AudioConfig, value: number | string) => void;
  setFrameRate: (rate: Rate) => void;
  setScaleType: (scaleType: number) => void;
  setOutputPath: (path: Path) => void;
  setOnStartListener: (startCallback: () => void) => void;
  setOnStopListener: (stopCallback: () => void) => void;
  setOnCompleteListener: (completeCallback: () => void) => void;
  setOnProgressListener: (progressCallback: (processing: any) => void) => void;
  setOnPrepareListener: (prepareCallback: () => void) => void;
  setOnCancelListener: (cancelCallback: () => void) => void;
  setOnSeekListener: (seekCallback: (timeUs: TimeUS) => void) => void;
  setOnErrorListener: (errorCallback: (className, funcName, errorCode, message) => void) => void;
}
