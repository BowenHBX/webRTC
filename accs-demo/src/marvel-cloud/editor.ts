// import { EventEmitter } from 'events';
// import { BaseClipInfo, ClipId, ClipInfo, ClipType, ColorHEX, MarvelClipInfo, PanelInfo, Path, Ret, XYPosition, SourceClipInfo, TextClipInfo, TextStyle, TimeUS, TrackId, TrackInfo, TrackType, TransformProperty, TransitionClipInfo, CanvasClipInfo, ColorARGB, CanvasScaleType, GlobalBaseMarvelAddonMeEditor, LookupClipInfo, MagicClipInfo, StickerClipInfo, DoubleFloat, ResId, MarvelNodeAddonMeEditor, MaskInfo, ClipMeasure, Measure, Voice, CanvasKeyframeMaterialKey, KeyframeType, KeyframePointList, KeyframeInfo, DynamicUIClipInfo, SourceType, DynamicUIType } from './@types';
// import C from './@types/C'
// import { ARGBToHex, degreeToFloat, floatToDegree, floatToPixel, HexToARGB, pixelToFloat } from './util';
// import { MarvelToolbox } from '.';
import { TransformProperty, PanelInfo, TrackInfo, ClipInfo, BaseClipInfo, MarvelClipInfo, TrackType, TrackId, Voice, KeyframePointList, CanvasKeyframeMaterialKey, KeyframeType, KeyframeMap } from './@types';
import Editor from './@types/editor';
import { MeEditor } from './@types/meeditor';
import Accs from './accs';
import ProtoMessage from './addon/protoMessage';
import * as proto from './protobuf/model';
const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;
export class MarvelEditor implements Editor, MeEditor {
  // private toolboxInstance: MarvelToolbox;
  // public selectedClipId: ClipId;
  // private canChangePlayTime: boolean;
  // private canvasWidth: number;
  // private canvasHeight: number;

  private _accs: Accs;
  private _userId: string;
  private _sessionId: string | null | undefined;

