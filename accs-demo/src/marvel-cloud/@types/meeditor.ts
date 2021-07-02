import { TrackType, TrackId, ClipId, Ret, ColorHEX, Path, TimeUS, XYPosition, TextStyle, ClipMeasure, ResId, DoubleFloat, Voice, KeyframeMap,  CanvasKeyframeMaterialKey, KeyframePointList, ColorARGB, KeyframeType } from ".";

export interface MeEditor {

  /**
   * 开启一个事务，开启事务后，后续修改操作会被打包为一个原子操作
   * @return 执行结果
   */
  transact()

  /**
   * 提交事务，提交的事务会进入操作栈，后续可以进行{@link #undo()}操作
   * @return 执行结果
   */
  commit()

  /**
   * 取消事务，事务会被回滚，返回到开启事务时的状态
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
   * 重做上一个非撤销的动作
   * @return 小于0表示失败，默认返回0
   */
  redo()

  /**
   * 获取上一步调用执行的返回值
   *
   * @return 错误码
   */
  getErrorCode(): number

  /**
   * 获取工程中的轨道ID列表
   *
   * @param type 期望获取的轨道的类别
   * @param ids 返回的轨道id列表
   * @return 执行结果
   */
  getTrackIdList(type?: TrackType): TrackId[]

  /**
   * 获取指定轨道中的片段ID列表
   *
   * @param id 目标轨道ID
   * @param ids 返回的片段ID列表
   * @return 执行接口
   */
  getClipIdList(trackId: TrackId): ClipId[]

  /**
   * 设置编辑工程的画布大小
   *
   * @param width 画布宽度
   * @param height 画布高度
   * @return 执行结果
   */
  setCanvasSize(width:number, height:number): Ret;

  /**
   * 获取编辑工程画布宽度
   */
  getCanvasWidth(): number;

  /**
   * 获取编辑工程画布高度
   */
  getCanvasHeight(): number;

  /**
   * 设置编辑工程的画布上内容的缩放类型
   *
   * @param type 缩放类型
   *  (0:FixXY, 1:CenterInside, 2:CenterCrop, 3:StartCrop, 4:EndCrop, 5:FitStart, 6:FitEnd)
   * @return 执行结果
   */
  setCanvasScaleType(scaleType:number): Ret;

  /**
   * 设置编辑工程的画布颜色
   *
   * @param color 颜色，ARGB
   * @return 执行结果
   */
  setCanvasBackground(color:ColorHEX): Ret;

  /**
   * 设置一个文字片段使用的文字字体
   *
   * @param path 字体资源路径，ttf文件
   * @return 执行结果
   */
  setDefaultFont(fontPath: Path): Ret;

  // --- extend MeEditor 文字特效
  /**
   * 添加字体内容新轨道上
   * @param path // 字库路径
   * @param content
   * @param startTimeUS
   * @param duration
   * @param trackId default ''
   */
  addText(path: Path, content: string, startTimeUS: TimeUS, duration: TimeUS, trackId?: TrackId): ClipId;


  /**
   * 新款花字配置
   * @param clipId
   * @param path
   */
  setTextColorfulConfig(clipId: ClipId, path: Path): Ret

  /**
   * 修改 Text 文案内容
   * @param content
   */
  changeText(content: string): Ret

  /**
   * 修改 Text 文案颜色
   * @param string
   */
  changeTextColor(color: ColorHEX): Ret

  /**
   * 修改字库路径
   * @param path
   */
  changeTextFont( path: Path ): Ret

  /**
   * 修改Text阴影颜色
   * @param color
   */
  changeTextShadowColor(color: ColorHEX): Ret


  /**
   * 清理Text阴影效果
   */
  cleanTextShadowColor(): Ret

  /**
   * 修改Text阴影的位置
   * @param position
   */
  transformTextShadow(position: XYPosition): Ret

  /**
   * 修改Text描边信息
   * @param color
   * @param size
   */
  changeTextOutlineStyle(color: ColorHEX, size: number): Ret

  /**
   * 清理Text描边信息
   */
  cleanTextOutline(): Ret

  /**
   * 修改Text风格(粗体，斜体，下横线)
   * @param style
   */
  changeTextStyle(style: TextStyle): Ret


  /**
   * 设置一个文字片段中文字的对齐方式
   * @param v
   * @param h
   */
  changeTextAlignment(v: number, h: number): Ret

  /**
   * 修改Clip位置
   * @param position
   */
  changeClipPosition(position: XYPosition): Ret

  /**
   * 修改Clip位置(原始值)
   * @param position
   */
  setClipPosition(position: XYPosition): Ret

  /**
   * 调整Clip角度
   * @param rotate
   */
  changeClipRotate(rotate: number): Ret

