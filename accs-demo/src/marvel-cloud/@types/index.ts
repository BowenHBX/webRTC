// @ts-ignore
// import * as addon from '../../build/Release/MarvelNodeJS';
import { CKey } from './C';
import * as proto from '../protobuf/model';

export * from './C';
const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;

export const MARVEL_VERSION = '202';
export const MARVEL_API_VERSION = 202;

// export const MarvelNodeAddonViewer = addon.Viewer;
// export const MarvelNodeAddonEditProject = addon.EditProject;
// export const MarvelNodeAddonMeEditor = addon.MeEditor;
// export const MarvelNodeAddonExporter = addon.Exporter;
// export const MarvelNodeAddonEngine = addon.MarvelEngine;
// export const MarvelNodeAddonToolbox = addon.MarvelToolbox;

export const PI = 3.1415;

/**
 * 小于0表示失败，默认返回0
 */
export type Ret = number;

/**
 * 资源文件路径
 */
export type Path = string;

/**
 * 时间毫秒
 */
export type TimeUS = number;

/**
 * 片段ID
 */
export type ClipId = string;
/**
 * 轨道ID
 */
export type TrackId = string;

/**
 * 资源ID
 */
export type ResId = string;

/**
 * 应用C++ i64 主要是给 setClipI64Property 的方法定义使用
  setClipDblProperty
 */
export type Int64 = number;

/**
 * 应用C++ double 主要是给 setClipDblProperty 的方法定义使用
 */
export type DoubleFloat = number;


/**
 * 强度比。取值范围为 0 到 1
 */
export type Intensity = number;

export enum SeekFlag {
  GOING = 1,
  START = 2,
  END = 3,
}


export enum SourecType {
  PIP = 'pip',
  MUSIC = 'music'
}

/**
 * 轨道类型
 */
export enum TrackType {
  MAIN = 'main',
  PIP = 'pip',
  MUSIC = 'music',
  STICKER = 'sticker',
  EFFECT = 'effect',
  LOOKUP = 'lookup',
  CUSTOMIZE = 'customize',
  TEXT = 'text',
  GROUP = 'group',
  ALL = 'all',
  MASK = 'mask', // 蒙版切片
  MAGIC = 'magic', // 特效
  DYNAMIC = 'extension' // 设计定义用轨道
}

/**
 * 轨道类型
 */
export const MarvelTrackTypeToString = [
  'invalid', // 0
  'main', // 1
  'pip', // 2
  'music', // 3
  'bgMusic', // 4
  'sticker', // 5
  'effect', // 6
  'lookup', // 7
  'customize', // 8
  'text', // 9
  'group', // 10
  'mask', // 11 蒙版切片
  'magic', // 12 特效
  'extension', // 13 设计定义用轨道
  'all', // 14
];

/**
 * 轨道类型
 */
export const StringToMarvelTrackType = {
  invalid: pkg.MarvelTrackType.TrackTypeInvalid, // 0
  main: pkg.MarvelTrackType.TrackTypeMain, // 1
  pip: pkg.MarvelTrackType.TrackTypePip, // 2
  music: pkg.MarvelTrackType.TrackTypeMusic, // 3
  bgMusic: pkg.MarvelTrackType.TrackTypeBgMusic, // 4
  sticker: pkg.MarvelTrackType.TrackTypeSticker, // 5
  effect: pkg.MarvelTrackType.TrackTypeEffect, // 6
  lookup: pkg.MarvelTrackType.TrackTypeLookup, // 7
  customize: pkg.MarvelTrackType.TrackTypeCustomize, // 8
  text: pkg.MarvelTrackType.TrackTypeText, // 9
  group: pkg.MarvelTrackType.TrackTypeGroup, // 10
  mask: pkg.MarvelTrackType.TrackTypeMask, // 11 蒙版切片
  magic: pkg.MarvelTrackType.TrackTypeMagic, // 12 特效
  extension: pkg.MarvelTrackType.TrackTypeDynamic, // 13 设计定义用轨道
  all: pkg.MarvelTrackType.TrackTypeAll, // 14
};

/**
 * 片段类型
 */
export enum ClipType {
  BASE = 'base',
  CANVAS = 'canvas', // 画布，用于位移旋转
  LOOKUP = 'lookup', // 滤镜
  MAGIC = 'magic', // 特效
  STICKER = 'sticker', // 贴纸
  TEXT = 'text', // 文字
  TRANSITION = 'transition', // 转场
  SOURCE = 'source',
  MASK = 'mask', // 蒙版切片
  KEYFRAME = 'keyframe', // 关键帧
  DYNAMIC = 'extension' // 设计定义用轨道
}


export interface ClipTypeInfoMap {
  [ClipType.BASE]: BaseClipInfo;
  [ClipType.CANVAS]: CanvasClipInfo;
  [ClipType.LOOKUP]: LookupClipInfo;
  [ClipType.MAGIC]: MagicClipInfo;
  [ClipType.STICKER]: StickerClipInfo;
  [ClipType.TEXT]: TextClipInfo;
  [ClipType.SOURCE]: SourceClipInfo;
  [ClipType.TRANSITION]: TransitionClipInfo;
  [ClipType.DYNAMIC]: DynamicUIClipInfo;
}

export interface BaseClipInfo {
  track_id: TrackId;
  speed: number;
  res_id: string;
  revert: number;
  source_start_time_us: TimeUS;
  source_stop_time_us: TimeUS;
  start_time_us: TimeUS;
  stop_time_us: TimeUS;
  volume: string;
  type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MarvelTrackType;
  resName?: string;
  resource?: SourceClipInfo | TextClipInfo | null;
  transition?: TransitionClipInfo | null;
  canvas?: CanvasClipInfo | null;
  mask?: MaskInfo | null;
  ui?: DynamicUIClipInfo | null;
  keyframe?: KeyframeMap<KeyframeData> | null;
  extensionEffect?: ExtensionEffectInfo[];
  id?: ClipId;
  // has_tras
  [key: string]: any;
}

