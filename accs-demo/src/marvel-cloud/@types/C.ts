export enum CKey {
  kSourceKeyId = 'id',
  kSourceKeyPath = 'path',
  kSourceKeyOutputPath = 'outputPath',
  kSourceKeyType = 'type',
  kSourceKeyExtraType = 'extraType',
  kSourceKeySubclass = 'subclass',
  kSourceKeyHasAudio = 'hasAudio',
  kSourceKeyHasVideo = 'hasVideo',
  kSourceKeyVideoMime = 'videoMime',
  kSourceKeyAudioMime = 'audioMime',
  kSourceKeyAudioSampleRate = 'audioSampleRate',
  kSourceKeyAudioChannelCount = 'audioChannelCount',
  kSourceKeyAudioDuration = 'audioDurationUs',
  kSourceKeyVideoWidth = 'videoWidth',
  kSourceKeyVideoHeight = 'videoHeight',
  kSourceKeyVideoDuration = 'videoDurationUs',
  kSourceKeyVideoRotation = 'videoRotation',
  kSourceKeyMinDurationUs = 'minDurationUs',
  kSourceKeyMaxDurationUs = 'maxDurationUs',
  kSourceKeyVersion = 'version',
  kSourceKeyRemoteId = 'remoteId',
  kSourceKeyValue = 'value',
  kSourceKeyFlag = 'flag',
  kSourceKeyName = 'name',
  kSourceKeyTexType = 'texType',
  kSourceKeyEffectType = 'effectType',
  kSourceLimitDurationUs = 'limitDurationUs',

  kResMedia = 'resMedia',
  kResImage = 'resImage',
  kResExtra = 'resExtra',


  kInnerPrefix = '_InnerKey_',
  kPathPrefix = '_PathKey_',
  kResIdPrefix = '_ResIdKey_',
  kOutputPrefix = '_OutputKey_',
  kTempPrefix = '_TempKey_',


  kResTypeImage = 'resImage',
  kResTypeMedia = 'resMedia',
  kResTypeLookup = 'resLookup',
  kResTypeSticker = 'resSticker',
  kResTypeMagic = 'resMagic',
  kResTypeFont = 'resFont',
  kResTypeExtra = 'resExtra',

  kClipMain = 'main',
  kClipPip = 'pip',
  kClipMusic = 'music',
  kClipBgMusic = 'bgMusic',
  kClipSticker = 'sticker',
  kClipEffect = 'effect',
  kClipLookup = 'lookup',
  kClipCustomize = 'customize',
  kClipText = 'text',
  kGroup = 'group',
  kAll = 'all',

  kMaterialTypeCanvas = 'canvas',
  kMaterialTypeSticker = 'sticker',
  kMaterialTypeLookup = 'lookup',
  kMaterialTypeTransition = 'transition',
  kMaterialTypeText = 'text',
  kMaterialTypeCrop = 'crop',
  kMaterialTypeMask = 'mask',
  kMaterialTypeExtension = 'extension',

  kPropertyConfig = 'config',
  kPropertyClipBase = 'clip',
  kPropertyCanvas = 'canvas',
  kPropertyLookup = 'lookup',
  kPropertyText = 'text',
  kPropertyTextShape = 'textShape',
  kPropertyTextAnnimation = 'textAnimation',
  kPropertySticker = 'sticker',
  kPropertyTransition = 'transition',
  kPropertyMask = 'mask',
  kPropertyExtension = 'extension',

  kKeyAudioTrackIndex = 'indexAudio',
  kKeyVideoTrackIndex = 'videoIndex',
  kKeyTrackIndex = 'trackIndex',

  kKcType = 'clipType',
  kKcSpeed = 'clipSpeed',
  kKcSourceStart = 'clipSourceStart',
  kKcSourceStop = 'clipSourceStop',
  kKcPlayStart = 'clipPlayStart',
  kKcPlayStop = 'clipPlayStop',
  kKcResource = 'clipResId',

  kParamActionType = 'actionType',
  kActionAdd = 'actionAdd',
  kActionModify = 'actionModify',
  kActionQuery = 'actionQuery',
  kActionDelete = 'actionDelete',

  kPropertyType = 'propertyType',
  kTransformProperty = 'transformProperty',
  kBaseTextProperty = 'baseTextProperty',

  kAtClip = 'attachClip',
  kAtTrack = 'attachTrack',
  kAtPanel = 'attachPanel',
  kAtAll = 'attachGlobal',

  kActionEditCrop = 'actionEditCrop',
  kActionAlbumCrop = 'actionAlbumCrop',
  kActionEffectFilter = 'actionEffectFilter',
  kActionEffectTime = 'actionEffectTime',
  kActionEffectSticker = 'actionEffectSticker',
  kActionEffectText = 'actionEffectText',
  kActionSound = 'actionSound',

  kClipDel = 'Delete',
  kClipSplit = 'Split',
  kClipSpeed = 'Speed',
  kClipScale = 'Transform',
  kClipTranslate = 'Transform',
  kClipRotate = 'Transform',

  kClipKeyId = 'clipId',
  kClipKeyParentId = 'parentId',
  kClipKeyType = 'type',
  kClipKeyResId = 'resId',
  kClipKeyResType = 'resType',
  kClipKeySourceStartTime = 'sourceStartTime',
  kClipKeySourceEndTime = 'sourceEndTime',
  kClipKeyClipStartTime = 'clipStartTime',
  kClipKeyClipEndTime = 'clipEndTime',
  kClipKeyFlag = 'flag',
  kClipKeySpeed = 'speed',
  kClipKeyRevert = 'revert',
  kClipKeyMaterial = 'materials',
  kResourceKeyPath = 'path',
  kResourceFlag = 'resourceFlag',
  kClipKeyVolume = 'volume',
  kClipKeyIndex = 'index',
  kClipKeySameCacheInOneTrackFlag = 'sameCacheFlag',
  kClipKeyResFlag = 'resFlag',

  kTrackKeyType = 'type',
  kTrackKeySourceType = 'sourceType',
  kTrackKeyClips = 'clips',
  kTrackKeyDuration = 'durationUs',
  kTrackKeyFlag = 'flag',
  kTrackKeyId = 'trackId',

  kPanelKeyId = 'id',
  kPanelKeyConfig = 'config',
  kPanelKeyName = 'name',
  kPanelKeyTrack = 'tracks',
  kPanelKeySource = 'sources',
  kPanelKeyMaterial = 'materials',

  kKeyName = 'name',
  kConfigKeyWidth = 'width',
  kConfigKeyHeight = 'height',
  kConfigKeyScaleType = 'scaleType',
  kConfigKeyCreateTime = 'createTimeMs',
  kConfigKeyCreateVersionCode = 'createVersion',
  kConfigKeyUpdateTime = 'updateTimeMs',
  kConfigKeyUpdateVersionCode = 'updateVersion',
  kConfigKeyIsFromTemplate = 'isFromTemplate',
  kConfigKeyBackground = 'background',

  kMaterialKeyId = 'id',
  kMaterialKeyTypeName = 'typeName',
  kMaterialKeyResourceId = 'resourceId',
  kMaterialKeyBgColor = 'bgColor',
  kMaterialKeyMode = 'mode',
  kMaterialKeyIsSelect = 'isSelect',
  kMaterialKeyRotate = 'rotate',
  kMaterialKeyXOffset = 'xOffset',
  kMaterialKeyYOffset = 'yOffset',
  kMaterialKeyScale = 'scale',
  kMaterialKeyXScale = 'xScale',
  kMaterialKeyYScale = 'yScale',
  kMaterialKeyXAnchor = 'xAnchor',
  kMaterialKeyYAnchor = 'yAnchor',
  kMaterialKeyScaleType = 'scaleType',
  kMaterialKeyBlendType = 'blendType',
  kMaterialKeyIntensity = 'intensity',
  kMaterialKeySubType = 'subType',
  kMaterialKeyRevert = 'revert',
  kMaterialKeyMaskInfo = 'maskInfo',
  kMaterialKeyParam = 'param',
  kMaterialKeyLuminance = 'luminance',
  kMaterialKeyContrast = 'contrast',
  kMaterialKeySaturation = 'saturation',
  kMaterialKeySharpen = 'sharpen',
  kMaterialKeyHighlight = 'highlight',
  kMaterialKeyShadow = 'shadow',
  kMaterialKeyColorTemp = 'colorTemp',
  kMaterialKeyHue = 'hue',
  kMaterialKeyFade = 'fade',
  kMaterialKeyDurationUs = 'durationUs',
  kMaterialKeyWidth = 'width',
  kMaterialKeyHeight = 'height',
  kMaterialKeyNormalizeFlag = 'isNormalize',
  kMaterialKeyRotateFlag = 'rotateFlag',
  kMaterialKeyUseSDF = 'sdf',

  kTextContent = 'Content',
  kTextShadowOffsetX = 'ShadowOffsetX',
  kTextShadowOffsetY = 'ShadowOffsetY',
  kTextFontSize = 'FontSize',
  kTextAnchorX = 'AnchorX',
  kTextAnchorY = 'AnchorY',
  kTextPosX = 'PosX',
  kTextPosY = 'PosY',
  kTextOutlineSize = 'OutlineSize',
  kTextAlignmentH = 'AlignmentH',
  kTextAlignmentV = 'AlignmentV',
  kTextShadowColor = 'ShadowColor',
  kTextShadowEnable = 'ShadowEnable',
  kTextTextColor = 'TextColor',
  kTextOutlineColor = 'OutlineColor',
  kTextOutlineEnable = 'OutlineEnable',
  kTextBold = 'Bold',
  kTextItalics = 'Italics',
  kTextUnderline = 'Underline',
  kTextFontFile = 'FontFile',
  kTextWorldSpace = 'worldSpace',
  kTextColorfulConfig = 'ColorfulConfig',
  kTextExtraClipId = 'extraClipId',
  kExtraClipId = 'extraClipId',

  kAudioTimbre = 'timbre',

  kActionKeySplitTime = 'splitTime',
  kActionKeyTargetTrackId = 'targetTrackId',
  kActionKeyNewTrack = 'newTrack',

  kResKeyMediaDuration = 'durationUs',
  kResKeyMediaWidth = 'width',
  kResKeyMediaHeight = 'height',
  kResKeyMediaFps = 'fps',
  kResKeyPath = 'path',
  kResKeyFullKeyFrame = 'resFullKeyFrame',
  kResKeyDesc = 'desc',
  kResKeyMapping = 'mapping',
  kResKeyBinding = 'binding',
  kResKeyShadow = 'shadow',

  kExporterFrameRate = 'frameRate',
  kExporterScaleType = 'scaleType',
  kExporterVideoHeight = 'VideoHeight',
  kExporterVideoWidth = 'VideoWidth',
  kExporterVideoBps = 'VideoBps',
  kExporterVideoFps = 'VideoFps',
  kExporterVideoIfi = 'VideoIfi',
  kExporterAudioFrequency = 'AudioFrequency',
  kExporterAudioEncoding = 'AudioEncoding',
  kExporterAudioChannel = 'AudioChannel',
  kExporterAudioSource = 'AudioSource',
  kExporterAudioBps = 'AudioBps',
  kExporterOutputPath = 'outputPath',
  kExporterWorkPath = 'workPath',
  kVideoEncodeSpeed = 'VideoEncodeSpeed',
  kAudioEncodeSpeed = 'AudioEncodeSpeed',
  kVideoSoftwareCodec = 'VideoEncodeSoftwareCodec',
  kExporterVideoEncodeFormat = 'video_format',
}

