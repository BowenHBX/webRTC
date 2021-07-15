// @ts-ignore
import { EventEmitter } from 'events';
import { ImageBuffer, ProgressTimeUs } from './@types';
import MarvelAddonViewer from './addon/marvelAddonViewer';
import Viewer from './@types/viewer';
import Accs from './accs';
import * as proto from './protobuf/model';

export class MarvelViewer extends EventEmitter implements Viewer {
  private _viewer: Viewer;

  constructor(accs: Accs, userId: string, sessionId: string | null | undefined) {
    super();
    this._viewer = new MarvelAddonViewer(accs, userId, sessionId);
  }

  getProxy() {
    return this._viewer;
  }

  async setProperties(width: number, height: number, scaleType: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType): Promise<boolean> {
    return this._viewer.setProperties(width, height, scaleType);
  }

  getViewerBuffer(): ImageBuffer {
    return this._viewer.getViewerBuffer();
  }
  async prepare(): Promise<boolean> {
    try {
      return this._viewer.prepare();
    } catch (e) {
      console.error(e);
    }
    return false;
  }
  async start(): Promise<boolean> {
    return this._viewer.start();
  }

  async pause(): Promise<boolean> {
    return this._viewer.pause();
  }

  async stop(): Promise<boolean> {
    return this._viewer.stop();
  }

  async seekTo(timeUs: number, flag: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SeekFlag): Promise<boolean> {
    return this._viewer.seekTo(timeUs, flag);
  }

  async setSize(width: number, height: number): Promise<boolean> {
    return this._viewer.setSize(width, height);
  }

  async getDurationUs(): Promise<number> {
    return this._viewer.getDurationUs();
  }
  async getState(): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommandResult> {
    return this._viewer.getState();
  }
  setOnStartListener(startCallback: () => void): void {
    this._viewer.setOnStartListener(startCallback);
  }
  setOnStopListener(stopCallback: () => void): void {
    this._viewer.setOnStopListener(stopCallback);
  }
  setOnCompleteListener(completeCallback: () => void): void {
    this._viewer.setOnStopListener(completeCallback);
  }
  setOnProgressListener(progressCallback: (process: ProgressTimeUs) => void): void {
    this._viewer.setOnProgressListener(progressCallback);
  }
  setOnPrepareListener(prepareCallback: () => void): void {
    this._viewer.setOnPrepareListener(prepareCallback);
  }
  setOnSeekListener(seekCallback: (timeUs: any) => void): void {
    this._viewer.setOnSeekListener(seekCallback);
  }
  setOnErrorListener(errorCallback: (className: any, funcName: any, errorCode: any, message: any) => void): void {
    this._viewer.setOnErrorListener(errorCallback);
  }
  setOnFrameUpdateListener(callback: () => void): void {
    this._viewer.setOnFrameUpdateListener(callback);
  }
}
