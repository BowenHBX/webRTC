// @ts-ignore
// import * as addon from '../../build/Release/MarvelNodeJS';
import { CKey } from './C';

export * from './C';

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
  PIP = "pip",
  MUSIC = "music"
}

/**
 * 轨道类型 MarvelTrackType
 */
export enum TrackType {
  // MAIN = 'main',
  // PIP = "pip",
  // MUSIC = "music",
  // STICKER = 'sticker',
  // EFFECT = 'effect',
  // LOOKUP = 'lookup',
  // CUSTOMIZE = 'customize',
  // TEXT = 'text',
  // GROUP = 'group',
  // ALL = 'all',
  // MASK = 'mask', // 蒙版切片
  // MAGIC = "magic", // 特效
  // DYNAMIC = 'extension' // 设计定义用轨道
  TrackTypeInvalid = 0,
  TrackTypeMain = 1,
  TrackTypePip = 2,
  TrackTypeMusic = 3,
  TrackTypeBgMusic = 4,
  TrackTypeSticker = 5,
  TrackTypeEffect = 6,
  TrackTypeLookup = 7,
  TrackTypeCustomize = 8,
  TrackTypeText = 9,
  TrackTypeGroup = 10,
  TrackTypeAll = 11,
}

/**
 * 片段类型
 */
export enum ClipType {
  BASE = "base",
  CANVAS = "canvas", // 画布，用于位移旋转
  LOOKUP = "lookup", // 滤镜
  MAGIC = "magic", // 特效
  STICKER = 'sticker', // 贴纸
  TEXT = 'text', // 文字
  TRANSITION = 'transition', // 转场
  SOURCE = 'source',
  MASK = 'mask', // 蒙版切片
  KEYFRAME = "keyframe", // 关键帧
  DYNAMIC = 'extension' // 设计定义用轨道
}


export type ClipTypeInfoMap = {
  [ClipType.BASE]: BaseClipInfo,
  [ClipType.CANVAS]: CanvasClipInfo,
  [ClipType.LOOKUP]: LookupClipInfo,
  [ClipType.MAGIC]: MagicClipInfo,
  [ClipType.STICKER]: StickerClipInfo,
  [ClipType.TEXT]: TextClipInfo,
  [ClipType.SOURCE]: SourceClipInfo,
  [ClipType.TRANSITION]: TransitionClipInfo
  [ClipType.DYNAMIC]: DynamicUIClipInfo
}

export interface BaseClipInfo {
  track_id: TrackId,
  speed: number,
  res_id: string,
  revert: number,
  source_start_time_us: TimeUS,
  source_stop_time_us: TimeUS,
  start_time_us: TimeUS,
  stop_time_us: TimeUS,
  volume: string,
  type: TrackType
  resName?: string,
  resource?: SourceClipInfo | TextClipInfo | null
  transition?: TransitionClipInfo | null
  canvas?: CanvasClipInfo | null
  mask?: MaskInfo | null
  ui?: DynamicUIClipInfo | null
  keyframe?: KeyframeMap<KeyframeData> | null
  id?: ClipId
  // has_tras
  [key: string]: any
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
  [CKey.kSourceKeyId]: string
  [CKey.kSourceKeyPath]: string
  [CKey.kSourceKeyOutputPath]: string
  [CKey.kSourceKeyType]: string
  [CKey.kSourceKeyExtraType]: string
  [CKey.kSourceKeySubclass]: string
  [CKey.kSourceKeyHasAudio]: string
  [CKey.kSourceKeyHasVideo]: string
  [CKey.kSourceKeyVideoMime]: string
  [CKey.kSourceKeyAudioMime]: string
  [CKey.kSourceKeyAudioSampleRate]: string
  [CKey.kSourceKeyAudioChannelCount]: string
  [CKey.kSourceKeyAudioDuration]: string
  [CKey.kSourceKeyVideoWidth]: string
  [CKey.kSourceKeyVideoHeight]: string
  [CKey.kSourceKeyVideoDuration]: string
  [CKey.kSourceKeyVideoRotation]: string
  [CKey.kSourceKeyMinDurationUs]: string
  [CKey.kSourceKeyMaxDurationUs]: string
  [CKey.kSourceKeyVersion]: string
  [CKey.kSourceKeyRemoteId]: string
  [CKey.kSourceKeyValue]: string
  [CKey.kSourceKeyFlag]: string
  [CKey.kSourceKeyName]: string
  [CKey.kSourceKeyTexType]: string
  [CKey.kSourceKeyEffectType]: string
  [CKey.kSourceLimitDurationUs]: string
}

