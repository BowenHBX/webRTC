import { EventEmitter } from 'events';
import C from './@types/C';
import { MarvelToolbox } from './toolbox';
import MarvelAddonMeEditor from './addon/marvelAddonMeEditor';
import {
  TransformProperty, PanelInfo, TrackInfo, ClipInfo, BaseClipInfo, MarvelClipInfo, GlobalBaseMarvelAddonMeEditor,
  Voice, KeyframePointList, CanvasKeyframeMaterialKey, KeyframeType, TrackId, TimeUS, Path, Ret, ClipId, DoubleFloat, ClipType,
  DynamicUIClipInfo, CanvasClipInfo, MaskInfo, SourceClipInfo, TextClipInfo, TransitionClipInfo, ResId, XYPosition, DynamicUIType,
  TextStyle, LookupClipInfo, StickerClipInfo, MagicClipInfo, MarvelTrackTypeToString, ClipMeasure, ColorHEX, ColorARGB, StringToMarvelTrackType,
} from './@types';
import Editor from './@types/editor';
import { MeEditor } from './@types/meeditor';
import Accs from './accs';
import ProtoMessage from './addon/protoMessage';
import * as proto from './protobuf/model';
import { ARGBToHex, degreeToFloat, floatToDegree, floatToPixel, HexToARGB, pixelToFloat } from './util';

const pkg = proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto;
export default class EditorMarvelEditor extends EventEmitter implements Editor, MeEditor {
  private coreMeEditor: GlobalBaseMarvelAddonMeEditor;
  private toolboxInstance: MarvelToolbox;
  selectedClipId: ClipId;
  private canChangePlayTime: boolean;
  private canvasWidth = 0;
  private canvasHeight = 0;

  private _accs: Accs;
  private _userId: string;
  private _sessionId: string | null | undefined;

  constructor(accs: Accs, userId: string, sessionId: string | null | undefined) {
    super();
    this._accs = accs;
    this._userId = userId;
    this._sessionId = sessionId;
    this.coreMeEditor = new MarvelAddonMeEditor(accs, userId, sessionId);
    this.toolboxInstance = new MarvelToolbox(accs, userId, sessionId);
    this.canChangePlayTime = true;
  }

  getMeProxy() {
    return this.coreMeEditor;
  }

  async setClipScaleType(clipId: string, scaleType: number): Promise<number> {
    return this.coreMeEditor.setClipI64Property(clipId, C.kPropertyCanvas, C.kConfigKeyScaleType, scaleType);
  }

