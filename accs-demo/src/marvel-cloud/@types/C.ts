export enum CKey {
  kSourceKeyId = "id",
  kSourceKeyPath = "path",
  kSourceKeyOutputPath = "outputPath",
  kSourceKeyType = "type",
  kSourceKeyExtraType = "extraType",
  kSourceKeySubclass = "subclass",
  kSourceKeyHasAudio = "hasAudio",
  kSourceKeyHasVideo = "hasVideo",
  kSourceKeyVideoMime = "videoMime",
  kSourceKeyAudioMime = "audioMime",
  kSourceKeyAudioSampleRate = "audioSampleRate",
  kSourceKeyAudioChannelCount = "audioChannelCount",
  kSourceKeyAudioDuration = "audioDurationUs",
  kSourceKeyVideoWidth = "videoWidth",
  kSourceKeyVideoHeight = "videoHeight",
  kSourceKeyVideoDuration = "videoDurationUs",
  kSourceKeyVideoRotation = "videoRotation",
  kSourceKeyMinDurationUs = "minDurationUs",
  kSourceKeyMaxDurationUs = "maxDurationUs",
  kSourceKeyVersion = "version",
  kSourceKeyRemoteId = "remoteId",
  kSourceKeyValue = "value",
  kSourceKeyFlag = "flag",
  kSourceKeyName = "name",
  kSourceKeyTexType = "texType",
  kSourceKeyEffectType = "effectType",
  kSourceLimitDurationUs = "limitDurationUs",

  kResMedia = "resMedia",
  kResImage = "resImage",
  kResExtra = "resExtra",


  kInnerPrefix = "_InnerKey_",
  kPathPrefix = "_PathKey_",
  kResIdPrefix = "_ResIdKey_",
  kOutputPrefix = "_OutputKey_",
  kTempPrefix = "_TempKey_",


  kResTypeImage = "resImage",
  kResTypeMedia = "resMedia",
  kResTypeLookup = "resLookup",
  kResTypeSticker = "resSticker",
  kResTypeMagic = "resMagic",
  kResTypeFont = "resFont",
  kResTypeExtra = "resExtra",

  kClipMain = "main",
  kClipPip = "pip",
  kClipMusic = "music",
  kClipBgMusic = "bgMusic",
  kClipSticker = "sticker",
  kClipEffect = "effect",
  kClipLookup = "lookup",
  kClipCustomize = "customize",
  kClipText = "text",
  kGroup = "group",
  kAll = "all",

  kMaterialTypeCanvas = "canvas",
  kMaterialTypeSticker = "sticker",
  kMaterialTypeLookup = "lookup",
  kMaterialTypeTransition = "transition",
  kMaterialTypeText = "text",
  kMaterialTypeCrop = "crop",
  kMaterialTypeMask = "mask",
  kMaterialTypeExtension = "extension",

  kPropertyConfig = "config",
  kPropertyClipBase = "clip",
  kPropertyCanvas = "canvas",
  kPropertyLookup = "lookup",
  kPropertyText = "text",
  kPropertyTextShape = "textShape",
  kPropertyTextAnnimation = "textAnimation",
  kPropertySticker = "sticker",
  kPropertyTransition = "transition",
  kPropertyMask = "mask",
  kPropertyExtension = "extension",

  kKeyAudioTrackIndex = "indexAudio",
  kKeyVideoTrackIndex = "videoIndex",
  kKeyTrackIndex = "trackIndex",

  kKcType = "clipType",
  kKcSpeed = "clipSpeed",
  kKcSourceStart = "clipSourceStart",
  kKcSourceStop = "clipSourceStop",
  kKcPlayStart = "clipPlayStart",
  kKcPlayStop = "clipPlayStop",
  kKcResource = "clipResId",

  kParamActionType = "actionType",
  kActionAdd = "actionAdd",
  kActionModify = "actionModify",
  kActionQuery = "actionQuery",
  kActionDelete = "actionDelete",

  kPropertyType = "propertyType",
  kTransformProperty = "transformProperty",
  kBaseTextProperty = "baseTextProperty",

  kAtClip = "attachClip",
  kAtTrack = "attachTrack",
  kAtPanel = "attachPanel",
  kAtAll = "attachGlobal",

  kActionEditCrop = "actionEditCrop",
  kActionAlbumCrop = "actionAlbumCrop",
  kActionEffectFilter = "actionEffectFilter",
  kActionEffectTime = "actionEffectTime",
  kActionEffectSticker = "actionEffectSticker",
  kActionEffectText = "actionEffectText",
  kActionSound = "actionSound",

  kClipDel = "Delete",
  kClipSplit = "Split",
  kClipSpeed = "Speed",
  kClipScale = "Transform",
  kClipTranslate = "Transform",
  kClipRotate = "Transform",

  kClipKeyId = "clipId",
  kClipKeyParentId = "parentId",
  kClipKeyType = "type",
  kClipKeyResId = "resId",
  kClipKeyResType = "resType",
  kClipKeySourceStartTime = "sourceStartTime",
  kClipKeySourceEndTime = "sourceEndTime",
  kClipKeyClipStartTime = "clipStartTime",
  kClipKeyClipEndTime = "clipEndTime",
  kClipKeyFlag = "flag",
  kClipKeySpeed = "speed",
  kClipKeyRevert = "revert",
  kClipKeyMaterial = "materials",
  kResourceKeyPath = "path",
  kResourceFlag = "resourceFlag",
  kClipKeyVolume = "volume",
  kClipKeyIndex = "index",
  kClipKeySameCacheInOneTrackFlag = "sameCacheFlag",
  kClipKeyResFlag = "resFlag",

  kTrackKeyType = "type",
  kTrackKeySourceType = "sourceType",
  kTrackKeyClips = "clips",
  kTrackKeyDuration = "durationUs",
  kTrackKeyFlag = "flag",
  kTrackKeyId = "trackId",

  kPanelKeyId = "id",
  kPanelKeyConfig = "config",
  kPanelKeyName = "name",
  kPanelKeyTrack = "tracks",
  kPanelKeySource = "sources",
  kPanelKeyMaterial = "materials",

  kKeyName = "name",
  kConfigKeyWidth = "width",
  kConfigKeyHeight = "height",
  kConfigKeyScaleType = "scaleType",
  kConfigKeyCreateTime = "createTimeMs",
  kConfigKeyCreateVersionCode = "createVersion",
  kConfigKeyUpdateTime = "updateTimeMs",
  kConfigKeyUpdateVersionCode = "updateVersion",
  kConfigKeyIsFromTemplate = "isFromTemplate",
  kConfigKeyBackground = "background",

  kMaterialKeyId = "id",
  kMaterialKeyTypeName = "typeName",
  kMaterialKeyResourceId = "resourceId",
  kMaterialKeyBgColor = "bgColor",
  kMaterialKeyMode = "mode",
  kMaterialKeyIsSelect = "isSelect",
  kMaterialKeyRotate = "rotate",
  kMaterialKeyXOffset = "xOffset",
  kMaterialKeyYOffset = "yOffset",
  kMaterialKeyScale = "scale",
  kMaterialKeyXScale = "xScale",
  kMaterialKeyYScale = "yScale",
  kMaterialKeyXAnchor = "xAnchor",
  kMaterialKeyYAnchor = "yAnchor",
  kMaterialKeyScaleType = "scaleType",
  kMaterialKeyBlendType = "blendType",
  kMaterialKeyIntensity = "intensity",
  kMaterialKeySubType = "subType",
  kMaterialKeyRevert = "revert",
  kMaterialKeyMaskInfo = "maskInfo",
  kMaterialKeyParam = "param",
  kMaterialKeyLuminance = "luminance",
  kMaterialKeyContrast = "contrast",
  kMaterialKeySaturation = "saturation",
  kMaterialKeySharpen = "sharpen",
  kMaterialKeyHighlight = "highlight",
  kMaterialKeyShadow = "shadow",
  kMaterialKeyColorTemp = "colorTemp",
  kMaterialKeyHue = "hue",
  kMaterialKeyFade = "fade",
  kMaterialKeyDurationUs = "durationUs",
  kMaterialKeyWidth = "width",
  kMaterialKeyHeight = "height",
  kMaterialKeyNormalizeFlag = "isNormalize",
  kMaterialKeyRotateFlag = "rotateFlag",
  kMaterialKeyUseSDF = "sdf",

  kTextContent = "Content",
  kTextShadowOffsetX = "ShadowOffsetX",
  kTextShadowOffsetY = "ShadowOffsetY",
  kTextFontSize = "FontSize",
  kTextAnchorX = "AnchorX",
  kTextAnchorY = "AnchorY",
  kTextPosX = "PosX",
  kTextPosY = "PosY",
  kTextOutlineSize = "OutlineSize",
  kTextAlignmentH = "AlignmentH",
  kTextAlignmentV = "AlignmentV",
  kTextShadowColor = "ShadowColor",
  kTextShadowEnable = "ShadowEnable",
  kTextTextColor = "TextColor",
  kTextOutlineColor = "OutlineColor",
  kTextOutlineEnable = "OutlineEnable",
  kTextBold = "Bold",
  kTextItalics = "Italics",
  kTextUnderline = "Underline",
  kTextFontFile = "FontFile",
  kTextWorldSpace = "worldSpace",
  kTextColorfulConfig = "ColorfulConfig",
  kTextExtraClipId = "extraClipId",
  kExtraClipId = "extraClipId",

  kAudioTimbre = "timbre",

  kActionKeySplitTime = "splitTime",
  kActionKeyTargetTrackId = "targetTrackId",
  kActionKeyNewTrack = "newTrack",

  kResKeyMediaDuration = "durationUs",
  kResKeyMediaWidth = "width",
  kResKeyMediaHeight = "height",
  kResKeyMediaFps = "fps",
  kResKeyPath = "path",
  kResKeyFullKeyFrame = "resFullKeyFrame",
  kResKeyDesc = "desc",
  kResKeyMapping = "mapping",
  kResKeyBinding = "binding",
  kResKeyShadow = "shadow",

  kExporterFrameRate = "frameRate",
  kExporterScaleType = "scaleType",
  kExporterVideoHeight = "VideoHeight",
  kExporterVideoWidth = "VideoWidth",
  kExporterVideoBps = "VideoBps",
  kExporterVideoFps = "VideoFps",
  kExporterVideoIfi = "VideoIfi",
  kExporterAudioFrequency = "AudioFrequency",
  kExporterAudioEncoding = "AudioEncoding",
  kExporterAudioChannel = "AudioChannel",
  kExporterAudioSource = "AudioSource",
  kExporterAudioBps = "AudioBps",
  kExporterOutputPath = "outputPath",
  kExporterWorkPath = "workPath",
  kVideoEncodeSpeed = "VideoEncodeSpeed",
  kAudioEncodeSpeed = "AudioEncodeSpeed",
  kVideoSoftwareCodec = "VideoEncodeSoftwareCodec",
  kExporterVideoEncodeFormat = "video_format",
}