export type SourceClipInfo = | {
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
  [key: string]: any
} | { // 图片
  id: string
  path: string
  type: string
  [key: string]: any
}

export interface TransitionClipInfo {
  duration_us: string | number,
  mode: string,
  path: string,
  [key: string]: any
}



export interface CanvasClipInfo {
  xOffset: number,
  yOffset: number,
  xScale?: number,
  yScale?: number,
  scale?: number,
  rotate: number,
  intensity?: Intensity,
  bg_color?: ColorHEX | ColorARGB,
  blend_type?: string,
  bg_image?: Path,
  blur_type?: number,
  [key: string]: any // x_offset
}

export interface LookupClipInfo {
  intensity: Intensity,
  path: Path
  [key: string]: any
}

export interface MagicClipInfo {
  path: Path
  [key: string]: any
}

export interface StickerClipInfo {
  path: Path
  [key: string]: any
}

export interface EffectPropertyOfClip {
  canvas?: CanvasClipInfo,
  magic?: MagicClipInfo,
  lookup?: LookupClipInfo,
  sticker?: StickerClipInfo
}

export enum DynamicUIType {
  INTEGER = 'integer',
  DECIMAL = 'decimal',
  RESOURCE = 'resource',
  STRING = 'string',
  COMBO = 'combo'
}

export interface DynamicUIListItem {
  key: string,
  value: any
}

export interface DynamicUIInteger {
  type: DynamicUIType,
  desc: string,
  name: string,
  curve?: boolean,
  max?: Int64,
  min?: Int64
  value?: Int64
  [key: string]: any;
}

export interface DynamicUIDecimal {
  type: DynamicUIType,
  desc: string,
  name: string,
  curve?: boolean,
  max?: DoubleFloat,
  min?: DoubleFloat
  value?: DoubleFloat
  [key: string]: any;
}
export interface DynamicUIResource {
  type: DynamicUIType,
  desc: string,
  name: string,
  prefix: string[] // ['png','jpg','fmov']
  curve?: boolean,
  value?: string
  [key: string]: any;
}

export interface DynamicUIString {
  type: DynamicUIType,
  desc: string,
  name: string,
  curve?: boolean,
  value?: string
  [key: string]: any;
}

export interface DynamicUICombo {
  type: DynamicUIType,
  desc: string,
  name: string,
  dataType: DynamicUIType
  list: DynamicUIListItem[]
  curve?: boolean,
  value?: any
  [key: string]: any;
}

export type DynamicUI = | DynamicUIInteger | DynamicUIDecimal | DynamicUIResource | DynamicUIString | DynamicUICombo

export interface DynamicUIClipInfo {
  name: string,
  desc: string,
  data: DynamicUI[]
  [key: string]: any;
}

export interface MaskInfo {
  path: Path,
  rotate: number,
  xScale: number,
  yScale: number,
  xOffset: number,
  yOffset: number,
  height: number,
  width: number,
  sdf: number,
  revert: number,
  [key: string]: any
}

export type KeyframeInfo = {
  anchors: KeyframePointList;
  [key: string]: any
}


export type MarvelClipInfo = BaseClipInfo | CanvasClipInfo | LookupClipInfo | MagicClipInfo | StickerClipInfo | SourceClipInfo | TextClipInfo | TransitionClipInfo | MaskInfo | KeyframeInfo | DynamicUIClipInfo | null;

export interface GenericRet<T> {
  ret: Ret,
  [key: string]: T | any | null
}

