import { ImageBuffer, ProgressTimeUs, TimeUS, SeekFlag } from ".";

export default interface Viewer {
  getViewerBuffer(): ImageBuffer;
  prepare(): void;
  start(): void;
  pause(): void;
  stop(): void;
  seekTo(timeUs: TimeUS, flag: SeekFlag): void;
  setSize(width: number, height: number): void;
  getDurationUs(): TimeUS;
  setOnStartListener(startCallback:()=>void): void;
  setOnStopListener(stopCallback:()=>void): void;
  setOnCompleteListener(completeCallback:()=>void): void;
  setOnProgressListener(progressCallback:(process: ProgressTimeUs)=>void): void;
  setOnPrepareListener(prepareCallback:()=>void): void;
  setOnSeekListener(seekCallback: (timeUs) => void): void;
  setOnErrorListener(errorCallback: (className, funcName, errorCode, message) => void): void;
  setOnFrameUpdateListener(callback: () => void): void;
}