  async addExtensionEffectForClip(clipId: string, path: string, name: string, flag: number): Promise<Ret> {
    const ret = await this.coreMeEditor.addExtensionEffectForClip(clipId, path, name, flag);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async removeExtensionEffectFromClip(clipId: string, name: string): Promise<Ret> {
    const ret = await this.coreMeEditor.removeExtensionEffectFromClip(clipId, name);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async getExtensionEffectNamesFromClip(clipId: string): Promise<string[]> {
    return this.coreMeEditor.getExtensionEffectNamesFromClip(clipId);
  }
  async setExtensionEffectPriority(clipId: string, name: string, priority: number): Promise<number> {
    return this.coreMeEditor.setExtensionEffectPriority(clipId, name, priority);
  }

  /**
   * @deprecated
   * @param width
   * @param height
   */
  setCanvasSize(width: number, height: number): number {
    throw new Error('Method not implemented.');
  }
  /**
   * @deprecated
   * @param scaleType
   */
  setCanvasScaleType(scaleType: number): number {
    throw new Error('Method not implemented.');
  }

  async setCanvasBackground(color: string): Promise<number> {
    const ARGB = HexToARGB(color);
    const ret = await this.setCanvasBackgroundColor(this.selectedClipId, ARGB);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async transact(): Promise<number> {
    throw new Error('Method not implemented.');
  }
  async commit(): Promise<number> {
    throw new Error('Method not implemented.');
  }
  async cancel(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  getErrorMessage(code: number): string {
    return `Editor Error → RetCode: ${code}, Message: ${''}`;
  }
  getLastErrorCode(): number {
    return this.coreMeEditor.getLastErrorCode();
  }
  getMeErrorMessage(code: number): string {
    return `MeEditor Error → RetCode: ${code}, Message: ${this.coreMeEditor.getErrorMessage(code)}`;
  }
  getMeLastErrorCode(): string {
    return `MeEditor Error → Message: ${this.coreMeEditor.getLastErrorCode()}`;
  }
  getErrorCode(): number {
    return this.coreMeEditor.getLastErrorCode();
  }

  async getMeasure(clipId?: ClipId): Promise<ClipMeasure> {
    if (!clipId && !this.selectedClipId) {
      throw Error('use MarvelEditor.getMeasure should call selectClip.');
    }
    const canvasWidth = await this.getCanvasWidth();
    const canvasHeight = await this.getCanvasHeight();
    let contentWidth: number;
    let contentHeight: number;
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kContentWidth, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kContentHeight, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
    ];
    const clipProperties = await this.coreMeEditor.getClipPropList(clipId || this.selectedClipId, def);
    clipProperties.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      switch (item.propKey) {
        case C.kContentWidth:
          contentWidth = item[(item as any).value];
          break;
        case C.kContentHeight:
          contentHeight = item[(item as any).value];
          break;
        default:
          break;
      }
    });
    const pixelWidth = floatToPixel(contentWidth, canvasWidth);
    const pixelHeight = floatToPixel(contentHeight, canvasHeight);
    return {
      width: pixelWidth,
      height: pixelHeight,
    };
  }

  async addExtensionClip(trackId: string, path: string, startTimeUs: number, durationUs: number, name: string, type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SourceType, flag: number): Promise<string> {
    return this.coreMeEditor.addExtensionClip(trackId, path, startTimeUs, durationUs, name, type, flag);
  }

  async addDynamic(path: string, startTimeUS: number, duration: number, name?: string, trackId?: string): Promise<string> {
    return this.addExtensionClip(trackId || '', path, startTimeUS, duration, name || ClipType.DYNAMIC, pkg.SourceType.SourceTexture, 1);
  }

  async setClipInnerKey(clipId: string, type: string, prefix: string, key: string, value: string): Promise<Ret> {
    return this.coreMeEditor.setClipStrProperty(clipId, type, C.AttachInnerKey(prefix, key), value);
  }

  async getClipInnerKey(clipId: string, type: string, prefix: string, key: string): Promise<string> {
    return this.coreMeEditor.getClipStrProperty(clipId, type, C.AttachInnerKey(prefix, key));
  }

  async setTextColorfulConfig(clipId: string, path: string): Promise<number> {
    if (!path || path === '') {
      return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyText, C.ResIdKey(C.kTextColorfulConfig), '');
    } else {
      const resId = await this.createResourceIfNeeded(path, pkg.ResourceType.ResTypeExtra, clipId);
      if (resId && resId !== '') {
        return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyText, C.ResIdKey(C.kTextColorfulConfig), resId);
      }
      return -1;
    }
  }

  async getClipTransparency(clipId: string): Promise<number> {
    return this.coreMeEditor.getClipDblProperty(clipId, C.kMaterialTypeCanvas, C.kMaterialKeyIntensity);
  }

  async setClipTransparency(clipId: string, alpha: number): Promise<number> {
    return this.coreMeEditor.setClipDblProperty(clipId, C.kMaterialTypeCanvas, C.kMaterialKeyIntensity, alpha);
  }

  async changeClipRes(clipId: string, path: string, startTimeUS: number, endTimeUs: number): Promise<Ret> {
    return this.coreMeEditor.changeClipRes(clipId, path, startTimeUS, endTimeUs);
  }

  async getKeyframeType(clipId: string): Promise<KeyframeType | string> {
    const clipInfo = await this.getCustomBaseClipInfo(clipId);
    const clipType = clipInfo.type;
    const ui = await this.getCustomUIClipInfo(clipId, MarvelTrackTypeToString[clipType]);
    if (ui?.name) {
      return KeyframeType.EXTENSION;
    } else if (clipType === pkg.MarvelTrackType.TrackTypeLookup) {
      return KeyframeType.LOOKUP;
    } else {
      return KeyframeType.CANVAS;
    }
  }

  async getKeyframeProperties(clipId: string): Promise<string[] | CanvasKeyframeMaterialKey[]> {
    const clipInfo = await this.getCustomBaseClipInfo(clipId);
    const clipType = clipInfo.type;
    const ui = await this.getCustomUIClipInfo(clipId, MarvelTrackTypeToString[clipType]);
    if (ui?.name) {
      return ui?.data ? ui.data.reduce((p: any, c: any) => (!c.curve ? p : [...p, c.name]), []) : [];
    } else if (clipType === pkg.MarvelTrackType.TrackTypeLookup) {
      return [
        CanvasKeyframeMaterialKey.INTENSITY,
      ];
    } else {
      return [
        CanvasKeyframeMaterialKey.X_OFFSET,
        CanvasKeyframeMaterialKey.Y_OFFSET,
        CanvasKeyframeMaterialKey.X_SCALE,
        CanvasKeyframeMaterialKey.Y_SCALE,
        CanvasKeyframeMaterialKey.ROTATE,
        CanvasKeyframeMaterialKey.INTENSITY,
      ];
    }
  }

  private async _getKeyframePropertiesAndType(clipId: string): Promise<{ type: KeyframeType; keys: string[] | CanvasKeyframeMaterialKey[] }> {
    const clipInfo = await this.getCustomBaseClipInfo(clipId);
    const clipType = clipInfo.type;
    const ui = await this.getCustomUIClipInfo(clipId, MarvelTrackTypeToString[clipType]);
    if (ui?.name) {
      return {
        type: KeyframeType.EXTENSION,
        keys: ui?.data ? ui.data.reduce((p: any, c: any) => (!c.curve ? p : [...p, c.name]), []) : [],
      };
    } else if (clipType === pkg.MarvelTrackType.TrackTypeLookup) {
      return {
        type: KeyframeType.LOOKUP,
        keys: [CanvasKeyframeMaterialKey.INTENSITY],
      };
    } else {
      return {
        type: KeyframeType.CANVAS,
        keys: [
          CanvasKeyframeMaterialKey.X_OFFSET,
          CanvasKeyframeMaterialKey.Y_OFFSET,
          CanvasKeyframeMaterialKey.X_SCALE,
          CanvasKeyframeMaterialKey.Y_SCALE,
          CanvasKeyframeMaterialKey.ROTATE,
          CanvasKeyframeMaterialKey.INTENSITY,
        ],
      };
    }
  }

  async removeClipCanvasKeyframePropertiesInIndex(args: { clipId: string; time: number; type?: KeyframeType; keys?: string[] }): Promise<Ret> {
    const { clipId, time } = args;
    let keys: string[] | CanvasKeyframeMaterialKey[];
    let type: KeyframeType;
    if (args?.keys) {
      keys = args?.keys;
      type = args?.type;
    } else {
      const propertiesAndType = await this._getKeyframePropertiesAndType(clipId);
      keys = propertiesAndType.keys;
      type = propertiesAndType.type;
    }
    keys.forEach((key) => {
      this.removeClipCanvasKeyframe({ clipId, type, key, time });
    });
    return 0;
  }

  async getClipKeyframePropertiesInIndex(args: { clipId: string; time: number; type?: KeyframeType; keys?: string[] }): Promise<Record<string, number>> {
    const { clipId, time } = args;
    const values = [];
    let keys: string[] | CanvasKeyframeMaterialKey[];
    let type: KeyframeType;
    if (args?.keys) {
      keys = args?.keys;
      type = args?.type;
    } else {
      const propertiesAndType = await this._getKeyframePropertiesAndType(clipId);
      keys = propertiesAndType.keys;
      type = propertiesAndType.type;
    }
    keys.forEach(async (key) => {
      const value = await this.getClipCanvasKeyframe({ clipId, type, key, time });
      values.push({ key, value });
    });
    const mapped = values.reduce((p, c) => ({ ...p, [c.key]: c.value }), {});
    return mapped;
  }

  async getStackSize(): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult> {
    const result = new pkg.EditorGetStackSizeCommandResult();
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this._sessionId);
    const editorGetStackSizeCommand = new pkg.EditorGetStackSizeCommand();
    const command = new pkg.Command();
    command.editorGetStackSizeCommand = editorGetStackSizeCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      const pbResult: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      if (pbResult.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS && pbResult.editorGetStackSizeCommandResult) {
        return pbResult.editorGetStackSizeCommandResult;
      }
    } catch (error) {
      console.log('[Error]: getStackSize', error);
    }
    return result;
  }

  async getUndoStackSize(): Promise<number> {
    const stackSize: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult = await this.getStackSize();
    return stackSize?.undoStackSize || 0;
  }

  async getRedoStackSize(): Promise<number> {
    const stackSize: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult = await this.getStackSize();
    return stackSize?.redoStackSize || 0;
  }

  async getClipAllKeyframeAnchorList(args: { clipId: string; type?: string; keys?: string[] }): Promise<KeyframePointList> {
    let keyframesPoint: number[] = [];
    const { clipId } = args;
    let keys: any[];
    let type: any;
    if (args?.keys) {
      keys = args?.keys;
      type = args?.type;
    } else {
      const propertiesAndType = await this._getKeyframePropertiesAndType(clipId);
      keys = propertiesAndType.keys;
      type = propertiesAndType.type;
    }
    keys?.length && keys.forEach(async (key) => {
      const data = await this.coreMeEditor.getClipCurvePropertyAnchorList(clipId, type, key);
      if (data && data.ret === 0 && data.data) {
        keyframesPoint = keyframesPoint.concat(data.data);
      }
    });
    return Array.from(new Set(keyframesPoint)).sort();
  }

  async addClipCanvasKeyframe(args: { clipId: string; key: any; time: number; value: number; type?: string }): Promise<Ret> {
    const { clipId, key, time } = args;
    const type = args?.type || await this.getKeyframeType(clipId);
    let { value } = args;
    const measure = await this.getMeasure(clipId);
    if (CanvasKeyframeMaterialKey.X_OFFSET === (key) && value !== undefined) {
      const canvasWidth = await this.getCanvasWidth();
      const centerWidth = canvasWidth / 2;
      value = pixelToFloat((value + measure.width / 2 - centerWidth), canvasWidth);
    }
    if (CanvasKeyframeMaterialKey.Y_OFFSET === key && value !== undefined) {
      const canvasHeight = await this.getCanvasHeight();
      const centerHeight = canvasHeight / 2;
      value = pixelToFloat((value + measure.height / 2 - centerHeight), canvasHeight);
    }
    if (CanvasKeyframeMaterialKey.ROTATE === key && value !== undefined) {
      value = degreeToFloat(value);
    }
    return this.coreMeEditor.setClipCurvePropertyAnchorValue(clipId, type as string, key, time, value);
  }

  async getClipCanvasKeyframe(args: { clipId: string; key: any; time: number; type?: any }): Promise<number> {
    const { clipId, key, time } = args;
    const type = args?.type || await this.getKeyframeType(clipId);
    const res: { ret: number; data: number } = await this.coreMeEditor.getClipCurvePropertyValue(clipId, type, key, time);
    let value: number | undefined = res.ret === 0 ? res.data : undefined;

    const measure = await this.getMeasure(clipId);
    if (CanvasKeyframeMaterialKey.X_OFFSET === key && value !== undefined) {
      const canvasWidth = await this.getCanvasWidth();
      const centerWidth = canvasWidth / 2;
      value = (centerWidth + floatToPixel(value, canvasWidth) - (measure.width / 2));
    }
    if (CanvasKeyframeMaterialKey.Y_OFFSET === key && value !== undefined) {
      const canvasHeight = await this.getCanvasHeight();
      const centerHeight = canvasHeight / 2;
      value = (centerHeight + floatToPixel(value, canvasHeight) - (measure.height / 2));
    }
    if (CanvasKeyframeMaterialKey.ROTATE === key && value !== undefined) {
      value = floatToDegree(value);
    }
    return value;
  }

  async removeClipCanvasKeyframe(args: { clipId: string; key: CanvasKeyframeMaterialKey | string; time: number; type?: string | KeyframeType }): Promise<Ret> {
    const { clipId, key, time } = args;
    const type = args?.type || await this.getKeyframeType(clipId);
    return this.coreMeEditor.removeClipCurvePropertyAnchor(clipId, type as string, key as string, time);
  }

  async setExtraClipId(clipId: string, audioClipId: string): Promise<number> {
    return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyClipBase, C.kExtraClipId, audioClipId);
  }
  async getExtraClipId(clipId: string): Promise<string> {
    return this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kExtraClipId);
  }
  async setAudioTimbre(clipId: string, desc: Voice): Promise<number> {
    return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyClipBase, C.kAudioTimbre, desc);
  }
  async getAudioTimbre(clipId: string): Promise<string> {
    return this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kAudioTimbre);
  }

  /**
   * 获取轨道ID列表
   * @param type TrackType
   * @returns
   */
  async getTrackIdList(type?: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MarvelTrackType): Promise<{ ret: number; data: string[] }> {
    return this.coreMeEditor.getTrackIdList(type ?? pkg.MarvelTrackType.TrackTypeAll);
  }

  async getClipIdList(trackId: string): Promise<{ ret: number; data: string[] }> {
    return this.coreMeEditor.getClipIdList(trackId);
  }

  async setSourceStartTimeUs(clipId: string, time: number): Promise<number> {
    const ret = this.coreMeEditor.setClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceStartTime, time);
    return ret;
  }

  async setSourceEndTimeUs(clipId: string, time: number): Promise<number> {
    const ret = this.coreMeEditor.setClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceEndTime, time);
    return ret;
  }

  async setClipSpeed(clipId: string, speed: number): Promise<number> {
    return this.setClipSpeed(clipId, speed);
  }

  async setClipVolume(clipId: string, volume: number): Promise<number> {
    return this.coreMeEditor.setClipVolume(clipId, volume);
  }

  async setLookup(clipId: string, intensity: number, path: Path): Promise<Ret> {
    return this.coreMeEditor.setLookupIntensity(clipId, intensity, path);
  }

  async setLookupPath(clipId: string, path: string): Promise<Ret> {
    return this.coreMeEditor.setClipStrProperty(clipId, C.kPropertyLookup, C.kSourceKeyPath, path);
  }

  async setLookupIntensity(clipId: string, intensity: number): Promise<Ret> {
    return this.coreMeEditor.setClipDblProperty(clipId, C.kPropertyLookup, C.kMaterialKeyIntensity, intensity);
  }
  async removeLookup(clipId: string): Promise<Ret> {
    return this.coreMeEditor.deleteMtl(clipId, pkg.MaterialType.MaterialTypeLookup);
  }

  async setClipCrop(clipId: string, x: number, y: number, w: number, h: number, rotate: number, normalize: boolean, rotateWithCropCenter: boolean): Promise<Ret> {
    const actRet = await this.coreMeEditor.checkToAddMtl(clipId, pkg.MaterialType.MaterialTypeCrop);
    if (actRet !== 0) {
      return actRet;
    }
    return this.coreMeEditor.setClipCrop(clipId, x, y, w, h, rotate, normalize, rotateWithCropCenter);
  }

  async getClipParentId(clipId: string): Promise<string> {
    return this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyClipBase, C.kClipKeyParentId);
  }

  async getClipStartTimeUs(clipId: string): Promise<number> {
    return this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeyClipStartTime);
  }

  async getClipEndTimeUs(clipId: string): Promise<number> {
    return this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeyClipEndTime);
  }

  async getClipSourceStartTimeUs(clipId: string): Promise<number> {
    return this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceStartTime);
  }

  async getClipSourceEndTimeUs(clipId: string): Promise<number> {
    return this.coreMeEditor.getClipI64Property(clipId, C.kPropertyClipBase, C.kClipKeySourceEndTime);
  }

  async getResSize(resId: ResId): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this._sessionId);
    const editorGetResourceSizeCommand = new pkg.EditorGetResourceSizeCommand();
    editorGetResourceSizeCommand.resourceId = resId;
    const command = new pkg.Command();
    command.editorGetResourceSizeCommand = editorGetResourceSizeCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      if (result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS && result.editorGetResourceSizeCommandResult) {
        return result.editorGetResourceSizeCommandResult;
      }
    } catch (error) {
      console.log('[Error]: getResSize', error);
    }
    return new pkg.EditorGetResourceSizeCommandResult();
  }

  async getResWidth(resId: string): Promise<number> {
    const size: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult = await this.getResSize(resId);
    return size.width;
  }

  async getResHeight(resId: string): Promise<number> {
    const size: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult = await this.getResSize(resId);
    return size.height;
  }

  async getResDurationUs(resId: string): Promise<number> {
    return this.coreMeEditor.getResDurationUs(resId);
  }

  async createResourceIfNeeded(path: string, type: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType, clipId?: ClipId): Promise<string> {
    return this.coreMeEditor.createResIfNeeded(path, type, clipId);
  }

  async setResourceProperties(clipId: string, remote: string, name: string, version: number, resType: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType): Promise<Ret> {
    return this.coreMeEditor.setResourceProperties(clipId, remote, name, version, resType);
  }

  async setTextExtraClipId(clipId: ClipId, audioClipId: ClipId): Promise<Ret> {
    return this.coreMeEditor.setTextExtraClipId(clipId, audioClipId);
  }

  async getTextExtraClipId(clipId: ClipId): Promise<ClipId> {
    return this.coreMeEditor.getTextExtraClipId(clipId);
  }

  async getClipResID(clipId?: string): Promise<string> {
    if (!clipId) {
      throw Error('It must clipId');
    }
    return this.coreMeEditor.getClipResID(clipId);
  }

  async getResPath(resId: string): Promise<string> {
    if (!resId) {
      throw Error('It must resId');
    }
    return this.coreMeEditor.getResPath(resId);
  }

  async getScale(clipId?: string): Promise<XYPosition> {
    if (!clipId && !this.selectedClipId) {
      throw Error('use MarvelEditor.getScale should call selectClip.');
    }
    let x: number;
    let y: number;
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kMaterialKeyXScale, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kMaterialKeyYScale, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
    ];
    const clipProperties = await this.coreMeEditor.getClipPropList(clipId || this.selectedClipId, def);
    clipProperties.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      switch (item.propKey) {
        case C.kMaterialKeyXScale:
          x = item[(item as any).value];
          break;
        case C.kMaterialKeyYScale:
          y = item[(item as any).value];
          break;
        default:
          break;
      }
    });
    return {
      x,
      y,
    };
  }


  async getRotate(clipId?: ClipId): Promise<number> {
    if (!clipId && !this.selectedClipId) {
      throw Error('use MarvelEditor.getRotate should call selectClip.');
    }
    const rotate = await this.coreMeEditor.getRotate(clipId || this.selectedClipId);
    const degree = floatToDegree(rotate);
    return degree;
  }

  async getPosition(clipId?: ClipId): Promise<XYPosition> {
    if (!clipId && !this.selectedClipId) {
      throw Error('use MarvelEditor.getPosition should call selectClip.');
    }
    let floatX: number;
    let floatY: number;
    let contentWidth: number;
    let contentHeight: number;
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kMaterialKeyXOffset, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kMaterialKeyYOffset, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kContentWidth, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kContentHeight, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
    ];
    const clipProperties = await this.coreMeEditor.getClipPropList(clipId || this.selectedClipId, def);
    clipProperties.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      switch (item.propKey) {
        case C.kMaterialKeyXOffset:
          floatX = item[(item as any).value];
          break;
        case C.kMaterialKeyYOffset:
          floatY = item[(item as any).value];
          break;
        case C.kContentWidth:
          contentWidth = item[(item as any).value];
          break;
        case C.kContentHeight:
          contentHeight = item[(item as any).value];
          break;
        default:
          break;
      }
    });

    const canvasWidth = await this.getCanvasWidth();
    const canvasHeight = await this.getCanvasHeight();
    const pixelWidth = floatToPixel(contentWidth, canvasWidth);
    const pixelHeight = floatToPixel(contentHeight, canvasHeight);
    const centerWidth = canvasWidth / 2;
    const centerHeight = canvasHeight / 2;

    const x = (centerWidth + floatToPixel(floatX, canvasWidth) - (pixelWidth / 2));
    const y = (centerHeight + floatToPixel(floatY, canvasHeight) - (pixelHeight / 2));

    return {
      x,
      y,
    };
  }

  async setCanvasProperties(width: number, height: number, scaleType: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType, bgColor: ColorHEX): Promise<boolean> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this._sessionId);
    const editorSetCanvasPropertiesCommand = new pkg.EditorSetCanvasPropertiesCommand();
    editorSetCanvasPropertiesCommand.width = Number(width);
    editorSetCanvasPropertiesCommand.height = Number(height);
    editorSetCanvasPropertiesCommand.scaleType = scaleType;
    editorSetCanvasPropertiesCommand.backgroundColor = HexToARGB(bgColor);
    const command = new pkg.Command();
    command.editorSetCanvasPropertiesCommand = editorSetCanvasPropertiesCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      const pbResult: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      return pbResult.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS;
    } catch (error) {
      console.log('[Error]: setCanvasProperties', error);
    }
    return false;
  }

  async getCanvasProperties(): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult> {
    const result = new pkg.EditorGetCanvasPropertiesCommandResult();
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this._sessionId);
    const editorGetCanvasPropertiesCommand = new pkg.EditorGetCanvasPropertiesCommand();
    const command = new pkg.Command();
    command.editorGetCanvasPropertiesCommand = editorGetCanvasPropertiesCommand;
    const buffer = pbMsg.generateMessage(command);

    try {
      const pbResult: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);

      if (pbResult.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS && pbResult.editorGetCanvasPropertiesCommandResult) {
        this.canvasWidth = pbResult.editorGetCanvasPropertiesCommandResult?.width;
        this.canvasHeight = pbResult.editorGetCanvasPropertiesCommandResult?.height;
        return pbResult.editorGetCanvasPropertiesCommandResult;
      }
    } catch (error) {
      console.log('[Error]: getCanvasProperties', error);
    }
    return result;
  }

  async getCanvasHeight(): Promise<number> {
    return this.canvasHeight || (await this.getCanvasProperties()).height;
  }

  async getCanvasWidth(): Promise<number> {
    return this.canvasWidth || (await this.getCanvasProperties()).width;
  }

  async setCanvasBackgroundColor(clipId: string, color: number): Promise<Ret> {
    return this.coreMeEditor.setCanvasBackgroundColor(clipId, color);
  }

  private async getCanvasBackground(clipId: ClipId): Promise<{ bgColor: string; bgImage: string; bgBlur: number }> {
    const result = {
      bgColor: '',
      bgImage: '',
      bgBlur: 0,
    };
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kConfigKeyBackground, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
    ];
    const clipProperties = await this.coreMeEditor.getClipPropList(clipId, def);
    if (clipProperties?.length) {
      const item = clipProperties[0];
      const bg = item[(item as any).value];
      const ARGB: ColorARGB = Number(bg.replace('color_', ''));
      const colorHex: ColorHEX = ARGBToHex(ARGB);
      result.bgColor = colorHex;

      if (/^res_id_/.test(bg || '')) {
        result.bgImage = await this.getResPath(bg.replace(/^res_id_/, ''));
      }

      if (/^blur_/.test(bg || '')) {
        result.bgBlur = Number(bg.replace('blur_', ''));
      }
    }
    return result;
  }

  async getCanvasBackgroundColor(clipId: ClipId): Promise<ColorHEX> {
    const color: String = await this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyCanvas, C.kConfigKeyBackground);
    const ARGB: ColorARGB = Number(color.replace('color_', ''));
    const colorHex: ColorHEX = ARGBToHex(ARGB);
    return colorHex;
  }


  async setCanvasBackgroundImage(clipId: string, image: string): Promise<number> {
    const ret = await this.coreMeEditor.setCanvasBackgroundRes(clipId, image);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async getCanvasBackgroundImage(clipId: ClipId): Promise<Path> {
    const resId: ResId = await this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyCanvas, C.kConfigKeyBackground);
    let path: Path = '';
    if (/^res_id_/.test(resId || '')) {
      path = await this.getResPath(resId.replace(/^res_id_/, ''));
    }
    return path;
  }

  async setCanvasBackgroundBlurType(clipId: string, type: number): Promise<number> {
    const ret = await this.coreMeEditor.setCanvasBackgroundBlurType(clipId, type);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async getCanvasBackgroundBlurType(clipId: ClipId): Promise<number> {
    const blurProperty = await this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyCanvas, C.kConfigKeyBackground);
    let type = 0;
    if (/^blur_/.test(blurProperty || '')) {
      type = Number(blurProperty.replace('blur_', ''));
    }
    return type;
  }

  async setClipBlendType(clipId: string, blendType: string): Promise<Ret> {
    const ret = await this.coreMeEditor.setClipBlendType(clipId, blendType);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async getClipBlendType(clipId: string): Promise<string> {
    return this.coreMeEditor.getClipBlendType(clipId);
  }

  async changeClipBlendType(blendType: string, clipId?: string): Promise<Ret> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeClipBlendType should call selectClip.');
    }
    const ret = await this.coreMeEditor.setClipBlendType(clipId || this.selectedClipId, blendType);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }


  async setTransitionEffect(path: string, mode = pkg.TransitionMode.TransitionOverlay, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.setTransitionEffect should call selectClip.');
    }
    const ret = await this.coreMeEditor.setTransitionEffect(clipId || this.selectedClipId, path, mode);

    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async setTransitionDurationUs(durationUs: number, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.setTransitionEffect should call selectClip.');
    }
    const ret = await this.coreMeEditor.setTransitionDurationUs(clipId || this.selectedClipId, durationUs);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async removeTransition(clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.setTransitionEffect should call selectClip.');
    }
    const ret = await this.coreMeEditor.removeTransition(clipId || this.selectedClipId);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async setDefaultFont(fontPath: string): Promise<number> {
    return this.coreMeEditor.setDefaultFontFile(fontPath);
  }

  async addText(fontPath: string, content: string, startTimeUS: number, duration: number, trackId: TrackId = ''): Promise<string> {
    await this.setDefaultFont(fontPath);
    const clipId = await this.coreMeEditor.addTextClip(trackId, content, startTimeUS, duration);
    if (!clipId || clipId === '') {
      this.triggerError(Error(''), '添加MediaToTrack ClipId为空');
      return '';
    }
    await this.setScale(clipId, 1.0);
    await this.selectClip(clipId);
    this.unselectClip();
    return clipId;
  }

  async changeText(content: string, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeText should call selectClip.');
    }
    const ret = await this.coreMeEditor.setText(this.selectedClipId, content);

    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeTextColor(color: ColorHEX, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeTextColor should call selectClip.');
    }
    const ARGB = HexToARGB(color);
    const ret = await this.coreMeEditor.setTextColor(this.selectedClipId, ARGB);

    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeTextFont(path: string, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeTextFont should call selectClip.');
    }
    try {
      const ret = await this.coreMeEditor.setTextFont(this.selectedClipId, path);

      if (ret < 0) {
        this.triggerError(Error(''), this.getMeErrorMessage(ret));
      }
      return ret;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async changeTextShadow(clipId: string, enable: boolean, color: ColorHEX, offsetX: number, offsetY: number): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeTextShadow should call selectClip.');
    }
    const ARGB = HexToARGB(color);
    const ret = await this.coreMeEditor.changeTextShadow(clipId || this.selectedClipId, enable, ARGB, offsetX, offsetY);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeTextShadowColor(color: ColorHEX, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeTextShadowColor should call selectClip.');
    }
    const ARGB = HexToARGB(color);
    let ret = await this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowColor, ARGB);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    ret = await this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowEnable, 1);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async cleanTextShadowColor(clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.cleanTextShadowColor should call selectClip.');
    }
    const ret = await this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowEnable, 0);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async transformTextShadow(position: XYPosition, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.transformTextShadow should call selectClip.');
    }
    let ret = await this.coreMeEditor.setClipDblProperty(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowOffsetX, position.x);

    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    ret = await this.coreMeEditor.setClipDblProperty(clipId || this.selectedClipId, C.kPropertyText, C.kTextShadowOffsetY, position.y);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeTextAlignment(clipId: string, v: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentVerticalType, h: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentHorizontalType): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeTextAlignment should call selectClip.');
    }
    const ret = await this.coreMeEditor.setTextAlignment(this.selectedClipId || clipId, v, h);

    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeTextOutlineStyle(color: ColorHEX, size: number, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeTextOutlineStyle should call selectClip.');
    }
    const ARGB = HexToARGB(color);
    const ret = await this.coreMeEditor.setTextOutline(clipId || this.selectedClipId, true, ARGB, size);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async cleanTextOutline(clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.cleanTextOutline should call selectClip.');
    }
    const ret = await this.coreMeEditor.setClipI64Property(clipId || this.selectedClipId, C.kPropertyText, C.kTextOutlineEnable, 0);
    // const ret = this.coreMeEditor.setTextOutline(clipId || this.selectedClipId, false, 0, 0);
    return ret;
  }

  async changeTextStyle(style: TextStyle, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeTextStyle should call selectClip.');
    }
    let ret = 0;
    if (style.bold !== undefined) {
      ret = await this.coreMeEditor.setTextBold(clipId || this.selectedClipId, style.bold);
    }
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    if (style.italics !== undefined) {
      ret = await this.coreMeEditor.setTextItalics(clipId || this.selectedClipId, style.italics);
    }
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    if (style.underline !== undefined) {
      ret = await this.coreMeEditor.setTextUnderline(clipId || this.selectedClipId, style.underline);
    }
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async setClipPosition(position: { x: number; y: number }, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.setClipPosition should call selectClip.');
    }
    const { x, y } = position;
    const ret = await this.coreMeEditor.setPosition(clipId || this.selectedClipId, x, y);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async setClipAnchor(position: { x: number; y: number }, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.setClipAnchor should call selectClip.');
    }
    const { x, y } = position;
    const ret = await this.coreMeEditor.setAnchor(clipId || this.selectedClipId, x, y);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeClipPosition(position: { x: number; y: number }, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeClipPosition should call selectClip.');
    }
    const { x, y } = position;
    const canvasWidth = await this.getCanvasWidth();
    const canvasHeight = await this.getCanvasHeight();
    const centerWidth = canvasWidth / 2;
    const centerHeight = canvasHeight / 2;
    const measure = await this.getMeasure();
    const offsetX = pixelToFloat((x + measure.width / 2 - centerWidth), canvasWidth);
    const offsetY = pixelToFloat((y + measure.height / 2 - centerHeight), canvasHeight);
    const ret = await this.coreMeEditor.setPosition(clipId || this.selectedClipId, offsetX, offsetY);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeClipRotate(degree: number, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeClipRotate should call selectClip.');
    }
    const rotate = degreeToFloat(degree);
    const ret = await this.coreMeEditor.setRotate(clipId || this.selectedClipId, rotate);

    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeClipScale(scale: XYPosition, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeClipScale should call selectClip.');
    }
    const ret = this.setScale(clipId, scale.x);

    return ret;
  }

  triggerError(error: Error, message?: string) {
    const info = `${__filename}::${error.stack.split('\n')[0]} → ${message || error.message} `;
    console.warn(info);
    this.emit('MarvelSdkError', `${__filename}::${error.stack.split('\n')[1].match(/ at ([A-Za-z0-9.]*) /)[1]} → ${message || error.message}`);
  }

  async addMediaToMainTrack(path: string): Promise<string> {
    const resourceInfo = this.toolboxInstance.getResourceInfo(path);
    const durationUs = Number(resourceInfo.maxDurationUs);
    const clipId = await this.coreMeEditor.addMainClip(path, 0, durationUs);
    if (clipId === '') {
      this.triggerError(Error(''), '添加MediaToMainTrack ClipId为空');
    }
    return clipId;
  }

  async addImageToMainTrack(path: string, timeUS: number): Promise<string> {
    const clipId = await this.coreMeEditor.addMainClip(path, 0, timeUS);
    if (clipId === '') {
      this.triggerError(Error(''), '添加ImageToMainTrack ClipId为空');
    }
    return clipId;
  }

  async addMediaToTrack(path: string, trackId: TrackId = ''): Promise<string> {
    let clipId = '';
    const resourceInfo = this.toolboxInstance.getResourceInfo(path);
    const durationUs = Number(resourceInfo.maxDurationUs);
    clipId = await this.coreMeEditor.addPipClip(trackId, path, 0, 0, durationUs);
    if (clipId === '') {
      this.triggerError(Error(''), '添加MediaToTrack ClipId为空');
    }
    return clipId;
  }

  async addImageToTrack(path: string, timeUS: number, trackId = ''): Promise<string> {
    const clipId = await this.coreMeEditor.addPipClip(trackId, path, 0, 0, timeUS);
    if (clipId === '') {
      this.triggerError(Error(''), '添加ImageToTrack ClipId为空');
    }
    return clipId;
  }

  async addMusic(path: string, trackId: TrackId = ''): Promise<string> {
    const resourceInfo = this.toolboxInstance.getResourceInfo(path);
    const durationUs = Number(resourceInfo.maxDurationUs);
    const clipId = await this.coreMeEditor.addMusicClip(trackId, path, 0, 0, durationUs);
    if (clipId === '') {
      this.triggerError(Error(''), '添加Music ClipId为空');
    }
    return clipId;
  }

  async addLookup(path: string, intensity: number, startTimeUS: TimeUS = 0, durationUs: TimeUS = 3000000, trackId: TrackId = ''): Promise<string> {
    const clipId = await this.coreMeEditor.addLookupClip(trackId, path, startTimeUS, durationUs);

    if (!clipId || clipId === '') {
      this.triggerError(Error(''), '添加Lookup ClipId为空');
    }

    await this.setLookupIntensity(clipId, intensity);
    return clipId;
  }

  async addSticker(path: string, startTimeUS: TimeUS = 0, durationUs: TimeUS = 300000, trackId: TrackId = ''): Promise<string> {
    const clipId = await this.coreMeEditor.addStickerClip(trackId, path, startTimeUS, durationUs);
    if (!clipId || clipId === '') {
      this.triggerError(Error(''), '添加Sticker ClipId为空');
    }
    return clipId;
  }

  /**
   * @deprecated Magic 接口缺失
   * @param path
   * @param timeUS
   */
  addMagic(path: string, timeUS: number): string {
    console.debug(path, timeUS);
    return '';
  }

  /**
   * @deprecated
   * @param path
   * @param info
   */
  addCustomizeClip(path: string, info: {}): string {
    console.debug(path, info);
    return '';
  }

  async removeTrack(trackId: string): Promise<Ret> {
    const ret = await this.coreMeEditor.removeTrack(trackId);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async selectClip(clipId: string): Promise<number> {
    this.selectedClipId = clipId;
    const clipInfo = await this.getClipInfo<BaseClipInfo | null>(clipId);
    if (clipInfo && (clipInfo.clipInfo as BaseClipInfo).type === pkg.MarvelTrackType.TrackTypeMain) { // 主轨道不能操作changePlayTime；
      this.canChangePlayTime = true;
    } else {
      this.canChangePlayTime = true;
    }
    return 0;
  }

  unselectClip(): number {
    this.selectedClipId = null;
    this.canChangePlayTime = true;
    return 0;
  }

  async removeClip(clipId: string): Promise<number> {
    const ret = await this.coreMeEditor.deleteClip(clipId);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }
  async splitClip(timeUS: number, clipId?: string): Promise<string> {
    if (!this.selectedClipId && !clipId) {
      const error = Error('use MarvelEditor.selectClip should call splitClip.');
      this.triggerError(error, error.message);
      throw error;
    }
    const clipIds = await this.coreMeEditor.splitClip(clipId || this.selectedClipId, timeUS);
    if (!clipIds || !clipIds.length) {
      this.triggerError(Error(''), `分割 ClipId: ${clipId || this.selectedClipId} 失败`);
    }
    return clipIds;
  }

  async moveClip(startTimeUs: number, trackId = '', clipId?: string): Promise<Ret> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.selectClip should call moveClip.');
    }
    const tClipId = clipId || this.selectedClipId;
    return this.coreMeEditor.moveClip(tClipId, startTimeUs, trackId);
  }

  async changeVolume(volume: number, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      const error = Error('use MarvelEditor.changeVolume should call clipId.');
      this.triggerError(error, error.message);
      throw error;
    }

    const ret = await this.setClipVolume(clipId || this.selectedClipId, volume);
    if (ret < 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeSpeed(speed: number, clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      const error = Error('use MarvelEditor.changeSpeed should call clipId.');
      this.triggerError(error, error.message);
      throw error;
    }

    const ret = await this.setClipSpeed(clipId || this.selectedClipId, speed);
    if (ret !== 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeSourceStartTimeUs(startUs: TimeUS, clipId?: string): Promise<Ret> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeSourceStartTimeUs should call changeSourceTime.');
    }
    const ret = await this.setSourceStartTimeUs(clipId || this.selectedClipId, startUs);
    if (ret !== 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeSourceEndTimeUs(endUs: TimeUS, clipId?: string): Promise<Ret> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeSourceEndTimeUs should call changeSourceTime.');
    }
    const ret = await this.setSourceEndTimeUs(clipId || this.selectedClipId, endUs);
    if (ret !== 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async changeSourceTime(startUs?: TimeUS, stopUs?: TimeUS, clipId?: string): Promise<Ret> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.changeSourceTime should call changeSourceTime.');
    }
    const ret = await this.coreMeEditor.setSourceTimeRange(clipId || this.selectedClipId, startUs, stopUs);
    if (ret !== 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  async setClipStartTimeUs(clipId: string, time: number): Promise<number> {
    const ret = await this.coreMeEditor.setClipStartTimeUs(clipId, time);
    return ret;
  }

  async changePlayTime(startUs: TimeUS): Promise<number> {
    if (!this.selectedClipId) {
      throw Error('use MarvelEditor.changePlayTime should call selectedClipId.');
    }
    if (!this.canChangePlayTime) {
      throw Error('Clip in main track can not changePlayTime');
    }
    const ret = await this.setClipStartTimeUs(this.selectedClipId, startUs);
    if (ret !== 0) {
      this.triggerError(Error(''), this.getMeErrorMessage(ret));
    }
    return ret;
  }

  /**
   * @deprecated
   * @param property
   */
  transformClip(property: TransformProperty): number {
    if (!this.selectedClipId) {
      throw Error('use MarvelEditor.selectClip should call transformClip.');
    }
    console.debug(property);
    return 0;
  }

  async undo(): Promise<Ret> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this._sessionId);
    const editorUndoCommand = new pkg.EditorUndoCommand();
    const command = new pkg.Command();
    command.editorUndoCommand = editorUndoCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      if (result.errCode !== pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
        this.triggerError(Error(''), this.getErrorMessage(-1));
      }
      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS ? 0 : -1;
    } catch (error) {
      console.log('[Error]: editorUndoCommand', error);
    }
    this.triggerError(Error(''), this.getErrorMessage(-1));
    return -1;
  }

  async redo(): Promise<Ret> {
    const currentSeqId = this._accs.getSeqId();
    const pbMsg = new ProtoMessage(this._userId, currentSeqId, this._sessionId);
    const editorRedoCommand = new pkg.EditorRedoCommand();
    const command = new pkg.Command();
    command.editorRedoCommand = editorRedoCommand;
    const buffer = pbMsg.generateMessage(command, true);

    try {
      const result: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult = await this._accs.sendMessage(buffer, currentSeqId);
      if (result.errCode !== pkg.Result.ERROR_CODE.ERROR_SUCCESS) {
        this.triggerError(Error(''), this.getErrorMessage(-1));
      }
      return result.errCode === pkg.Result.ERROR_CODE.ERROR_SUCCESS ? 0 : -1;
    } catch (error) {
      console.log('[Error]: editorRedoCommand', error);
    }
    this.triggerError(Error(''), this.getErrorMessage(-1));
    return -1;
  }

  async canUndo(): Promise<boolean> {
    const ret = await this.getUndoStackSize();
    return ret > 0;
  }

  async canRedo(): Promise<boolean> {
    const ret = await this.getRedoStackSize();
    return ret > 0;
  }

  async getPanelInfo(): Promise<PanelInfo> {
    const trackIdList = await this.getTrackIdList();
    if (trackIdList.ret < 0) {
      this.triggerError(Error(''), this.getMeLastErrorCode());
    }

    return {
      ret: trackIdList.ret,
      trackIds: trackIdList.data as TrackId[],
      info: '',
    };
  }

  async getTrackInfo(trackId: string): Promise<TrackInfo> {
    const trackInfo = await this.coreMeEditor.getTrackInfo(trackId);

    return {
      ret: trackInfo?.trackType ? 0 : -1,
      clipIds: trackInfo.clipIds,
      type: MarvelTrackTypeToString[trackInfo.trackType],
    };
  }

  /**
   * @deprecated
   * @param clipId
   * @param type
   * @param clipInfo
   */
  setClipInfo(clipId: string, type: string, clipInfo: MarvelClipInfo): number {
    console.debug(clipId, type, clipInfo);
    return 0;
  }

  async toggleMute(clipId?: string): Promise<number> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.toggleMute should call splitClip.');
    }
    const clip = await this.getClipInfo<BaseClipInfo>(clipId || this.selectedClipId);
    const { volume } = clip.clipInfo;
    if (volume === '0.000000') {
      return this.setClipVolume(clipId || this.selectedClipId, 0.99);
    } else {
      return this.setClipVolume(clipId || this.selectedClipId, 0);
    }
  }

  async isMute(clipId?: string): Promise<boolean> {
    if (!this.selectedClipId && !clipId) {
      throw Error('use MarvelEditor.toggleMute should call splitClip.');
    }
    const clip = await this.getClipInfo<BaseClipInfo>(clipId || this.selectedClipId);
    const { volume } = clip.clipInfo;
    if (volume === '0.000000') {
      return true;
    } else {
      return false;
    }
  }

  async getScaleX(clipId: string): Promise<DoubleFloat> {
    const x = await this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyCanvas, C.kMaterialKeyXScale);
    return x;
  }

  async getScaleY(clipId: string): Promise<DoubleFloat> {
    const y = this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyCanvas, C.kMaterialKeyYScale);
    return y;
  }

  async getIntensity(clipId: string): Promise<number> {
    const intensity = await this.coreMeEditor.getClipDblProperty(clipId, C.kPropertyLookup, C.kMaterialKeyIntensity);
    return intensity;
  }

  /**
   * @deprecated
   * @param clipId
   * @param x
   * @returns
   */
  async setScaleX(clipId: string, x: DoubleFloat): Promise<Ret> {
    const ret = await this.coreMeEditor.setScaleX(clipId, x);
    return ret;
  }

  /**
   * @deprecated
   * @param clipId
   * @param y
   * @returns
   */
  async setScaleY(clipId: string, y: DoubleFloat): Promise<Ret> {
    const ret = await this.coreMeEditor.setScaleY(clipId, y);
    return ret;
  }

  async setScale(clipId: string, scale: DoubleFloat): Promise<number> {
    return this.coreMeEditor.setScale(clipId, scale);
  }

  async getTinyClipInfo(clipId: string): Promise<ClipInfo<BaseClipInfo>> {
    const clipInfo = await this.getCustomBaseClipInfo(clipId);
    return {
      ret: 0,
      clipInfo,
    };
  }

  async getClipInfo<T extends MarvelClipInfo>(clipId: string, type?: string): Promise<ClipInfo<T>> {
    if (!type) {
      type = ClipType.BASE;
    }

    let clipInfo: any | T | MarvelClipInfo;

    if (type === ClipType.BASE) {
      clipInfo = await this.getCustomBaseClipInfo(clipId);
      const clipData = clipInfo as BaseClipInfo;
      let resource: any;
      let transition: any;
      let canvas: CanvasClipInfo;
      let mask: MaskInfo;

      const keyframePointList: KeyframePointList = await this.getClipAllKeyframeAnchorList({ clipId });
      clipInfo.keyframe = {
        anchors: keyframePointList,
      };

      if (clipData.type === pkg.MarvelTrackType.TrackTypeBgMusic
        || clipData.type === pkg.MarvelTrackType.TrackTypePip
        || clipData.type === pkg.MarvelTrackType.TrackTypeMain
        || clipData.type === pkg.MarvelTrackType.TrackTypeSticker
        || clipData.type === pkg.MarvelTrackType.TrackTypeLookup) {
        const info = await this.getClipInfo<SourceClipInfo>(clipId, ClipType.SOURCE);
        resource = info.clipInfo;
      } else if (clipData.type === pkg.MarvelTrackType.TrackTypeText) {
        const info = await this.getClipInfo<TextClipInfo>(clipId, ClipType.TEXT);
        const textInfo = info.clipInfo;

        const { text_color, text_outline_color, text_shadow_color } = textInfo;
        text_color && (textInfo.text_color = text_color);
        text_outline_color && (textInfo.text_outline_color = text_outline_color);
        text_shadow_color && (textInfo.text_shadow_color = text_shadow_color);
        resource = textInfo;
      }

      if (clipData.type === pkg.MarvelTrackType.TrackTypePip || clipData.type === pkg.MarvelTrackType.TrackTypeMain) {
        const clipInfo1 = await this.getClipInfo<SourceClipInfo>(clipId, ClipType.TRANSITION);
        const info = clipInfo1.clipInfo;
        if (info.duration_us || info.mode || info.path) {
          transition = info;
        }
      }

      // if (clipData.type === pkg.MarvelTrackType.TrackTypePip) {
      //   const maskResId = this.hasMaskInfo(clipId);
      //   if (maskResId) {
      //     mask = await this.getCustomMaskInfo(clipId, maskResId);
      //   }
      // }

      if (
        [
          pkg.MarvelTrackType.TrackTypeMain,
          pkg.MarvelTrackType.TrackTypePip,
          pkg.MarvelTrackType.TrackTypeSticker,
          pkg.MarvelTrackType.TrackTypeText,
          pkg.MarvelTrackType.TrackTypeLookup,
        ].includes(clipData.type)) {
        const clipInfo1 = await this.getClipInfo<CanvasClipInfo>(clipId, ClipType.CANVAS);
        canvas = clipInfo1.clipInfo;
      }

      /**
       * 无法确定此切片类型是否存在UI信息，因此将都获取一遍
       */
      const ui: DynamicUIClipInfo = await this.getCustomUIClipInfo(clipId, MarvelTrackTypeToString[clipData.type]);

      if (resource) {
        clipInfo.resource = resource;
      }
      if (transition) {
        clipInfo.transition = transition;
      }
      if (canvas) {
        clipInfo.canvas = canvas;
      }
      if (mask) {
        clipInfo.mask = mask;
      }

      if (ui) {
        clipInfo.ui = ui;
      }
    } else if (type === ClipType.CANVAS) {
      clipInfo = await this.getCustomCanvasClipInfo(clipId);
    } else if (type === ClipType.LOOKUP) {
      clipInfo = await this.getCustomLookupClipInfo(clipId);
    } else if (type === ClipType.STICKER) {
      clipInfo = await this.getCustomStickerClipInfo(clipId);
    } else if (type === ClipType.MAGIC) {
      clipInfo = await this.getCustomMagicClipInfo(clipId);
    } else if (type === ClipType.TRANSITION) {
      clipInfo = await this.getCustomTransitionClipInfo(clipId);
    } else if (type === ClipType.TEXT) {
      clipInfo = await this.getCustomTextClipInfo(clipId);
    } else if (type === ClipType.SOURCE) {
      clipInfo = await this.getCustomSourceClipInfo(clipId);
    }

    return {
      ret: 1,
      clipInfo,
    };
  }

  private async getCustomBaseClipInfo(clipId: string): Promise<BaseClipInfo> {
    const resId = await this.getClipResID(clipId);
    let trackId: string;
    let speed: number;
    let revert: number;
    let sourceStartTimeUs: number;
    let sourceEndTimeUs: number;
    let startTimeUs: number;
    let endTimeUs: number;
    let volume: number;
    let clipType: string;

    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kClipKeyParentId, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
      { propKey: C.kClipKeySpeed, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kClipKeyRevert, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kClipKeySourceStartTime, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kClipKeySourceEndTime, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kClipKeyClipStartTime, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kClipKeyClipEndTime, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kClipKeyVolume, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kClipKeyType, propType: C.kPropertyClipBase, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
    ];
    const clipProperties = await this.coreMeEditor.getClipPropList(clipId, def);
    clipProperties.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      switch (item.propKey) {
        case C.kClipKeyParentId:
          trackId = item[(item as any).value];
          break;
        case C.kClipKeySpeed:
          speed = item[(item as any).value];
          break;
        case C.kClipKeyRevert:
          revert = item[(item as any).value];
          break;
        case C.kClipKeySourceStartTime:
          sourceStartTimeUs = item[(item as any).value];
          break;
        case C.kClipKeySourceEndTime:
          sourceEndTimeUs = item[(item as any).value];
          break;
        case C.kClipKeyClipStartTime:
          startTimeUs = item[(item as any).value];
          break;
        case C.kClipKeyClipEndTime:
          endTimeUs = item[(item as any).value];
          break;
        case C.kClipKeyVolume:
          volume = item[(item as any).value];
          break;
        case C.kClipKeyType:
          clipType = item[(item as any).value];
          break;
        default:
          break;
      }
    });

    // 扩展特效 type转换
    if (['Shape'].includes(clipType)) {
      clipType = MarvelTrackTypeToString[pkg.MarvelTrackType.TrackTypeDynamic];
    }

    return {
      id: clipId,
      track_id: trackId,
      speed,
      res_id: resId,
      revert,
      source_start_time_us: sourceStartTimeUs,
      source_stop_time_us: sourceEndTimeUs,
      start_time_us: startTimeUs,
      stop_time_us: endTimeUs,
      volume: volume.toString(),
      type: StringToMarvelTrackType[clipType],
    };
  }

  private async getCustomCanvasClipInfo(clipId): Promise<CanvasClipInfo> {
    let rotate: number;
    let scale: XYPosition;
    let measure: ClipMeasure;
    let offset: XYPosition;
    let bg: { bgColor: string; bgImage: string; bgBlur: number };
    let intensity: number;
    const clipInfo = await this.getCustomBaseClipInfo(clipId);

    if ([pkg.MarvelTrackType.TrackTypeLookup, pkg.MarvelTrackType.TrackTypeEffect].includes(clipInfo.type)) {
      [rotate, scale, measure, offset, bg, intensity] = await Promise.all([
        this.getRotate(clipId),
        this.getScale(clipId),
        this.getMeasure(clipId),
        this.getPosition(clipId),
        this.getCanvasBackground(clipId),
        this.getIntensity(clipId),
      ]);
    } else {
      [rotate, scale, measure, offset, bg, intensity] = await Promise.all([
        this.getRotate(clipId),
        this.getScale(clipId),
        this.getMeasure(clipId),
        this.getPosition(clipId),
        this.getCanvasBackground(clipId),
        this.getClipTransparency(clipId), // 如果是特效或者滤镜则是强度，否则是从canvas中获取透明度
      ]);
    }

    const { bgColor, bgImage, bgBlur } = bg;

    const canvas: CanvasClipInfo = {
      xOffset: offset.x,
      yOffset: offset.y,
      width: measure.width,
      height: measure.height,
      rotate,
      xScale: scale.x,
      yScale: scale.y,
      bg_color: bgColor,
      bg_image: bgImage,
      blur_type: bgBlur,
      intensity,
    };

    return canvas;
  }

  private async getCustomLookupClipInfo(clipId): Promise<LookupClipInfo> {
    let intensity: number;
    let path: string;
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kMaterialKeyIntensity, propType: C.kPropertyLookup, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kSourceKeyPath, propType: C.kPropertyLookup, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
    ];
    const clipProperties = await this.coreMeEditor.getClipPropList(clipId, def);
    clipProperties.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      switch (item.propKey) {
        case C.kMaterialKeyIntensity:
          intensity = item[(item as any).value];
          break;
        case C.kSourceKeyPath:
          path = item[(item as any).value];
          break;
        default:
          break;
      }
    });
    return {
      intensity,
      path,
    };
  }

  private async getCustomSourceClipInfo(clipId: string): Promise<SourceClipInfo> {
    const type = '';
    const extraType = '';
    const { resourceId, resourceUrl } = await this.coreMeEditor.getResInfo(clipId);
    let audioChannelCount: number;
    let audioDurationUs: number;
    let audioMime: string;
    let audioSampleRate: number;
    let hasAudio: number;
    let hasVideo: number;
    let videoDurationUs: number;
    let videoHeight: number;
    let videoWidth: number;
    let videoMime: string;
    let videoRotation: number;
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kSourceKeyAudioChannelCount, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kSourceKeyAudioDuration, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kSourceKeyAudioMime, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
      { propKey: C.kSourceKeyAudioSampleRate, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kSourceKeyHasAudio, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kSourceKeyHasVideo, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kSourceKeyVideoDuration, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kSourceKeyVideoWidth, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kSourceKeyVideoHeight, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kSourceKeyVideoMime, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
      { propKey: C.kSourceKeyVideoRotation, propType: '', propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
    ];
    const clipProperties = await this.coreMeEditor.getResProperties('', resourceId, def);
    clipProperties.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      switch (item.propKey) {
        case C.kSourceKeyAudioChannelCount:
          audioChannelCount = item[(item as any).value];
          break;
        case C.kSourceKeyAudioDuration:
          audioDurationUs = item[(item as any).value];
          break;
        case C.kSourceKeyAudioMime:
          audioMime = item[(item as any).value];
          break;
        case C.kSourceKeyAudioSampleRate:
          audioSampleRate = item[(item as any).value];
          break;
        case C.kSourceKeyHasAudio:
          hasAudio = item[(item as any).value];
          break;
        case C.kSourceKeyHasVideo:
          hasVideo = item[(item as any).value];
          break;
        case C.kSourceKeyVideoDuration:
          videoDurationUs = item[(item as any).value];
          break;
        case C.kSourceKeyVideoWidth:
          videoWidth = item[(item as any).value];
          break;
        case C.kSourceKeyVideoHeight:
          videoHeight = item[(item as any).value];
          break;
        case C.kSourceKeyVideoMime:
          videoMime = item[(item as any).value];
          break;
        case C.kSourceKeyVideoRotation:
          videoRotation = item[(item as any).value];
          break;
        default:
          break;
      }
    });
    const maxDurationUs = Math.max(videoDurationUs, audioDurationUs);
    const minDurationUs = Math.min(videoDurationUs, audioDurationUs);

    return {
      audioChannelCount,
      audioDurationUs,
      audioMime,
      audioSampleRate,
      hasAudio,
      hasVideo,
      id: resourceId,
      max_duration_us: maxDurationUs,
      min_duration_us: minDurationUs,
      path: resourceUrl,
      type,
      videoDurationUs,
      videoHeight,
      videoMime,
      videoRotation,
      videoWidth,
      extraType,
    };
  }

  private async getCustomMagicClipInfo(clipId: string): Promise<MagicClipInfo> {
    const path = await this.coreMeEditor.getClipStrProperty(clipId, C.kPropertyLookup, C.kSourceKeyPath);

    return {
      clipId,
      path,
    };
  }

  private async getCustomStickerClipInfo(clipId: string): Promise<StickerClipInfo> {
    const path = await this.coreMeEditor.getClipStrProperty(clipId, C.kPropertySticker, C.kSourceKeyPath);

    return {
      clipId,
      path,
    };
  }

  private async getCustomTextClipInfo(clipId: string): Promise<TextClipInfo> {
    let scale: number;
    let content: string;
    let textColor: number;
    let xOffset: number;
    let yOffset: number;
    let textAlignmentH: number;
    let textAlignmentV: number;
    let textOutlineColor: number;
    let textOutlineEnabled: number;
    let textOutlineSize: number;
    let textShadowColor: number;
    let textShadowEnabled: number;
    let textShadowOffsetX: number;
    let textShadowOffsetY: number;
    let textBold: number;
    let textItalics: number;
    let textUnderline: number;
    let textWordSpace: number;
    let fontFileResId: string;
    let ty: string;
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kMaterialKeyXScale, propType: C.kPropertyCanvas, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kTextContent, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
      { propKey: C.kTextTextColor, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kMaterialKeyXOffset, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kMaterialKeyYOffset, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextAlignmentH, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextAlignmentV, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextOutlineColor, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextOutlineEnable, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextOutlineSize, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kTextShadowColor, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextShadowEnable, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextShadowOffsetX, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kTextShadowOffsetY, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kTextBold, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextItalics, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextUnderline, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.kTextWorldSpace, propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_INT64 },
      { propKey: C.ResIdKey(C.kTextFontFile), propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
      { propKey: C.AttachInnerKey('text', 'type'), propType: C.kPropertyText, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
    ];
    const clipProperties = await this.coreMeEditor.getClipPropList(clipId, def);
    clipProperties.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      switch (item.propKey) {
        case C.kMaterialKeyXScale:
          scale = item[(item as any).value];
          break;
        case C.kTextContent:
          content = item[(item as any).value];
          break;
        case C.kTextTextColor:
          textColor = item[(item as any).value];
          break;
        case C.kMaterialKeyXOffset:
          xOffset = item[(item as any).value];
          break;
        case C.kMaterialKeyYOffset:
          yOffset = item[(item as any).value];
          break;
        case C.kTextAlignmentH:
          textAlignmentH = item[(item as any).value];
          break;
        case C.kTextAlignmentV:
          textAlignmentV = item[(item as any).value];
          break;
        case C.kTextOutlineColor:
          textOutlineColor = item[(item as any).value];
          break;
        case C.kTextOutlineEnable:
          textOutlineEnabled = item[(item as any).value];
          break;
        case C.kTextOutlineSize:
          textOutlineSize = item[(item as any).value];
          break;
        case C.kTextShadowColor:
          textShadowColor = item[(item as any).value];
          break;
        case C.kTextShadowEnable:
          textShadowEnabled = item[(item as any).value];
          break;
        case C.kTextShadowOffsetX:
          textShadowOffsetX = item[(item as any).value];
          break;
        case C.kTextShadowOffsetY:
          textShadowOffsetY = item[(item as any).value];
          break;
        case C.kTextBold:
          textBold = item[(item as any).value];
          break;
        case C.kTextItalics:
          textItalics = item[(item as any).value];
          break;
        case C.kTextUnderline:
          textUnderline = item[(item as any).value];
          break;
        case C.kTextWorldSpace:
          textWordSpace = item[(item as any).value];
          break;
        case C.ResIdKey(C.kTextFontFile):
          fontFileResId = item[(item as any).value];
          break;
        case C.AttachInnerKey('text', 'type'):
          ty = item[(item as any).value];
          break;
        default:
          break;
      }
    });

    const fontFile = await this.getResPath(fontFileResId);
    const textType = ty ?? 'text';

    return {
      id: clipId,
      type: textType,
      clipId,
      content,
      font_file: fontFile,
      scale,
      text_color: ARGBToHex(textColor),
      x_offset: xOffset,
      y_offset: yOffset,
      text_alignment_h: textAlignmentH,
      text_alignment_v: textAlignmentV,
      text_outline_color: ARGBToHex(textOutlineColor),
      text_outline_enabled: textOutlineEnabled,
      text_outline_size: textOutlineSize,
      text_shadow_color: ARGBToHex(textShadowColor),
      text_shadow_enabled: textShadowEnabled,
      text_shadow_offset_x: textShadowOffsetX,
      text_shadow_offset_y: textShadowOffsetY,
      text_style_bold: textBold,
      text_style_italics: textItalics,
      text_style_underline: textUnderline,
      text_word_space: textWordSpace,
    };
  }

  private async getCustomTransitionClipInfo(clipId: string): Promise<TransitionClipInfo> {
    let path: string;
    let durationUs: number;
    let mode: string;
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kSourceKeyPath, propType: C.kMaterialTypeTransition, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
      { propKey: C.kMaterialKeyDurationUs, propType: C.kMaterialTypeTransition, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_DOUBLE },
      { propKey: C.kMaterialKeyMode, propType: C.kMaterialTypeTransition, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
    ];
    const clipProperties = await this.coreMeEditor.getClipPropList(clipId, def);
    clipProperties.forEach((item: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp) => {
      switch (item.propKey) {
        case C.kSourceKeyPath:
          path = item[(item as any).value];
          break;
        case C.kMaterialKeyDurationUs:
          durationUs = item[(item as any).value];
          break;
        case C.kMaterialKeyMode:
          mode = item[(item as any).value];
          break;
        default:
          break;
      }
    });
    return {
      duration_us: durationUs,
      mode,
      path,
    };
  }

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

  async getUIItemValue(clipId: ClipId, propertyKey, propertyType, dynamicType: string = ClipType.DYNAMIC) {
    let value: any;
    switch (propertyType) {
      case DynamicUIType.INTEGER: {
        value = await this.coreMeEditor.getClipI64Property(clipId, dynamicType, propertyKey);
        break;
      }
      case DynamicUIType.DECIMAL: {
        value = await this.coreMeEditor.getClipDblProperty(clipId, dynamicType, propertyKey);
        break;
      }
      case DynamicUIType.STRING: {
        value = await this.coreMeEditor.getClipStrProperty(clipId, dynamicType, propertyKey);
        break;
      }
      case DynamicUIType.RESOURCE: {
        const resId = await this.coreMeEditor.getClipStrProperty(clipId, dynamicType, propertyKey);
        if (resId) {
          value = await this.getResPath(resId);
        }
        break;
      }
    }

    return value;
  }

  private async getCustomUIClipInfo(clipId: string, type: string): Promise<DynamicUIClipInfo> {
    let dynamicUIDesc: string;
    const def: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[] = [
      { propKey: C.kClipPropertyDesc, propType: type, propValType: pkg.EditorPropDef.PropValueType.PROP_VALUE_TYPE_STRING },
    ];
    const clipProps: proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp[] = await this.coreMeEditor.getClipPropList(clipId, def);
    if (clipProps && clipProps.length) {
      const item = clipProps[0];
      dynamicUIDesc = item[(item as any).value];
    }
    if (dynamicUIDesc) {
      try {
        const dynamicUI = JSON.parse(dynamicUIDesc) as DynamicUIClipInfo;
        const { data } = dynamicUI;
        if (data) {
          data.forEach(async (item) => {
            const { name, dataType/* , prefix */ } = item;
            let value: any;
            if (item.type === DynamicUIType.COMBO) {
              value = await this.getUIItemValue(clipId, `${name}`, dataType);
            } else {
              value = await this.getUIItemValue(clipId, `${name}`, item.type);
            }
            const newItem = value ? {
              ...item,
              value,
            } : item;
            dynamicUI.data.push(newItem);
          });
        }
        return dynamicUI;
      } catch {
        return null;
      }
    }
    return null;
  }
}