/**
 * @reference Tixel/marvel/Platform/Android/MarvelLib/src/main/java/com/alibaba/marvel/C.java
 */
export default class C {

  public static kResMedia: string = CKey.kResMedia;
  public static kResImage: string = CKey.kResImage;
  public static kResExtra: string = CKey.kResExtra;


  public static kInnerPrefix: string = CKey.kInnerPrefix;
  public static kPathPrefix: string = CKey.kPathPrefix;
  public static kResIdPrefix: string = CKey.kResIdPrefix;
  public static kOutputPrefix: string = CKey.kOutputPrefix;
  public static kTempPrefix: string = CKey.kTempPrefix;

  public static kTypeName: string = C.InnerKey("Name");
  public static kRendererPriority: string = C.InnerKey("Priority");
  public static kRequireExtraTexture: string = C.InnerKey("RequireExtraTexture");
  public static kEffectParamDesc: string = C.InnerKey("EffectParamDesc");
  public static kRendererPluginsName: string = C.InnerKey("RendererPluginsName");
  public static kResourcePath: string = C.InnerKey("EffectResource");
  public static kResourceEmbeddedPath: string = C.TempKey("EffectResourceEmbedded");
  public static kClipPropertyDesc: string = C.TempKey("PropertyDesc")

  public static kResTypeImage: string = CKey.kResTypeImage;
  public static kResTypeMedia: string = CKey.kResTypeMedia;
  public static kResTypeLookup: string = CKey.kResTypeLookup;
  public static kResTypeSticker: string = CKey.kResTypeSticker;
  public static kResTypeMagic: string = CKey.kResTypeMagic;
  public static kResTypeFont: string = CKey.kResTypeFont;
  public static kResTypeExtra: string = CKey.kResTypeExtra;