/**
 * @reference Tixel/marvel/Platform/Android/MarvelLib/src/main/java/com/alibaba/marvel/C.java
 */
export default class C {
  static kResMedia: string = CKey.kResMedia;
  static kResImage: string = CKey.kResImage;
  static kResExtra: string = CKey.kResExtra;


  static kInnerPrefix: string = CKey.kInnerPrefix;
  static kPathPrefix: string = CKey.kPathPrefix;
  static kResIdPrefix: string = CKey.kResIdPrefix;
  static kOutputPrefix: string = CKey.kOutputPrefix;
  static kTempPrefix: string = CKey.kTempPrefix;

  static kTypeName: string = C.InnerKey('Name');
  static kRendererPriority: string = C.InnerKey('Priority');
  static kRequireExtraTexture: string = C.InnerKey('RequireExtraTexture');
  static kEffectParamDesc: string = C.InnerKey('EffectParamDesc');
  static kRendererPluginsName: string = C.InnerKey('RendererPluginsName');
  static kResourcePath: string = C.InnerKey('EffectResource');
  static kResourceEmbeddedPath: string = C.TempKey('EffectResourceEmbedded');
  static kClipPropertyDesc: string = C.TempKey('PropertyDesc');

  static kResTypeImage: string = CKey.kResTypeImage;
  static kResTypeMedia: string = CKey.kResTypeMedia;
  static kResTypeLookup: string = CKey.kResTypeLookup;
  static kResTypeSticker: string = CKey.kResTypeSticker;
  static kResTypeMagic: string = CKey.kResTypeMagic;
  static kResTypeFont: string = CKey.kResTypeFont;
  static kResTypeExtra: string = CKey.kResTypeExtra;

