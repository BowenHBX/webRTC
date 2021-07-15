import { TrackId, ClipId, Ret, ColorHEX, Path, TimeUS, XYPosition, TextStyle, ClipMeasure, ResId, DoubleFloat, Voice, KeyframeMap, CanvasKeyframeMaterialKey, KeyframePointList, ColorARGB, KeyframeType } from '.';
import * as proto from '../protobuf/model';

export interface MeEditor {

  /**
   * 开启一个事务，开启事务后，后续修改操作会被打包为一个原子操作
   * @return 执行结果
   */
  transact: () => Promise<Ret>;

  /**
   * 提交事务，提交的事务会进入操作栈，后续可以进行{@link #undo()}操作
   * @return 执行结果
   */
  commit: () => Promise<Ret>;

  /**
   * 取消事务，事务会被回滚，返回到开启事务时的状态
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
   * 重做上一个非撤销的动作
   * @return 小于0表示失败，默认返回0
   */
  redo: () => Promise<Ret>;

  /**
   * 获取上一步调用执行的返回值
   *
   * @return 错误码
   */
  getErrorCode: () => number;

  /**
   * 获取工程中的轨道ID列表
   *
   * @param type 期望获取的轨道的类别
   * @param ids 返回的轨道id列表
   * @return 执行结果
   */
  getTrackIdList: (type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MarvelTrackType) => Promise<{ ret: number; data: string[] }>;

  /**
   * 获取指定轨道中的片段ID列表
   *
   * @param id 目标轨道ID
   * @param ids 返回的片段ID列表
   * @return 执行接口
   */
  getClipIdList: (trackId: TrackId) => Promise<{ ret: number; data: string[] }>;

  /**
   * @deprecated
   * 设置编辑工程的画布大小
   * 请使用setCanvasProperties
   * @param width 画布宽度
   * @param height 画布高度
   * @return 执行结果
   */
  setCanvasSize: (width: number, height: number) => Ret;

  /**
   * 设置编辑工程的画布大小, 缩放类型，画布颜色
   * @param width
   * @param height
   * @param scaleType (0:FixXY, 1:CenterInside, 2:CenterCrop, 3:StartCrop, 4:EndCrop, 5:FitStart, 6:FitEnd)
   * @param bgColor 颜色，10进制
   */
  setCanvasProperties: (width: number, height: number, scaleType: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType, bgColor: ColorHEX) => Promise<boolean>;

  /**
   * 获取编辑工程的画布大小, 缩放类型，画布颜色
   */
  getCanvasProperties: () => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult>;

  /**
   * @deprecated 请使用getCanvasProperties
   * 获取编辑工程画布宽度
   */
  getCanvasWidth: () => Promise<number>;

  /**
   * @deprecated 请使用getCanvasProperties
   * 获取编辑工程画布高度
   */
  getCanvasHeight: () => Promise<number>;

  /**
   * @deprecated
   * 设置编辑工程的画布上内容的缩放类型
   * 请使用setCanvasProperties
   * @param type 缩放类型
   *  (0:FixXY, 1:CenterInside, 2:CenterCrop, 3:StartCrop, 4:EndCrop, 5:FitStart, 6:FitEnd)
   * @return 执行结果
   */
  setCanvasScaleType: (scaleType: number) => Ret;

  setClipScaleType: (clipId: string, scaleType: number) => Promise<Ret>;

  /**
   * 设置编辑工程的画布颜色
   *
   * @param color 颜色，ARGB
   * @return 执行结果
   */
  setCanvasBackground: (color: ColorHEX) => Promise<Ret>;

  /**
   * 设置一个文字片段使用的文字字体
   *
   * @param path 字体资源路径，ttf文件
   * @return 执行结果
   */
  setDefaultFont: (fontPath: Path) => Promise<Ret>;

  // --- extend MeEditor 文字特效
  /**
   * 添加字体内容新轨道上
   * @param path // 字库路径
   * @param content
   * @param startTimeUS
   * @param duration
   * @param trackId default ''
   */
  addText: (path: Path, content: string, startTimeUS: TimeUS, duration: TimeUS, trackId?: TrackId) => Promise<ClipId>;


  /**
   * 新款花字配置
   * @param clipId
   * @param path
   */
  setTextColorfulConfig: (clipId: ClipId, path: Path) => Promise<Ret>;

  /**
   * 修改 Text 文案内容
   * @param content
   */
  changeText: (content: string) => Promise<Ret>;

  /**
   * 修改 Text 文案颜色
   * @param string
   */
  changeTextColor: (color: ColorHEX) => Promise<Ret>;

  /**
   * 修改字库路径
   * @param path
   */
  changeTextFont: (path: Path) => Promise<Ret>;