  public static kClipMain: string = CKey.kClipMain;
  public static kClipPip: string = CKey.kClipPip;
  public static kClipMusic: string = CKey.kClipMusic;
  public static kClipBgMusic: string = CKey.kClipBgMusic;
  public static kClipSticker: string = CKey.kClipSticker;
  public static kClipEffect: string = CKey.kClipEffect;
  public static kClipLookup: string = CKey.kClipLookup;
  public static kClipCustomize: string = CKey.kClipCustomize;
  public static kClipText: string = CKey.kClipText;
  public static kGroup: string = CKey.kGroup;
  public static kAll: string = CKey.kAll;

  public static kMaterialTypeCanvas: string = CKey.kMaterialTypeCanvas;
  public static kMaterialTypeSticker: string = CKey.kMaterialTypeSticker;
  public static kMaterialTypeLookup: string = CKey.kMaterialTypeLookup;
  public static kMaterialTypeTransition: string = CKey.kMaterialTypeTransition;
  public static kMaterialTypeText: string = CKey.kMaterialTypeText;
  public static kMaterialTypeCrop: string = CKey.kMaterialTypeCrop;
  public static kMaterialTypeMask: string = CKey.kMaterialTypeMask;
  public static kMaterialTypeExtension: string = CKey.kMaterialTypeExtension;