  constructor(accs: Accs, userId: string, sessionId: string | null | undefined) {
    this._accs = accs;
    this._userId = userId;
    this._sessionId = sessionId;
    // super();
    //   this.coreMeEditor = new MarvelNodeAddonMeEditor();
    //   this.toolboxInstance = new MarvelToolbox();
    //   this.canChangePlayTime = true;
    // }
    // addExtensionClip(trackId: string, path: string, startTimeUs: number, durationUs: number, name: string, type: SourceType, flag: number): string {
    //   return this.coreMeEditor.addExtensionClip(trackId, path, startTimeUs, durationUs, name, type, flag)
  }
  addMediaToMainTrack(path: string): string {
    throw new Error('Method not implemented.');
  }
  addMediaToTrack(path: string, trackId?: string): string {
    throw new Error('Method not implemented.');
  }
  addImageToMainTrack(path: string, stopTimeUS: number): string {
    throw new Error('Method not implemented.');
  }
  addImageToTrack(path: string, stopTimeUS: number, trackId?: string): string {
    throw new Error('Method not implemented.');
  }
  addMusic(path: string): string {
    throw new Error('Method not implemented.');
  }
  addLookup(path: string, intensity: number): string {
    throw new Error('Method not implemented.');
  }
  addSticker(path: string, stopTimeUS: number): string {
    throw new Error('Method not implemented.');
  }
  addMagic(path: string, stopTimeUS: number): string {
    throw new Error('Method not implemented.');
  }
  addCustomizeClip(path: string, info: {}): string {
    throw new Error('Method not implemented.');
  }
  selectClip(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  unselectClip(): number {
    throw new Error('Method not implemented.');
  }
  removeClip(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  splitClip(timeUS: number): string[] {
    throw new Error('Method not implemented.');
  }
  moveClip(startTimeUs: number, trackId: string): number {
    throw new Error('Method not implemented.');
  }
  changeVolume(volume: number): number {
    throw new Error('Method not implemented.');
  }
  changeSpeed(speed: number): number {
    throw new Error('Method not implemented.');
  }
  changeSourceTime(startUs: number, stopUs: number): number {
    throw new Error('Method not implemented.');
  }
  changePlayTime(startUs: number, stopUs: number): number {
    throw new Error('Method not implemented.');
  }
  transformClip(property: TransformProperty): number {
    throw new Error('Method not implemented.');
  }
  undo(): number {
    throw new Error('Method not implemented.');
  }
  redo(): number {
    throw new Error('Method not implemented.');
  }
  canUndo(): boolean {
    throw new Error('Method not implemented.');
  }
  canRedo(): boolean {
    throw new Error('Method not implemented.');
  }
  getPanelInfo(): PanelInfo {
    throw new Error('Method not implemented.');
  }
  getTrackInfo(trackId: string): TrackInfo {
    throw new Error('Method not implemented.');
  }
  getTinyClipInfo(clipId: string): ClipInfo<BaseClipInfo> {
    throw new Error('Method not implemented.');
  }
  getClipInfo<T extends MarvelClipInfo>(clipId: string, type?: string): ClipInfo<T> {
    throw new Error('Method not implemented.');
  }
  setClipInfo(clipId: string, type: string, clipInfo: MarvelClipInfo): number {
    throw new Error('Method not implemented.');
  }
  getErrorMessage(code: number): string {
    throw new Error('Method not implemented.');
  }
  toggleMute(): number {
    throw new Error('Method not implemented.');
  }
  isMute(): boolean {
    throw new Error('Method not implemented.');
  }
  // getCanvasWidth(): number {
  //   throw new Error('Method not implemented.');
  // }
  // getCanvasHeight(): number {
  //   throw new Error('Method not implemented.');
  // }
  transact() {
    throw new Error('Method not implemented.');
  }
  commit() {
    throw new Error('Method not implemented.');
  }
  cancel() {
    throw new Error('Method not implemented.');
  }
  // undo() {
  //   throw new Error('Method not implemented.');
  // }
  // redo() {
  //   throw new Error('Method not implemented.');
  // }
  getErrorCode(): number {
    throw new Error('Method not implemented.');
  }

  setCanvasSize(width: number, height: number): number {
    throw new Error('Method not implemented.');
  }
  getCanvasWidth(): number {
    throw new Error('Method not implemented.');
  }
  getCanvasHeight(): number {
    throw new Error('Method not implemented.');
  }
  setCanvasScaleType(scaleType: number): number {
    throw new Error('Method not implemented.');
  }
  setCanvasBackground(color: string): number {
    throw new Error('Method not implemented.');
  }
  setDefaultFont(fontPath: string): number {
    throw new Error('Method not implemented.');
  }
  addText(path: string, content: string, startTimeUS: number, duration: number, trackId?: string): string {
    throw new Error('Method not implemented.');
  }
  setTextColorfulConfig(clipId: string, path: string): number {
    throw new Error('Method not implemented.');
  }
  changeText(content: string): number {
    throw new Error('Method not implemented.');
  }
  changeTextColor(color: string): number {
    throw new Error('Method not implemented.');
  }
  changeTextFont(path: string): number {
    throw new Error('Method not implemented.');
  }
  changeTextShadowColor(color: string): number {
    throw new Error('Method not implemented.');
  }
  cleanTextShadowColor(): number {
    throw new Error('Method not implemented.');
  }
  transformTextShadow(position: { x?: number; y?: number; }): number {
    throw new Error('Method not implemented.');
  }
  changeTextOutlineStyle(color: string, size: number): number {
    throw new Error('Method not implemented.');
  }
  cleanTextOutline(): number {
    throw new Error('Method not implemented.');
  }
  changeTextStyle(style: { //     const centerHeight = canvasHeight / 2
    //     value = (centerHeight + floatToPixel(value, canvasHeight) - (measure.height / 2))
    //   }
    //   if (CanvasKeyframeMaterialKey.ROTATE === key && value !== undefined) {
    //     value = floatToDegree(value);
    //   }
    //   return value;
    // }
    // removeClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey | string; time: number; type?: KeyframeType; }) {
    //   const { clipId, key, time } = args;
    //   const type = args?.type || this.getKeyframeType(clipId);
    //   return this.coreMeEditor.removeClipCurvePropertyAnchor(clipId, type, key, time)
    // }
    // setExtraClipId(clipId: string, audioClipId: string): number {
    //   return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyClipBase, C.kExtraClipId, audioClipId)
    // }
    // getExtraClipId(clipId: string): string {
    //   return this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kExtraClipId)
    // }
    // setAudioTimbre(clipId: string, desc: Voice): number {
    //   return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyClipBase, C.kAudioTimbre, desc)
    // }
    // getAudioTimbre(clipId: string): string {
    //   return this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kAudioTimbre)
    // }
    // getMaskContentWidth(clipId: string): number {
    //   const mw = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kContentWidth);
    //   // return mw
    //   const cw = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyCanvas, C.kContentWidth);
    //   return mw*cw
    // }
    // getMaskContentHeight(clipId: string): number {
    //   const mh = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kContentHeight);
    //   // return mh
    //   const ch = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyCanvas, C.kContentHeight);
    //   return mh*ch
    // }
    // getMaskScaleX(clipId: string): number {
    //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyXScale);
    // }
    // getMaskScaleY(clipId: string): number {
    //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyYScale);
    // }
    // getMaskPositionX(clipId: string): number {
    //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyXOffset);
    // }
    // getMaskPositionY(clipId: string): number {
    //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyYOffset);
    // }
    // getMaskRotate(clipId: string): number {
    //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyRotate);
    // }
    // /* istanbul ignore next */
    // getErrorMessage(code: number): string {
    //   return `Editor Error → RetCode: ${code}, Message: ${''}`;
    // }
    // /* istanbul ignore next */
    // getLastErrorCode(): number {
    //   return this.coreMeEditor.getLastErrorCode()
    // }
    // /* istanbul ignore next */
    // getMeErrorMessage(code: number): string {
    //   return `MeEditor Error → RetCode: ${code}, Message: ${this.coreMeEditor.getErrorMessage(code)}`;
    // }
    // /* istanbul ignore next */
    // getMeLastErrorCode(): string {
    //   return `MeEditor Error → Message: ${this.coreMeEditor.getLastErrorCode()}`;
    // }
    // /* istanbul ignore next */
    // getErrorCode(): number {
    //   return this.getLastErrorCode()
    //   // throw new Error('Method not implemented.');
    // }
    bold?: boolean; italics?: boolean; underline?: boolean;
  }): number {
    throw new Error('Method not implemented.');
  }
  changeTextAlignment(v: number, h: number): number {
    throw new Error('Method not implemented.');
  }
  changeClipPosition(position: { x?: number; y?: number; }): number {
    throw new Error('Method not implemented.');
  }
  setClipPosition(position: { x?: number; y?: number; }): number {
    throw new Error('Method not implemented.');
  }
  changeClipRotate(rotate: number): number {
    throw new Error('Method not implemented.');
  }
  changeClipScale(scale: { x?: number; y?: number; }): number {
    throw new Error('Method not implemented.');
  }
  setTransitionEffect(path: string, mode?: string): number {
    throw new Error('Method not implemented.');
  }
  setTransitionDurationUs(durationUs: number): number {
    throw new Error('Method not implemented.');
  }
  removeTransition(): number {
    throw new Error('Method not implemented.');
  }
  changeSourceStartTimeUs(startTime: any): number {
    throw new Error('Method not implemented.');
  }
  changeSourceEndTimeUs(endTtimeUs: any): number {
    throw new Error('Method not implemented.');
  }
  getMeasure(clipId?: string): { width: number; height: number; } {
    throw new Error('Method not implemented.');
  }
  getPosition(clipId?: string): { x?: number; y?: number; } {
    throw new Error('Method not implemented.');
  }
  getRotate(clipId?: string): number {
    throw new Error('Method not implemented.');
  }
  getScale(clipId?: string): { x?: number; y?: number; } {
    throw new Error('Method not implemented.');
  }
  getClipResID(clipId?: string): string {
    throw new Error('Method not implemented.');
  }
  getResPath(resId: string): string {
    throw new Error('Method not implemented.');
  }
  addExtensionClip(trackId: string, path: string, startTimeUs: number, durationUs: number, name: string, type: number, flag: number): string {
    throw new Error('Method not implemented.');
  }
  setTextExtraClipId(clipId: string, audioClipId: string): number {
    throw new Error('Method not implemented.');
  }
  getTextExtraClipId(clipId: string): string {
    throw new Error('Method not implemented.');
  }
  setScaleX(clipId: string, x: number): number {
    throw new Error('Method not implemented.');
  }
  setScaleY(clipId: string, y: number): number {
    throw new Error('Method not implemented.');
  }
  setClipStartTimeUs(clipId: string, time: number): number {
    throw new Error('Method not implemented.');
  }
  setSourceStartTimeUs(clipId: string, time: number): number {
    throw new Error('Method not implemented.');
  }
  setSourceEndTimeUs(clipId: string, time: number): number {
    throw new Error('Method not implemented.');
  }
  setClipSpeed(clipId: string, speed: number): number {
    throw new Error('Method not implemented.');
  }
  setClipVolume(clipId: string, volume: number): number {
    throw new Error('Method not implemented.');
  }
  setLookupPath(clipId: string, path: string) {
    throw new Error('Method not implemented.');
  }
  setLookupIntensity(clipId: string, instensity: number) {
    throw new Error('Method not implemented.');
  }
  removeLookup(clipId: string) {
    throw new Error('Method not implemented.');
  }
  createResourceIfNeeded(path: string, type: string, clipId: string): string {
    throw new Error('Method not implemented.');
  }
  setClipMask(clipId: string, path: string, flag: boolean): number {
    throw new Error('Method not implemented.');
  }
  removeMask(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  setMaskScaleX(clipId: string, scale: number): number {
    throw new Error('Method not implemented.');
  }
  setMaskScaleY(clipId: string, scale: number): number {
    throw new Error('Method not implemented.');
  }
  setMaskRotate(clipId: string, rotate: number): number {
    throw new Error('Method not implemented.');
  }
  setMaskPosition(clipId: string, x: number, y: number): number {
    throw new Error('Method not implemented.');
  }
  setMaskRevertFlag(clipId: string, flag: boolean): number {
    throw new Error('Method not implemented.');
  }
  setClipCrop(clipId: string, x: number, y: number, w: number, h: number, rotate: number, normalize: boolean, rotateWithCropCenter: boolean) {
    throw new Error('Method not implemented.');
  }
  getClipParentId(clipId: string): string {
    throw new Error('Method not implemented.');
  }
  getClipStartTimeUs(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getClipEndTimeUs(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getClipSourceStartTimeUs(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getClipSourceEndTimeUs(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getResWidth(resId: string): number {
    throw new Error('Method not implemented.');
  }
  getResHeight(resId: string): number {
    throw new Error('Method not implemented.');
  }
  getResDurationUs(resId: string): number {
    throw new Error('Method not implemented.');
  }
  hasMaskInfo(clipId: string): string {
    throw new Error('Method not implemented.');
  }
  getMaskContentWidth(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getMaskContentHeight(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getMaskScaleX(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getMaskScaleY(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getMaskPositionX(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getMaskPositionY(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  getMaskRotate(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  setAudioTimbre(clipId: string, desc: Voice): number {
    throw new Error('Method not implemented.');
  }
  getAudioTimbre(clipId: string): string {
    throw new Error('Method not implemented.');
  }
  setExtraClipId(clipId: string, audioClipId: string): number {
    throw new Error('Method not implemented.');
  }
  getExtraClipId(clipId: string): string {
    throw new Error('Method not implemented.');
  }
  getClipAllKeyframeAnchorList(args: { clipId: string; type?: string; keys?: string[]; }): KeyframePointList {
    throw new Error('Method not implemented.');
  }
  addClipCanvasKeyframe(args: { clipId: string; key: string | CanvasKeyframeMaterialKey; time: number; value: number; type?: KeyframeType; }) {
    throw new Error('Method not implemented.');
  }
  getClipCanvasKeyframe(args: { clipId: string; key: string | CanvasKeyframeMaterialKey; time: number; type?: KeyframeType; }) {
    throw new Error('Method not implemented.');
  }
  getClipKeyframePropertiesInIndex(args: { clipId: string; time: number; }): KeyframeMap<any> {
    throw new Error('Method not implemented.');
  }
  removeClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey; time: number; type?: KeyframeType; }) {
    throw new Error('Method not implemented.');
  }
  removeClipCanvasKeyframePropertiesInIndex(args: { clipId: string; time: number; }) {
    throw new Error('Method not implemented.');
  }
  getUndoStackSize(): number {
    throw new Error('Method not implemented.');
  }
  getRedoStackSize(): number {
    throw new Error('Method not implemented.');
  }
  changeClipRes(clipId: string, path: string, startTimeUS: number, endTtimeUs: number): number {
    throw new Error('Method not implemented.');
  }
  setClipTransparency(clipId: string, alpha: number): number {
    throw new Error('Method not implemented.');
  }
  getClipTransparency(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  setCanvasBackgroundColor(clipId: string, color: number): number {
    throw new Error('Method not implemented.');
  }
  getCanvasBackgroundColor(clipId: string): string {
    throw new Error('Method not implemented.');
  }
  getCanvasBackgroundImage(clipId: string): string {
    throw new Error('Method not implemented.');
  }
  getCanvasBackgroundBlurType(clipId: string): number {
    throw new Error('Method not implemented.');
  }
  setClipInnerKey(clipId: string, type: string, prefix: string, key: string, value: string): number {
    throw new Error('Method not implemented.');
  }
  getClipInnerKey(clipId: string, type: string, prefix: string, key: string): string {
    throw new Error('Method not implemented.');
  }
  addDynamic(path: string, startTimeUS: number, duration: number, name?: string, trackId?: string): string {
    throw new Error('Method not implemented.');
  }

  // addDynamic(path: string, startTimeUS: number, duration: number, name?: string, trackId?: string): string {
  //   return this.addExtensionClip(trackId || '', path, startTimeUS, duration, name || ClipType.DYNAMIC, SourceType.kSourceTexture, 1)
  // }

  // setClipInnerKey(clipId: string, type: string, prefix: string, key: string, value: string): number {
  //   return this.coreMeEditor.setClipStrProperty(clipId, type, C.AttachInnerKey(prefix, key), value);
  // }

  // getClipInnerKey(clipId: string, type: string, prefix: string, key: string): string {
  //   return this.coreMeEditor.getClipStrProperty(clipId, type,  C.AttachInnerKey(prefix, key),)
  // }

  // setTextColorfulConfig(clipId: string, path: string): number {
  //   if (!path || path === '') {
  //     return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyText, C.ResIdKey(C.kTextColorfulConfig), '');
  //   } else {
  //     const resId = this.createResourceIfNeeded(path, C.kResTypeExtra, clipId)
  //     if (resId && resId !== '') {
  //       return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyText,  C.ResIdKey(C.kTextColorfulConfig), resId)
  //     }
  //     return -1
  //   }
  // }

  // getClipTransparency(clipId: string): number {
  //   return this.coreMeEditor.getClipDblProperty(clipId, C.kMaterialTypeCanvas, C.kMaterialKeyIntensity)
  // }

  // setClipTransparency(clipId: string, alpha: number): number {
  //   return this.coreMeEditor.setClipDblProperty(clipId, C.kMaterialTypeCanvas, C.kMaterialKeyIntensity, alpha)
  // }


  // changeClipRes(clipId: string, path: string, startTimeUS: number, endTtimeUs: number): number {
  //   return this.coreMeEditor.changeClipRes(clipId, path, startTimeUS, endTtimeUs);
  // }

  // getKeyframeType(clipId: string): KeyframeType {
  //   const clipInfo = this.getCustomBaseClipInfo(clipId);
  //   const clipType = clipInfo.type;
  //   const ui = this.getCustomUIClipInfo(clipId, clipType)
  //   if (ui?.name) {
  //     return KeyframeType.EXTENSION;
  //   } else if (clipType === TrackType.LOOKUP) {
  //     return KeyframeType.LOOKUP;
  //   } else {
  //     return KeyframeType.CANVAS;
  //   }
  // }

  // getKeyfrrameProperties(clipId: string): CanvasKeyframeMaterialKey[] | string[] {
  //   const clipInfo = this.getCustomBaseClipInfo(clipId);
  //   const clipType = clipInfo.type;
  //   const ui = this.getCustomUIClipInfo(clipId, clipType)
  //   if (ui?.name) {
  //     return ui?.data ? ui.data.reduce((p: any, c: any) => (!c.curve ? p : [ ...p, c.name ]), []) : [];
  //   } else if (clipType === TrackType.LOOKUP) {
  //     return [
  //       CanvasKeyframeMaterialKey.INTENSITY
  //     ];
  //   } else {
  //     return [
  //       CanvasKeyframeMaterialKey.X_OFFSET,
  //       CanvasKeyframeMaterialKey.Y_OFFSET,
  //       CanvasKeyframeMaterialKey.X_SCALE,
  //       CanvasKeyframeMaterialKey.Y_SCALE,
  //       CanvasKeyframeMaterialKey.ROTATE,
  //       CanvasKeyframeMaterialKey.INTENSITY
  //     ];
  //   }
  // }

  // removeClipCanvasKeyframePropertiesInIndex(args: { clipId: string; time: number; type?: KeyframeType; keys?: string[]; }) {
  //   const { clipId, time } = args;
  //   const keys = args?.keys || this.getKeyfrrameProperties(clipId);
  //   const type = args?.type || this.getKeyframeType(clipId);
  //   keys.forEach(key => {
  //     this.removeClipCanvasKeyframe({ clipId, type, key, time });
  //   });
  //   return 0
  // }

  // getClipKeyframePropertiesInIndex(args: { clipId: string; time: number; type?: KeyframeType; keys?: string[]; }): Record<string, number> {
  //   const { clipId, time } = args;
  //   const values = [];
  //   const keys = args?.keys || this.getKeyfrrameProperties(clipId);
  //   const type = args?.type || this.getKeyframeType(clipId);
  //   keys.forEach(key => {
  //     const value = this.getClipCanvasKeyframe({ clipId, type, key, time })
  //     values.push({ key, value });
  //   });
  //   const mapped = values.reduce((p, c) => ({ ...p, [c.key]: c.value }), {});
  //   return mapped;
  // }

  // getUndoStackSize(): number {
  //   return this.coreMeEditor.getUndoStackSize()
  // }
  // getRedoStackSize(): number {
  //   return this.coreMeEditor.getRedoStackSize();
  // }


  // getClipAllKeyframeAnchorList(args: { clipId: string; type?: string; keys?: string[] }): KeyframePointList {
  //   let keyframesPoint: number[] = []
  //   const { clipId } = args;
  //   const keys = args?.keys || this.getKeyfrrameProperties(clipId);
  //   const type = args?.type || this.getKeyframeType(clipId);
  //   keys.forEach((key) => {
  //     const data = this.coreMeEditor.getClipCurvePropertyAnchorList(clipId, type, key);
  //     if (data && data.ret === 0 && data.data) {
  //       keyframesPoint = keyframesPoint.concat(data.data)
  //     }
  //   });
  //   return Array.from(new Set(keyframesPoint)).sort()
  // }

  // addClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey | string; time: number; value: number; type?: KeyframeType; }) {
  //   const { clipId, key, time } = args;
  //   const type = args?.type || this.getKeyframeType(clipId);
  //   let value = args.value;
  //   const measure = this.getMeasure(clipId)
  //   if (CanvasKeyframeMaterialKey.X_OFFSET === (key) && value !== undefined) {
  //     const canvasWidth = this.getCanvasWidth()
  //     const centerWidth = canvasWidth / 2
  //     value = pixelToFloat((value + measure.width / 2  - centerWidth), canvasWidth)
  //   }
  //   if (CanvasKeyframeMaterialKey.Y_OFFSET === key && value !== undefined) {
  //     const canvasHeight = this.getCanvasHeight()
  //     const centerHeight = canvasHeight / 2
  //     value = pixelToFloat((value + measure.height / 2  - centerHeight), canvasHeight)
  //   }
  //   if (CanvasKeyframeMaterialKey.ROTATE === key && value !== undefined) {
  //     value = degreeToFloat(value);
  //   }
  //   return this.coreMeEditor.setClipCurvePropertyAnchorValue(clipId, type, key, time, value)
  // }

  // getClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey | string; time: number; type?: KeyframeType; }): number | undefined {
  //   const { clipId, key, time } = args;
  //   const type = args?.type || this.getKeyframeType(clipId);
  //   const res: { ret: number; data: number; } = this.coreMeEditor.getClipCurvePropertyValue(clipId, type, key, time)
  //   let value: number | undefined = res.ret === 0 ? res.data : undefined;

  //   const measure = this.getMeasure(clipId)
  //   if (CanvasKeyframeMaterialKey.X_OFFSET === key && value !== undefined) {
  //     const canvasWidth = this.getCanvasWidth()
  //     const centerWidth = canvasWidth / 2
  //     value = (centerWidth + floatToPixel(value, canvasWidth) - (measure.width / 2))
  //   }
  //   if (CanvasKeyframeMaterialKey.Y_OFFSET === key && value !== undefined) {
  //     const canvasHeight = this.getCanvasHeight()
  //     const centerHeight = canvasHeight / 2
  //     value = (centerHeight + floatToPixel(value, canvasHeight) - (measure.height / 2))
  //   }
  //   if (CanvasKeyframeMaterialKey.ROTATE === key && value !== undefined) {
  //     value = floatToDegree(value);
  //   }
  //   return value;
  // }

  // removeClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey | string; time: number; type?: KeyframeType; }) {
  //   const { clipId, key, time } = args;
  //   const type = args?.type || this.getKeyframeType(clipId);
  //   return this.coreMeEditor.removeClipCurvePropertyAnchor(clipId, type, key, time)
  // }

  // setExtraClipId(clipId: string, audioClipId: string): number {
  //   return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyClipBase, C.kExtraClipId, audioClipId)
  // }
  // getExtraClipId(clipId: string): string {
  //   return this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kExtraClipId)
  // }
  // setAudioTimbre(clipId: string, desc: Voice): number {
  //   return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyClipBase, C.kAudioTimbre, desc)
  // }
  // getAudioTimbre(clipId: string): string {
  //   return this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kAudioTimbre)
  // }
  // getMaskContentWidth(clipId: string): number {
  //   const mw = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kContentWidth);
  //   // return mw
  //   const cw = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyCanvas, C.kContentWidth);
  //   return mw*cw
  // }
  // getMaskContentHeight(clipId: string): number {
  //   const mh = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kContentHeight);
  //   // return mh
  //   const ch = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyCanvas, C.kContentHeight);
  //   return mh*ch
  // }
  // getMaskScaleX(clipId: string): number {
  //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyXScale);
  // }
  // getMaskScaleY(clipId: string): number {
  //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyYScale);
  // }
  // getMaskPositionX(clipId: string): number {
  //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyXOffset);
  // }
  // getMaskPositionY(clipId: string): number {
  //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyYOffset);
  // }
  // getMaskRotate(clipId: string): number {
  //   return this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyRotate);
  // }

  // /* istanbul ignore next */
  // getErrorMessage(code: number): string {
  //   return `Editor Error → RetCode: ${code}, Message: ${''}`;
  // }

  // /* istanbul ignore next */
  // getLastErrorCode(): number {
  //   return this.coreMeEditor.getLastErrorCode()
  // }

  // /* istanbul ignore next */
  // getMeErrorMessage(code: number): string {
  //   return `MeEditor Error → RetCode: ${code}, Message: ${this.coreMeEditor.getErrorMessage(code)}`;
  // }

  // /* istanbul ignore next */
  // getMeLastErrorCode(): string {
  //   return `MeEditor Error → Message: ${this.coreMeEditor.getLastErrorCode()}`;
  // }

  // /* istanbul ignore next */
  // getErrorCode(): number {
  //   return this.getLastErrorCode()
  //   // throw new Error('Method not implemented.');
  // }

  /**
   * 获取轨道ID列表
   * @param type TrackType
   * @returns 
   */
  async getTrackIdList(type?: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MarvelTrackType): Promise<string[]> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this._sessionId);
    let editorGetTrackIdListCommand = new pkg.EditorGetTrackIdListCommand();
    editorGetTrackIdListCommand.trackType = type;
    let command = new pkg.Command();
    command.editorGetTrackIdListCommand = editorGetTrackIdListCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      console.log('[test]: getTrackIdList', type);
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      console.log('[result]: getTrackIdList', result);
      if (result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS && result.editorGetTrackIdListCommandResult) {
        return result.editorGetTrackIdListCommandResult.values || [];
      }
    } catch (error) {
      console.log('[Error]: getTrackIdList', error);
    }
    return [];
  }

  async getClipIdList(trackId: string): Promise<string[]> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this._sessionId);
    let editorGetClipIdListCommand = new pkg.EditorGetClipIdListCommand();
    editorGetClipIdListCommand.trackId = trackId;
    let command = new pkg.Command();
    command.editorGetClipIdListCommand = editorGetClipIdListCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      console.log('[test]: getTrackIdList', trackId);
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      console.log('[result]: getTrackIdList', result);
      if (result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS && result.editorGetClipIdListCommandResult) {
        return result.editorGetClipIdListCommandResult.values || [];
      }
    } catch (error) {
      console.log('[Error]: getTrackIdList', error);
    }
    return [];
  }

  // setClipStartTimeUs(clipId: string, time: number): number {
  //   const ret = this.coreMeEditor.setClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeyClipStartTime, time)
  //   return ret
  // }
  // setSourceStartTimeUs(clipId: string, time: number): number {
  //   const ret = this.coreMeEditor.setClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceStartTime, time)
  //   return ret
  // }
  // setSourceEndTimeUs(clipId: string, time: number): number {
  //   const ret = this.coreMeEditor.setClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceEndTime, time)
  //   return ret
  // }
  // setClipSpeed(clipId: string, speed: number): number {
  //   const ret = this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyClipBase, C.kClipKeySpeed, speed)
  //   return ret
  // }
  // setClipVolume(clipId: string, volume: number): number {
  //   const ret = this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyClipBase, C.kClipKeyVolume, volume)
  //   return ret
  // }
  // setLookupPath(clipId: string, path: string) {
  //   const ret = this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyLookup, C.kSourceKeyPath, path)
  //   return ret
  // }
  // setLookupIntensity(clipId: string, instensity: number) {
  //   const ret = this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyLookup, C.kMaterialKeyIntensity, instensity)
  //   return ret
  // }
  // removeLookup(clipId: string) {
  //   const ret = this.coreMeEditor.deleteMtl(clipId, C.kMaterialTypeLookup)
  //   return ret
  // }
  // setClipCrop(clipId: string, x: number, y: number, w: number, h: number, rotate: number, normalize: boolean, rotateWithCropCenter: boolean) {
  //   const actRet = this.coreMeEditor.checkToAddMtl(clipId, C.kMaterialTypeCrop)
  //   if (actRet !== 0) {
  //     return actRet
  //   }
  //   this.coreMeEditor.setClipDblProperty(clipId, C.kMaterialTypeCrop, C.kMaterialKeyRotate, rotate)
  //   this.coreMeEditor.setClipDblProperty(clipId, C.kMaterialTypeCrop, C.kMaterialKeyXOffset, x)
  //   this.coreMeEditor.setClipDblProperty(clipId, C.kMaterialTypeCrop, C.kMaterialKeyYOffset, y)
  //   this.coreMeEditor.setClipDblProperty(clipId, C.kMaterialTypeCrop, C.kMaterialKeyWidth, w)
  //   this.coreMeEditor.setClipDblProperty(clipId, C.kMaterialTypeCrop, C.kMaterialKeyHeight, h)
  //   this.coreMeEditor.setClipI64Property(clipId, C.kMaterialTypeCrop, C.kMaterialKeyNormalizeFlag, normalize?1:0)
  //   this.coreMeEditor.setClipI64Property(clipId, C.kMaterialTypeCrop, C.kMaterialKeyNormalizeFlag, rotateWithCropCenter?1:0)
  //   return 0
  // }
  // getClipParentId(clipId: string): string {
  //   const trackId = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kClipKeyParentId)
  //   return trackId
  // }
  // getClipStartTimeUs(clipId: string): number {
  //   const timeUS = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeyClipStartTime)
  //   return timeUS;
  // }
  // getClipEndTimeUs(clipId: string): number {
  //   const timeUS = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeyClipEndTime)
  //   return timeUS;
  // }
  // getClipSourceStartTimeUs(clipId: string): number {
  //   const timeUS = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceStartTime)
  //   return timeUS;
  // }
  // getClipSourceEndTimeUs(clipId: string): number {
  //   const timeUS = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceEndTime)
  //   return timeUS;
  // }
  // getResWidth(resId: string): number {
  //   const width = this.coreMeEditor.getResI64Property(resId, C.kResKeyMediaWidth)
  //   return width
  // }
  // getResHeight(resId: string): number {
  //   const height = this.coreMeEditor.getResI64Property(resId, C.kResKeyMediaHeight)
  //   return height
  // }
  // getResDurationUs(resId: string): number {
  //   const durationUS = this.coreMeEditor.getResI64Property(resId, C.kResKeyMediaDuration)
  //   return durationUS
  // }
  // /* istanbul ignore next */
  // transact() {
  //   throw new Error('Method not implemented.');
  // }
  // /* istanbul ignore next */
  // commit() {
  //   throw new Error('Method not implemented.');
  // }
  // /* istanbul ignore next */
  // cancel() {
  //   throw new Error('Method not implemented.');
  // }
  // createResourceIfNeeded(path: string, type: string, clipId: ClipId): ResId {
  //   const resId = this.coreMeEditor.createResIfNeeded(path, type, clipId)
  //   return resId.toString()
  // }

  // setClipMask(clipId: string, path: string, flag: boolean): number {
  //   const resId = this.createResourceIfNeeded(path, C.kResImage, clipId) // 获取该路径下的一个资源ID，参考 MeEditor.java::setClipMask 代码

  //   if (!resId) {
  //     return -1
  //   }

  //   const clipInfo = this.getTinyClipInfo(clipId) // 切片必须是PIP轴上的切片才能进行蒙版操作
  //   if (clipInfo.clipInfo.type !== TrackType.PIP) {
  //     return -1
  //   }
  //   if (this.coreMeEditor.checkToAddMtl(clipId, 'mask')) {
  //     return this.coreMeEditor.getLastErrorCode();
  //   }

  //   if (this.coreMeEditor.setClipStrProperty(clipId, C.kMaterialTypeMask, C.kMaterialKeyResourceId, resId)) {
  //     return this.coreMeEditor.getLastErrorCode()
  //   }

  //   this.setMaskRevertFlag(clipId, false)
  //   this.setMaskScaleX(clipId, 1.0)
  //   this.setMaskScaleY(clipId, 1.0)
  //   this.setMaskRotate(clipId, 0.0)
  //   this.setMaskPosition(clipId, 0.0, 0.0)

  //   return this.setMaskSdfFlag(clipId, flag)

  // }

  // removeMask(clipId: string): number {
  //   return this.coreMeEditor.deleteMtl(clipId, C.kPropertyMask)
  // }

  // setMaskScaleX(clipId: string, scale: number): number {
  //   return this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyXScale, scale)
  // }

  // setMaskScaleY(clipId: string, scale: number): number {
  //   return this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyYScale, scale)
  // }
  // setMaskRotate(clipId: string, rotate: number): number {
  //   return this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyRotate, rotate)
  // }

  // setMaskPosition(clipId: string, x: number, y: number): number {
  //   this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyXOffset, x)
  //   return this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyMask, C.kMaterialKeyYOffset, y)
  // }

  // setMaskRevertFlag(clipId: string, flag: boolean): number {
  //   return this.coreMeEditor.setClipI64Property(clipId, C.kPropertyMask, C.kMaterialKeyRevert, flag ? 1: 0)
  // }
  // setMaskSdfFlag(clipId: string, flag: boolean): number {
  //   return this.coreMeEditor.setClipI64Property(clipId, C.kPropertyMask, C.kMaterialKeyUseSDF, flag ? 1: 0)
  // }

  // /* istanbul ignore next */

  // /* istanbul ignore next */
  // setTextExtraClipId(clipId: ClipId, audioClipId: ClipId): Ret {
  //   const ret = this.coreMeEditor.setTextExtraClipId(clipId, audioClipId)
  //   return ret
  // }

  // /* istanbul ignore next */
  // getTextExtraClipId(clipId: ClipId) {
  //   const ret = this.coreMeEditor.getTextExtraClipId(clipId)
  //   return ret
  // }

  // getClipResID(clipId?: string): string {
  //   if (!clipId) {
  //     throw Error('It must clipId')
  //   }
  //   return this.coreMeEditor.getClipResID(clipId)
  // }

  // getResPath(resId: string): string {
  //   if (!resId) {
  //     throw Error('It must resId')
  //   }
  //   return this.coreMeEditor.getResPath(resId)
  // }

  // getScale(clipId?: string): XYPosition {
  //   if (!clipId && !this.selectedClipId) {
  //     throw Error('use MarvelEditor.getScale should call selectClip.')
  //   }
  //   const x = this.getScaleX (clipId || this.selectedClipId);
  //   const y = this.getScaleY(clipId || this.selectedClipId);
  //   return {
  //     x,
  //     y
  //   }
  // }


  // getRotate(clipId?: ClipId): number {
  //   if (!clipId && !this.selectedClipId) {
  //     throw Error('use MarvelEditor.getRotate should call selectClip.')
  //   }
  //   const rotate = this.coreMeEditor.getRotate(clipId || this.selectedClipId)
  //   const degree = floatToDegree(rotate)
  //   // console.log('getRotate', this.selectedClipId, '→',  rotate, '→', degree )
  //   return degree
  // }

  // getPosition(clipId?: ClipId): XYPosition {
  //   if (!clipId && !this.selectedClipId) {
  //     throw Error('use MarvelEditor.getPosition should call selectClip.')
  //   }

  //   const floatX = this.coreMeEditor.getPositionX(clipId || this.selectedClipId);
  //   const floatY = this.coreMeEditor.getPositionY(clipId || this.selectedClipId);


  //   const canvasWidth = this.getCanvasWidth()
  //   const canvasHeight = this.getCanvasHeight()
  //   const measure = this.getMeasure(clipId || this.selectedClipId)

  //   const centerWidth = canvasWidth/2
  //   const centerHeight = canvasHeight/2

  //   const x = (centerWidth + floatToPixel(floatX, canvasWidth) - (measure.width / 2))
  //   const y = (centerHeight + floatToPixel(floatY, canvasHeight) - (measure.height / 2))

  //   return {
  //     x,
  //     y
  //   }
  // }

  // getMaskPosition(clipId?: ClipId): XYPosition {
  //   if (!clipId && !this.selectedClipId) {
  //     throw Error('use MarvelEditor.getPosition should call selectClip.')
  //   }
  //   const parentFloatX = this.coreMeEditor.getPositionX(clipId || this.selectedClipId);
  //   const parentFloatY = this.coreMeEditor.getPositionY(clipId || this.selectedClipId);
  //   const maskFloatX = this.getMaskPositionX(clipId || this.selectedClipId);
  //   const maskFloatY = this.getMaskPositionY(clipId || this.selectedClipId);

  //   const floatX = parentFloatX + maskFloatX
  //   const floatY = parentFloatY + maskFloatY

  //   // const { width: canvasWidth, height: canvasHeight } = this.getMeasure(clipId)
  //   const canvasHeight = this.getCanvasHeight()
  //   const canvasWidth = this.getCanvasWidth()
  //   const measure = this.getMaskMeasure(clipId || this.selectedClipId)

  //   const centerWidth = canvasWidth / 2
  //   const centerHeight = canvasHeight / 2

  //   const x = (centerWidth + floatToPixel(floatX, canvasWidth) - (measure.width / 2))
  //   const y = (centerHeight + floatToPixel(floatY, canvasHeight) - (measure.height / 2))

  //   return {
  //     x,
  //     y
  //   }
  // }

  // getMeasure(clipId?: ClipId): ClipMeasure {
  //   if (!clipId && !this.selectedClipId) {
  //     throw Error('use MarvelEditor.getMeasure should call selectClip.')
  //   }

  //   const canvasWidth = this.getCanvasWidth()
  //   const canvasHeight = this.getCanvasHeight()
  //   // const scale = this.getScale(clipId)
  //   const width = this.coreMeEditor.getContentWidth(clipId || this.selectedClipId);
  //   const height = this.coreMeEditor.getContentHeight(clipId || this.selectedClipId);
  //   const pixelWidth = floatToPixel(width, canvasWidth)
  //   const pixelHeight = floatToPixel(height, canvasHeight)
  //   return {
  //     width: pixelWidth,
  //     height: pixelHeight
  //   }
  // }

  // getMaskMeasure(clipId?: ClipId): Measure {
  //   const canvasWidth = this.getCanvasWidth()
  //   const canvasHeight = this.getCanvasHeight()

  //   const width = this.getMaskContentWidth(clipId);
  //   const height = this.getMaskContentHeight(clipId);
  //   const pixelWidth = floatToPixel(width, canvasWidth)
  //   const pixelHeight = floatToPixel(height, canvasHeight)
  //   return {
  //     width: pixelWidth,
  //     height: pixelHeight
  //   }

  // }

  // setCanvasSize(width:number, height:number): number {
  //   this.canvasWidth = width
  //   this.canvasHeight = height
  //   const ret = this.coreMeEditor.setCanvasSize(width, height);
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret));
  //   }
  //   return ret
  // }

  // getCanvasHeight(): number {
  //   return this.coreMeEditor.getCanvasHeight() || this.canvasHeight
  // }

  // getCanvasWidth(): number {
  //   return this.coreMeEditor.getCanvasWidth() || this.canvasWidth
  // }

  // setCanvasScaleType(scaleType: CanvasScaleType): number {
  //   const ret = this.coreMeEditor.setCanvasScaleType(scaleType)
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // setCanvasBackground(color: ColorHEX): number {
  //   const ARGB = HexToARGB(color)
  //   let ret = this.setCanvasBackgroundColor(this.selectedClipId, ARGB)
  //   // ret = this.proxyMeEditor.setClip
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // setCanvasBackgroundColor(clipId: string, color: number): number {
  //   return this.coreMeEditor.setCanvasBackgroundColor(clipId, color)
  // }

  // getCanvasBackgroundColor(clipId: ClipId): ColorHEX {
  //   const color: String  = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyCanvas, C.kConfigKeyBackground)
  //   const ARGB: ColorARGB = Number(color.replace('color_', ''))
  //   const colorHex: ColorHEX = ARGBToHex(ARGB)
  //   return colorHex
  // }


  // setCanvasBackgroundImage(clipId: string, image: string): number {
  //   const ret = this.coreMeEditor.setCanvasBackgroundRes(clipId, image)
  //   // ret = this.proxyMeEditor.setClip
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // getCanvasBackgroundImage(clipId: ClipId): Path {
  //   const resId: ResId = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyCanvas, C.kConfigKeyBackground)
  //   let path: Path = ''
  //   if (/^res_id_/.test(resId || '')) {
  //     path  = this.getResPath(resId.replace(/^res_id_/, ''))
  //   }
  //   return path
  // }

  // setCanvasBackgroundBlurType(clipId: string, type: number): number {
  //   const ret = this.coreMeEditor.setCanvasBackgroundBlurType(clipId, type)
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // getCanvasBackgroundBlurType(clipId: ClipId): number {
  //   const blurProperty = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyCanvas, C.kConfigKeyBackground)
  //   let type: number = 0;
  //   if (/^blur_/.test(blurProperty || '')) {
  //     type = Number(blurProperty.replace('blur_', ''))
  //   }
  //   return type
  // }

  // setClipBlendType(clipId: string, blendType: string) {
  //   const ret = this.coreMeEditor.setClipBlendType(clipId, blendType)
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // changeClipBlendType(blendType: string, clipId?: string) {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeClipBlendType should call selectClip.')
  //   }
  //   const ret = this.coreMeEditor.setClipBlendType(clipId || this.selectedClipId, blendType)
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // getClipBlendType(clipId: string) {
  //   return this.coreMeEditor.getClipBlendType(clipId);
  // }

  // setTransitionEffect(path: string, mode = 'overlay', clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.setTransitionEffect should call selectClip.')
  //   }
  //   const ret = this.coreMeEditor.setTransitionEffect(clipId || this.selectedClipId, path, mode )

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret

  // }

  // setTransitionDurationUs(durationUs: number, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.setTransitionEffect should call selectClip.')
  //   }

  //   const ret = this.coreMeEditor.setClipDblProperty(clipId || this.selectedClipId, C.kMaterialTypeTransition, C.kMaterialKeyDurationUs, durationUs)
  //   // const ret = this.proxyMeEditor.setTransitionDurationUs(this.selectedClipId, durationUs)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // removeTransition(clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.setTransitionEffect should call selectClip.')
  //   }
  //   const ret = this.coreMeEditor.removeTransition(clipId || this.selectedClipId)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // setDefaultFont(fontPath: string): number {
  //   const ret = this.coreMeEditor.setDefaultFontFile(fontPath);
  //   return ret;
  // }

  // addText(fontPath: string, content: string, startTimeUS: number, duration: number, trackId: TrackId = ''): ClipId {
  //   this.setDefaultFont(fontPath)
  //   const clipId = this.coreMeEditor.addTextClip(trackId, content, startTimeUS, duration);
  //   if (!clipId || clipId === '' ) {
  //     this.triggerError(Error(''), '添加MediaToTrack ClipId为空');
  //     return ''
  //   }

  //   this.setScaleX(clipId,  1.0)
  //   this.setScaleY(clipId, 1.0)

  //   this.selectClip(clipId)
  //   this.unselectClip()

  //   return clipId;
  // }

  // changeText(content: string, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeText should call selectClip.')
  //   }

  //   const ret = this.coreMeEditor.setClipStrProperty(clipId || this.selectedClipId, C.kPropertyText, C.kTextContent, content)
  //   // const ret = this.proxyMeEditor.setText(this.selectedClipId, content)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // changeTextColor(color: ColorHEX, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeTextColor should call selectClip.')
  //   }
  //   const ARGB = HexToARGB(color)
  //   const ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextTextColor, ARGB)
  //   // const ret = this.proxyMeEditor.setTextColor(this.selectedClipId, ARGB)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // changeTextAlignment(v: number, h: number, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeTextAlignment should call selectClip.')
  //   }
  //   this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextAlignmentV, v)
  //   // const ret = this.proxyMeEditor.setTextAlignment(this.selectedClipId, v, h)
  //   const ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextAlignmentH, h)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   return ret
  // }

  // changeTextFont(path: string, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.addText should call selectClip.')
  //   }
  //   try {
  //     // const ret = this.proxyMeEditor.setTextFont(this.selectedClipId, path)
  //     const resId = this.coreMeEditor.createResIfNeeded(path, C.kResExtra, clipId || this.selectedClipId);
  //     const ret = this.coreMeEditor.setClipStrProperty(clipId || this.selectedClipId, C.kPropertyText, C.ResIdKey(C.kTextFontFile), resId)

  //     if (ret < 0) {
  //       this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //     }
  //     return ret
  //   } catch (e) {
  //     console.log(e)
  //     return 0
  //   }
  //   // this.proxyMeEditor.setTextFont(this.selectedClipId, path)
  // }
  // changeTextShadowColor(color: ColorHEX, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.addText should call selectClip.')
  //   }
  //   const ARGB = HexToARGB(color)

  //   let ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText,C.kTextShadowColor, ARGB)
  //   // let ret = this.proxyMeEditor.setTextShadowColor(this.selectedClipId, ARGB)
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowEnable, 1)
  //   // ret = this.proxyMeEditor.setTextShadowEnable(this.selectedClipId, true)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret
  // }

  // cleanTextShadowColor(clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.addText should call selectClip.')
  //   }

  //   const ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowEnable, 0)

  //   // const ret = this.proxyMeEditor.setTextShadowEnable(this.selectedClipId, true)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret
  // }

  // transformTextShadow(position: XYPosition, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.transformTextShadow should call selectClip.')
  //   }

  //   let ret = this.coreMeEditor.setClipDblProperty(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowOffsetX, position.x)
  //   // let ret = this.proxyMeEditor.setTextShadowOffsetX(this.selectedClipId, position.x)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   ret = this.coreMeEditor.setClipDblProperty(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowOffsetY, position.y)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret

  // }

  // changeTextOutlineStyle(color: ColorHEX, size: number, clipId?: string): number {

  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.addText should call selectClip.')
  //   }


  //   let ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextOutlineEnable, 1)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }
  //   const ARGB = HexToARGB(color)
  //   ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextOutlineColor, ARGB)
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   ret = this.coreMeEditor.setClipDblProperty(clipId || this.selectedClipId, C.kPropertyText, C.kTextOutlineSize, size)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret;

  // }

  // cleanTextOutline(clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.addText should call selectClip.')
  //   }
  //   const ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextOutlineEnable, 0)
  //   // const ret = this.proxyMeEditor.setTextOutlineEnable(this.selectedClipId, false)
  //   return ret
  // }

  // changeTextStyle(style: TextStyle, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.addText should call selectClip.')
  //   }

  //   let ret = 0
  //   if (style.bold !== undefined ) {
  //     ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextBold, style.bold ? 1: 0)
  //     // ret = this.proxyMeEditor.setTextBold(this.selectedClipId, style.bold)
  //   }

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   if (style.italics !== undefined) {
  //     ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextItalics, style.italics ? 1: 0)
  //     // ret = this.proxyMeEditor.setTextItalics(this.selectedClipId, style.italics)
  //   }

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   if (style.underline !== undefined) {
  //     ret = this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextUnderline, style.underline ? 1: 0)
  //     // ret = this.proxyMeEditor.setTextUnderline(this.selectedClipId, style.underline)
  //   }

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret

  // }

  // setClipPosition(position: { x: number; y: number; }, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.setClipPosition should call selectClip.')
  //   }

  //   const {x, y} = position

  //   const ret = this.coreMeEditor.setPosition(clipId || this.selectedClipId, x, y)

  //   // const ret = this.proxyMeEditor.setClipDblProperty(this.selectedClipId, C.kPropertyCanvas, C.x)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret;
  // }

  // // @ts-ignore
  // changeClipPosition(position: { x: number; y: number; }, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeClipPosition should call selectClip.')
  //   }

  //   const {x, y} = position
  //   const canvasWidth = this.getCanvasWidth()
  //   const canvasHeight = this.getCanvasHeight()
  //   const centerWidth = canvasWidth/2
  //   const centerHeight = canvasHeight/2

  //   const measure = this.getMeasure()
  //   // - Math.ceil(measure.width / 2)
  //   const offsetX = pixelToFloat((x + measure.width/2  - centerWidth), canvasWidth)
  //   const offsetY = pixelToFloat((y + measure.height/2 - centerHeight) , canvasHeight)
  //   const ret = this.coreMeEditor.setPosition(clipId || this.selectedClipId, offsetX, offsetY)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret;
  // }

  //   // @ts-ignore
  //   changeMaskPosition(position: { x: number; y: number; }, clipId?: string): number {
  //     if (!this.selectedClipId && !clipId) {
  //       throw Error('use MarvelEditor.changeClipPosition should call selectClip.')
  //     }

  //     const {x, y} = position

  //     // const { width: canvasWidth, height: canvasHeight} = this.getMeasure(this.selectedClipId)
  //     const canvasWidth = this.getCanvasWidth()
  //     const canvasHeight = this.getCanvasHeight()
  //     const centerWidth = canvasWidth/2
  //     const centerHeight = canvasHeight/2

  //     const parentFloatX = this.coreMeEditor.getPositionX(clipId || this.selectedClipId);
  //     const parentFloatY = this.coreMeEditor.getPositionY(clipId || this.selectedClipId);


  //     const measure = this.getMaskMeasure(clipId || this.selectedClipId)

  //     const offsetX = x - centerWidth + (measure.width/2)
  //     const offsetY = y - centerHeight + (measure.height/2)

  //     // - Math.ceil(measure.width / 2)
  //     const floatX = pixelToFloat(offsetX, canvasWidth)
  //     const floatY = pixelToFloat(offsetY, canvasHeight)

  //     const maskFloatX = floatX - parentFloatX
  //     const maskFloatY = floatY - parentFloatY
  //     const ret = this.setMaskPosition(clipId || this.selectedClipId, maskFloatX, maskFloatY)

  //     if (ret < 0) {
  //       this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //     }

  //     return ret;
  //   }

  // // @ts-ignore
  // changeClipRotate(degree: number, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeClipRotate should call selectClip.')
  //   }

  //   const rotate = degreeToFloat(degree)
  //   // console.log('changeClipRotate', this.selectedClipId, '→',  degree, '→', rotate)
  //   const ret = this.coreMeEditor.setRotate(clipId || this.selectedClipId, rotate)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret;
  // }

  // // @ts-ignore
  // changeMaskRotate(degree: number, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeClipRotate should call selectClip.')
  //   }

  //   const rotate = degreeToFloat(degree)
  //   // console.log('changeClipRotate', this.selectedClipId, '→',  degree, '→', rotate)
  //   const ret = this.setMaskRotate(clipId || this.selectedClipId, rotate)

  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //   }

  //   return ret;
  // }

  // // @ts-ignore
  // changeClipScale(scale: XYPosition, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeClipScale should call selectClip.')
  //   }

  //   let ret = 1
  //   if (scale.x) {
  //     ret = this.setScaleX(clipId || this.selectedClipId, scale.x)
  //     if (ret < 0) {
  //       this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //     }
  //   }

  //   if (scale.y) {
  //     ret = this.setScaleY(clipId || this.selectedClipId, scale.y)
  //     if (ret < 0) {
  //       this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //     }
  //   }

  //   return ret;
  // }

  // // @ts-ignore
  // changeMaskScale(scale: XYPosition, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.changeMaskScale should call selectClip.')
  //   }

  //   let ret = 1
  //   if (scale.x) {
  //     ret = this.setMaskScaleX(clipId || this.selectedClipId, scale.x)
  //     if (ret < 0) {
  //       this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //     }
  //   }

  //   if (scale.y) {
  //     ret = this.setMaskScaleY(clipId || this.selectedClipId, scale.y)
  //     if (ret < 0) {
  //       this.triggerError(Error(''), this.getMeErrorMessage(ret))
  //     }
  //   }

  //   return ret;
  // }

  // getMeProxy() {
  //   return this.coreMeEditor
  // }

  // triggerError(error: Error, message?: string) {
  //   const info = `${__filename}::${error.stack.split('\n')[0]} → ${message||error.message} `;
  //   console.warn(info);
  //   this.emit('MarvelSdkError', `${__filename}::${error.stack.split('\n')[1].match(/ at ([A-Za-z0-9\.]*) /)[1]} → ${message||error.message} `);
  // }

  // addMediaToMainTrack(path: string): string {
  //   const resourceInfo = this.toolboxInstance.getResourceInfo(path)
  //   const durationUs = Number(resourceInfo.maxDurationUs)
  //   const clipId = this.coreMeEditor.addMainClip(path, 0, durationUs)
  //   if (clipId === '') {
  //     this.triggerError(Error(''), '添加MediaToMainTrack ClipId为空');
  //   }
  //   return clipId;
  // }

  // addMediaToTrack(path: string, trackId: TrackId = ''): string {
  //   let clipId = '';
  //   const resourceInfo = this.toolboxInstance.getResourceInfo(path)
  //   const durationUs = Number(resourceInfo.maxDurationUs)
  //   clipId = this.coreMeEditor.addPipClip(trackId, path, 0, 0, durationUs )
  //   if (clipId === '') {
  //     this.triggerError(Error(''), '添加MediaToTrack ClipId为空');
  //   }
  //   return clipId;

  // }

  // addImageToMainTrack(path: string, timeUS: number): string {
  //   const clipId = this.coreMeEditor.addMainClip(path, 0, timeUS);
  //   if (clipId === '') {
  //     this.triggerError(Error(''), '添加ImageToMainTrack ClipId为空');
  //   }
  //   return clipId;
  // }

  // addImageToTrack(path: string, timeUS: number, trackId: string = ''): string {
  //   let clipId = this.coreMeEditor.addPipClip(trackId, path, 0, 0, timeUS);
  //   if (clipId === '') {
  //     this.triggerError(Error(''), '添加ImageToTrack ClipId为空');
  //   }
  //   return clipId;
  // }

  // addMusic(path: string, trackId: TrackId = ''): string {
  //   const resourceInfo = this.toolboxInstance.getResourceInfo(path)
  //   const durationUs = Number(resourceInfo.maxDurationUs)
  //   const clipId = this.coreMeEditor.addMusicClip(trackId, path, 0, 0, durationUs)
  //   if (clipId === '') {
  //     this.triggerError(Error(''), '添加Music ClipId为空');
  //   }
  //   return clipId;
  // }

  // addLookup(path: string, intensity: number, startTimeUS: TimeUS = 0, durationUs : TimeUS = 3000000, trackId: TrackId = ''): string {
  //   const clipId = this.coreMeEditor.addLookupClip(trackId, path, startTimeUS, durationUs)

  //   if (!clipId || clipId === '') {
  //     this.triggerError(Error(''), '添加Lookup ClipId为空');
  //   }

  //   this.setLookupIntensity(clipId, intensity)

  //   return clipId;
  // }

  // addSticker(path: string, startTimeUS: TimeUS = 0, durationUs : TimeUS = 300000, trackId: TrackId = ''): string {
  //   const clipId = this.coreMeEditor.addStickerClip(trackId, path, startTimeUS, durationUs)
  //   if (!clipId || clipId === '') {
  //     this.triggerError(Error(''), '添加Sticker ClipId为空');
  //   }
  //   return clipId;
  // }

  // /* istanbul ignore next */
  // /**
  //  * @deprecated Magic 接口缺失
  //  * @param path
  //  * @param timeUS
  //  */
  // addMagic(path: string, timeUS: number): string {
  //   console.debug(path, timeUS)
  //   return '';
  // }


  // /* istanbul ignore next */
  // /**
  //  * @deprecated
  //  * @param path
  //  * @param info
  //  */
  // addCustomizeClip(path: string, info: {}): string {
  //   console.debug(path, info)
  //   return ''
  // }

  // removeTrack(trackId: string): number {
  //   const ret = this.coreMeEditor.removeTrack(trackId);
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret));
  //   }
  //   return ret;
  // }

  // selectClip(clipId: string): number {
  //   this.selectedClipId = clipId;
  //   const clipInfo = this.getClipInfo<BaseClipInfo|null>(clipId);
  //   if (clipInfo && (clipInfo.clipInfo as BaseClipInfo).type === 'main') { //主轨道不能操作changePlayTime；
  //     this.canChangePlayTime = true;
  //   } else {
  //     this.canChangePlayTime = true;
  //   }
  //   return 0
  // }

  // unselectClip(): number {
  //   this.selectedClipId = null;
  //   this.canChangePlayTime = true;
  //   return 0
  // }

  // removeClip(clipId: string): number {
  //   const ret = this.coreMeEditor.deleteClip(clipId);
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret));
  //   }
  //   return ret;
  // }
  // splitClip(timeUS: number, clipId?: string): string[] {
  //   if (!this.selectedClipId && !clipId) {
  //     const error = Error('use MarvelEditor.selectClip should call splitClip.');
  //     this.triggerError(error, error.message);
  //     throw error;
  //   }
  //   const clipIds = this.coreMeEditor.splitClip(clipId || this.selectedClipId, timeUS);
  //   if (!clipIds || !clipIds.length) {
  //     this.triggerError(Error(''), `分割 ClipId: ${clipId || this.selectedClipId} 失败`);
  //   }
  //   return clipIds;
  // }
  // moveClip(startTimeUs: number, trackId: string = '', clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.selectClip should call moveClip.');
  //   }

  //   const tClipId = clipId || this.selectedClipId


  //   // 针对目前move接口存在一些问题，所以在移动时，先找到该track上第一个clip片段，获取他们的一个有效时间范围的数值设置为 moveClip接口的startUS，然后再对该切片使用changePlayTime来设置 最后对位置。

  //   // @update MeEditor 已经移除了 moveClip 接口了，此接口需要通过MeEditor的changePlayTime等逻辑来实现，暂时无法实现跨track的移动处理

  //   // const movedTrackInfo = this.getTrackInfo(trackId)
  //   // if (movedTrackInfo.type === TrackType.MAIN) {
  //   //   const ret = this.changePlayTime(startTimeUs)
  //   //   return ret
  //   // }
  //   const ret = this.coreMeEditor.moveClip(tClipId, startTimeUs, trackId)

  //   return ret;
  // }
  // changeVolume(volume: number, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     const error = Error('use MarvelEditor.selectClip should call changeVolume.');
  //     this.triggerError(error, error.message);
  //     throw error;
  //   }

  //   const ret = this.setClipVolume(clipId || this.selectedClipId, volume);
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret));
  //   }
  //   return ret;
  // }