  static kClipMain: string = CKey.kClipMain;
  static kClipPip: string = CKey.kClipPip;
  static kClipMusic: string = CKey.kClipMusic;
  static kClipBgMusic: string = CKey.kClipBgMusic;
  static kClipSticker: string = CKey.kClipSticker;
  static kClipEffect: string = CKey.kClipEffect;
  static kClipLookup: string = CKey.kClipLookup;
  static kClipCustomize: string = CKey.kClipCustomize;
  static kClipText: string = CKey.kClipText;
  static kGroup: string = CKey.kGroup;
  static kAll: string = CKey.kAll;

  static kMaterialTypeCanvas: string = CKey.kMaterialTypeCanvas;
  static kMaterialTypeSticker: string = CKey.kMaterialTypeSticker;
  static kMaterialTypeLookup: string = CKey.kMaterialTypeLookup;
  static kMaterialTypeTransition: string = CKey.kMaterialTypeTransition;
  static kMaterialTypeText: string = CKey.kMaterialTypeText;
  static kMaterialTypeCrop: string = CKey.kMaterialTypeCrop;
  static kMaterialTypeMask: string = CKey.kMaterialTypeMask;
  static kMaterialTypeExtension: string = CKey.kMaterialTypeExtension;

  static kPropertyConfig: string = CKey.kPropertyConfig;
  static kPropertyClipBase: string = CKey.kPropertyClipBase;
  static kPropertyCanvas: string = CKey.kPropertyCanvas;
  static kPropertyLookup: string = CKey.kPropertyLookup;
  static kPropertyText: string = CKey.kPropertyText;
  static kPropertySticker: string = CKey.kPropertySticker;
  static kPropertyTransition: string = CKey.kPropertyTransition;
  static kPropertyMask: string = CKey.kPropertyMask;
  static kPropertyExtension: string = CKey.kPropertyExtension;