  public static kPropertyConfig: string = CKey.kPropertyConfig;
  public static kPropertyClipBase: string = CKey.kPropertyClipBase;
  public static kPropertyCanvas: string = CKey.kPropertyCanvas;
  public static kPropertyLookup: string = CKey.kPropertyLookup;
  public static kPropertyText: string = CKey.kPropertyText;
  public static kPropertySticker: string = CKey.kPropertySticker;
  public static kPropertyTransition: string = CKey.kPropertyTransition;
  public static kPropertyMask: string = CKey.kPropertyMask;
  public static kPropertyExtension: string = CKey.kPropertyExtension;

  public static kKeyAudioTrackIndex: string = CKey.kKeyAudioTrackIndex;
  public static kKeyVideoTrackIndex: string = CKey.kKeyVideoTrackIndex;
  public static kKeyTrackIndex: string = CKey.kKeyTrackIndex;

  public static kKcType: string = CKey.kKcType;
  public static kKcSpeed: string = CKey.kKcSpeed;
  public static kKcSourceStart: string = CKey.kKcSourceStart;
  public static kKcSourceStop: string = CKey.kKcSourceStop;
  public static kKcPlayStart: string = CKey.kKcPlayStart;
  public static kKcPlayStop: string = CKey.kKcPlayStop;
  public static kKcResource: string = CKey.kKcResource;