  // changeSpeed(speed: number, clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     const error = Error('use MarvelEditor.selectClip should call changeVolume.');
  //     this.triggerError(error, error.message);
  //     throw error;
  //   }

  //   let ret = this.setClipSpeed(clipId || this.selectedClipId, speed);
  //   if (ret !== 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret));
  //   }
  //   return ret;

  // }

  // changeSourceStartTimeUs(startUs: TimeUS, clipId?: string): Ret {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.selectClip should call changeSourceTime.');
  //   }
  //   let ret = this.setSourceStartTimeUs(clipId || this.selectedClipId, startUs)

  //   if (ret !== 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret));
  //   }

  //   return ret
  // }

  // changeSourceEndTimeUs(endUs: TimeUS, clipId?: string): Ret {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.selectClip should call changeSourceTime.');
  //   }
  //   let ret = this.setSourceEndTimeUs(clipId || this.selectedClipId, endUs)
  //   if (ret !== 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret));
  //   }


  //   return ret
  // }

  // changeSourceTime(startUs?: TimeUS, stopUs?: TimeUS, clipId?: string): Ret {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.selectClip should call changeSourceTime.');
  //   }

  //   let ret = this.changeSourceStartTimeUs(startUs, clipId || this.selectedClipId)
  //   if (stopUs) {
  //     ret = this.changeSourceEndTimeUs(stopUs, clipId || this.selectedClipId)
  //   }
  //   return ret;
  // }

