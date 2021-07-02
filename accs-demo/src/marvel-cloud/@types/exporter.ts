import { VideoConfig, AudioConfig, Rate, Path } from ".";

export default interface Exporter {
  setVideoConfig(key: VideoConfig, value: number | string): void;
  setAudioConfig(key: AudioConfig, value: number | string): void;
  setFrameRate(rate: Rate): void;
  setScaleType(scaleType: number): void;
  setOutputPath(path: Path): void;
  setOnStartListener(startCallback: () => void): void;
  setOnStopListener(stopCallback: () => void): void;
  setOnCompleteListener(completeCallback: () => void): void;
  setOnProgressListener(progressCallback: (processing: any) => void): void;
  setOnPrepareListener(prepareCallback: () => void): void;
  setOnCancelListener(cancelCallback: () => void): void;
  setOnSeekListener(seekCallback: (timeUs) => void): void;
  setOnErrorListener(errorCallback: (className, funcName, errorCode, message) => void): void;
}