export interface TextClipInfo {
  type: string;
  content: string;
  font_file: string;
  scale: number;
  text_color: ColorHEX | ColorARGB;
  x_offset: number;
  y_offset: number;
  text_alignment_h: string | number;
  text_alignment_v: string | number;
  text_outline_color: ColorHEX | ColorARGB;
  text_outline_enabled: string | number;
  text_outline_size: string | number;
  text_shadow_color: ColorHEX | ColorARGB;
  text_shadow_enabled: string | number;
  text_shadow_offset_x: string | number;
  text_shadow_offset_y: string | number;
  text_style_bold: string | number;
  text_style_italics: string | number;
  text_style_underline: string | number;
  text_word_space: string | number;
  [key: string]: any;
}


export type ResourceInfo = | {
  [CKey.kSourceKeyId]: string;
  [CKey.kSourceKeyPath]: string;
  [CKey.kSourceKeyOutputPath]: string;
  [CKey.kSourceKeyType]: string;
  [CKey.kSourceKeyExtraType]: string;
  [CKey.kSourceKeySubclass]: string;
  [CKey.kSourceKeyHasAudio]: string;
  [CKey.kSourceKeyHasVideo]: string;
  [CKey.kSourceKeyVideoMime]: string;
  [CKey.kSourceKeyAudioMime]: string;
  [CKey.kSourceKeyAudioSampleRate]: string;
  [CKey.kSourceKeyAudioChannelCount]: string;
  [CKey.kSourceKeyAudioDuration]: string;
  [CKey.kSourceKeyVideoWidth]: string;
  [CKey.kSourceKeyVideoHeight]: string;
  [CKey.kSourceKeyVideoDuration]: string;
  [CKey.kSourceKeyVideoRotation]: string;
  [CKey.kSourceKeyMinDurationUs]: string;
  [CKey.kSourceKeyMaxDurationUs]: string;
  [CKey.kSourceKeyVersion]: string;
  [CKey.kSourceKeyRemoteId]: string;
  [CKey.kSourceKeyValue]: string;
  [CKey.kSourceKeyFlag]: string;
  [CKey.kSourceKeyName]: string;
  [CKey.kSourceKeyTexType]: string;
  [CKey.kSourceKeyEffectType]: string;
  [CKey.kSourceLimitDurationUs]: string;
};

export type SourceClipInfo = | {
  // audio_channel_count: string
  // audio_duration_us:   string
  // audio_mime:          string
  // audio_sample_rate:   string
  // has_audio:           string
  // has_video:           string
  // id:                  string
  // max_duration_us:     string
  // min_duration_us:     string
  // path:                string
  // type:                string
  // video_duration:      string
  // video_height:        string
  // video_mime:          string
  // video_rotation:      string
  // video_width:         string
  audioChannelCount: string | number;
  audioDurationUs: string | number;
  audioMime: string;
  audioSampleRate: string | number;
  hasAudio: string | number;
  hasVideo: string | number;
  id: string;
  max_duration_us: string | number;
  min_duration_us: string | number;
  path: string;
  type: string;
  videoDurationUs: string | number;
  videoHeight: string | number;
  videoMime: string | number;
  videoRotation: string | number;
  videoWidth: string | number;
  [key: string]: any;
} | { // 图片
  id: string;
  path: string;
  type: string;
  [key: string]: any;
};

export interface TransitionClipInfo {
  duration_us: string | number;
  mode: string;
  path: string;
  [key: string]: any;
}


export interface CanvasClipInfo {
  xOffset: number;
  yOffset: number;
  xScale?: number;
  yScale?: number;
  scale?: number;
  rotate: number;
  intensity?: Intensity;
  bg_color?: ColorHEX | ColorARGB;
  blend_type?: string;
  bg_image?: Path;
  blur_type?: number;
  scale_Type?: number;
  [key: string]: any; // x_offset
}

export interface LookupClipInfo {
  intensity: Intensity;
  path: Path;
  [key: string]: any;
}

export interface MagicClipInfo {
  path: Path;
  [key: string]: any;
}

export interface StickerClipInfo {
  path: Path;
  [key: string]: any;
}

export interface EffectPropertyOfClip {
  canvas?: CanvasClipInfo;
  magic?: MagicClipInfo;
  lookup?: LookupClipInfo;
  sticker?: StickerClipInfo;
}

export enum DynamicUIType {
  INTEGER = 'integer',
  DECIMAL = 'decimal',
  RESOURCE = 'resource',
  STRING = 'string',
  COMBO = 'combo'
}

export interface DynamicUIListItem {
  key: string;
  value: any;
}

export interface DynamicUIInteger {
  type: DynamicUIType;
  desc: string;
  name: string;
  curve?: boolean;
  max?: Int64;
  min?: Int64;
  value?: Int64;
  default?: Int64;
  [key: string]: any;
}

export interface DynamicUIDecimal {
  type: DynamicUIType;
  desc: string;
  name: string;
  curve?: boolean;
  max?: DoubleFloat;
  min?: DoubleFloat;
  value?: DoubleFloat;
  default?: DoubleFloat;
  [key: string]: any;
}
export interface DynamicUIResource {
  type: DynamicUIType;
  desc: string;
  name: string;
  prefix: string[]; // ['png','jpg','fmov']
  curve?: boolean;
  value?: string;
  default?: string;
  [key: string]: any;
}

export interface DynamicUIString {
  type: DynamicUIType;
  desc: string;
  name: string;
  curve?: boolean;
  value?: string;
  default?: string;
  [key: string]: any;
}

export interface DynamicUICombo {
  type: DynamicUIType;
  desc: string;
  name: string;
  dataType: DynamicUIType;
  list: DynamicUIListItem[];
  curve?: boolean;
  value?: any;
  default?: any;
  [key: string]: any;
}

export type DynamicUI = | DynamicUIInteger | DynamicUIDecimal | DynamicUIResource | DynamicUIString | DynamicUICombo;

export interface DynamicUIClipInfo {
  name: string;
  desc: string;
  data: DynamicUI[];
  [key: string]: any;
}