  public static kParamActionType: string = CKey.kParamActionType;
  public static kActionAdd: string = CKey.kActionAdd;
  public static kActionModify: string = CKey.kActionModify;
  public static kActionQuery: string = CKey.kActionQuery;
  public static kActionDelete: string = CKey.kActionDelete;

  public static kPropertyType: string = CKey.kPropertyType;
  public static kTransformProperty: string = CKey.kTransformProperty;
  public static kBaseTextProperty: string = CKey.kBaseTextProperty;

  public static kAtClip: string = CKey.kAtClip;
  public static kAtTrack: string = CKey.kAtTrack;
  public static kAtPanel: string = CKey.kAtPanel;
  public static kAtAll: string = CKey.kAtAll;

  public static kActionEditCrop: string = CKey.kActionEditCrop;
  public static kActionAlbumCrop: string = CKey.kActionAlbumCrop;
  public static kActionEffectFilter: string = CKey.kActionEffectFilter;
  public static kActionEffectTime: string = CKey.kActionEffectTime;
  public static kActionEffectSticker: string = CKey.kActionEffectSticker;
  public static kActionEffectText: string = CKey.kActionEffectText;
  public static kActionSound: string = CKey.kActionSound;

  public static kClipDel: string = CKey.kClipDel;
  public static kClipSplit: string = CKey.kClipSplit;
  public static kClipSpeed: string = CKey.kClipSpeed;
  public static kClipScale: string = CKey.kClipScale;
  public static kClipTranslate: string = CKey.kClipTranslate;
  public static kClipRotate: string = CKey.kClipRotate;

  public static kClipKeyId: string = CKey.kClipKeyId;
  public static kClipKeyParentId: string = CKey.kClipKeyParentId;
  public static kClipKeyType: string = CKey.kClipKeyType;
  public static kClipKeyResId: string = CKey.kClipKeyResId;
  public static kClipKeyResType: string = CKey.kClipKeyResType;
  public static kClipKeySourceStartTime: string = CKey.kClipKeySourceStartTime;
  public static kClipKeySourceEndTime: string = CKey.kClipKeySourceEndTime;
  public static kClipKeyClipStartTime: string = CKey.kClipKeyClipStartTime;
  public static kClipKeyClipEndTime: string = CKey.kClipKeyClipEndTime;
  public static kClipKeyFlag: string = CKey.kClipKeyFlag;
  public static kClipKeySpeed: string = CKey.kClipKeySpeed;
  public static kClipKeyRevert: string = CKey.kClipKeyRevert;
  public static kClipKeyMaterial: string = CKey.kClipKeyMaterial;
  public static kResourceKeyPath: string = CKey.kResourceKeyPath;
  public static kResourceFlag: string = CKey.kResourceFlag;
  public static kClipKeyVolume: string = CKey.kClipKeyVolume;
  public static kClipKeyIndex: string = CKey.kClipKeyIndex;
  public static kClipKeySameCacheInOneTrackFlag: string = CKey.kClipKeySameCacheInOneTrackFlag;
  public static kClipKeyResFlag: string = CKey.kClipKeyResFlag;

  public static kTrackKeyType: string = CKey.kTrackKeyType;
  public static kTrackKeySourceType: string = CKey.kTrackKeySourceType;
  public static kTrackKeyClips: string = CKey.kTrackKeyClips;
  public static kTrackKeyDuration: string = CKey.kTrackKeyDuration;
  public static kTrackKeyFlag: string = CKey.kTrackKeyFlag;
  public static kTrackKeyId: string = CKey.kTrackKeyId;

  public static kPanelKeyId: string = CKey.kPanelKeyId;
  public static kPanelKeyConfig: string = CKey.kPanelKeyConfig;
  public static kPanelKeyName: string = CKey.kPanelKeyName;
  public static kPanelKeyTrack: string = CKey.kPanelKeyTrack;
  public static kPanelKeySource: string = CKey.kPanelKeySource;
  public static kPanelKeyMaterial: string = CKey.kPanelKeyMaterial;