export interface ClipInfo<T> {
  ret: Ret;
  clipInfo: T | null;
}

export interface ImageBuffer {
  buffer?: Buffer
  width: number
  height: number
}

export type VideoFrame = | {
  data: ImageBuffer,
  pts: TimeUS,
  index: number
}

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
  bold?: boolean
  italics?: boolean
  underline?: boolean
}

export type XYPosition = | {
  x?: number
  y?: number
}

export type Measure = | ClipMeasure

export type ColorHEX = string
export type ColorARGB = number

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
  VideoHeight = 'VideoHeight', //视频高度，default = 864
  VideoWidth = 'VideoWidth', //视频宽度, default = 480
  VideoBps = 'VideoBps', //视频bitrate, default = 3000
  VideoFps = 'VideoFps', //视频fps, default = 24
  VideoIfi = 'VideoIfi', //视频i帧的频率（秒）, default = 1
}

export enum AudioConfig {
  AudioFrequency = 'AudioFrequency', //音频的采样率，default = 44100
  AudioEncoding = 'AudioEncoding', //默认编码器，AAC
  AudioChannel = 'AudioChannel', //声道，CHANNEL_IN_STEREO
  AudioSource = 'AudioSource', //音源，MIC
  AudioBps = 'AudioBps', //音频的码率，64000
}

export type ClipMeasure = | {
  width: number;
  height: number;
}

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


export interface MarvelAddonMeEditor {

  /**
   * 开启一个事务，开启事务后，后续修改操作会被打包为一个原子操作
   *
   * @return 执行结果
   */
  transact()

  /**
   * 提交事务，提交的事务会进入操作栈，后续可以进行{@link #undo()}操作
   *
   * @return 执行结果
   */
  commit()

  /**
   * 取消事务，事务会被回滚，返回到开启事务时的状态
   *
   * @return 执行结果
   */
  cancel()

  /**
    *  撤销上一个操作, 除了查询类、辅助类、undo/redo类操作，其他增删改操作都可以进行undo。
    *  具体不能undo的查询操作包括getPanelInfo、getTrackInfo、getClipInfo
    *  具体不能undo的辅助操作包括selectClip、unselectClip
    *
    * @return 小于0表示失败，默认返回0
    */
  undo()

  /**
  *  重做上一个非撤销的动作
  *
  * @return 小于0表示失败，默认返回0
  */
  redo()

  /**
   * 获取当前undo栈的大小
   *
   * @return undo栈的大小
   */
  getUndoStackSize()

  /**
   * 获取当前redo栈的大小
   *
   * @return redo栈的大小
   */
  getRedoStackSize()

  /**
   * 向主轨道中增加一个片段
   *
   * @param path 视频的路径
   * @param s 截取视频的开始时间点
   * @param e 截取视频的结束时间点
   * @return clipId 所增加片段ID, 空为出错，有值为成功。
   */
  addMainClip(path: Path, s: TimeUS, e: TimeUS): ClipId

  /**
   * 向画中画轨道中增加一个片段，增加时会按照期望的轨道，期望的时间点进行插入。
   *
   * 如果轨道id为空，则启用自动模式，按照轨道顺序查找合适的轨道，都不合适就创建新轨道进行插入
   * 如果轨道id不为空，且轨道不存在或不能插入，则插入失败。其他非主轨道片段插入也遵循此逻辑
   *
   * @param trackId 轨道Id
   * @param path 视频的路径
   * @param p 期望在轨道中的开始时间点
   * @param s 截取视频的开始时间点
   * @param e 截取视频的结束时间点
   * @return clipId 所增加片段ID, 空为出错，有值为成功。
   */
  addPipClip(trackId: TrackId, path: Path, p: TimeUS, s: TimeUS, e: TimeUS)

  /**
   * 向画中画轨道中增加一个文字片段。增加逻辑同{@link #addPipClip(String, String, long, long, long)}
   * 使用前请确保已通过{@link Editor#setDefaultFontFile(String)}设置默认字体
   *
   * @param trackId 轨道Id 可为''
   * @param content 文字内容
   * @param startTimeUs 期望在轨道中的开始时间点
   * @param durationUs 持续时长
   * @return clipId 所增加片段ID
   */
  addTextClip(trackId, content, startTimeUs, durationUs): ClipId

