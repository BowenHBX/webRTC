import { Path, ClipId, TrackId, TimeUS, Intensity, Ret, TransformProperty, PanelInfo, TrackInfo, ClipInfo, BaseClipInfo, MarvelClipInfo, ClipType } from '.';

export default interface Editor {
  /**
   * 添加一条视频资源到主轨上（mp4/mov）
   * @param path 必须是完成路径
   */
  addMediaToMainTrack: (path: Path) => Promise<ClipId>;
  /**
   * 添加一条视频资源到指定轨道上（mp4/mov）
   * @param path 必须是完成路径
   * @param trackId ?
   */
  addMediaToTrack: (path: Path, trackId?: TrackId) => Promise<ClipId>;
  /**
   * 添加一条图片资源到主轨上（jpg/png）
   * @param path 必须是完成路径
   * @param stopTimeUS 展示的时长，将追加在主轨最后
   */
  addImageToMainTrack: (path: Path, stopTimeUS: TimeUS) => Promise<ClipId>;
  /**
   * 添加一条图片资源到指定(新)轨道上（jpg/png）
   * @param path 必须是完成路径
   * @param stopTimeUS 展示的时长，将追加在主轨最后(待确认)
   * @param trackId? 不提供时，将会是新的track
   */
  addImageToTrack: (path: Path, stopTimeUS: TimeUS, trackId?: TrackId) => Promise<ClipId>;
  /**
   * 移除track
   */
  removeTrack: (trackId: string) => Promise<Ret>;
  /**
   * 添加一条音频到新编辑轨道
   * @param path 必须是完成路径
   */
  addMusic: (path: Path) => Promise<ClipId>;
  /**
   * 添加一条滤镜到新编辑轨道
   * @param path 必须是完成路径
   * @param intensity 效果阈值
   */
  addLookup: (path: Path, intensity: Intensity) => Promise<ClipId>;
  /**
   * 添加一条贴纸到新编辑轨道
   * @param path 必须是完成路径
   * @param stopTimeUS 展示的时长
   */
  addSticker: (path: Path, stopTimeUS: TimeUS) => Promise<ClipId>;
  /**
   * 添加一条特效到新编辑轨道
   * @param path 必须是完成路径
   * @param stopTimeUS 展示的时长
   */
  addMagic: (path: Path, stopTimeUS: TimeUS) => ClipId;
  /**
   * 添加一条自定义clip信息到新编辑轨道
   * @param path 必须是完成路径
   * @param info
   */
  addCustomizeClip: (path: Path, info: {}) => ClipId;
  /**
   * 选择某个clip
   * @param clipId
   */
  selectClip: (clipId: Path) => Promise<Ret>;
  /**
   * 取消选择某个clip
   */
  unselectClip: () => Ret;
  /**
   * 移除指定的 Clip
   * @param clipId
   */
  removeClip: (clipId: ClipId) => Promise<Ret>;
  /**
   * 分割 Clip
   * @param timeUS
   */
  splitClip: (timeUS: TimeUS) => Promise<ClipId>;
  /**
   * 移动 clip, 先使用 selectClip 选择当前的 clip
   * @param startTimeUs
   * @param trackId
   */
  moveClip: (startTimeUs: TimeUS, trackId: TrackId) => Promise<Ret>;
  /**
   * 修改当前 clip 音量 先使用 selectClip 选择当前的 clip
   * @param volume 0.000000 - 1.000000 范围
   */
  changeVolume: (volume: number) => Promise<Ret>;

  /**
   * 修改当前Clip的播放速度
   * @param speed 0.000000 - 1.000000 范围
   */
  changeSpeed: (speed: number) => Promise<Ret>;
  /**
   * 修改当前 clip 有效时间范围 先使用 selectClip 选择当前的 clip
   * @deprecated
   * @param startUs
   * @param stopUs
   * */
  changeSourceTime: (startUs: TimeUS, stopUs: TimeUS) => Promise<Ret>;
  /**
   * 修改当前 clip 播放时间轴范围 先使用 selectClip 选择当前的 clip
   * @deprecated
   * @param startUs
   * @param stopUs
   */
  changePlayTime: (startUs: TimeUS, stopUs: TimeUS) => Promise<Ret>;
  /**
   * @deprecated
   * 修改当前 clip 转换处理，先使用 selectClip 选择当前的 clip
   * @param startUs
   * @param stopUs
   */
  transformClip: (property: TransformProperty) => Ret;
  /**
   * 撤销当前操作 ，先使用 selectClip 选择当前的 clip
   * @deprecated
   */
  undo: () => Promise<Ret>;
  /**
   * 重做撤销最后一次操作，先使用 selectClip 选择当前的 clip
   * @deprecated
   */
  redo: () => Promise<Ret>;
  /**
   * 是否能撤销操作，先使用 selectClip 选择当前的 clip
   * @deprecated
   */
  canUndo: () => Promise<boolean>;
  /**
   * 是否能重做撤销操作，先使用 selectClip 选择当前的 clip
   * @deprecated
   */
  canRedo: () => Promise<boolean>;
  /**
   * 获取当前panel面板的信息
   * @deprecated
   */
  getPanelInfo: () => Promise<PanelInfo>;
  /**
   * 获取指定 trackid 的轨道信息
   * @deprecated
   * @param trackId
   */
  getTrackInfo: (trackId: TrackId) => Promise<TrackInfo>;
  /**
   * 获取指定 Clip 信息，type来获取各种效果，滤镜的信息操作。
   * @deprecated
   * @param clipId
   * @param type
   */
  getTinyClipInfo: (clipId: ClipId) => Promise<ClipInfo<BaseClipInfo>>;
  /**
   * 获取指定 Clip 信息，type来获取各种效果，滤镜的信息操作。
   * @param clipId
   * @param type
   */
  getClipInfo: <T extends MarvelClipInfo>(clipId: ClipId, type?: ClipType | string) => Promise<ClipInfo<T>>;
  /**
   * 设定指定 Clip 信息，type来获取各种效果，滤镜的信息操作
   * @param clipId
   * @param type
   * @param clipInfo
   */
  setClipInfo: (clipId: ClipId, type: ClipType | string, clipInfo: MarvelClipInfo) => Ret;

  getErrorMessage: (code: number) => string;

  // --- extend function
  /**
   * toggle 静音 和 解除静音
   */
  toggleMute: () => Promise<Ret>;

  /**
   * 是否静音状态
   */
  isMute: () => Promise<boolean>;

  /**
   * 获取编辑工程画布宽度
   */
  getCanvasWidth: () => Promise<number>;

  /**
   * 获取编辑工程画布高度
   */
  getCanvasHeight: () => Promise<number>;

}