  /**
   * 设置一个文字片段的文字阴影
   *
   * @param clipId 目标片段ID
   * @param enable 是否启用文字阴影
   * @param color 阴影颜色，ARGB
   * @param offsetX
   * @param offsetY
   */
  changeTextShadow: (clipId: string, enable: boolean, color: ColorHEX, offsetX: number, offsetY: number) => Promise<Ret>;

  /**
   * 修改Text阴影颜色
   * @param color
   */
  changeTextShadowColor: (color: ColorHEX) => Promise<Ret>;

  /**
   * 清理Text阴影效果
   */
  cleanTextShadowColor: () => Promise<Ret>;

  /**
   * 修改Text阴影的位置
   * @param position
   */
  transformTextShadow: (position: XYPosition) => Promise<Ret>;

  /**
   * 修改Text描边信息
   * @param color
   * @param size
   */
  changeTextOutlineStyle: (color: ColorHEX, size: number) => Promise<Ret>;

  /**
   * 清理Text描边信息
   */
  cleanTextOutline: () => Promise<Ret>;

  /**
   * 修改Text风格(粗体，斜体，下横线)
   * @param style
   */
  changeTextStyle: (style: TextStyle) => Promise<Ret>;

  /**
   * 设置一个文字片段中文字的对齐方式
   * @param v
   * @param h
   */
  changeTextAlignment: (clipId: string, v: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentVerticalType, h: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentHorizontalType) => Promise<Ret>;

  /**
   * 修改Clip位置
   * @param position
   */
  changeClipPosition: (position: XYPosition) => Promise<Ret>;

  /**
   * 修改Clip位置(原始值)
   * @param position
   */
  setClipPosition: (position: XYPosition) => Promise<Ret>;

  /**
 * 修改Clip位置(原始值)
 * @param position
 */
  setClipAnchor: (position: XYPosition) => Promise<Ret>;

  /**
   * 调整Clip角度
   * @param rotate
   */
  changeClipRotate: (rotate: number) => Promise<Ret>;

  /**
   * 调整Clip的缩放比值, 只会使用x的值进行等比缩放
   * @param scale
   */
  changeClipScale: (scale: XYPosition) => Promise<Ret>;

  /**
   * 设置一个片段的转场效果，其上的效果作用于当前片段以及和他相邻的通轨道片段
   *
   * @param path 转场效果资源路径
   * @param mode 切换模式, 如overlay
   * @return 执行结果
   */
  setTransitionEffect: (path: Path, mode?: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.TransitionMode) => Promise<Ret>;

  /**
   * 设置一个片段上的转场效果的转场时间
   *
   * @param durationUs 转场持续时间
   * @return 执行结果
   */
  setTransitionDurationUs: (durationUs: TimeUS) => Promise<Ret>;
  /**
   * 移除一个片段上的转场效果
   *
   * @return 执行结果
   */
  removeTransition: () => Promise<Ret>;

  // /**
  //      * 设置一个片段在轨道中的开始时间
  //      *
  //      * @param startTimeUs 开始时间
  //      * @return 执行结果
  //      */
  //   changePlayStartTimeUs(startTimeUs);

  /**
   * 针对一个片段中使用的资源，设置截取资源的开始时间点
   *
   * @param startTime 开始时间
   * @return 执行结果
   */
  changeSourceStartTimeUs: (startTime: TimeUS) => Promise<Ret>;

  /**
   * 针对一个片段中使用的资源，设置截取资源的结束时间点
   *
   * @param endTimeUs 结束时间
   * @return 执行结果
   */
  changeSourceEndTimeUs: (endTimeUs: TimeUS) => Promise<Ret>;

  /**
   * 获取片段内容的长宽度
   * @return 片段内容的长宽度
   */
  getMeasure: (clipId?: ClipId) => Promise<ClipMeasure>;

  /**
   * 获取片段的位移位置
   */
  getPosition: (clipId?: ClipId) => Promise<XYPosition>;

  /**
   * 获取片段内容的旋转角度 (弧度单位)
   */
  getRotate: (clipId?: ClipId) => Promise<number>;

  /**
   * 获取片段的缩放值
   */
  getScale: (clipId?: ClipId) => Promise<XYPosition>;
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
  getResPath: (resId: string) => Promise<Path>;

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
   * 设置文本与音频的关联关系
   * @param clipId
   * @param audioClipId
   */
  setTextExtraClipId: (clipId: ClipId, audioClipId: ClipId) => Promise<Ret>;

  /**
   * 获取文字切片的TTS关联资源 clipId
   * @param clipId
   */
  getTextExtraClipId: (clipId: ClipId) => Promise<ClipId>;


