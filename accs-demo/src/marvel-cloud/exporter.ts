// @ts-ignore
import { AudioConfig, ExportType, VideoConfig, Ret } from './@types';
import MarvelAddonExporter from './addon/marvelAddonExporter';
import Exporter from './@types/exporter';
import Accs from './accs';
import * as proto from './protobuf/model';

export class MarvelExporter implements Exporter {
  private proxyExporter: Exporter;

  constructor(accs: Accs, userId: string, sessionId: string | null | undefined, exportType: ExportType) {
    this.proxyExporter = new MarvelAddonExporter(accs, userId, sessionId, exportType);
  }

  getProxy() {
    return this.proxyExporter;
  }

  async run(path: string, width: number, height: number, scale: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType, format: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VideoEncodeFormat, videoBps: number, videoFps: number, audioFrequency: number, audioBps: number, audioEncoding: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AudioEncoding, channel: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AudioChannel): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommandResult> {
    return this.proxyExporter.run(path, width, height, scale, format, videoBps, videoFps, audioFrequency, audioBps, audioEncoding, channel);
  }

  async cancel(): Promise<Ret> {
    return this.proxyExporter.cancel();
  }

  setVideoConfig(key: VideoConfig, value: number | string): void {
    this.proxyExporter.setVideoConfig(key, value);
  }
  setAudioConfig(key: AudioConfig, value: number | string): void {
    this.proxyExporter.setAudioConfig(key, value);
  }
  setFrameRate(rate: number): void {
    this.proxyExporter.setFrameRate(rate);
  }
  setScaleType(scaleType: number): void {
    this.proxyExporter.setScaleType(scaleType);
  }
  setOutputPath(path: string): void {
    this.proxyExporter.setOutputPath(path);
  }
  setOnStartListener(startCallback: () => void): void {
    this.proxyExporter.setOnStartListener(startCallback);
  }
  setOnStopListener(stopCallback: () => void): void {
    this.proxyExporter.setOnStopListener(stopCallback);
  }
  setOnCompleteListener(completeCallback: () => void): void {
    this.proxyExporter.setOnCompleteListener(completeCallback);
  }
  setOnProgressListener(progressCallback: (processing) => void): void {
    this.proxyExporter.setOnProgressListener(progressCallback);
  }
  setOnPrepareListener(prepareCallback: () => void): void {
    this.proxyExporter.setOnPrepareListener(prepareCallback);
  }
  setOnCancelListener(cancelCallback: () => void): void {
    this.proxyExporter.setOnCancelListener(cancelCallback);
  }
  setOnSeekListener(seekCallback: (timeUs: any) => void): void {
    this.proxyExporter.setOnSeekListener(seekCallback);
  }
  setOnErrorListener(errorCallback: (className: any, funcName: any, errorCode: any, message: any) => void): void {
    this.proxyExporter.setOnErrorListener(errorCallback);
  }
}