  static kKeyAudioTrackIndex: string = CKey.kKeyAudioTrackIndex;
  static kKeyVideoTrackIndex: string = CKey.kKeyVideoTrackIndex;
  static kKeyTrackIndex: string = CKey.kKeyTrackIndex;

  static kKcType: string = CKey.kKcType;
  static kKcSpeed: string = CKey.kKcSpeed;
  static kKcSourceStart: string = CKey.kKcSourceStart;
  static kKcSourceStop: string = CKey.kKcSourceStop;
  static kKcPlayStart: string = CKey.kKcPlayStart;
  static kKcPlayStop: string = CKey.kKcPlayStop;
  static kKcResource: string = CKey.kKcResource;

  static kParamActionType: string = CKey.kParamActionType;
  static kActionAdd: string = CKey.kActionAdd;
  static kActionModify: string = CKey.kActionModify;
  static kActionQuery: string = CKey.kActionQuery;
  static kActionDelete: string = CKey.kActionDelete;

  static kPropertyType: string = CKey.kPropertyType;
  static kTransformProperty: string = CKey.kTransformProperty;
  static kBaseTextProperty: string = CKey.kBaseTextProperty;

  static kAtClip: string = CKey.kAtClip;
  static kAtTrack: string = CKey.kAtTrack;
  static kAtPanel: string = CKey.kAtPanel;
  static kAtAll: string = CKey.kAtAll;