  /**
   * 调整Clip的缩放比值
   * @param scale
   */
  changeClipScale(scale: XYPosition): Ret

  /**
   * 设置一个片段的转场效果，其上的效果作用于当前片段以及和他相邻的通轨道片段
   *
   * @param path 转场效果资源路径
   * @param mode 切换模式, 如overlay
   * @return 执行结果
   */
  setTransitionEffect(path: Path, mode?: string): Ret

  /**
   * 设置一个片段上的转场效果的转场时间
   *
   * @param durationUs 转场持续时间
   * @return 执行结果
   */
  setTransitionDurationUs(durationUs: TimeUS): Ret
  /**
   * 移除一个片段上的转场效果
   *
   * @return 执行结果
   */
  removeTransition(): Ret

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
  changeSourceStartTimeUs(startTime): Ret

    /**
     * 针对一个片段中使用的资源，设置截取资源的结束时间点
     *
     * @param endTtimeUs 结束时间
     * @return 执行结果
     */
  changeSourceEndTimeUs(endTtimeUs): Ret

  /**
   * 获取片段内容的长宽度
   * @return 片段内容的长宽度
   */
  getMeasure(clipId?: ClipId): ClipMeasure

  /**
   * 获取片段的位移位置
   */
  getPosition(clipId?: ClipId): XYPosition

  /**
   * 获取片段内容的旋转角度 (弧度单位)
   */
  getRotate(clipId?: ClipId): number

  /**
   * 获取片段的缩放值
   */
  getScale(clipId?: ClipId): XYPosition
  /**
   * 根据clipId 获取资源ID
   *
   * @param clipId 分片ID
   * @return resId
   */
  getClipResID(clipId?: ClipId): string

  /**
   * 根据resId 获取资源路径
   *
   * @param resId 资源Id
   * @return 资源路径
   */
  getResPath(resId: string): Path

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
  addExtensionClip(trackId: TrackId, path: Path, startTimeUs: TimeUS, durationUs: TimeUS, name: string, type: number, flag: number): ClipId

  /**
   * 设置文本与音频的关联关系
   * @param clipId
   * @param audioClipId
   */
  setTextExtraClipId(clipId: ClipId, audioClipId: ClipId): Ret

  /**
   * 获取文字切片的TTS关联资源 clipId
   * @param clipId
   */
  getTextExtraClipId(clipId: ClipId): ClipId


  /**
   * 设置一个图像类片段的缩放系数
   *
   * @param id 目标片段ID
   * @param scale 缩放参数
   * @return 执行结果
   */
  setScaleX(clipId: string, x: DoubleFloat): Ret
  setScaleY(clipId: string, y: DoubleFloat): Ret
  /**
   * 设置一个片段在轨道中的开始时间
   *
   * @param clipId 目标片段ID
   * @param time 开始时间
   * @return 执行结果
   */
  setClipStartTimeUs(clipId: ClipId, time: TimeUS): Ret

  /**
   * 针对一个片段中使用的资源，设置截取资源的开始时间点
   *
   * @param clipId 目标片段ID
   * @param time 开始时间
   * @return 执行结果
   */
  setSourceStartTimeUs(clipId: ClipId, time: TimeUS):Ret

  /**
   * 针对一个片段中使用的资源，设置截取资源的结束时间点
   *
   * @param clipId 目标片段ID
   * @param time 结束时间
   * @return 执行结果
   */
  setSourceEndTimeUs(clipId: ClipId, time: TimeUS): Ret

  /**
   * 设置一个片段的播放速度
   *
   * @param id 目标片段ID
   * @param speed 播放速度
   * @return 执行结果
   */
  setClipSpeed(clipId: ClipId, speed: TimeUS): Ret

  /**
   * 设置一个片段中音频播放时候的音量
   *
   * @param id 目标片段ID
   * @param volume 音量大小
   * @return 执行结果
   */
  setClipVolume(clipId: ClipId, volume: DoubleFloat): Ret

  /**
   * 设置一个特效和滤镜片段的路径
   *
   * @param id 目标片段ID
   * @param path 滤镜路径
   * @return 执行结果
   */
  setLookupPath(clipId: ClipId, path: Path)

  /**
   * 设置一个特效和滤镜片段的强度
   *
   * @param id 目标片段ID
   * @param intensity 滤镜强度
   * @return 执行结果
   */
  setLookupIntensity(clipId: ClipId, instensity: DoubleFloat)

  /**
   * 移除一个片段上的滤镜信息
   *
   * @param id 目标片段ID
   * @return 执行结果
   */
  removeLookup(clipId: ClipId)

    /**
   * 创建资源，如果资源存在则直接放回资源ID
   *
   * @param path 资源路径
   * @param type 资源类型
   * @param clipId 切片ID
   * @return 执行结果
   */
  createResourceIfNeeded(path: Path, type: string, clipId: ClipId): ResId