  public static kKeyName: string = CKey.kKeyName;
  public static kConfigKeyWidth: string = CKey.kConfigKeyWidth;
  public static kConfigKeyHeight: string = CKey.kConfigKeyHeight;
  public static kConfigKeyScaleType: string = CKey.kConfigKeyScaleType;
  public static kConfigKeyCreateTime: string = CKey.kConfigKeyCreateTime;
  public static kConfigKeyCreateVersionCode: string = CKey.kConfigKeyCreateVersionCode;
  public static kConfigKeyUpdateTime: string = CKey.kConfigKeyUpdateTime;
  public static kConfigKeyUpdateVersionCode: string = CKey.kConfigKeyUpdateVersionCode;
  public static kConfigKeyIsFromTemplate: string = CKey.kConfigKeyIsFromTemplate;
  public static kConfigKeyBackground: string = CKey.kConfigKeyBackground;

  public static kMaterialKeyId: string = CKey.kMaterialKeyId;
  public static kMaterialKeyTypeName: string = CKey.kMaterialKeyTypeName;
  public static kMaterialKeyResourceId: string = CKey.kMaterialKeyResourceId;
  public static kMaterialKeyMainResId: string = C.ResIdKey("MainResId");
  public static kMaterialKeyBgColor: string = CKey.kMaterialKeyBgColor;
  public static kMaterialKeyMode: string = CKey.kMaterialKeyMode;
  public static kMaterialKeyIsSelect: string = CKey.kMaterialKeyIsSelect;
  public static kMaterialKeyRotate: string = CKey.kMaterialKeyRotate;
  public static kMaterialKeyXOffset: string = CKey.kMaterialKeyXOffset;
  public static kMaterialKeyYOffset: string = CKey.kMaterialKeyYOffset;
  public static kMaterialKeyScale: string = CKey.kMaterialKeyScale;
  public static kMaterialKeyXScale: string = CKey.kMaterialKeyXScale;
  public static kMaterialKeyYScale: string = CKey.kMaterialKeyYScale;
  public static kMaterialKeyXAnchor: string = CKey.kMaterialKeyXAnchor;
  public static kMaterialKeyYAnchor: string = CKey.kMaterialKeyYAnchor;
  public static kMaterialKeyScaleType: string = CKey.kMaterialKeyScaleType;
  public static kMaterialKeyBlendType: string = CKey.kMaterialKeyBlendType;
  public static kMaterialKeyIntensity: string = CKey.kMaterialKeyIntensity;
  public static kMaterialKeySubType: string = CKey.kMaterialKeySubType;
  public static kMaterialKeyRevert: string = CKey.kMaterialKeyRevert;
  public static kMaterialKeyMaskInfo: string = CKey.kMaterialKeyMaskInfo;
  public static kMaterialKeyParam: string = CKey.kMaterialKeyParam;
  public static kMaterialKeyLuminance: string = CKey.kMaterialKeyLuminance;
  public static kMaterialKeyContrast: string = CKey.kMaterialKeyContrast;
  public static kMaterialKeySaturation: string = CKey.kMaterialKeySaturation;
  public static kMaterialKeySharpen: string = CKey.kMaterialKeySharpen;
  public static kMaterialKeyHighlight: string = CKey.kMaterialKeyHighlight;
  public static kMaterialKeyShadow: string = CKey.kMaterialKeyShadow;
  public static kMaterialKeyColorTemp: string = CKey.kMaterialKeyColorTemp;
  public static kMaterialKeyHue: string = CKey.kMaterialKeyHue;
  public static kMaterialKeyFade: string = CKey.kMaterialKeyFade;
  public static kMaterialKeyDurationUs: string = CKey.kMaterialKeyDurationUs;
  public static kMaterialKeyWidth: string = CKey.kMaterialKeyWidth;
  public static kMaterialKeyHeight: string = CKey.kMaterialKeyHeight;
  public static kMaterialKeyNormalizeFlag: string = CKey.kMaterialKeyNormalizeFlag;
  public static kMaterialKeyRotateFlag: string = CKey.kMaterialKeyRotateFlag;
  public static kMaterialKeyUseSDF: string = CKey.kMaterialKeyUseSDF;