  /**
   * 设置一个文字片段的文字内容
   *
   * @param id 目标片段ID
   * @param content 文字内容
   * @return 执行结果
   */
  setText(id, content);


  /**
   * 设置编辑工程的画布大小
   *
   * @param width 画布宽度
   * @param height 画布高度
   * @return 执行结果
   */
  setCanvasSize(width, height);

  /**
   * 设置编辑工程的画布上内容的缩放类型
   *
   * @param type 缩放类型
   *  (0:FixXY, 1:CenterInside, 2:CenterCrop, 3:StartCrop, 4:EndCrop, 5:FitStart, 6:FitEnd)
   * @return 执行结果
   */
  setCanvasScaleType(scaleType);

  /**
   * 设置编辑工程的画布颜色
   *
   * @param color 颜色，ARGB
   * @return 执行结果
   */
  setCanvasBackground(color);

  /**
   * 获取编辑工程画布宽度
   */
  getCanvasWidth();

  /**
   * 获取编辑工程画布高度
   */
  getCanvasHeight();

  /**
   * 设置一个文字片段的文字颜色
   *
   * @param id 目标片段ID
   * @param color 文字颜色，ARGB
   * @return 执行结果
   */
  setTextColor(id, color);

  /**
   * 设置一个文字片段使用的文字字体
   *
   * @param id 目标片段ID
   * @param path 字体资源路径，ttf文件
   * @return 执行结果
   */
  setTextFont(id, path);

  /**
   * 设置一个文字片段的文字阴影颜色
   *
   * @param id 目标片段ID
   * @param color 阴影颜色，ARGB
   * @return 执行结果
   */
  setTextShadowColor(id, color);

  /**
   * 设置一个文字片段是否启用文字阴影
   *
   * @param id 目标片段ID
   * @param enable 是否启用文字阴影效果
   * @return 执行结果
   */
  setTextShadowEnable(id, enable);

  /**
   * 设置一个文字片段文字阴影的X轴偏移
   *
   * @param id 目标片段ID
   * @param x 偏移量
   * @return 执行结果
   */
  setTextShadowOffsetX(id, x);

  /**
   * 设置一个文字片段文字阴影的Y轴偏移
   *
   * @param id 目标片段ID
   * @param y 偏移量
   * @return 执行结果
   */
  setTextShadowOffsetY(id, y)

  /**
   * 设置一个文字片段中文字的对齐方式
   *
   * @param clipId 目标片段ID
   * @param v 垂直方向对齐方式 (START:0, CENTER:1, END:2)
   * @param h 水平方向对齐方式 (START:0, CENTER:1, END:2)
   * @return 执行结果
   */
  setTextAlignment(id, v, h)


  /**
   * 设置一个文字片段中的字间距
   *
   * @param clipId 目标片段ID
   * @param space 字间距
   * @return 执行结果
   */
  setTextWordSpace(clipId: ClipId, space: number)

  /**
   * 设置一个文字片段的描边颜色
   *
   * @param id 目标片段ID
   * @param color 描边颜色ARGB颜色
   * @return 执行结果
   */
  setTextOutlineColor(id, color);

  /**
   * 设置一个文字片段的描边粗细
   *
   * @param id 目标片段ID
   * @param size 描边粗细
   * @return 执行结果
   */
  setTextOutlineSize(id, size);

  /**
   * 设置一个文字片段中文字显示描边
   *
   * @param id 目标片段ID
   * @param enable 是否显示描边
   * @return 执行结果
   */
  setTextOutlineEnable(id, enable);

  /**
   * 设置一个文字片段中文字显示下划线
   *
   * @param id 目标片段ID
   * @param enable 是否显示下划线
   * @return 执行结果
   */
  setTextUnderline(id, enable);