export interface MaskInfo {
  path: Path;
  rotate: number;
  xScale: number;
  yScale: number;
  xOffset: number;
  yOffset: number;
  height: number;
  width: number;
  sdf: number;
  revert: number;
  [key: string]: any;
}

export interface KeyframeInfo {
  anchors: KeyframePointList;
  [key: string]: any;
}

export interface ExtensionEffectInfo {
  name: string;
  resName: string;
  ui?: DynamicUIClipInfo;
  keyframe?: KeyframeInfo;
  resource?: { path: string };
  [key: string]: any;
}

export type MarvelClipInfo = BaseClipInfo | CanvasClipInfo | LookupClipInfo | MagicClipInfo | StickerClipInfo | SourceClipInfo | TextClipInfo | TransitionClipInfo | MaskInfo | KeyframeInfo | ExtensionEffectInfo | DynamicUIClipInfo | null;

export interface GenericRet<T> {
  ret: Ret;
  [key: string]: T | any | null;
}

export interface ClipInfo<T> {
  ret: Ret;
  clipInfo: T | null;
}

export interface ImageBuffer {
  buffer?: Buffer;
  width: number;
  height: number;
}

export type VideoFrame = | {
  data: ImageBuffer;
  pts: TimeUS;
  index: number;
};

export interface TransformProperty {
  x_offset?: string;
  y_offset?: string;
  scale?: string;
  rotate?: string;
}

export interface PanelInfo {
  ret: Ret;
  trackIds: TrackId[];
  info: any;
}


export interface TrackInfo {
  ret: Ret;
  clipIds: ClipId[];
  type: TrackType;
}

export type TextStyle = | {
  bold?: boolean;
  italics?: boolean;
  underline?: boolean;
};

export type XYPosition = | {
  x?: number;
  y?: number;
};

export type Measure = | ClipMeasure;

export type ColorHEX = string;
export type ColorARGB = number;

/**
 * 10 - 60之间，超出范围使用主轨道帧率
 */
export type Rate = number;

export enum SourceType {
  kSourceUnknow = 0x00,
  kSourceTexture = 0x01,
  kSourcePcm = 0x02,
  kSourceAll = 0xFF
}

export enum ExportType {
  kDraftExporter = 0,
  kMediaExporter = 1,
  kTemplateExporter = 2
}


export enum VideoConfig {
  VideoHeight = 'VideoHeight', // 视频高度，default = 864
  VideoWidth = 'VideoWidth', // 视频宽度, default = 480
  VideoBps = 'VideoBps', // 视频bitrate, default = 3000
  VideoFps = 'VideoFps', // 视频fps, default = 24
  VideoIfi = 'VideoIfi', // 视频i帧的频率（秒）, default = 1
}

export enum AudioConfig {
  AudioFrequency = 'AudioFrequency', // 音频的采样率，default = 44100
  AudioEncoding = 'AudioEncoding', // 默认编码器，AAC
  AudioChannel = 'AudioChannel', // 声道，CHANNEL_IN_STEREO
  AudioSource = 'AudioSource', // 音源，MIC
  AudioBps = 'AudioBps', // 音频的码率，64000
}

export type ClipMeasure = | {
  width: number;
  height: number;
};

export enum CanvasScaleType {
  FixXY,
  CenterInside,
  CenterCrop,
  StartCrop,
  EndCrop,
  FitStart,
  FitEnd
}

export class FrameParam {
  path: string;
  imageWidth: number;
  imageHeight: number;
  startTimeUs: number;
  stopTimeUs: number;
  fps: number;
}

export interface ProgressTimeUs {
  progress: number;
}

/**
 * accs 配置信息
 */
export interface IAccsConfig {
  // accs 环境 - 日常：msgacs.waptest.taobao.com  预发：msgacs.wapa.taobao.com  生产：msgacs.m.taobao.com
  aserverProxy: string;
  // accs appKey
  appkey: string;
  // 重连时间，0: 不重连
  reconnectInterval: number;
  // 自定义获取token的地址
  mParams?: {
    api: string,
    v: string,
    H5Request: boolean,
    LoginRequest: boolean,
    ecode: number,
  };
}

export interface MarvelAddonMeEditor {

  /**
   * 开启一个事务，开启事务后，后续修改操作会被打包为一个原子操作
   *
   * @return 执行结果
   */
  transact: () => Promise<Ret>;

  /**
   * 提交事务，提交的事务会进入操作栈，后续可以进行{@link #undo()}操作
   *
   * @return 执行结果
   */
  commit: () => Promise<Ret>;

  /**
   * 取消事务，事务会被回滚，返回到开启事务时的状态
   *
   * @return 执行结果
   */
  cancel: () => Promise<Ret>;

  /**
    *  撤销上一个操作, 除了查询类、辅助类、undo/redo类操作，其他增删改操作都可以进行undo。
    *  具体不能undo的查询操作包括getPanelInfo、getTrackInfo、getClipInfo
    *  具体不能undo的辅助操作包括selectClip、unselectClip
    *
    * @return 小于0表示失败，默认返回0
    */
  undo: () => Promise<Ret>;

  /**
  *  重做上一个非撤销的动作
  *
  * @return 小于0表示失败，默认返回0
  */
  redo: () => Promise<Ret>;

  /**
   * 获取当前undo栈的大小
   *
   * @return undo栈的大小
   */
  getUndoStackSize: () => Promise<number>;

  /**
   * 获取当前redo栈的大小
   *
   * @return redo栈的大小
   */
  getRedoStackSize: () => Promise<number>;

  /**
   * 向主轨道中增加一个片段
   *
   * @param trackId 轨道ID
   * @param content 文字内容
   * @param startTimeUs 截取视频的开始时间点
   * @param durationUs 时长
   * @return clipId 所增加片段ID, 空为出错，有值为成功。
   */
  addTextClip: (trackId: string, content: string, startTimeUs: TimeUS, durationUs: number) => Promise<ClipId>;

  /**
   * 设置编辑工程的画布大小
   *
   * @param width 画布宽度
   * @param height 画布高度
   * @return 执行结果
   */
  setCanvasSize: (width: number, height: number) => Promise<number>;