  /**
   * 设置一个图像类片段的缩放系数
   *
   * @param id 目标片段ID
   * @param scale 缩放参数
   * @return 执行结果
   */
  setScale: (clipId: string, scale: DoubleFloat) => Promise<Ret>;
  /**
   * @deprecated
   * 建议使用setScale
   */
  setScaleX: (clipId: string, x: DoubleFloat) => Promise<Ret>;
  /**
   * @deprecated
   * 建议使用setScale
   */
  setScaleY: (clipId: string, y: DoubleFloat) => Promise<Ret>;

  /**
   * 设置一个片段在轨道中的开始时间
   *
   * @param clipId 目标片段ID
   * @param time 开始时间
   * @return 执行结果
   */
  setClipStartTimeUs: (clipId: ClipId, time: TimeUS) => Promise<Ret>;

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
   * 设置一个特效和滤镜片段的强度
   * setLookupPath & setLookupIntensity
   * @param id 目标片段ID
   * @param intensity 滤镜强度
   * @param path 资源路径
   * @return 执行结果
   */
  setLookup: (clipId: ClipId, intensity: DoubleFloat, path: Path) => Promise<Ret>;

  /**
   * 设置一个特效和滤镜片段的路径
   * 建议使用setLookup
   * @param id 目标片段ID
   * @param path 滤镜路径
   * @return 执行结果
   */
  setLookupPath: (clipId: ClipId, path: Path) => Promise<Ret>;

  /**
   * 设置一个特效和滤镜片段的强度
   * 建议使用setLookup
   * @param id 目标片段ID
   * @param intensity 滤镜强度
   * @return 执行结果
   */
  setLookupIntensity: (clipId: ClipId, intensity: DoubleFloat) => Promise<Ret>;

  /**
   * 移除一个片段上的滤镜信息
   *
   * @param id 目标片段ID
   * @return 执行结果
   */
  removeLookup: (clipId: ClipId) => Promise<Ret>;

  /**
 * 创建资源，如果资源存在则直接放回资源ID
 *
 * @param path 资源路径
 * @param type 资源类型
 * @param clipId 切片ID
 * @return 执行结果
 */
  createResourceIfNeeded: (path: Path, type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType, clipId?: ClipId) => Promise<ResId>;

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
   * 通过一个片段的ID获取其所在的轨道ID
   *
   * @param clipId 目标片段ID
   * @return 轨道ID
   */
  getClipParentId: (clipId: ClipId) => Promise<TrackId>;

  /**
   * 获取一个片段的开始播放时间
   *
   * @param clipId 目标片段ID
   * @return 时间，微秒
   */
  getClipStartTimeUs: (clipId: ClipId) => Promise<TimeUS>;

  /**
   * 获取一个片段的结束播放时间
   *
   * @param clipId 目标片段ID
   * @return 时间，微秒
   */
  getClipEndTimeUs: (clipId: ClipId) => Promise<TimeUS>;

  /**
   * 获取一个片段使用的资源的开始时间
   *
   * @param clipId 目标片段ID
   * @return 时间，微秒
   */
  getClipSourceStartTimeUs: (clipId: ClipId) => Promise<TimeUS>;


  /**
   * 获取一个片段使用的资源的结束事件
   *
   * @param clipId 目标片段ID
   * @return 时间，微秒
   */
  getClipSourceEndTimeUs: (clipId: ClipId) => Promise<TimeUS>;

  /**
   * 获取资源宽度和高度
   *
   * @param resId 目标资源ID
   * @return {width: number, height: number}
   */
  getResSize: (resId: ResId) => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult>;

  /**
   * @deprecated，请使用getResSize
   * 获取资源宽度
   *
   * @param resId 目标资源ID
   * @return 宽度
   */
  getResWidth: (resId: ResId) => Promise<number>;

  /**
   * @deprecated，请使用getResSize
   * 获取资源高度
   *
   * @param resId 目标资源ID
   * @return 高度
   */
  getResHeight: (resId: ResId) => Promise<number>;

  /**
   * 获取资源时长
   *
   * @param resId 资源ID
   * @return 资源时长
   */
  getResDurationUs: (resId: ResId) => Promise<TimeUS>;

  /**
    * 设置一个音频片段的音色信息
    *
    * @param clipId 目标片段ID
    * @param desc 音色信息
    * @return 执行结果
    */
  setAudioTimbre: (clipId: ClipId, desc: Voice) => Promise<Ret>;

  /**
   * 获取一个音频片段的音色信息
   *
   * @param clipId 音频片段ID
   * @return 音色信息
   */
  getAudioTimbre: (clipId: ClipId) => Promise<Voice | string>;