  static kActionEditCrop: string = CKey.kActionEditCrop;
  static kActionAlbumCrop: string = CKey.kActionAlbumCrop;
  static kActionEffectFilter: string = CKey.kActionEffectFilter;
  static kActionEffectTime: string = CKey.kActionEffectTime;
  static kActionEffectSticker: string = CKey.kActionEffectSticker;
  static kActionEffectText: string = CKey.kActionEffectText;
  static kActionSound: string = CKey.kActionSound;

  static kClipDel: string = CKey.kClipDel;
  static kClipSplit: string = CKey.kClipSplit;
  static kClipSpeed: string = CKey.kClipSpeed;
  static kClipScale: string = CKey.kClipScale;
  static kClipTranslate: string = CKey.kClipTranslate;
  static kClipRotate: string = CKey.kClipRotate;

  static kClipKeyId: string = CKey.kClipKeyId;
  static kClipKeyParentId: string = CKey.kClipKeyParentId;
  static kClipKeyType: string = CKey.kClipKeyType;
  static kClipKeyResId: string = CKey.kClipKeyResId;
  static kClipKeyResType: string = CKey.kClipKeyResType;
  static kClipKeySourceStartTime: string = CKey.kClipKeySourceStartTime;
  static kClipKeySourceEndTime: string = CKey.kClipKeySourceEndTime;
  static kClipKeyClipStartTime: string = CKey.kClipKeyClipStartTime;
  static kClipKeyClipEndTime: string = CKey.kClipKeyClipEndTime;
  static kClipKeyFlag: string = CKey.kClipKeyFlag;
  static kClipKeySpeed: string = CKey.kClipKeySpeed;
  static kClipKeyRevert: string = CKey.kClipKeyRevert;
  static kClipKeyMaterial: string = CKey.kClipKeyMaterial;
  static kResourceKeyPath: string = CKey.kResourceKeyPath;
  static kResourceFlag: string = CKey.kResourceFlag;
  static kClipKeyVolume: string = CKey.kClipKeyVolume;
  static kClipKeyIndex: string = CKey.kClipKeyIndex;
  static kClipKeySameCacheInOneTrackFlag: string = CKey.kClipKeySameCacheInOneTrackFlag;
  static kClipKeyResFlag: string = CKey.kClipKeyResFlag;

  static kTrackKeyType: string = CKey.kTrackKeyType;
  static kTrackKeySourceType: string = CKey.kTrackKeySourceType;
  static kTrackKeyClips: string = CKey.kTrackKeyClips;
  static kTrackKeyDuration: string = CKey.kTrackKeyDuration;
  static kTrackKeyFlag: string = CKey.kTrackKeyFlag;
  static kTrackKeyId: string = CKey.kTrackKeyId;