  /**
   * 设置编辑工程的画布上内容的缩放类型
   *
   * @param type 缩放类型
   *  (0:FixXY, 1:CenterInside, 2:CenterCrop, 3:StartCrop, 4:EndCrop, 5:FitStart, 6:FitEnd)
   * @return 执行结果
   */
  setCanvasScaleType: (scaleType: number) => Promise<number>;

  /**
   * 设置编辑工程的画布颜色
   *
   * @param color 颜色，ARGB
   * @return 执行结果
   */
  setCanvasBackground: (color: ColorHEX) => Promise<number>;

  /**
   * 获取编辑工程画布宽度
   */
  getCanvasWidth: () => Promise<number>;

  /**
   * 获取编辑工程画布高度
   */
  getCanvasHeight: () => Promise<number>;

  /**
   * 设置一个文字片段的文字内容
   *
   * @param clipId 目标片段ID
   * @param content 文字内容
   * @return 执行结果
   */
  setText: (clipId: string, content: string) => Promise<Ret>;

  /**
   * 设置一个文字片段的文字颜色
   *
   * @param clipId 目标片段ID
   * @param color 文字颜色，ARGB
   * @return 执行结果
   */
  setTextColor: (clipId: string, color: number) => Promise<Ret>;

  /**
   * 设置一个文字片段使用的文字字体
   *
   * @param clipId 目标片段ID
   * @param path 字体资源路径，ttf文件
   * @return 执行结果
   */
  setTextFont: (clipId: string, path: string) => Promise<Ret>;

  /**
   * 设置一个文字片段的文字阴影
   *
   * @param clipId 目标片段ID
   * @param enable 是否启用文字阴影
   * @param color 阴影颜色，ARGB
   * @param offsetX
   * @param offsetY
   */
  changeTextShadow: (clipId: string, enable: boolean, color: ColorARGB, offsetX: number, offsetY: number) => Promise<Ret>;

  /**
   * 设置一个文字片段的文字阴影颜色
   *
   * @param clipId 目标片段ID
   * @param color 阴影颜色，ARGB
   * @return 执行结果
   */
  setTextShadowColor: (clipId: string, color: ColorARGB) => Promise<Ret>;

  /**
   * 设置一个文字片段是否启用文字阴影
   *
   * @param clipId 目标片段ID
   * @param enable 是否启用文字阴影效果
   * @return 执行结果
   */
  setTextShadowEnable: (clipId: string, enable: boolean) => Promise<Ret>;

  /**
   * 设置一个文字片段文字阴影的X轴偏移
   *
   * @param id 目标片段ID
   * @param x 偏移量
   * @return 执行结果
   */
  setTextShadowOffsetX: (id: string, x: number) => Promise<Ret>;

  /**
   * 设置一个文字片段文字阴影的Y轴偏移
   *
   * @param id 目标片段ID
   * @param y 偏移量
   * @return 执行结果
   */
  setTextShadowOffsetY: (id: string, y: number) => Promise<Ret>;

  /**
   * 设置一个文字片段中文字的对齐方式
   *
   * @param clipId 目标片段ID
   * @param v 垂直方向对齐方式
   * @param h 水平方向对齐方式
   * @return 执行结果
   */
  setTextAlignment: (clipId: string, v: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentVerticalType, h: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentHorizontalType) => Promise<Ret>;

  /**
   * 设置一个文字片段中的字间距
   *
   * @param clipId 目标片段ID
   * @param space 字间距
   * @return 执行结果
   */
  setTextWordSpace: (clipId: ClipId, space: number) => Promise<Ret>;

  /**
   * 设置一个文字片段的描边颜色
   *
   * @param clipId 目标片段ID
   * @param enable 是否启用outline
   * @param color 描边颜色ARGB颜色
   * @param size 描边粗细
   * @return 执行结果
   */
  setTextOutline: (clipId: string, enable: boolean, color: ColorARGB, size: number) => Promise<Ret>;

  /**
   * 设置一个文字片段的描边颜色
   *
   * @param id 目标片段ID
   * @param color 描边颜色ARGB颜色
   * @return 执行结果
   */
  setTextOutlineColor: (id: string, color: ColorARGB) => Promise<Ret>;

  /**
   * 设置一个文字片段的描边粗细
   *
   * @param id 目标片段ID
   * @param size 描边粗细
   * @return 执行结果
   */
  setTextOutlineSize: (id: string, size: number) => Promise<Ret>;

  /**
   * 设置一个文字片段中文字显示描边
   *
   * @param id 目标片段ID
   * @param enable 是否显示描边
   * @return 执行结果
   */
  setTextOutlineEnable: (id: string, enable: boolean) => Promise<Ret>;

  /**
   * 设置一个文字片段中文字显示下划线
   *
   * @param id 目标片段ID
   * @param enable 是否显示下划线
   * @return 执行结果
   */
  setTextUnderline: (id: string, enable: boolean) => Promise<Ret>;

  /**
   * 设置一个文字片段中文字为粗体
   *
   * @param id 目标片段ID
   * @param enable 是否使用粗体
   * @return 执行结果
   */
  setTextBold: (id: string, enable: boolean) => Promise<Ret>;

  /**
   * 设置一个文字片段中文字为斜体
   *
   * @param id 目标片段ID
   * @param enable 是否使用斜体
   * @return 执行结果
   */
  setTextItalics: (id: string, enable: boolean) => Promise<Ret>;

  /**
   * 设置一个片段的转场效果，其上的效果作用于当前片段以及和他相邻的通轨道片段
   *
   * @param id 目标片段ID
   * @param path 转场效果资源路径
   * @param mode 切换模式, 如overlay
   * @return 执行结果
   */
  setTransitionEffect: (id: ClipId, path: Path, mode?: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.TransitionMode) => Promise<Ret>;

  /**
   * 设置一个片段上的转场效果的转场时间
   *
   * @param id 目标片段ID
   * @param durationUs 转场持续时间
   * @return 执行结果
   */
  setTransitionDurationUs: (id: ClipId, durationUs: TimeUS) => Promise<Ret>;
  /**
   * 移除一个片段上的转场效果
   *
   * @param id 目标片段ID
   * @return 执行结果
   */
  removeTransition: (id: ClipId) => Promise<Ret>;