  public static kTextContent: string = CKey.kTextContent;
  public static kTextShadowOffsetX: string = CKey.kTextShadowOffsetX;
  public static kTextShadowOffsetY: string = CKey.kTextShadowOffsetY;
  public static kTextFontSize: string = CKey.kTextFontSize;
  public static kTextAnchorX: string = CKey.kTextAnchorX;
  public static kTextAnchorY: string = CKey.kTextAnchorY;
  public static kTextPosX: string = CKey.kTextPosX;
  public static kTextPosY: string = CKey.kTextPosY;
  public static kTextOutlineSize: string = CKey.kTextOutlineSize;
  public static kTextAlignmentH: string = CKey.kTextAlignmentH;
  public static kTextAlignmentV: string = CKey.kTextAlignmentV;
  public static kTextShadowColor: string = CKey.kTextShadowColor;
  public static kTextShadowEnable: string = CKey.kTextShadowEnable;
  public static kTextTextColor: string = CKey.kTextTextColor;
  public static kTextOutlineColor: string = CKey.kTextOutlineColor;
  public static kTextOutlineEnable: string = CKey.kTextOutlineEnable;
  public static kTextBold: string = CKey.kTextBold;
  public static kTextItalics: string = CKey.kTextItalics;
  public static kTextUnderline: string = CKey.kTextUnderline;
  public static kTextFontFile: string = CKey.kTextFontFile;
  public static kTextWorldSpace: string = CKey.kTextWorldSpace;
  public static kTextColorfulConfig: string = CKey.kTextColorfulConfig;
  public static kTextExtraClipId: string = CKey.kTextExtraClipId;
  public static kExtraClipId: string = CKey.kExtraClipId;

  public static kAudioTimbre: string = CKey.kAudioTimbre;

  // todo 使用同样的宏拼接，render_plugins_def.h
  public static kContentWidth: string = C.OutputKey("width");
  public static kContentHeight: string = C.OutputKey("height");

  public static kSourceKeyId: string = CKey.kSourceKeyId;
  public static kSourceKeyPath: string = CKey.kSourceKeyPath;
  public static kSourceKeyOutputPath: string = CKey.kSourceKeyOutputPath;
  public static kSourceKeyType: string = CKey.kSourceKeyType;
  public static kSourceKeyExtraType: string = CKey.kSourceKeyExtraType;
  public static kSourceKeySubclass: string = CKey.kSourceKeySubclass;
  public static kSourceKeyHasAudio: string = CKey.kSourceKeyHasAudio;
  public static kSourceKeyHasVideo: string = CKey.kSourceKeyHasVideo;
  public static kSourceKeyVideoMime: string = CKey.kSourceKeyVideoMime;
  public static kSourceKeyAudioMime: string = CKey.kSourceKeyAudioMime;
  public static kSourceKeyAudioSampleRate: string = CKey.kSourceKeyAudioSampleRate;
  public static kSourceKeyAudioChannelCount: string = CKey.kSourceKeyAudioChannelCount
  public static kSourceKeyAudioDuration: string = CKey.kSourceKeyAudioDuration;
  public static kSourceKeyVideoWidth: string = CKey.kSourceKeyVideoWidth;
  public static kSourceKeyVideoHeight: string = CKey.kSourceKeyVideoHeight;
  public static kSourceKeyVideoDuration: string = CKey.kSourceKeyVideoDuration;
  public static kSourceKeyVideoRotation: string = CKey.kSourceKeyVideoRotation;
  public static kSourceKeyMinDurationUs: string = CKey.kSourceKeyMinDurationUs;
  public static kSourceKeyMaxDurationUs: string = CKey.kSourceKeyMaxDurationUs;
  public static kSourceKeyVersion: string = CKey.kSourceKeyVersion;
  public static kSourceKeyRemoteId: string = CKey.kSourceKeyRemoteId;
  public static kSourceKeyValue: string = CKey.kSourceKeyValue;
  public static kSourceKeyFlag: string = CKey.kSourceKeyFlag;
  public static kSourceKeyName: string = CKey.kSourceKeyName;
  public static kSourceKeyTexType: string = CKey.kSourceKeyTexType;
  public static kSourceKeyEffectType: string = CKey.kSourceKeyEffectType;
  public static kSourceLimitDurationUs: string = CKey.kSourceLimitDurationUs;