  static kPanelKeyId: string = CKey.kPanelKeyId;
  static kPanelKeyConfig: string = CKey.kPanelKeyConfig;
  static kPanelKeyName: string = CKey.kPanelKeyName;
  static kPanelKeyTrack: string = CKey.kPanelKeyTrack;
  static kPanelKeySource: string = CKey.kPanelKeySource;
  static kPanelKeyMaterial: string = CKey.kPanelKeyMaterial;

  static kKeyName: string = CKey.kKeyName;
  static kConfigKeyWidth: string = CKey.kConfigKeyWidth;
  static kConfigKeyHeight: string = CKey.kConfigKeyHeight;
  static kConfigKeyScaleType: string = CKey.kConfigKeyScaleType;
  static kConfigKeyCreateTime: string = CKey.kConfigKeyCreateTime;
  static kConfigKeyCreateVersionCode: string = CKey.kConfigKeyCreateVersionCode;
  static kConfigKeyUpdateTime: string = CKey.kConfigKeyUpdateTime;
  static kConfigKeyUpdateVersionCode: string = CKey.kConfigKeyUpdateVersionCode;
  static kConfigKeyIsFromTemplate: string = CKey.kConfigKeyIsFromTemplate;
  static kConfigKeyBackground: string = CKey.kConfigKeyBackground;

  static kMaterialKeyId: string = CKey.kMaterialKeyId;
  static kMaterialKeyTypeName: string = CKey.kMaterialKeyTypeName;
  static kMaterialKeyResourceId: string = CKey.kMaterialKeyResourceId;
  static kMaterialKeyMainResId: string = C.ResIdKey('MainResId');
  static kMaterialKeyBgColor: string = CKey.kMaterialKeyBgColor;
  static kMaterialKeyMode: string = CKey.kMaterialKeyMode;
  static kMaterialKeyIsSelect: string = CKey.kMaterialKeyIsSelect;
  static kMaterialKeyRotate: string = CKey.kMaterialKeyRotate;
  static kMaterialKeyXOffset: string = CKey.kMaterialKeyXOffset;
  static kMaterialKeyYOffset: string = CKey.kMaterialKeyYOffset;
  static kMaterialKeyScale: string = CKey.kMaterialKeyScale;
  static kMaterialKeyXScale: string = CKey.kMaterialKeyXScale;
  static kMaterialKeyYScale: string = CKey.kMaterialKeyYScale;
  static kMaterialKeyXAnchor: string = CKey.kMaterialKeyXAnchor;
  static kMaterialKeyYAnchor: string = CKey.kMaterialKeyYAnchor;
  static kMaterialKeyScaleType: string = CKey.kMaterialKeyScaleType;
  static kMaterialKeyBlendType: string = CKey.kMaterialKeyBlendType;
  static kMaterialKeyIntensity: string = CKey.kMaterialKeyIntensity;
  static kMaterialKeySubType: string = CKey.kMaterialKeySubType;
  static kMaterialKeyRevert: string = CKey.kMaterialKeyRevert;
  static kMaterialKeyMaskInfo: string = CKey.kMaterialKeyMaskInfo;
  static kMaterialKeyParam: string = CKey.kMaterialKeyParam;
  static kMaterialKeyLuminance: string = CKey.kMaterialKeyLuminance;
  static kMaterialKeyContrast: string = CKey.kMaterialKeyContrast;
  static kMaterialKeySaturation: string = CKey.kMaterialKeySaturation;
  static kMaterialKeySharpen: string = CKey.kMaterialKeySharpen;
  static kMaterialKeyHighlight: string = CKey.kMaterialKeyHighlight;
  static kMaterialKeyShadow: string = CKey.kMaterialKeyShadow;
  static kMaterialKeyColorTemp: string = CKey.kMaterialKeyColorTemp;
  static kMaterialKeyHue: string = CKey.kMaterialKeyHue;
  static kMaterialKeyFade: string = CKey.kMaterialKeyFade;
  static kMaterialKeyDurationUs: string = CKey.kMaterialKeyDurationUs;
  static kMaterialKeyWidth: string = CKey.kMaterialKeyWidth;
  static kMaterialKeyHeight: string = CKey.kMaterialKeyHeight;
  static kMaterialKeyNormalizeFlag: string = CKey.kMaterialKeyNormalizeFlag;
  static kMaterialKeyRotateFlag: string = CKey.kMaterialKeyRotateFlag;
  static kMaterialKeyUseSDF: string = CKey.kMaterialKeyUseSDF;