  /**
   * 设置一个文字片段中文字为粗体
   *
   * @param id 目标片段ID
   * @param enable 是否使用粗体
   * @return 执行结果
   */
  setTextBold(id, enable);

  /**
   * 设置一个文字片段中文字为斜体
   *
   * @param id 目标片段ID
   * @param enable 是否使用斜体
   * @return 执行结果
   */
  setTextItalics(id, enable);

  /**
   * 设置一个片段的转场效果，其上的效果作用于当前片段以及和他相邻的通轨道片段
   *
   * @param id 目标片段ID
   * @param path 转场效果资源路径
   * @param mode 切换模式, 如overlay
   * @return 执行结果
   */
  setTransitionEffect(id: ClipId, path: Path, mode?: string): Ret

  /**
   * 设置一个片段上的转场效果的转场时间
   *
   * @param id 目标片段ID
   * @param durationUs 转场持续时间
   * @return 执行结果
   */
  setTransitionDurationUs(id: ClipId, durationUs: TimeUS): Ret
  /**
   * 移除一个片段上的转场效果
   *
   * @param id 目标片段ID
   * @return 执行结果
   */
  removeTransition(id: ClipId): Ret

  /**
     * 设置一个图像类片段的展示位置
     *
     * @param id 目标片段ID
     * @param x 归一化x坐标
     * @param y 归一化y坐标
     * @return 执行结果
     */
  setPosition(id: ClipId, x, y): Ret

  /**
   * 设置一个图像类片段的旋转角度
   *
   * @param id 目标片段ID
   * @param rotate 旋转角度，弧度
   * @return 执行结果
   */
  setRotate(id: ClipId, rotate): Ret

  /**
     * 设置片段的X缩放系数
     *
     * @param clipId 目标片段ID
     * @param scaleX 缩放参数
     * @return 执行结果
     */
  setScaleX(id: ClipId, scaleX: number): Ret;

  /**
     * 设置片段的X缩放系数
     *
     * @param clipId 目标片段ID
     * @param scaleY 缩放参数
     * @return 执行结果
     */
  setScaleY(id: ClipId, scaleY: number): Ret;

  /**
   * 向画中画轨道中增加一个滤镜片段。增加逻辑同{@link #addPipClip(String, String, long, long, long)}
   *
   *
   * @param trackId 轨道Id
   * @param path 滤镜资源路径
   * @param startTimeUs 期望在轨道中的开始时间点
   * @param durationUs 持续时长
   * @return clipId 所增加片段ID, 空为出错，有值为成功。
   */
  addLookupClip(trackId, path, startTimeUS, durationUs): ClipId


  /**
    * 设置一个片段的滤镜路径
    *
    * @param clipId 目标片段ID
    * @param path 滤镜路径
    * @return 执行结果
    */
  setLookupPath(clipId, path);


  /**
     * 设置一个片段的blend type
     *
     * @param clipId    目标片段ID
     * @param blendType 如blendScreen, blendNormal等
     * @return 执行结果
     */
  setClipBlendType(clipId: ClipId, blendType: string);


  /**
     * 获取一个片段的blend type
     *
     * @param clipId    目标片段ID
     * @return 返回使用的blend type
     */
  getClipBlendType(clipId: ClipId): string;

  /**
   * 设置一个片段的滤镜强度
   *
   * @param clipId 目标片段ID
   * @param intensity 滤镜强度
   * @return 执行结果
   */
  setLookupIntensity(clipId, intensity);

  /**
   * 移除一个片段上的滤镜信息
   *
   * @param clipId 目标片段ID
   * @return 执行结果
   */
  removeLookup(clipId);

  /**
     * 向主轨道中增加一个片段
     *
     * @param path 视频的路径
     * @param s 截取视频的开始时间点
     * @param e 截取视频的结束时间点
     * @return clipId 所增加片段ID, 空为出错，有值为成功。
     */
  addMainClip(path, p, s, e): ClipId