  // changePlayTime(startUs: TimeUS): number {
  //   if (!this.selectedClipId) {
  //     throw Error('use MarvelEditor.selectClip should call changePlayTime.');
  //   }
  //   if (!this.canChangePlayTime) {
  //     throw Error('Clip in main track can not changePlayTime');
  //   }

  //   let ret = this.setClipStartTimeUs(this.selectedClipId, startUs);

  //   if (ret !== 0) {
  //     this.triggerError(Error(''), this.getMeErrorMessage(ret));
  //   }

  //   return ret;
  // }
  // /**
  //  * @deprecated
  //  * @param property
  //  */
  // /* istanbul ignore next */
  // transformClip(property: TransformProperty): number {
  //   if (!this.selectedClipId) {
  //     throw Error('use MarvelEditor.selectClip should call transformClip.');
  //   }
  //   console.debug(property)
  //   return 0
  // }

  // /* istanbul ignore next */
  // undo(): number {
  //   const ret = this.coreMeEditor.undo();
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getErrorMessage(ret));
  //   }
  //   return ret;
  // }

  // /* istanbul ignore next */
  // redo(): number {
  //   const ret = this.coreMeEditor.redo();
  //   if (ret < 0) {
  //     this.triggerError(Error(''), this.getErrorMessage(ret));
  //   }
  //   return ret;
  // }
  // /* istanbul ignore next */
  // canUndo(): boolean {
  //   const ret = this.getUndoStackSize();
  //   return ret > 0;
  // }
  // /* istanbul ignore next */
  // canRedo(): boolean {
  //   const ret = this.getRedoStackSize();
  //   return ret > 0;
  // }
  // getPanelInfo(): PanelInfo {
  //   const trackIdList = this.coreMeEditor.getTrackIdList()
  //   if (trackIdList.ret < 0) {
  //     this.triggerError(Error(''), this.getMeLastErrorCode());
  //   }

  //   return {
  //     ret: trackIdList.ret,
  //     trackIds: trackIdList.data as TrackId[] ,
  //     info: ''
  //   } as PanelInfo;
  // }

  // getTrackInfo(trackId: string): TrackInfo {
  //   const clipIdList = this.coreMeEditor.getClipIdList(trackId)
  //   if (clipIdList.ret < 0) {
  //     this.triggerError(Error(''), this.getMeLastErrorCode());
  //   }

  //   const type = this.coreMeEditor.getTrackStrProperty(trackId, C.kTrackKeyType)

  //   return {
  //     ret: clipIdList.ret,
  //     clipIds: clipIdList.data as ClipId[],
  //     type
  //   } as TrackInfo
  // }

  // /* istanbul ignore next */
  // /**
  //  * @deprecated
  //  * @param clipId
  //  * @param type
  //  * @param clipInfo
  //  */
  // setClipInfo(clipId: string, type: string, clipInfo: MarvelClipInfo): number {
  //   console.debug(clipId, type, clipInfo)
  //   return 0
  // }


  // toggleMute(clipId?: string): number {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.toggleMute should call splitClip.');
  //   }
  //   const clip = this.getClipInfo<BaseClipInfo>(clipId || this.selectedClipId);
  //   const volume = clip.clipInfo.volume;
  //   if (volume === '0.000000') {
  //     return this.setClipVolume(clipId || this.selectedClipId, 0.99);
  //   } else {
  //     return this.setClipVolume(clipId || this.selectedClipId, 0);
  //   }
  // }

  // /* istanbul ignore next */
  // isMute(clipId?: string) {
  //   if (!this.selectedClipId && !clipId) {
  //     throw Error('use MarvelEditor.toggleMute should call splitClip.');
  //   }
  //   const clip = this.getClipInfo<BaseClipInfo>(clipId || this.selectedClipId);
  //   const volume = clip.clipInfo.volume;
  //   if (volume === '0.000000') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // getScaleX(clipId: string): DoubleFloat {
  //   const x = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyCanvas, C.kMaterialKeyXScale)
  //   return x
  // }

  // getIntensity(clipId: string): DoubleFloat {
  //   const intensity = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyLookup, C.kMaterialKeyIntensity)
  //   return intensity
  // }

  // getScaleY(clipId: string): DoubleFloat {
  //   const y = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyCanvas, C.kMaterialKeyYScale)
  //   return y
  //   // return this.proxyMeEditor.getScaleY(clipId);
  // }

  // setScaleX(clipId: string, x: DoubleFloat): Ret {
  //   const ret = this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyCanvas, C.kMaterialKeyXScale, x)
  //   return ret
  // }

  // setScaleY(clipId: string, y: DoubleFloat): Ret {
  //   const ret = this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyCanvas, C.kMaterialKeyYScale, y)
  //   return ret
  // }

  // getTinyClipInfo(clipId: string): ClipInfo<BaseClipInfo> {
  //   const clipInfo = this.getCustomBaseClipInfo(clipId)
  //   return {
  //     ret: 0,
  //     clipInfo
  //   }
  // }

  // getClipInfo<T extends MarvelClipInfo>(clipId: string, type?: string): ClipInfo<T> {

  //   if (!type) {
  //     type = ClipType.BASE;
  //   }

  //   let clipInfo: any | T | MarvelClipInfo;

  //   if (type === ClipType.BASE) {
  //     clipInfo = this.getCustomBaseClipInfo(clipId);
  //     const clipData = clipInfo as BaseClipInfo
  //     // const clipType = clipData.type
  //     let resource: any
  //     let transition: any
  //     let ui: DynamicUIClipInfo
  //     let canvas: CanvasClipInfo
  //     let mask: MaskInfo

  //     const keyframePointList: KeyframePointList = this.getClipAllKeyframeAnchorList({ clipId })
  //     clipInfo.keyframe = {
  //       anchors: keyframePointList
  //     } as KeyframeInfo

  //     if (clipData.type === TrackType.MUSIC || clipData.type === TrackType.PIP || clipData.type === TrackType.MAIN || clipData.type === TrackType.STICKER || clipData.type === TrackType.LOOKUP) {
  //       resource = this.getClipInfo<SourceClipInfo>(clipId, ClipType.SOURCE).clipInfo
  //     } else if (clipData.type === TrackType.TEXT) {
  //       const textInfo = this.getClipInfo<TextClipInfo>(clipId, ClipType.TEXT).clipInfo

  //       const { text_color, text_outline_color, text_shadow_color } = textInfo
  //       text_color && (textInfo.text_color = text_color )
  //       text_outline_color && (textInfo.text_outline_color = text_outline_color )
  //       text_shadow_color && (textInfo.text_shadow_color = text_shadow_color )
  //       resource = textInfo
  //     }

  //     if (clipData.type === TrackType.PIP || clipData.type === TrackType.MAIN) {
  //       const info = this.getClipInfo<TransitionClipInfo>(clipId,ClipType.TRANSITION).clipInfo
  //       info.duration_us || info.mode || info.path ? (transition = info) : undefined
  //     }

  //     if (clipData.type === TrackType.PIP) {
  //       const maskResId = this.hasMaskInfo(clipId)
  //       maskResId && (mask = this.getCustomMaskInfo(clipId, maskResId))
  //     }

  //     if ([TrackType.MAIN, TrackType.PIP, TrackType.STICKER, TrackType.TEXT, TrackType.LOOKUP].includes(clipData.type)) {
  //       canvas = this.getClipInfo<CanvasClipInfo>(clipId, ClipType.CANVAS).clipInfo
  //     }

  //     /**
  //      * 无法确定此切片类型是否存在UI信息，因此将都获取一遍
  //      */
  //     ui = this.getCustomUIClipInfo(clipId, clipData.type)

  //     if (resource) {
  //       clipInfo.resource = resource
  //     }
  //     if (transition) {
  //       clipInfo.transition = transition
  //     }
  //     if (canvas) {
  //       clipInfo.canvas = canvas
  //     }
  //     if (mask) {
  //       clipInfo.mask = mask
  //     }

  //     if (ui) {
  //       clipInfo.ui = ui
  //     }


  //   /* istanbul ignore else */
  //   } else if (type === ClipType.CANVAS) {
  //     clipInfo =  this.getCustomCanvasClipInfo(clipId);
  //   /* istanbul ignore else */
  //   } else if (type === ClipType.LOOKUP) {
  //     clipInfo = this.getCustomLookupClipInfo(clipId);
  //   /* istanbul ignore else */
  //   } else if (type === ClipType.STICKER) {
  //     clipInfo = this.getCustomStickerClipInfo(clipId);
  //   /* istanbul ignore else */
  //   } else if (type === ClipType.MAGIC) {
  //     clipInfo = this.getCustomMagicClipInfo(clipId)
  //   /* istanbul ignore else */
  //   } else if (type === ClipType.TRANSITION) {
  //     clipInfo = this.getCustomTransitionClipInfo(clipId)
  //   /* istanbul ignore else */
  //   } else if (type === ClipType.TEXT) {
  //     clipInfo = this.getCustomTextClipInfo(clipId)
  //   } else if (type === ClipType.SOURCE) {
  //     clipInfo = this.getCustomSourceClipInfo(clipId)
  //   }

  //   if (clipInfo && type === ClipType.BASE ) {
  //   }

  //   // clipInfo.id = clipId

  //   return {
  //     ret: 1,
  //     clipInfo
  //   } as ClipInfo<T>

  // }

  // private getCustomBaseClipInfo(clipId): BaseClipInfo {
  //   const trackId = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kClipKeyParentId)
  //   const speed = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyClipBase, C.kClipKeySpeed)
  //   const resId = this.getClipResID(clipId)
  //   const revert = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeyRevert)
  //   const sourceStartTimeUs = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceStartTime)
  //   const sourceEndTimeUs = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceEndTime)
  //   const startTimeUs = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeyClipStartTime)
  //   const endTimeUs = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeyClipEndTime)
  //   const volume = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyClipBase, C.kClipKeyVolume)
  //   let clipType = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kClipKeyType)

  //   // 扩展特效 type转换
  //   if (['Shape'].includes(clipType)) {
  //     clipType = TrackType.DYNAMIC
  //   }

  //   return {
  //     id: clipId,
  //     track_id: trackId,
  //     speed,
  //     res_id: resId,
  //     revert,
  //     source_start_time_us: sourceStartTimeUs,
  //     source_stop_time_us: sourceEndTimeUs,
  //     start_time_us: startTimeUs,
  //     stop_time_us: endTimeUs,
  //     volume: volume.toString(),
  //     type: clipType as TrackType,
  //   } as BaseClipInfo
  // }


  // hasMaskInfo(clipId: ClipId): ResId {
  //   return this.coreMeEditor.getClipStrProperty(clipId, C.kMaterialTypeMask, C.kMaterialKeyResourceId)
  // }


  // private getCustomMaskInfo(clipId: ClipId
  // , resId: ResId): MaskInfo {
  //   const path = this.getResPath(resId)
  //   const rotate = this.coreMeEditor.getClipDblProperty(clipId, C.kMaterialTypeMask, C.kMaterialKeyRotate )
  //   const yScale = this.coreMeEditor.getClipDblProperty(clipId, C.kMaterialTypeMask, C.kMaterialKeyYScale )
  //   const xScale = this.coreMeEditor.getClipDblProperty(clipId, C.kMaterialTypeMask, C.kMaterialKeyXScale )
  //   const sdf = this.coreMeEditor.getClipI64Property(clipId, C.kMaterialTypeMask, C.kMaterialKeyUseSDF)
  //   const revert = this.coreMeEditor.getClipI64Property(clipId, C.kMaterialTypeMask, C.kMaterialKeyRevert)

  //   const { height, width } = this.getMaskMeasure(clipId)
  //   const { x, y } = this.getMaskPosition(clipId)
  //   // proxyMeEditor.getPositionY
  //   // const width = this.getMaskWidth(clipId)

  //   return {
  //     path,
  //     rotate,
  //     height,
  //     width,
  //     xScale,
  //     yScale,
  //     xOffset: x,
  //     yOffset: y,
  //     sdf,
  //     revert
  //   } as MaskInfo

  // }

  // private getCustomCanvasClipInfo(clipId): CanvasClipInfo {
  //   // this.selectClip(clipId)
  //   const clipInfo = this.getCustomBaseClipInfo(clipId);
  //   const measure = this.getMeasure(clipId)
  //   const offset = this.getPosition(clipId)
  //   const rotate = this.getRotate(clipId)
  //   const scale = this.getScale(clipId)
  //   const intensity = [TrackType.LOOKUP, TrackType.EFFECT].includes(clipInfo.type) ? this.getIntensity(clipId) : this.getClipTransparency(clipId) // 如果是特效或者滤镜则是强度，否则是从canvas中获取透明度
  //   const bgColor = this.getCanvasBackgroundColor(clipId)
  //   const bgImage = this.getCanvasBackgroundImage(clipId)
  //   const bgBlur = this.getCanvasBackgroundBlurType(clipId)
  //   // const scale =
  //   const canvas: CanvasClipInfo = {
  //     xOffset: offset.x,
  //     yOffset: offset.y,
  //     width: measure.width,
  //     height: measure.height,
  //     rotate,
  //     xScale: scale.x,
  //     yScale: scale.y,
  //     bg_color: bgColor,
  //     bg_image: bgImage,
  //     blur_type: bgBlur,
  //     intensity: intensity
  //   }

  //   return canvas
  // }

  // private getCustomLookupClipInfo(clipId): LookupClipInfo {
  //   const intensity = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyLookup, C.kMaterialKeyIntensity)
  //   const path = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyLookup, C.kSourceKeyPath)
  //   return {
  //     intensity,
  //     path
  //   } as LookupClipInfo
  // }

  // private getCustomSourceClipInfo(clipId): SourceClipInfo {
  //   const resId = this.coreMeEditor.getClipResID(clipId)
  //   const path = this.getResPath(resId)
  //   const audioChannelCount = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyAudioChannelCount)
  //   const audioDurationUs = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyAudioDuration)
  //   const audioMime = this.coreMeEditor.getResStrProperty(resId, C.kSourceKeyAudioMime)
  //   const audioSampleRate = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyAudioSampleRate)
  //   const hasAudio = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyHasAudio)
  //   const hasVideo = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyHasVideo)
  //   const type = ''
  //   const extraType = ''
  //   const videoDurationUs = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyVideoDuration)
  //   const videoHeight = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyVideoWidth)
  //   const videoWidth = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyVideoWidth)
  //   const videoMime = this.coreMeEditor.getResStrProperty(resId, C.kSourceKeyVideoMime)
  //   const videoRotation = this.coreMeEditor.getResI64Property(resId, C.kSourceKeyVideoRotation)
  //   const maxDurationUs = Math.max(videoDurationUs, audioDurationUs)
  //   const minDurationUs = Math.min(videoDurationUs, audioDurationUs)


  //   return {
  //     audioChannelCount,
  //     audioDurationUs,
  //     audioMime,
  //     audioSampleRate,
  //     hasAudio,
  //     hasVideo,
  //     id: resId,
  //     max_duration_us: maxDurationUs,
  //     min_duration_us: minDurationUs,
  //     path,
  //     type,
  //     videoDurationUs,
  //     videoHeight,
  //     videoMime,
  //     videoRotation,
  //     videoWidth,
  //     extraType
  //   } as SourceClipInfo
  // }

  // private getCustomMagicClipInfo(clipId): MagicClipInfo {

  //   const path = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyLookup, C.kSourceKeyPath)

  //   return {
  //     clipId,
  //     path
  //   } as MagicClipInfo
  // }

  // private getCustomStickerClipInfo(clipId): StickerClipInfo {
  //   const path = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertySticker, C.kSourceKeyPath)

  //   return {
  //     clipId,
  //     path
  //   } as StickerClipInfo
  // }

  // private getCustomTextClipInfo(clipId): TextClipInfo {
  //   const content = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyText, C.kTextContent)
  //   // const scale = this.proxyMeEditor.getClipDblProperty(clipId, C.kPropertyText, C.kMaterialKeyXScale)
  //   const scale = this.getScaleX(clipId)
  //   const textColor = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextTextColor)
  //   const xOffset = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kMaterialKeyXOffset)
  //   const yOffset = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kMaterialKeyYOffset)
  //   const textAlignmentH = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextAlignmentH)
  //   const textAlignmentV = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextAlignmentV)
  //   const textOutlineColor = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextOutlineColor)
  //   const textOutlineEnabled = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextOutlineEnable)
  //   const textOutlineSize = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyText, C.kTextOutlineSize)
  //   const textShadowColor = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextShadowColor)
  //   const textShadowEnabled = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextShadowEnable)
  //   const textShadowOffsetX = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyText, C.kTextShadowOffsetX)
  //   const textShadowOffsetY = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyText, C.kTextShadowOffsetY)
  //   const textBold = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextBold)
  //   const textItalics = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextItalics)
  //   const textUnderline = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextUnderline)
  //   const textWordSpace = this.coreMeEditor.getClipI64Property(clipId, C.kPropertyText, C.kTextWorldSpace)


  //   const fontFileResId = this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyText, C.ResIdKey(C.kTextFontFile))
  //   const fontFile = this.coreMeEditor.getResPath(fontFileResId)
  //   const textType = this.getClipInnerKey(clipId, C.kPropertyText, 'text', 'type') ?? 'text'

  //   return {
  //     id: clipId,
  //     type: textType,
  //     clipId,
  //     content,
  //     font_file:  fontFile,
  //     scale,
  //     text_color: ARGBToHex(textColor),
  //     x_offset:   xOffset,
  //     y_offset:   yOffset,
  //     text_alignment_h:     textAlignmentH,
  //     text_alignment_v:     textAlignmentV,
  //     text_outline_color:   ARGBToHex(textOutlineColor),
  //     text_outline_enabled: textOutlineEnabled,
  //     text_outline_size:    textOutlineSize,
  //     text_shadow_color:    ARGBToHex(textShadowColor),
  //     text_shadow_enabled:  textShadowEnabled,
  //     text_shadow_offset_x: textShadowOffsetX,
  //     text_shadow_offset_y: textShadowOffsetY,
  //     text_style_bold:      textBold,
  //     text_style_italics:   textItalics,
  //     text_style_underline: textUnderline,
  //     text_word_space:      textWordSpace
  //   } as TextClipInfo
  // }

  // private getCustomTransitionClipInfo(clipId): TransitionClipInfo {
  //   const path = this.coreMeEditor.getClipStrProperty(clipId, C.kMaterialTypeTransition, C.kSourceKeyPath)
  //   const durationUs = this.coreMeEditor.getClipDblProperty(clipId, C.kMaterialTypeTransition, C.kMaterialKeyDurationUs)
  //   const mode = this.coreMeEditor.getClipStrProperty(clipId, C.kMaterialTypeTransition, C.kMaterialKeyMode)
  //   return {
  //     duration_us: durationUs,
  //     mode,
  //     path
  //   } as TransitionClipInfo
  // }

  // setUIItemValue(clipId: ClipId, propertyKey: string, propertyType: string, value: any, dynamicType: string = ClipType.DYNAMIC) {
  //   switch(propertyType) {
  //     case DynamicUIType.INTEGER: {
  //       this.coreMeEditor.setClipI64Property(clipId, dynamicType, propertyKey, value)
  //       break
  //     }
  //     case DynamicUIType.DECIMAL: {
  //       this.coreMeEditor.setClipDblProperty(clipId, dynamicType, propertyKey, value)
  //       break
  //     }
  //     case DynamicUIType.STRING: {
  //       this.coreMeEditor.setClipStrProperty(clipId, dynamicType, propertyKey, value)
  //       break
  //     }
  //     case DynamicUIType.RESOURCE: {
  //       const resId = this.createResourceIfNeeded(value, dynamicType, clipId)
  //       this.coreMeEditor.setClipStrProperty(clipId, dynamicType, propertyKey, resId)
  //       break
  //     }
  //   }

  //   return value
  // }

  // getUIItemValue(clipId: ClipId, propertyKey, propertyType, dynamicType: string = ClipType.DYNAMIC) {
  //   let value: any
  //   switch(propertyType) {
  //     case DynamicUIType.INTEGER: {
  //       value = this.coreMeEditor.getClipI64Property(clipId, dynamicType, propertyKey)
  //       break
  //     }
  //     case DynamicUIType.DECIMAL: {
  //       value = this.coreMeEditor.getClipDblProperty(clipId, dynamicType, propertyKey)
  //       break
  //     }
  //     case DynamicUIType.STRING: {
  //       value = this.coreMeEditor.getClipStrProperty(clipId, dynamicType, propertyKey)
  //       break
  //     }
  //     case DynamicUIType.RESOURCE: {
  //       const resId = this.coreMeEditor.getClipStrProperty(clipId, dynamicType, propertyKey)
  //       if (resId) {
  //         value = this.coreMeEditor.getResPath(resId)
  //       }
  //       break
  //     }
  //   }

  //   return value
  // }

  // private getCustomUIClipInfo(clipId, type): DynamicUIClipInfo | null {
  //   const dynamicUIDesc = this.coreMeEditor.getClipStrProperty(clipId, type, C.kClipPropertyDesc)
  //   if (dynamicUIDesc) {
  //     try {
  //       const dynamicUI = JSON.parse(dynamicUIDesc) as DynamicUIClipInfo
  //       const { data } = dynamicUI
  //       if (data) {
  //         const uiValueData = data.map(item => {
  //           const { name, type, dataType/*, prefix*/ } = item
  //           let value: any
  //           // if (type === DynamicUIType.RESOURCE && prefix) {
  //           //   item.prefix = prefix.split('|')
  //           // }
  //           if (type === DynamicUIType.COMBO) {
  //             value = this.getUIItemValue(clipId, `${name}`, dataType)
  //           } else {
  //             value = this.getUIItemValue(clipId, `${name}`, type)
  //           }
  //           return value ? {
  //             ...item,
  //             value
  //           } : item
  //         })
  //         dynamicUI.data = uiValueData
  //       }
  //       return dynamicUI
  //     } catch {
  //       return null
  //     }
  //   }
  //   return null
  // }

}