  static kTextContent: string = CKey.kTextContent;
  static kTextShadowOffsetX: string = CKey.kTextShadowOffsetX;
  static kTextShadowOffsetY: string = CKey.kTextShadowOffsetY;
  static kTextFontSize: string = CKey.kTextFontSize;
  static kTextAnchorX: string = CKey.kTextAnchorX;
  static kTextAnchorY: string = CKey.kTextAnchorY;
  static kTextPosX: string = CKey.kTextPosX;
  static kTextPosY: string = CKey.kTextPosY;
  static kTextOutlineSize: string = CKey.kTextOutlineSize;
  static kTextAlignmentH: string = CKey.kTextAlignmentH;
  static kTextAlignmentV: string = CKey.kTextAlignmentV;
  static kTextShadowColor: string = CKey.kTextShadowColor;
  static kTextShadowEnable: string = CKey.kTextShadowEnable;
  static kTextTextColor: string = CKey.kTextTextColor;
  static kTextOutlineColor: string = CKey.kTextOutlineColor;
  static kTextOutlineEnable: string = CKey.kTextOutlineEnable;
  static kTextBold: string = CKey.kTextBold;
  static kTextItalics: string = CKey.kTextItalics;
  static kTextUnderline: string = CKey.kTextUnderline;
  static kTextFontFile: string = CKey.kTextFontFile;
  static kTextWorldSpace: string = CKey.kTextWorldSpace;
  static kTextColorfulConfig: string = CKey.kTextColorfulConfig;
  static kTextExtraClipId: string = CKey.kTextExtraClipId;
  static kExtraClipId: string = CKey.kExtraClipId;

  static kAudioTimbre: string = CKey.kAudioTimbre;

  // todo 使用同样的宏拼接，render_plugins_def.h
  static kContentWidth: string = C.OutputKey('width');
  static kContentHeight: string = C.OutputKey('height');

  static kSourceKeyId: string = CKey.kSourceKeyId;
  static kSourceKeyPath: string = CKey.kSourceKeyPath;
  static kSourceKeyOutputPath: string = CKey.kSourceKeyOutputPath;
  static kSourceKeyType: string = CKey.kSourceKeyType;
  static kSourceKeyExtraType: string = CKey.kSourceKeyExtraType;
  static kSourceKeySubclass: string = CKey.kSourceKeySubclass;
  static kSourceKeyHasAudio: string = CKey.kSourceKeyHasAudio;
  static kSourceKeyHasVideo: string = CKey.kSourceKeyHasVideo;
  static kSourceKeyVideoMime: string = CKey.kSourceKeyVideoMime;
  static kSourceKeyAudioMime: string = CKey.kSourceKeyAudioMime;
  static kSourceKeyAudioSampleRate: string = CKey.kSourceKeyAudioSampleRate;
  static kSourceKeyAudioChannelCount: string = CKey.kSourceKeyAudioChannelCount;
  static kSourceKeyAudioDuration: string = CKey.kSourceKeyAudioDuration;
  static kSourceKeyVideoWidth: string = CKey.kSourceKeyVideoWidth;
  static kSourceKeyVideoHeight: string = CKey.kSourceKeyVideoHeight;
  static kSourceKeyVideoDuration: string = CKey.kSourceKeyVideoDuration;
  static kSourceKeyVideoRotation: string = CKey.kSourceKeyVideoRotation;
  static kSourceKeyMinDurationUs: string = CKey.kSourceKeyMinDurationUs;
  static kSourceKeyMaxDurationUs: string = CKey.kSourceKeyMaxDurationUs;
  static kSourceKeyVersion: string = CKey.kSourceKeyVersion;
  static kSourceKeyRemoteId: string = CKey.kSourceKeyRemoteId;
  static kSourceKeyValue: string = CKey.kSourceKeyValue;
  static kSourceKeyFlag: string = CKey.kSourceKeyFlag;
  static kSourceKeyName: string = CKey.kSourceKeyName;
  static kSourceKeyTexType: string = CKey.kSourceKeyTexType;
  static kSourceKeyEffectType: string = CKey.kSourceKeyEffectType;
  static kSourceLimitDurationUs: string = CKey.kSourceLimitDurationUs;