  /**
     * 向画中画轨道中增加一个片段，增加时会按照期望的轨道，期望的时间点进行插入。
     *
     * 如果轨道id为空，则启用自动模式，按照轨道顺序查找合适的轨道，都不合适就创建新轨道进行插入
     * 如果轨道id不为空，且轨道不存在或不能插入，则插入失败。其他非主轨道片段插入也遵循此逻辑
     *
     * @param trackId 轨道Id
     * @param path 视频的路径
     * @param p 期望在轨道中的开始时间点
     * @param s 截取视频的开始时间点
     * @param e 截取视频的结束时间点
     * @return clipId 所增加片段ID, 空为出错，有值为成功。
     */
  addPipClip(trackId, path, p, s, e): ClipId

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
  addMusicClip(trackId, path, p, s, e): ClipId

  /**
     * 向画中画轨道中增加一个贴纸片段。增加逻辑同{@link #addPipClip(String, String, long, long, long)}
     *
     * @param trackId 轨道Id
     * @param path 贴纸资源路径
     * @param startTimeUs 期望在轨道中的开始时间点
     * @param durationUs 持续时长
     * @return clipId 所增加片段ID, 空为出错，有值为成功。
     */
  addStickerClip(trackId, path, startTimeUS, durationUs): ClipId


  /**
     * 删除一个轨道
     *
     * @param trackId 轨道Id
     * 主轨道或者轨道中有clip时不允许删除
     * @return 小于0表示失败，默认返回0
     *  -90: trackId为空，-91: 主轨道不允许删除， -92:轨道非空不允许删除
     */
  removeTrack(trackId): Ret

  /**
   * 替换一个片段的资源，目前仅支持视频或者图片
   *
   * @param clipId 目标片段ID
   * @param path 期望替换成的路径
   * @param s 开始时间
   * @param e 结束事件
   * @return 执行结果
   */
  changeClipRes(clipId: ClipId, path: Path, s: TimeUS, e: TimeUS)

  /**
   * 删除一个片段的资源
   *
   * @param clipId 目标片段ID
   */
  deleteClip(clipId): Ret

  /**
   * 分割一个片段的资源
   *
   * @param clipId      目标片段ID
   * @param time_us     分割的时间
   * @return 新增的clip
   */
  splitClip(clipId: ClipId, splitTime: TimeUS)

  /**
   * 设置资源的远程信息
   *
   * @param resId 目标资源ID
   * @param remote 远程信息
   * @return 执行结果
   */
  setResourceRemoteId(resId: any, remote: any)

  /**
   * 设置资源的名称
   *
   * @param resId 目标资源ID
   * @param name 资源名称
   * @return 执行结果
   */
  setResourceName(resId: any, name: any)

  /**
   * 设置资源版本号
   *
   * @param resId 目标资源ID
   * @param version 资源版本号
   * @return 执行结果
   */
  setResourceVersion(resId: any, version: any)

  /**
   * 设置资源类型
   *
   * @param resId 目标资源ID
   * @param type 资源类型
   * @return 执行结果
   */
  setResourceType(resId: any, type: any): Ret

  /**
     * 移除一个片段上的转场效果
     *
     * @param clipId 目标片段ID
     * @return 执行结果
     */
  removeTransition(clipId): Ret


  getErrorMessage(errorCode): string

  /**
   * 对于一些不能直接获取错误码的操作，可以通过这个方法检查上一次操作的执行结果
   */
  getLastErrorCode(): number

  /**
    * 设置一个片段在轨道中的开始时间
    *
    * @param clipId 目标片段ID
    * @param time 开始时间
    * @return 执行结果
    */
  setClipStartTimeUs(clipId, time);

  /**
   * 针对一个片段中使用的资源，设置截取资源的开始时间点
   *
   * @param clipId 目标片段ID
   * @param time 开始时间
   * @return 执行结果
   */
  setSourceStartTimeUs(clipId, time);

  /**
   * 针对一个片段中使用的资源，设置截取资源的结束时间点
   *
   * @param clipId 目标片段ID
   * @param time 结束时间
   * @return 执行结果
   */
  setSourceEndTimeUs(clipId, time);