  /**
   * 设置一个片段上的蒙版
   *
   * @param clipId 目标片段ID
   * @param path 蒙版路径
   * @param flag 是否对蒙版使用抗锯齿
   * @return 执行结果
   */
  setClipMask(clipId:ClipId, path: Path, flag: boolean): Ret

  /**
   * 移除一个片段上的蒙版
   *
   * @param id 目标片段ID
   * @return 执行结果
   */
  removeMask(clipId: ClipId): Ret

  /**
   * 设置片段上的蒙版的X方向缩放
   *
   * @param clipId 目标片段ID
   * @param scale 缩放参数
   * @return 执行结果
   */
  setMaskScaleX(clipId: ClipId, scale: DoubleFloat): Ret

  /**
   * 设置片段上的蒙版的Y方向缩放
   *
   * @param clipId 目标片段ID
   * @param scale 缩放参数
   * @return 执行结果
   */
  setMaskScaleY(clipId: ClipId, scale: DoubleFloat): Ret


  /**
   * 设置片段上的蒙版的旋转角度
   *
   * @param clipId 目标片段ID
   * @param rotate 旋转弧度
   * @return 执行结果
   */
  setMaskRotate(clipId: ClipId, rotate: DoubleFloat): Ret

  /**
   * 设置片段上的蒙版的位置
   *
   * @param clipId 目标片段ID
   * @param x X方向位置
   * @param y Y方向位置
   * @return 执行结果
   */
  setMaskPosition(clipId: ClipId, x: DoubleFloat, y: DoubleFloat): Ret

  /**
   * 设置片段上的蒙版反选
   *
   * @param clipId 目标片段ID
   * @param flag 是否反选
   * @return 执行结果
   */
  setMaskRevertFlag(clipId: ClipId, flag: boolean): Ret

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
    setClipCrop(clipId: ClipId, x: DoubleFloat, y: DoubleFloat, w: DoubleFloat, h: DoubleFloat, rotate: DoubleFloat, normalize: boolean, rotateWithCropCenter: boolean)

  /**
   * 通过一个片段的ID获取其所在的轨道ID
   *
   * @param clipId 目标片段ID
   * @return 轨道ID
   */
  getClipParentId(clipId: ClipId): TrackId

  /**
   * 获取一个片段的开始播放时间
   *
   * @param clipId 目标片段ID
   * @return 时间，微秒
   */
  getClipStartTimeUs(clipId: ClipId): TimeUS

  /**
   * 获取一个片段的结束播放时间
   *
   * @param clipId 目标片段ID
   * @return 时间，微秒
   */
  getClipEndTimeUs(clipId: ClipId): TimeUS

  /**
   * 获取一个片段使用的资源的开始时间
   *
   * @param clipId 目标片段ID
   * @return 时间，微秒
   */
  getClipSourceStartTimeUs(clipId: ClipId): TimeUS


  /**
   * 获取一个片段使用的资源的结束事件
   *
   * @param clipId 目标片段ID
   * @return 时间，微秒
   */
  getClipSourceEndTimeUs(clipId: ClipId): TimeUS

  /**
   * 获取资源宽度
   *
   * @param resId 目标资源ID
   * @return 宽度
   */
  getResWidth(resId:ResId): number

  /**
   * 获取资源高度
   *
   * @param resId 目标资源ID
   * @return 高度
   */
  getResHeight(resId: ResId): number

  /**
   * 获取资源时长
   *
   * @param resId 资源ID
   * @return 资源时长
   */
  getResDurationUs(resId: ResId): TimeUS

  /**
   * 检查是否存在mask信息
   * @param clipId
   * @return ResId
   */
  hasMaskInfo(clipId: ClipId): ResId

  /**
   * 根据片段ID，获取片段上的mask的宽度
   *
   * @param id 片段ID
   * @return mask宽度
   */
  getMaskContentWidth(clipId: ClipId): number

  /**
   * 根据片段ID，获取片段上的mask的高度
   *
   * @param id 片段ID
   * @return mask高度
   */
  getMaskContentHeight(clipId: ClipId): number

  /**
   * 根据片段ID，获取片段上的mask的水平方向缩放
   *
   * @param id 片段ID
   * @return 水平方向缩放
   */
  getMaskScaleX(clipId: ClipId): number

  /**
   * 根据片段ID，获取片段上的mask的竖直方向缩放
   *
   * @param id 片段ID
   * @return 水平方向缩放
   */
  getMaskScaleY(clipId: ClipId): number

  /**
   * 根据片段ID，获取片段上的mask的水平方向位移
   *
   * @param id 片段ID
   * @return 水平方向位移
   */
  getMaskPositionX(clipId: ClipId): number