  static kActionKeySplitTime: string = CKey.kActionKeySplitTime;
  static kActionKeyTargetTrackId: string = CKey.kActionKeyTargetTrackId;
  static kActionKeyNewTrack: string = CKey.kActionKeyNewTrack;

  static kResKeyMediaDuration: string = CKey.kResKeyMediaDuration;
  static kResKeyMediaWidth: string = CKey.kResKeyMediaWidth;
  static kResKeyMediaHeight: string = CKey.kResKeyMediaHeight;
  static kResKeyMediaFps: string = CKey.kResKeyMediaFps;
  static kResKeyPath: string = CKey.kResKeyPath;
  static kResKeyFullKeyFrame: string = CKey.kResKeyFullKeyFrame;
  static kResKeyDesc: string = CKey.kResKeyDesc;
  static kResKeyMapping: string = CKey.kResKeyMapping;
  static kResKeyBinding: string = CKey.kResKeyBinding;
  static kResKeyShadow: string = CKey.kResKeyShadow;

  static kExporterFrameRate: string = CKey.kExporterFrameRate;
  static kExporterScaleType: string = CKey.kExporterScaleType;
  static kExporterVideoHeight: string = CKey.kExporterVideoHeight;
  static kExporterVideoWidth: string = CKey.kExporterVideoWidth;
  static kExporterVideoBps: string = CKey.kExporterVideoBps;
  static kExporterVideoFps: string = CKey.kExporterVideoFps;
  static kExporterVideoIfi: string = CKey.kExporterVideoIfi;
  static kExporterAudioFrequency: string = CKey.kExporterAudioFrequency;
  static kExporterAudioEncoding: string = CKey.kExporterAudioEncoding;
  static kExporterAudioChannel: string = CKey.kExporterAudioChannel;
  static kExporterAudioSource: string = CKey.kExporterAudioSource;
  static kExporterAudioBps: string = CKey.kExporterAudioBps;
  static kExporterOutputPath: string = CKey.kExporterOutputPath;
  static kExporterWorkPath: string = CKey.kExporterWorkPath;
  static kVideoEncodeSpeed: string = CKey.kVideoEncodeSpeed;
  static kAudioEncodeSpeed: string = CKey.kAudioEncodeSpeed;
  static kVideoSoftwareCodec: string = CKey.kVideoSoftwareCodec;
  static kExporterVideoEncodeFormat: string = CKey.kExporterVideoEncodeFormat;

  static kEditingIsFastMode: string = C.TempKey('IsFastMode');
  static kEditingClipSourceId: string = C.TempKey('ClipSourceId');


  static AttachInnerKey(prefix: string, name: string): string {
    return `_${prefix}_${name}_`;
  }
  static InnerKey(name: string): string {
    return C.kInnerPrefix + name;
  }

  static ResIdKey(name: string): string {
    return C.kResIdPrefix + name;
  }

  static TempKey(name: string): string {
    return C.kTempPrefix + name;
  }

  static OutputKey(name: string): string {
    return C.kOutputPrefix + name;
  }
}