  public static kActionKeySplitTime: string = CKey.kActionKeySplitTime;
  public static kActionKeyTargetTrackId: string = CKey.kActionKeyTargetTrackId;
  public static kActionKeyNewTrack: string = CKey.kActionKeyNewTrack;

  public static kResKeyMediaDuration: string = CKey.kResKeyMediaDuration;
  public static kResKeyMediaWidth: string = CKey.kResKeyMediaWidth;
  public static kResKeyMediaHeight: string = CKey.kResKeyMediaHeight;
  public static kResKeyMediaFps: string = CKey.kResKeyMediaFps;
  public static kResKeyPath: string = CKey.kResKeyPath;
  public static kResKeyFullKeyFrame: string = CKey.kResKeyFullKeyFrame;
  public static kResKeyDesc: string = CKey.kResKeyDesc;
  public static kResKeyMapping: string = CKey.kResKeyMapping;
  public static kResKeyBinding: string = CKey.kResKeyBinding;
  public static kResKeyShadow: string = CKey.kResKeyShadow;

  public static kExporterFrameRate: string = CKey.kExporterFrameRate;
  public static kExporterScaleType: string = CKey.kExporterScaleType;
  public static kExporterVideoHeight: string = CKey.kExporterVideoHeight;
  public static kExporterVideoWidth: string = CKey.kExporterVideoWidth;
  public static kExporterVideoBps: string = CKey.kExporterVideoBps;
  public static kExporterVideoFps: string = CKey.kExporterVideoFps;
  public static kExporterVideoIfi: string = CKey.kExporterVideoIfi;
  public static kExporterAudioFrequency: string = CKey.kExporterAudioFrequency;
  public static kExporterAudioEncoding: string = CKey.kExporterAudioEncoding;
  public static kExporterAudioChannel: string = CKey.kExporterAudioChannel;
  public static kExporterAudioSource: string = CKey.kExporterAudioSource;
  public static kExporterAudioBps: string = CKey.kExporterAudioBps;
  public static kExporterOutputPath: string = CKey.kExporterOutputPath;
  public static kExporterWorkPath: string = CKey.kExporterWorkPath;
  public static kVideoEncodeSpeed: string = CKey.kVideoEncodeSpeed;
  public static kAudioEncodeSpeed: string = CKey.kAudioEncodeSpeed;
  public static kVideoSoftwareCodec: string = CKey.kVideoSoftwareCodec;
  public static kExporterVideoEncodeFormat: string = CKey.kExporterVideoEncodeFormat;

  public static kEditingIsFastMode: string = C.TempKey("IsFastMode");
  public static kEditingClipSourceId: string = C.TempKey("ClipSourceId");


  public static AttachInnerKey(prefix: string, name: string): string {
    return `_${prefix}_${name}_`
  }
  public static InnerKey(name: string): string {
    return C.kInnerPrefix + name;
  }

  public static ResIdKey(name: string): string {
    return C.kResIdPrefix + name;
  }

  public static TempKey(name: string): string {
    return C.kTempPrefix + name;
  }

  public static OutputKey(name: string): string {
    return C.kOutputPrefix + name;
  }
}