  /**
   * 设置一个图像类片段的展示位置
   *
   * @param id 目标片段ID
   * @param x 归一化x坐标
   * @param y 归一化y坐标
   * @return 执行结果
   */
  setPosition: (id: ClipId, x: number, y: number) => Promise<Ret>;

  /**
 * 设置一个图像类片段的锚点
 *
 * @param id 目标片段ID
 * @param x 归一化x坐标
 * @param y 归一化y坐标
 * @return 执行结果
 */
  setAnchor: (id: ClipId, x: number, y: number) => Promise<Ret>;

  /**
   * 设置一个图像类片段的旋转角度
   *
   * @param id 目标片段ID
   * @param rotate 旋转角度，弧度
   * @return 执行结果
   */
  setRotate: (id: ClipId, rotate: number) => Promise<Ret>;

  /**
   * 设置片段的缩放系数
   *
   * @param clipId 目标片段ID
   * @param scale 缩放参数
   * @return 执行结果
   */
  setScale: (id: ClipId, scale: number) => Promise<Ret>;

  /**
   * 设置片段的X缩放系数
   *
   * @param clipId 目标片段ID
   * @param scaleX 缩放参数
   * @return 执行结果
   */
  setScaleX: (id: ClipId, scaleX: number) => Promise<Ret>;

  /**
   * 设置片段的X缩放系数
   *
   * @param clipId 目标片段ID
   * @param scaleY 缩放参数
   * @return 执行结果
   */
  setScaleY: (id: ClipId, scaleY: number) => Promise<Ret>;

  /**
   * 向画中画轨道中增加一个滤镜片段。增加逻辑同{@link #addPipClip(String, String, long, long, long)}
   *
   *
   * @param trackId 轨道Id
   * @param path 滤镜资源路径
   * @param startTimeUs 期望在轨道中的开始时间点
   * @param durationUs 持续时长
   * @param intensity 滤镜强度
   * @return clipId 所增加片段ID, 空为出错，有值为成功。
   */
  addLookupClip: (trackId: string, path: string, startTimeUS: number, durationUs: number, intensity?: number) => Promise<ClipId>;

  /**
  * 设置一个片段的滤镜路径
  *
  * @param clipId 目标片段ID
  * @param path 滤镜路径
  * @return 执行结果
  */
  setLookupPath: (clipId: string, path: string) => Promise<Ret>;

  /**
   * 设置一个片段的blend type
   *
   * @param clipId    目标片段ID
   * @param blendType 如blendScreen, blendNormal等
   * @return 执行结果
   */
  setClipBlendType: (clipId: ClipId, blendType: string) => Promise<Ret>;

  /**
   * 获取一个片段的blend type
   *
   * @param clipId    目标片段ID
   * @return 返回使用的blend type
   */
  getClipBlendType: (clipId: ClipId) => Promise<string>;

  /**
   * 设置一个片段的滤镜强度
   *
   * @param clipId 目标片段ID
   * @param intensity 滤镜强度
   * @param path 资源路径
   * @return 执行结果
   */
  setLookupIntensity: (clipId: string, intensity, path: Path) => Promise<Ret>;

  /**
   * 设置一个片段上图像的裁剪信息，裁剪出来的区域为保留区域
   *
   * @param id 目标片段ID
   * @param x x方向起始坐标
   * @param y y方向起始坐标
   * @param w 裁剪宽度
   * @param h 裁剪高度
   * @param rotate 裁剪旋转信息
   * @param normalize 裁剪参数是否为归一化参数
   * @param rotateWithCropCenter 旋转是否使用裁剪区域的中心作为旋转中，false时使用图片中心作为旋转中心
   * @return 执行结果
   */
  setClipCrop: (clipId: ClipId, x: DoubleFloat, y: DoubleFloat, w: DoubleFloat, h: DoubleFloat, rotate: DoubleFloat, normalize: boolean, rotateWithCropCenter: boolean) => Promise<Ret>;

  /**
   * 移除一个片段上的滤镜信息
   *
   * @param clipId 目标片段ID
   * @return 执行结果
   */
  removeLookup: (clipId: string) => Promise<Ret>;

  /**
   * 向主轨道中增加一个片段
   *
   * @param path 视频的路径
   * @param startTime 截取视频的开始时间点
   * @param endTime 截取视频的结束时间点
   * @return clipId 所增加片段ID, 空为出错，有值为成功。
   */
  addMainClip: (path: Path, startTime: TimeUS, endTime: TimeUS) => Promise<string>;

  /**
     * 向画中画轨道中增加一个片段，增加时会按照期望的轨道，期望的时间点进行插入。
     *
     * 如果轨道id为空，则启用自动模式，按照轨道顺序查找合适的轨道，都不合适就创建新轨道进行插入
     * 如果轨道id不为空，且轨道不存在或不能插入，则插入失败。其他非主轨道片段插入也遵循此逻辑
     *
     * @param trackId 轨道Id
     * @param path 视频的路径
     * @param timePosition 期望在轨道中的开始时间点
     * @param startTime 截取视频的开始时间点
     * @param endTime 截取视频的结束时间点
     * @return clipId 所增加片段ID, 空为出错，有值为成功。
     */
  addPipClip: (trackId: TrackId, path: Path, timePosition: TimeUS, startTime: TimeUS, endTime: TimeUS) => Promise<ClipId>;

  /**
   * 轨道中增加一个音乐片段，增加时会按照期望的轨道，期望的时间点进行插入。
   *
   * 如果轨道id为空，则启用自动模式，按照轨道顺序查找合适的轨道，都不合适就创建新轨道进行插入
   * 如果轨道id不为空，且轨道不存在或不能插入，则插入失败。其他非主轨道片段插入也遵循此逻辑
   *
   * @param trackId 轨道Id
   * @param path 音频的路径
   * @param p 期望在轨道中的开始时间点
   * @param s 截取音频的开始时间点
   * @param e 截取音频的结束时间点
   * @return clipId 所增加片段ID, 空为出错，有值为成功。
   */
  addMusicClip: (trackId: string, path: string, p: TimeUS, s: TimeUS, e: TimeUS) => Promise<ClipId>;