  /**
   * 设置一个片段的播放速度
   *
   * @param clipId 目标片段ID
   * @param speed 播放速度
   * @return 执行结果
   */
  setClipSpeed(clipId, speed)

  /**
   * 设置一个片段中音频播放时候的音量
   *
   * @param clipId 目标片段ID
   * @param volume 音量大小
   * @return 执行结果
   */
  setClipVolume(clipId, volume)

  /**
   * 删除一个片段的资源
   *
   * @param clipId 目标片段ID
   */
  deleteClip(clipId)

  /**
 * 获取片段内容的宽度
 *
 * @param clipId 片段Id
 * @return 片段内容的宽度
 */
  getContentWidth(clipId)

  /**
   * 获取片段内容的高度
   *
   * @param clipId 片段Id
   * @return 片段内容的高度
   */
  getContentHeight(clipId)

  /**
    * 获取片段内容的X向位置
    *
    * @param clipId 片段Id
    * @return 片段内容的X向位置
    */
  getPositionX(clipId);

  /**
   * 获取片段内容的Y向位置
   *
   * @param clipId 片段Id
   * @return 片段内容的Y向位置
   */
  getPositionY(clipId);

  /**
   * 获取片段内容的旋转
   *
   * @param clipId 片段Id
   * @return 片段内容的旋转角度 (弧度单位)
   */
  getRotate(clipId);

  /**
   * 获取片段内容的缩放
   * @param clipId
   */
  getScale(clipId);
  /**
   * 获取片段的X向缩放系数
   *
   * @param clipId 目标片段ID
   * @return float值
   */
  getScaleX(clipId)

  /**
   * 获取片段的Y向缩放系数
   *
   * @param clipId 目标片段ID
   * @return float值
   */
  getScaleY(clipId)

  /**
   * 对于一些不能直接获取错误码的操作，可以通过这个方法检查上一次操作的执行结果
   */
  getLastErrorCode()

  /**
   * 设置一个文字片段使用的文字字体
   *
   * @param path 字体资源路径，ttf文件
   * @return 执行结果
   */
  setDefaultFontFile(path)

  /**
   * 根据clipId 获取资源ID
   *
   * @param clipId 分片ID
   * @return resId
   */
  getClipResID(clipId?: ClipId)

  /**
   * 根据resId 获取资源路径
   *
   * @param resId 资源Id
   * @return 资源路径
   */
  getResPath(resId: string)

  /**
   * @param clipId 片段Id
   * @return 片段的起始时间(us)
   */
  getClipStartTimeUs(clipId: ClipId)

  /**
   * @param clipId 片段Id
   * @return 片段的结束时间(us)
   */
  getClipEndTimeUs(clipId: ClipId)

  /**
   * @param clipId 片段Id
   * @return 片段的source起始时间(us)
   */
  getClipSourceStartTimeUs(clipId: ClipId)

  /**
   * @param clipId 片段Id
   * @return 片段的source结束时间(us)
   */
  getClipSourceEndTimeUs(clipId: ClipId)

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
  addExtensionClip(trackId: TrackId, path: Path, startTimeUs: TimeUS, durationUs: TimeUS, name: string, type: SourceType, flag: number): ClipId


  /**
   * 设置一个文字片段关联的ClipId, 比如 TTS 音频
   * @param clipId
   * @param audioClipId
   */
  setTextExtraClipId(clipId: ClipId, audioClipId: ClipId)

  /**
   * 暂不清楚这个接口怎么工作
   */
  getTextExtraClipId(clipId)

  /**
   * 获取 整个 Panel TrackId 列表
   */
  getTrackIdList(type?: TrackType)

  /**
   * 获取 整个 Track ClipId 列表
   */
  getClipIdList(trackId: TrackId)

  createResIfNeeded(path: Path, type: string, clipId: ClipId): ResId

  checkToAddMtl(clipId, type: string): number

  deleteMtl(clipId: ClipId, type: string): number