  /**
   * 设置一个片段关联的ClipId，比如文字关联音频的片段，或者音频关联文字的片段
   * @param clipId
   * @param audioClipId
   */
  setExtraClipId: (clipId: ClipId, audioClipId: ClipId) => Promise<Ret>;

  /**
   * 获取一个片段关联的片段ID clipId
   * @param clipId
   */
  getExtraClipId: (clipId: ClipId) => Promise<ClipId>;

  /** 关键帧相关接口 */
  /**
   * 获取一个片段相关Canvas类型的 Keyframe 列表（即所有Canvas关键帧列表）
   * @param clipId
   * @param type KeyframeType
   * @param keys CanvasKeyframeMaterialKey[]
   */
  getClipAllKeyframeAnchorList: (args: { clipId: string; type?: string; keys?: string[] }) => Promise<KeyframePointList>;

  /**
   * 增加一个时间点Canvas属性的关键帧点
   * @param clipId
   * @param key CanvasKeyframeMaterialKey
   * @param time
   * @param value
   * @param type KeyframeType
   */
  addClipCanvasKeyframe: (args: { clipId: string; key: string; time: number; value: number; type?: string }) => Promise<Ret>;

  /**
   * 获取一个时间点Canvas属性的关键帧点
   * @param clipId
   * @param key CanvasKeyframeMaterialKey
   * @param time KeyframeType
   */
  getClipCanvasKeyframe: (args: { clipId: string; key: string; time: number; type?: string }) => Promise<number>;

  /**
   * 获取某个时间点Canvas所有属性的关键帧数据
   * @param clipId
   * @param timeUS
   */
  getClipKeyframePropertiesInIndex: (args: { clipId: string; time: number }) => Promise<KeyframeMap<any>>;

  /**
   * 移除该时间点的Canvas属性的关键帧点
   * @param clipId
   * @param key
   * @param time
   */
  removeClipCanvasKeyframe: (args: { clipId: string; key: CanvasKeyframeMaterialKey; time: number; type?: string | KeyframeType }) => Promise<Ret>;

  /**
   * 移除某时间点的Canvas所有属性的关键帧点
   * @param clipId
   * @param time
   */
  removeClipCanvasKeyframePropertiesInIndex: (args: { clipId: string; time: number }) => Promise<Ret>;

  /**
   * 获取Undo栈数量
   */
  getUndoStackSize: () => Promise<number>;

  /**
   * 获取Redo栈数量
   */
  getRedoStackSize: () => Promise<number>;

  /**
   * 修改资源路径
   */
  changeClipRes: (clipId: ClipId, path: Path, startTimeUS: TimeUS, endTtimeUs: TimeUS) => Promise<Ret>;

  /**
   * 设置切片的透明度
   * @param clipId
   * @param alpha
   */
  setClipTransparency: (clipId: ClipId, alpha: DoubleFloat) => Promise<Ret>;

  /**
   * 设置切片的透明度
   * @param clipId
   */
  getClipTransparency: (clipId: ClipId) => Promise<DoubleFloat>;

  /**
   * 更换canvas背景颜色
   * @param clipId
   * @param color
   */
  setCanvasBackgroundColor: (clipId: ClipId, color: ColorARGB) => Promise<Ret>;

  /**
   * 获取canvas背景颜色
   * @param clipId
   */
  getCanvasBackgroundColor: (clipId: ClipId) => Promise<ColorHEX>;

  /**
   * 获取canvas背景图片
   * @param clipId
   */
  getCanvasBackgroundImage: (clipId: ClipId) => Promise<Path>;

  /**
   * 获取canvas背景的类型
   * @param clipId
   */
  getCanvasBackgroundBlurType: (clipId: ClipId) => Promise<number>;

  /**
   * 给指定的clip增加一个额外用的key值（即非marvel使用的协议中的参数值）
   * @param clipId
   * @param type
   * @param prefix
   * @param key
   * @param value
   */
  setClipInnerKey: (clipId: ClipId, type: string, prefix: string, key: string, value: string) => Promise<Ret>;

  /**
   * 给指定的clip增加一个额外用的key值（即非marvel使用的协议中的参数值）
   * @param clipId
   * @param type
   * @param prefix
   * @param key
   */
  getClipInnerKey: (clipId: ClipId, type: string, prefix: string, key: string) => Promise<string>;

  /**
   * 增加一个动态UI构建的切片
   * @param path
   * @param startTimeUS
   * @param duration
   * @param name
   * @param trackId
   */
  addDynamic: (path: Path, startTimeUS: TimeUS, duration: TimeUS, name?: string, trackId?: TrackId) => Promise<ClipId>;
}