  /**
   * 向画中画轨道中增加一个贴纸片段。增加逻辑同{@link #addPipClip(String, String, long, long, long)}
   *
   * @param trackId 轨道Id
   * @param path 贴纸资源路径
   * @param startTimeUs 期望在轨道中的开始时间点
   * @param durationUs 持续时长
   * @return clipId 所增加片段ID, 空为出错，有值为成功。
   */
  addStickerClip: (trackId: string, path: string, startTimeUS: TimeUS, durationUs: number) => Promise<ClipId>;

  /**
   * 删除一个轨道
   *
   * @param trackId 轨道Id
   * 主轨道或者轨道中有clip时不允许删除
   * @return 小于0表示失败，默认返回0
   *  -90: trackId为空，-91: 主轨道不允许删除， -92:轨道非空不允许删除
   */
  removeTrack: (trackId: string) => Promise<Ret>;

  /**
   * 移动轨道到指定位置
   *
   * @param trackId 轨道id
   * @param index 移动的轨道位置
   * @return 执行结果
   */
  moveTrack: (trackId: string, index: number) => Promise<Ret>;

  /**
   * 替换一个片段的资源，目前仅支持视频或者图片
   *
   * @param clipId 目标片段ID
   * @param path 期望替换成的路径
   * @param s 开始时间
   * @param e 结束事件
   * @return 执行结果
   */
  splitClip: (clipId: ClipId, splitTime: TimeUS) => Promise<ClipId>;

  /**
   * 片段复制，支持跨轨道复制
   *
   * @param clipId      目标片段ID
   * @param dstTrackId  复制到TrackId
   * @param startTimeUs 复制到的时间
   * @return 新增的clip
   */
  copyClip: (clipId: ClipId, trackId: string, startTimeUs: TimeUS) => string;

  /**
   * 设置资源信息
   *
   * @param clipId 片段ID
   * @param remote 远程信息
   * @param name 资源名称
   * @param version 资源版本号
   * @param resType 资源类型
   * @return 执行结果
   */
  setResourceProperties: (clipId: string, remote: string, name: string, version: number, resType: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType) => Promise<Ret>;

  /**
   * 设置资源的远程信息
   *
   * @param resId 目标资源ID
   * @param remote 远程信息
   * @return 执行结果
   */
  setResourceRemoteId: (resId: string, remote: string) => Promise<Ret>;

  /**
   * 设置资源的名称
   *
   * @param resId 目标资源ID
   * @param name 资源名称
   * @return 执行结果
   */
  setResourceName: (resId: string, name: string) => Promise<Ret>;

  /**
   * 设置资源版本号
   *
   * @param resId 目标资源ID
   * @param version 资源版本号
   * @return 执行结果
   */
  setResourceVersion: (resId: string, version: string) => Promise<Ret>;

  /**
   * 设置资源类型
   *
   * @param resId 目标资源ID
   * @param type 资源类型
   * @return 执行结果
   */
  setResourceType: (resId: string, type: string) => Ret;

  getErrorMessage: (errorCode: number) => string;

  /**
   * 对于一些不能直接获取错误码的操作，可以通过这个方法检查上一次操作的执行结果
   */
  setClipStartTimeUs: (clipId: ClipId, time: TimeUS) => Promise<Ret>;

  /**
   * 针对一个片段中使用的资源，设置截取资源的开始时间点和结束时间点
   *
   * @param clipId 目标片段ID
   * @param startTime 开始时间
   * @param endTime 结束时间
   * @return 执行结果
   */
  setSourceTimeRange: (clipId: ClipId, startTime: TimeUS, endTime: TimeUS) => Promise<Ret>;

  /**
   * 针对一个片段中使用的资源，设置截取资源的开始时间点
   *
   * @param clipId 目标片段ID
   * @param time 开始时间
   * @return 执行结果
   */
  setSourceStartTimeUs: (clipId: ClipId, time: TimeUS) => Promise<Ret>;

  /**
   * 针对一个片段中使用的资源，设置截取资源的结束时间点
   *
   * @param clipId 目标片段ID
   * @param time 结束时间
   * @return 执行结果
   */
  setSourceEndTimeUs: (clipId: ClipId, time: TimeUS) => Promise<Ret>;

  /**
   * 设置一个片段的播放速度
   *
   * @param id 目标片段ID
   * @param speed 播放速度
   * @return 执行结果
   */
  setClipSpeed: (clipId: ClipId, speed: TimeUS) => Promise<Ret>;

  /**
   * 设置一个片段中音频播放时候的音量
   *
   * @param id 目标片段ID
   * @param volume 音量大小
   * @return 执行结果
   */
  setClipVolume: (clipId: ClipId, volume: DoubleFloat) => Promise<Ret>;

  /**
   * 删除一个片段的资源
   *
   * @param clipId 目标片段ID
   */
  deleteClip: (clipId: string) => Promise<Ret>;

  /**
 * 获取片段内容的宽度
 *
 * @param clipId 片段Id
 * @return 片段内容的宽度
 */
  getContentWidth: (clipId: string) => Promise<number>;

  /**
   * 获取片段内容的高度
   *
   * @param clipId 片段Id
   * @return 片段内容的高度
   */
  getContentHeight: (clipId: string) => Promise<number>;

  /**
    * 获取片段内容的X向位置
    *
    * @param clipId 片段Id
    * @return 片段内容的X向位置
    */
  getPositionX: (clipId: string) => Promise<number>;

  /**
   * 获取片段内容的Y向位置
   *
   * @param clipId 片段Id
   * @return 片段内容的Y向位置
   */
  getPositionY: (clipId: string) => Promise<number>;

  /**
   * 获取片段内容的旋转
   *
   * @param clipId 片段Id
   * @return 片段内容的旋转角度 (弧度单位)
   */
  getRotate: (clipId: string) => Promise<number>;