  /**
   * 根据片段ID，获取片段上的mask的竖直方向位移
   *
   * @param id 片段ID
   * @return 竖直方向位移
   */
  getMaskPositionY(clipId: ClipId): number

  /**
   * 根据片段ID，获取片段上的mask的旋转弧度
   *
   * @param id 片段ID
   * @return 旋转弧度
   */
  getMaskRotate(clipId: ClipId): number

   /**
     * 设置一个音频片段的音色信息
     *
     * @param clipId 目标片段ID
     * @param desc 音色信息
     * @return 执行结果
     */
  setAudioTimbre(clipId: ClipId, desc: Voice): Ret


  /**
   * 获取一个音频片段的音色信息
   *
   * @param clipId 音频片段ID
   * @return 音色信息
   */
  getAudioTimbre(clipId: ClipId): Voice | string

  /**
   * 设置一个片段关联的ClipId，比如文字关联音频的片段，或者音频关联文字的片段
   * @param clipId
   * @param audioClipId
   */
  setExtraClipId(clipId: ClipId, audioClipId: ClipId): Ret

  /**
   * 获取一个片段关联的片段ID clipId
   * @param clipId
   */
  getExtraClipId(clipId: ClipId): ClipId

  /** 关键帧相关接口 */
  /**
   * 获取一个片段相关Canvas类型的 Keyframe 列表（即所有Canvas关键帧列表）
   * @param clipId
   */
  getClipAllKeyframeAnchorList(args: { clipId: string; type?: string; keys?: string[] }): KeyframePointList

  /**
   * 增加一个时间点Canvas属性的关键帧点
   * @param clipId
   * @param key
   * @param time
   * @param value
   */
  addClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey | string; time: number; value: number; type?: KeyframeType; })

  /**
   * 获取一个时间点Canvas属性的关键帧点
   * @param clipId
   * @param key
   * @param time
   */
  getClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey | string; time: number; type?: KeyframeType; })

  /**
   * 获取某个时间点Canvas所有属性的关键帧数据
   * @param clipId
   * @param timeUS
   */
  getClipKeyframePropertiesInIndex(args: { clipId: string; time: number; }): KeyframeMap<any>

  /**
   * 移除该时间点的Canvas属性的关键帧点
   * @param clipId
   * @param key
   * @param time
   */
  removeClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey; time: number; type?: KeyframeType; })

  /**
   * 移除某时间点的Canvas所有属性的关键帧点
   * @param clipId
   * @param time
   */
   removeClipCanvasKeyframePropertiesInIndex(args: { clipId: string; time: number; })

  /**
   * 获取Undo栈数量
   */
  getUndoStackSize(): number

  /**
   * 获取Redo栈数量
   */
  getRedoStackSize(): number


  /**
   * 修改资源路径
   */
  changeClipRes(clipId:ClipId, path: Path, startTimeUS: TimeUS, endTtimeUs:TimeUS): Ret


  /**
   * 设置切片的透明度
   * @param clipId
   * @param alpha
   */
  setClipTransparency(clipId: ClipId, alpha: DoubleFloat): Ret

  /**
   * 设置切片的透明度
   * @param clipId
   */
  getClipTransparency(clipId: ClipId): DoubleFloat

  /**
   * 更换canvas背景颜色
   * @param clipId
   * @param color
   */
   setCanvasBackgroundColor(clipId: ClipId, color: ColorARGB): Ret

  /**
   * 获取canvas背景颜色
   * @param clipId
   */
   getCanvasBackgroundColor(clipId: ClipId): ColorHEX

   /**
    * 获取canvas背景图片
    * @param clipId
    */
   getCanvasBackgroundImage(clipId: ClipId): Path

   /**
    * 获取canvas背景的类型
    * @param clipId
    */
   getCanvasBackgroundBlurType(clipId: ClipId): number

   /**
    * 给指定的clip增加一个额外用的key值（即非marvel使用的协议中的参数值）
    * @param clipId
    * @param type
    * @param prefix
    * @param key
    * @param value
    */
   setClipInnerKey(clipId: ClipId, type: string, prefix: string, key: string, value: string): Ret

  /**
   * 给指定的clip增加一个额外用的key值（即非marvel使用的协议中的参数值）
   * @param clipId
   * @param type
   * @param prefix
   * @param key
   */
   getClipInnerKey(clipId: ClipId, type: string, prefix: string, key: string): string

  /**
   * 增加一个动态UI构建的切片
   * @param path
   * @param startTimeUS
   * @param duration
   * @param name
   * @param trackId
   */
   addDynamic(path: Path, startTimeUS: TimeUS, duration: TimeUS, name?: string, trackId?: TrackId): ClipId

}