  /**
   * 片段移动，支持跨轨道移动
   *
   * @param clipId      目标片段ID
   * @param startTimeUs     分割的时间
   * @param trackId
   * @return 结果
   */
  moveClip(clipId: ClipId, startTimeUs: TimeUS, trackId: TrackId);

  /**
   * 修改资源路径
   */
  changeClipRes(clipId: ClipId, path: Path, startTimeUS: TimeUS, endTtimeUs: TimeUS): Ret

  /**
   * 更换canvas背景颜色
   * @param clipId
   * @param color
   */
  setCanvasBackgroundColor(clipId: ClipId, color: ColorARGB): Ret

  /**
   * 更换canvas背景图片
   * @param clipId
   * @param image
   */
  setCanvasBackgroundRes(clipId: ClipId, image: Path): Ret

  /**
   * 更换canvas背景的类型
   * @param clipId
   * @param type
   */
  setCanvasBackgroundBlurType(clipId: ClipId, type: number): Ret
}

export interface GlobalBaseMarvelAddonMeEditor extends MarvelAddonMeEditor {
  // 基础接口

  setGlobalStrProperty(type: string, key: string, value: string): Ret
  setGlobalI64Property(type: string, key: string, value: number): Ret
  setGlobalDblProperty(type: string, key: string, value: number): Ret
  getGlobalStrProperty(type: string, key: string): string
  getGlobalI64Property(type: string, key: string): number
  getGlobalDblProperty(type: string, key: string): number

  setClipStrProperty(clipId: ClipId, type: string, key: string, value: string): Ret
  setClipI64Property(clipId: ClipId, type: string, key: string, value: number): Ret
  setClipDblProperty(clipId: ClipId, type: string, key: string, value: number): Ret
  getClipStrProperty(clipId: ClipId, type: string, key: string): string
  getClipI64Property(clipId: ClipId, type: string, key: string): number
  getClipDblProperty(clipId: ClipId, type: string, key: string): number

  setResStrProperty(resId: ResId, key: string, value: string): Ret
  setResI64Property(resId: ResId, key: string, value: number): Ret
  setResDblProperty(resId: ResId, key: string, value: number): Ret
  getResStrProperty(resId: ResId, key: string): string
  getResI64Property(resId: ResId, key: string): number
  getResDblProperty(resId: ResId, key: string): number

  setTrackStrProperty(trackId: TrackId, key: string, value: string): Ret
  setTrackI64Property(trackId: TrackId, key: string, value: number): Ret
  setTrackDblProperty(trackId: TrackId, key: string, value: number): Ret
  getTrackStrProperty(trackId: TrackId, key: string): string
  getTrackI64Property(trackId: TrackId, key: string): number
  getTrackDblProperty(trackId: TrackId, key: string): number

  setClipCurvePropertyAnchorValue(clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number, value: number): Ret
  removeClipCurvePropertyAnchor(clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number): Ret
  getClipCurvePropertyAnchorList(clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey): KeyframeList
  getClipCurvePropertyValue(clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number): { ret: Ret; data: number };
  setClipCurvePropertyAnchorAttribute(clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number, arrive: number, leave: number): Ret;
  getClipCurvePropertyAnchorAttribute(clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number): null;
  removeClipCurveProperty(clipId: ClipId, type: string | KeyframeType, key: string | CanvasKeyframeMaterialKey, index: number): Ret;
}

export enum Voice {
  SIYUE = 'Siyue',
  AIMING = 'Aiming',
  AITONG = 'Aitong',
  AICHU = 'Aichu',
  QINGQING = 'Qingqing',
  CUIJIE = 'Cuijie',
  XIAOYUE = 'Xiaoyue',
  LYDIA = 'Lydia'
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
  key: number,
  /** Hermite曲线参数 */
  value: {
    value: number,
    arrive: number,
    leave: number,
    mode: number
  }
}

export interface KeyframeList {
  ret: number,
  data: number[]
}

export interface KeyframeData {
  data: KeyframeValue[]
}

export type KeyframeMap<T> = { [key in keyof typeof CanvasKeyframeMaterialKey]: T } | {}

export type KeyframePointList = number[]