  /**
   * 获取片段内容的缩放
   * @param clipId
   */
  getScale: (clipId: string) => Promise<XYPosition>;
  /**
   * 获取片段的X向缩放系数
   *
   * @param clipId 目标片段ID
   * @return float值
   */
  getScaleX: (clipId: string) => Promise<number>;

  /**
   * 获取片段的Y向缩放系数
   *
   * @param clipId 目标片段ID
   * @return float值
   */
  getScaleY: (clipId: string) => Promise<number>;

  /**
   * 对于一些不能直接获取错误码的操作，可以通过这个方法检查上一次操作的执行结果
   */
  getLastErrorCode: () => number;

  /**
   * 设置一个文字片段使用的文字字体
   *
   * @param path 字体资源路径，ttf文件
   * @return 执行结果
   */
  setDefaultFontFile: (path: string) => Promise<Ret>;

  /**
   * 根据clipId 获取资源ID
   *
   * @param clipId 分片ID
   * @return resId
   */
  getClipResID: (clipId?: ClipId) => Promise<string>;

  /**
   * 根据resId 获取资源路径
   *
   * @param resId 资源Id
   * @return 资源路径
   */
  getResPath: (resId: string) => Promise<string>;

  /**
   * 根据 clipId 获取资源路径
   *
   * @param clipId 片段Id
   * @return {resourceId: string, resourceUrl: string}
   */
  getResInfo: (resId: string) => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommandResult>;

  /**
   * 获取资源信息
   * @param id clip_id | resource_id
   * @param propDefList 请求参数列表
   * @returns 返回结果列表
   */
  getResProperties: (clipId: string, resourceId: string, propDefList: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[]) => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp[]>;

  /**
   * 获取资源时长
   *
   * @param resId 资源ID
   * @return 资源时长
   */
  getResDurationUs: (resId: ResId) => Promise<TimeUS>;

  /**
   * @param clipId 片段Id
   * @return 片段的起始时间(us)
   */
  getClipStartTimeUs: (clipId: ClipId) => Promise<number>;

  /**
   * @param clipId 片段Id
   * @return 片段的结束时间(us)
   */
  getClipEndTimeUs: (clipId: ClipId) => Promise<number>;

  /**
   * @param clipId 片段Id
   * @return 片段的source起始时间(us)
   */
  getClipSourceStartTimeUs: (clipId: ClipId) => Promise<number>;

  /**
   * @param clipId 片段Id
   * @return 片段的source结束时间(us)
   */
  getClipSourceEndTimeUs: (clipId: ClipId) => Promise<number>;

  /**
   * 设置clip信息
   * @param clipId 片段ID
   * @param propList
   */
  setClipPropList: (clipId: string, propList: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp[]) => Promise<Ret>;

  /**
   * 获取clip信息
   * @param clipId 片段ID
   * @param propDefList
   */
  getClipPropList: (clipId: string, propDefList: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[]) => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp[]>;

  /**
   * 向拓展轨道中增加一个拓展片段
   * @param trackId 目标轨道
   * @param path 资源路径
   * @param startTimeUs 期望在轨道中的开始时间点
   * @param durationUs 持续时长
   * @param name 拓展类型别名
   * @param flag 渲染标记
   * @return 片段ID，如果出错，可通过{@link #getErrorCode()}获取
   */
  addExtensionClip: (trackId: TrackId, path: Path, startTimeUs: TimeUS, durationUs: TimeUS, name: string, type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SourceType, flag: number) => Promise<ClipId>;

  /**
   * 添加指定拓展片段的特效
   *
   * @param clipId 目标片段
   * @param path 特效路径
   * @param name 特效名称
   * @param flag 渲染标记
   * @return 小于0表示失败，默认返回0
   */
  addExtensionEffectForClip: (clipId: ClipId, path: Path, name: string, flag: number) => Promise<Ret>;

  /**
   * 删除指定拓展片段的特效
   *
   * @param clipId 目标片段
   * @param name 特效名称
   * @return 小于0表示失败，默认返回0
   */
  removeExtensionEffectFromClip: (clipId: ClipId, name: string) => Promise<Ret>;

  /**
   * 获取指定拓展片段的所有特效
   *
   * @param clipId 目标片段
   * @return 特效名称列表
   */
  getExtensionEffectNamesFromClip: (clipId: ClipId) => Promise<string[]>;

  /**
   * 设置拓展片段的特效优先级
   *
   * @param clipId 目标片段
   * @param name 特效名称
   * @param priority 特效的优先级，介于10000与30000之间，数字越小，优先级越高
   * @return 小于0表示失败，默认返回0
   */
  setExtensionEffectPriority: (clipId: ClipId, name: string, priority: number) => Promise<Ret>;

  /**
   * 设置一个文字片段关联的ClipId, 比如 TTS 音频
   * @param clipId
   * @param audioClipId
   */
  setTextExtraClipId: (clipId: ClipId, audioClipId: ClipId) => Promise<Ret>;

  /**
   * 暂不清楚这个接口怎么工作
   */
  getTextExtraClipId: (clipId: string) => Promise<ClipId>;

  /**
   * 获取 整个 Panel TrackId 列表
   */
  getTrackIdList: (type?: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MarvelTrackType) => Promise<{ ret: number; data: string[] }>;

  /**
   * 获取 整个 Track ClipId 列表
   */
  getClipIdList: (trackId: TrackId) => Promise<{ ret: number; data: string[] }>;

  /**
   * 获取 track 信息：包含trackType & 整个 Track ClipId 列表
   */
  getTrackInfo: (trackId: TrackId) => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackInfoCommandResult>;

  createResIfNeeded: (path: Path, type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType, clipId?: ClipId) => Promise<ResId>;

  checkToAddMtl: (clipId: ClipId, type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MaterialType) => Promise<number>;

  deleteMtl: (clipId: ClipId, type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MaterialType) => Promise<number>;

  /**
   * 片段移动，支持跨轨道移动
   *
   * @param clipId      目标片段ID
   * @param startTimeUs     分割的时间
   * @param trackId
   * @return 结果
   */
  moveClip: (clipId: ClipId, startTimeUs: TimeUS, trackId: TrackId) => Promise<Ret>;

  /**
   * 修改资源路径
   */
  changeClipRes: (clipId: ClipId, path: Path, startTimeUS: TimeUS, endTimeUs: TimeUS) => Promise<Ret>;

  /**
   * 更换canvas背景颜色
   * @param clipId
   * @param color
   */
  setCanvasBackgroundColor: (clipId: ClipId, color: ColorARGB) => Promise<Ret>;

  /**
   * 更换canvas背景图片
   * @param clipId
   * @param image
   */
  setCanvasBackgroundRes: (clipId: ClipId, image: Path) => Promise<Ret>;

  /**
   * 更换canvas背景的类型
   * @param clipId
   * @param type
   */
  setCanvasBackgroundBlurType: (clipId: ClipId, type: number) => Promise<Ret>;
}

export interface GlobalBaseMarvelAddonMeEditor extends MarvelAddonMeEditor {
  // 基础接口

  setGlobalStrProperty: (type: string, key: string, value: string) => Ret;
  setGlobalI64Property: (type: string, key: string, value: number) => Ret;
  setGlobalDblProperty: (type: string, key: string, value: number) => Ret;
  getGlobalStrProperty: (type: string, key: string) => string;
  getGlobalI64Property: (type: string, key: string) => number;
  getGlobalDblProperty: (type: string, key: string) => number;

  setClipStrProperty: (clipId: ClipId, type: string, key: string, value: string) => Promise<Ret>;
  setClipI64Property: (clipId: ClipId, type: string, key: string, value: number) => Promise<Ret>;
  setClipDblProperty: (clipId: ClipId, type: string, key: string, value: number) => Promise<Ret>;
  getClipStrProperty: (clipId: ClipId, type: string, key: string) => Promise<string>;
  getClipI64Property: (clipId: ClipId, type: string, key: string) => Promise<number>;
  getClipDblProperty: (clipId: ClipId, type: string, key: string) => Promise<number>;

  setResStrProperty: (resId: ResId, key: string, value: string) => Promise<Ret>;
  setResI64Property: (resId: ResId, key: string, value: number) => Promise<Ret>;
  setResDblProperty: (resId: ResId, key: string, value: number) => Promise<Ret>;
  getResStrProperty: (resId: ResId, key: string) => Promise<string>;
  getResI64Property: (resId: ResId, key: string) => Promise<number>;
  getResDblProperty: (resId: ResId, key: string) => Promise<number>;

  setTrackStrProperty: (trackId: TrackId, key: string, value: string) => Ret;
  setTrackI64Property: (trackId: TrackId, key: string, value: number) => Ret;
  setTrackDblProperty: (trackId: TrackId, key: string, value: number) => Ret;
  getTrackStrProperty: (trackId: TrackId, key: string) => string;
  getTrackI64Property: (trackId: TrackId, key: string) => number;
  getTrackDblProperty: (trackId: TrackId, key: string) => number;

  /**
   * @param clipId
   * @param type KeyframeType
   * @param key CanvasKeyframeMaterialKey
   * @param index
   * @param value
   */
  setClipCurvePropertyAnchorValue: (clipId: ClipId, type: string, key: string, index: number, value: number) => Promise<Ret>;
  removeClipCurvePropertyAnchor: (clipId: ClipId, type: string, key: string, index: number) => Promise<Ret>;
  getClipCurvePropertyAnchorList: (clipId: ClipId, type: string, key: string) => Promise<KeyframeList>;
  getClipCurvePropertyValue: (clipId: ClipId, type: string, key: string, index: number) => Promise<{ ret: Ret; data: number }>;
  /**
   * @deprecated
   */
  setClipCurvePropertyAnchorAttribute: (clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number, arrive: number, leave: number) => Ret;
  /**
   * @deprecated
   */
  getClipCurvePropertyAnchorAttribute: (clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number) => null;
  /**
   * @deprecated
   */
  removeClipCurveProperty: (clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number) => Ret;
}

export enum Voice {
  SIYUE = 'Siyue',
  AIMING = 'Aiming',
  AITONG = 'Aitong',
  AICHU = 'Aichu',
  QINGQING = 'Qingqing',
  CUIJIE = 'Cuijie',
  XIAOYUE = 'Xiaoyue',
  LYDIA = 'Lydia',
  XIAOXIAN = 'xiaoxian',
  MAOXIAOMEI = 'maoxiaomei'
}

// Curve Value define.
export enum KeyframeType {
  CONFIG = CKey.kPropertyConfig,
  CLIPBASE = CKey.kPropertyClipBase,
  CANVAS = CKey.kPropertyCanvas,
  LOOKUP = CKey.kPropertyLookup,
  TEXT = CKey.kPropertyText,
  TEXT_SHAPE = CKey.kPropertyTextShape,
  TEXT_ANIMATION = CKey.kPropertyTextAnnimation,
  STICKER = CKey.kPropertySticker,
  TRANSITION = CKey.kPropertyTransition,
  MASK = CKey.kPropertyMask,
  EXTENSION = CKey.kPropertyExtension
}

export enum CanvasKeyframeMaterialKey {
  X_OFFSET = CKey.kMaterialKeyXOffset,
  Y_OFFSET = CKey.kMaterialKeyYOffset,
  X_SCALE = CKey.kMaterialKeyXScale,
  Y_SCALE = CKey.kMaterialKeyYScale,
  ROTATE = CKey.kMaterialKeyRotate,
  INTENSITY = CKey.kMaterialKeyIntensity
}

export interface KeyframeValue {
  /** 时间系数 */
  key: number;
  /** Hermite曲线参数 */
  value: {
    value: number;
    arrive: number;
    leave: number;
    mode: number;
  };
}

export interface KeyframeList {
  ret: number;
  data: number[];
}

export interface KeyframeData {
  data: KeyframeValue[];
}

export type KeyframeMap<T> = { [key in keyof typeof CanvasKeyframeMaterialKey]: T } | {};

export type KeyframePointList = number[];
