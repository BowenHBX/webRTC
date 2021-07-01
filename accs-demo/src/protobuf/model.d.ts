import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace taobao. */
    namespace taobao {

        /** Namespace multimedia. */
        namespace multimedia {

            /** Namespace biz. */
            namespace biz {

                /** Namespace cloudediting. */
                namespace cloudediting {

                    /** Namespace interfaces. */
                    namespace interfaces {

                        /** Namespace dto. */
                        namespace dto {

                            /** Namespace proto. */
                            namespace proto {

                                /** Properties of a ProtoMessage. */
                                interface IProtoMessage {

                                    /** ProtoMessage msgHeader */
                                    msgHeader?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageHeader|null);

                                    /** ProtoMessage msgContent */
                                    msgContent?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageContent|null);
                                }

                                /** Represents a ProtoMessage. */
                                class ProtoMessage implements IProtoMessage {

                                    /**
                                     * Constructs a new ProtoMessage.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProtoMessage);

                                    /** ProtoMessage msgHeader. */
                                    public msgHeader?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageHeader|null);

                                    /** ProtoMessage msgContent. */
                                    public msgContent?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageContent|null);

                                    /**
                                     * Creates a new ProtoMessage instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ProtoMessage instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProtoMessage): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProtoMessage;

                                    /**
                                     * Encodes the specified ProtoMessage message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProtoMessage.verify|verify} messages.
                                     * @param message ProtoMessage message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProtoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ProtoMessage message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProtoMessage.verify|verify} messages.
                                     * @param message ProtoMessage message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProtoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ProtoMessage message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ProtoMessage
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProtoMessage;

                                    /**
                                     * Decodes a ProtoMessage message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ProtoMessage
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProtoMessage;

                                    /**
                                     * Verifies a ProtoMessage message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ProtoMessage message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ProtoMessage
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProtoMessage;

                                    /**
                                     * Creates a plain object from a ProtoMessage message. Also converts values to other types if specified.
                                     * @param message ProtoMessage
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProtoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ProtoMessage to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a UserSessionInfo. */
                                interface IUserSessionInfo {

                                    /** UserSessionInfo sessionId */
                                    sessionId?: (string|null);

                                    /** UserSessionInfo userId */
                                    userId?: (string|null);

                                    /** UserSessionInfo deviceId */
                                    deviceId?: (string|null);

                                    /** UserSessionInfo streamUrl */
                                    streamUrl?: (string|null);

                                    /** UserSessionInfo msgUrl */
                                    msgUrl?: (string|null);
                                }

                                /** Represents a UserSessionInfo. */
                                class UserSessionInfo implements IUserSessionInfo {

                                    /**
                                     * Constructs a new UserSessionInfo.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IUserSessionInfo);

                                    /** UserSessionInfo sessionId. */
                                    public sessionId: string;

                                    /** UserSessionInfo userId. */
                                    public userId: string;

                                    /** UserSessionInfo deviceId. */
                                    public deviceId: string;

                                    /** UserSessionInfo streamUrl. */
                                    public streamUrl: string;

                                    /** UserSessionInfo msgUrl. */
                                    public msgUrl: string;

                                    /**
                                     * Creates a new UserSessionInfo instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns UserSessionInfo instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IUserSessionInfo): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.UserSessionInfo;

                                    /**
                                     * Encodes the specified UserSessionInfo message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.UserSessionInfo.verify|verify} messages.
                                     * @param message UserSessionInfo message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IUserSessionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified UserSessionInfo message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.UserSessionInfo.verify|verify} messages.
                                     * @param message UserSessionInfo message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IUserSessionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a UserSessionInfo message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns UserSessionInfo
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.UserSessionInfo;

                                    /**
                                     * Decodes a UserSessionInfo message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns UserSessionInfo
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.UserSessionInfo;

                                    /**
                                     * Verifies a UserSessionInfo message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a UserSessionInfo message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns UserSessionInfo
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.UserSessionInfo;

                                    /**
                                     * Creates a plain object from a UserSessionInfo message. Also converts values to other types if specified.
                                     * @param message UserSessionInfo
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.UserSessionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this UserSessionInfo to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EnvelopedResult. */
                                interface IEnvelopedResult {

                                    /** EnvelopedResult userId */
                                    userId?: (string|null);

                                    /** EnvelopedResult deviceId */
                                    deviceId?: (string|null);

                                    /** EnvelopedResult result */
                                    result?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult|null);
                                }

                                /** Represents an EnvelopedResult. */
                                class EnvelopedResult implements IEnvelopedResult {

                                    /**
                                     * Constructs a new EnvelopedResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEnvelopedResult);

                                    /** EnvelopedResult userId. */
                                    public userId: string;

                                    /** EnvelopedResult deviceId. */
                                    public deviceId: string;

                                    /** EnvelopedResult result. */
                                    public result?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult|null);

                                    /**
                                     * Creates a new EnvelopedResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EnvelopedResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEnvelopedResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EnvelopedResult;

                                    /**
                                     * Encodes the specified EnvelopedResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EnvelopedResult.verify|verify} messages.
                                     * @param message EnvelopedResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEnvelopedResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EnvelopedResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EnvelopedResult.verify|verify} messages.
                                     * @param message EnvelopedResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEnvelopedResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EnvelopedResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EnvelopedResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EnvelopedResult;

                                    /**
                                     * Decodes an EnvelopedResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EnvelopedResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EnvelopedResult;

                                    /**
                                     * Verifies an EnvelopedResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EnvelopedResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EnvelopedResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EnvelopedResult;

                                    /**
                                     * Creates a plain object from an EnvelopedResult message. Also converts values to other types if specified.
                                     * @param message EnvelopedResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EnvelopedResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EnvelopedResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a MessageHeader. */
                                interface IMessageHeader {

                                    /** MessageHeader protoVer */
                                    protoVer?: (number|null);

                                    /** MessageHeader sessionId */
                                    sessionId?: (string|null);

                                    /** MessageHeader userId */
                                    userId?: (string|null);
                                }

                                /** Represents a MessageHeader. */
                                class MessageHeader implements IMessageHeader {

                                    /**
                                     * Constructs a new MessageHeader.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageHeader);

                                    /** MessageHeader protoVer. */
                                    public protoVer: number;

                                    /** MessageHeader sessionId. */
                                    public sessionId: string;

                                    /** MessageHeader userId. */
                                    public userId: string;

                                    /**
                                     * Creates a new MessageHeader instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns MessageHeader instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageHeader): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageHeader;

                                    /**
                                     * Encodes the specified MessageHeader message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageHeader.verify|verify} messages.
                                     * @param message MessageHeader message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified MessageHeader message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageHeader.verify|verify} messages.
                                     * @param message MessageHeader message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a MessageHeader message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns MessageHeader
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageHeader;

                                    /**
                                     * Decodes a MessageHeader message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns MessageHeader
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageHeader;

                                    /**
                                     * Verifies a MessageHeader message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a MessageHeader message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns MessageHeader
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageHeader;

                                    /**
                                     * Creates a plain object from a MessageHeader message. Also converts values to other types if specified.
                                     * @param message MessageHeader
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this MessageHeader to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a MessageContent. */
                                interface IMessageContent {

                                    /** MessageContent reqList */
                                    reqList?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommand[]|null);

                                    /** MessageContent rspList */
                                    rspList?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult[]|null);
                                }

                                /** Represents a MessageContent. */
                                class MessageContent implements IMessageContent {

                                    /**
                                     * Constructs a new MessageContent.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageContent);

                                    /** MessageContent reqList. */
                                    public reqList: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommand[];

                                    /** MessageContent rspList. */
                                    public rspList: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult[];

                                    /**
                                     * Creates a new MessageContent instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns MessageContent instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageContent): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageContent;

                                    /**
                                     * Encodes the specified MessageContent message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageContent.verify|verify} messages.
                                     * @param message MessageContent message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageContent, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified MessageContent message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageContent.verify|verify} messages.
                                     * @param message MessageContent message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IMessageContent, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a MessageContent message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns MessageContent
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageContent;

                                    /**
                                     * Decodes a MessageContent message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns MessageContent
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageContent;

                                    /**
                                     * Verifies a MessageContent message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a MessageContent message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns MessageContent
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageContent;

                                    /**
                                     * Creates a plain object from a MessageContent message. Also converts values to other types if specified.
                                     * @param message MessageContent
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MessageContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this MessageContent to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a CommandHeader. */
                                interface ICommandHeader {

                                    /** CommandHeader channelId */
                                    channelId?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader.CHANNEL_ID|null);

                                    /** CommandHeader seqId */
                                    seqId?: (number|Long|null);
                                }

                                /** Represents a CommandHeader. */
                                class CommandHeader implements ICommandHeader {

                                    /**
                                     * Constructs a new CommandHeader.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader);

                                    /** CommandHeader channelId. */
                                    public channelId: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader.CHANNEL_ID;

                                    /** CommandHeader seqId. */
                                    public seqId: (number|Long);

                                    /**
                                     * Creates a new CommandHeader instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns CommandHeader instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader;

                                    /**
                                     * Encodes the specified CommandHeader message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader.verify|verify} messages.
                                     * @param message CommandHeader message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified CommandHeader message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader.verify|verify} messages.
                                     * @param message CommandHeader message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a CommandHeader message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns CommandHeader
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader;

                                    /**
                                     * Decodes a CommandHeader message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns CommandHeader
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader;

                                    /**
                                     * Verifies a CommandHeader message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a CommandHeader message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns CommandHeader
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader;

                                    /**
                                     * Creates a plain object from a CommandHeader message. Also converts values to other types if specified.
                                     * @param message CommandHeader
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.CommandHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this CommandHeader to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                namespace CommandHeader {

                                    /** CHANNEL_ID enum. */
                                    enum CHANNEL_ID {
                                        CHANNEL_UNDEFINED = 0,
                                        CHANNEL_EXECUTE_IN_ORDER = 1,
                                        CHANNEL_EXECUTE_RANDOMLY = 2
                                    }
                                }

                                /** Properties of a Command. */
                                interface ICommand {

                                    /** Command commandHeader */
                                    commandHeader?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader|null);

                                    /** Command forceResp */
                                    forceResp?: (boolean|null);

                                    /** system management,network etc. 100~199 */
                                    SystemRequireResendCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISystemRequireResendCommand|null);

                                    /** session management,200~299 */
                                    sessionCreateNewCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommand|null);

                                    /** Command sessionPrepareRTCCommand */
                                    sessionPrepareRTCCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCCommand|null);

                                    /** Command sessionBeginCommand */
                                    sessionBeginCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionBeginCommand|null);

                                    /** Command sessionKeepaliveCommand */
                                    sessionKeepaliveCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionKeepaliveCommand|null);

                                    /** Command sessionEndCurrentCommand */
                                    sessionEndCurrentCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionEndCurrentCommand|null);

                                    /** Command sessionInvalidCurrentCommand */
                                    sessionInvalidCurrentCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionInvalidCurrentCommand|null);

                                    /** project related, 2000~ 2999 * */
                                    projectLoadCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectLoadCommand|null);

                                    /** Command projectSaveCommand */
                                    projectSaveCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectSaveCommand|null);

                                    /** Command projectNewCommand */
                                    projectNewCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectNewCommand|null);

                                    /** Command projectCloseCommand */
                                    projectCloseCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectCloseCommand|null);

                                    /** editor related, 3000~ 3999 * */
                                    editorUndoCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorUndoCommand|null);

                                    /** Command editorRedoCommand */
                                    editorRedoCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRedoCommand|null);

                                    /** Command editorGetStackSizeCommand */
                                    editorGetStackSizeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommand|null);

                                    /** Command editorSetCanvasPropertiesCommand */
                                    editorSetCanvasPropertiesCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetCanvasPropertiesCommand|null);

                                    /** Command editorGetCanvasPropertiesCommand */
                                    editorGetCanvasPropertiesCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommand|null);

                                    /** Command editorAddMainClipCommand */
                                    editorAddMainClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommand|null);

                                    /** Command editorAddLookupClipCommand */
                                    editorAddLookupClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommand|null);

                                    /** Command editorAddPipClipCommand */
                                    editorAddPipClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommand|null);

                                    /** Command editorAddMusicClipCommand */
                                    editorAddMusicClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommand|null);

                                    /** Command editorAddTextClipCommand */
                                    editorAddTextClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommand|null);

                                    /** Command editorAddStickerClipCommand */
                                    editorAddStickerClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommand|null);

                                    /** Command editorAddExtensionClipCommand */
                                    editorAddExtensionClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommand|null);

                                    /** Command editorChangeClipResourceCommand */
                                    editorChangeClipResourceCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorChangeClipResourceCommand|null);

                                    /** Command editorSplitClipCommand */
                                    editorSplitClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommand|null);

                                    /** Command editorDeleteClipCommand */
                                    editorDeleteClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteClipCommand|null);

                                    /** Command editorMoveClipCommand */
                                    editorMoveClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorMoveClipCommand|null);

                                    /** Command editorRemoveTrackCommand */
                                    editorRemoveTrackCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTrackCommand|null);

                                    /** Command editorSetClipLookupCommand */
                                    editorSetClipLookupCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipLookupCommand|null);

                                    /** Command editorSetTransitionDurationUsCommand */
                                    editorSetTransitionDurationUsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionDurationUsCommand|null);

                                    /** Command editorRemoveTransitionCommand */
                                    editorRemoveTransitionCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTransitionCommand|null);

                                    /** Command editorSetClipCropCommand */
                                    editorSetClipCropCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCropCommand|null);

                                    /** Command editorSetClipCanvasBackgroundCommand */
                                    editorSetClipCanvasBackgroundCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundCommand|null);

                                    /** Command editorSetClipCanvasBackgroundResCommand */
                                    editorSetClipCanvasBackgroundResCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundResCommand|null);

                                    /** Command editorSetClipCanvasBackgroundBlurTypeCommand */
                                    editorSetClipCanvasBackgroundBlurTypeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundBlurTypeCommand|null);

                                    /** Command editorDeleteMaterialCommand */
                                    editorDeleteMaterialCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteMaterialCommand|null);

                                    /** Command editorCheckToAddMaterialCommand */
                                    editorCheckToAddMaterialCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorCheckToAddMaterialCommand|null);

                                    /** Command editorSetTransitionEffectCommand */
                                    editorSetTransitionEffectCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionEffectCommand|null);

                                    /** Command editorSetResourcePropertiesCommand */
                                    editorSetResourcePropertiesCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourcePropertiesCommand|null);

                                    /** Command editorGetResourceDurationUsCommand */
                                    editorGetResourceDurationUsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommand|null);

                                    /** Command editorGetResourceSizeCommand */
                                    editorGetResourceSizeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommand|null);

                                    /** Command editorGetClipResourceInfoCommand */
                                    editorGetClipResourceInfoCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommand|null);

                                    /** Command editorSetResourceFullKeyFrameWithResIdCommand */
                                    editorSetResourceFullKeyFrameWithResIdCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourceFullKeyFrameWithResIdCommand|null);

                                    /** Command editorSetTextCommand */
                                    editorSetTextCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextCommand|null);

                                    /** Command editorSetTextColorCommand */
                                    editorSetTextColorCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextColorCommand|null);

                                    /** Command editorSetTextFontCommand */
                                    editorSetTextFontCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextFontCommand|null);

                                    /** Command editorSetDefaultFontFileCommand */
                                    editorSetDefaultFontFileCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetDefaultFontFileCommand|null);

                                    /** Command editorSetTextShadowCommand */
                                    editorSetTextShadowCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextShadowCommand|null);

                                    /** Command editorSetTextAlignmentCommand */
                                    editorSetTextAlignmentCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextAlignmentCommand|null);

                                    /** Command editorSetTextOutlineCommand */
                                    editorSetTextOutlineCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextOutlineCommand|null);

                                    /** Command editorSetTextUnderlineCommand */
                                    editorSetTextUnderlineCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextUnderlineCommand|null);

                                    /** Command editorSetTextBoldCommand */
                                    editorSetTextBoldCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextBoldCommand|null);

                                    /** Command editorSetTextItalicsCommand */
                                    editorSetTextItalicsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextItalicsCommand|null);

                                    /** Command editorSetTextWordSpaceCommand */
                                    editorSetTextWordSpaceCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextWordSpaceCommand|null);

                                    /** Command editorSetScaleCommand */
                                    editorSetScaleCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetScaleCommand|null);

                                    /** Command editorSetPositionCommand */
                                    editorSetPositionCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetPositionCommand|null);

                                    /** Command editorSetAnchorCommand */
                                    editorSetAnchorCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetAnchorCommand|null);

                                    /** Command editorSetRotationCommand */
                                    editorSetRotationCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetRotationCommand|null);

                                    /** Command editorSetClipStartTimeUsCommand */
                                    editorSetClipStartTimeUsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipStartTimeUsCommand|null);

                                    /** Command editorSetSourceTimeRangeCommand */
                                    editorSetSourceTimeRangeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetSourceTimeRangeCommand|null);

                                    /** Command editorSetClipSpeedCommand */
                                    editorSetClipSpeedCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipSpeedCommand|null);

                                    /** Command editorSetClipVolumeCommand */
                                    editorSetClipVolumeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipVolumeCommand|null);

                                    /** Command editorGetClipPropListCommand */
                                    editorGetClipPropListCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListCommand|null);

                                    /** Command editorSetClipPropListCommand */
                                    editorSetClipPropListCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipPropListCommand|null);

                                    /** Command editorGetTrackIdListCommand */
                                    editorGetTrackIdListCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommand|null);

                                    /** Command editorGetClipIdListCommand */
                                    editorGetClipIdListCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommand|null);

                                    /** viewer related, 4000~ 4999 * */
                                    viewerSetPropertiesCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSetPropertiesCommand|null);

                                    /** Command viewerPrepareCommand */
                                    viewerPrepareCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPrepareCommand|null);

                                    /** Command viewerStartCommand */
                                    viewerStartCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStartCommand|null);

                                    /** Command viewerPauseCommand */
                                    viewerPauseCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPauseCommand|null);

                                    /** Command viewerStopCommand */
                                    viewerStopCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStopCommand|null);

                                    /** Command viewerSeekToCommand */
                                    viewerSeekToCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSeekToCommand|null);

                                    /** Command viewerGetStateCommand */
                                    viewerGetStateCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommand|null);

                                    /** Command viewerGetDurationUsCommand */
                                    viewerGetDurationUsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommand|null);

                                    /** exporter related, 5000~ 5999 * */
                                    exporterRunCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommand|null);

                                    /** Command exporterCancelCommand */
                                    exporterCancelCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterCancelCommand|null);
                                }

                                /** Represents a Command. */
                                class Command implements ICommand {

                                    /**
                                     * Constructs a new Command.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommand);

                                    /** Command commandHeader. */
                                    public commandHeader?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader|null);

                                    /** Command forceResp. */
                                    public forceResp: boolean;

                                    /** system management,network etc. 100~199 */
                                    public SystemRequireResendCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISystemRequireResendCommand|null);

                                    /** session management,200~299 */
                                    public sessionCreateNewCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommand|null);

                                    /** Command sessionPrepareRTCCommand. */
                                    public sessionPrepareRTCCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCCommand|null);

                                    /** Command sessionBeginCommand. */
                                    public sessionBeginCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionBeginCommand|null);

                                    /** Command sessionKeepaliveCommand. */
                                    public sessionKeepaliveCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionKeepaliveCommand|null);

                                    /** Command sessionEndCurrentCommand. */
                                    public sessionEndCurrentCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionEndCurrentCommand|null);

                                    /** Command sessionInvalidCurrentCommand. */
                                    public sessionInvalidCurrentCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionInvalidCurrentCommand|null);

                                    /** project related, 2000~ 2999 * */
                                    public projectLoadCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectLoadCommand|null);

                                    /** Command projectSaveCommand. */
                                    public projectSaveCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectSaveCommand|null);

                                    /** Command projectNewCommand. */
                                    public projectNewCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectNewCommand|null);

                                    /** Command projectCloseCommand. */
                                    public projectCloseCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectCloseCommand|null);

                                    /** editor related, 3000~ 3999 * */
                                    public editorUndoCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorUndoCommand|null);

                                    /** Command editorRedoCommand. */
                                    public editorRedoCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRedoCommand|null);

                                    /** Command editorGetStackSizeCommand. */
                                    public editorGetStackSizeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommand|null);

                                    /** Command editorSetCanvasPropertiesCommand. */
                                    public editorSetCanvasPropertiesCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetCanvasPropertiesCommand|null);

                                    /** Command editorGetCanvasPropertiesCommand. */
                                    public editorGetCanvasPropertiesCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommand|null);

                                    /** Command editorAddMainClipCommand. */
                                    public editorAddMainClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommand|null);

                                    /** Command editorAddLookupClipCommand. */
                                    public editorAddLookupClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommand|null);

                                    /** Command editorAddPipClipCommand. */
                                    public editorAddPipClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommand|null);

                                    /** Command editorAddMusicClipCommand. */
                                    public editorAddMusicClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommand|null);

                                    /** Command editorAddTextClipCommand. */
                                    public editorAddTextClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommand|null);

                                    /** Command editorAddStickerClipCommand. */
                                    public editorAddStickerClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommand|null);

                                    /** Command editorAddExtensionClipCommand. */
                                    public editorAddExtensionClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommand|null);

                                    /** Command editorChangeClipResourceCommand. */
                                    public editorChangeClipResourceCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorChangeClipResourceCommand|null);

                                    /** Command editorSplitClipCommand. */
                                    public editorSplitClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommand|null);

                                    /** Command editorDeleteClipCommand. */
                                    public editorDeleteClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteClipCommand|null);

                                    /** Command editorMoveClipCommand. */
                                    public editorMoveClipCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorMoveClipCommand|null);

                                    /** Command editorRemoveTrackCommand. */
                                    public editorRemoveTrackCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTrackCommand|null);

                                    /** Command editorSetClipLookupCommand. */
                                    public editorSetClipLookupCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipLookupCommand|null);

                                    /** Command editorSetTransitionDurationUsCommand. */
                                    public editorSetTransitionDurationUsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionDurationUsCommand|null);

                                    /** Command editorRemoveTransitionCommand. */
                                    public editorRemoveTransitionCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTransitionCommand|null);

                                    /** Command editorSetClipCropCommand. */
                                    public editorSetClipCropCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCropCommand|null);

                                    /** Command editorSetClipCanvasBackgroundCommand. */
                                    public editorSetClipCanvasBackgroundCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundCommand|null);

                                    /** Command editorSetClipCanvasBackgroundResCommand. */
                                    public editorSetClipCanvasBackgroundResCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundResCommand|null);

                                    /** Command editorSetClipCanvasBackgroundBlurTypeCommand. */
                                    public editorSetClipCanvasBackgroundBlurTypeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundBlurTypeCommand|null);

                                    /** Command editorDeleteMaterialCommand. */
                                    public editorDeleteMaterialCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteMaterialCommand|null);

                                    /** Command editorCheckToAddMaterialCommand. */
                                    public editorCheckToAddMaterialCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorCheckToAddMaterialCommand|null);

                                    /** Command editorSetTransitionEffectCommand. */
                                    public editorSetTransitionEffectCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionEffectCommand|null);

                                    /** Command editorSetResourcePropertiesCommand. */
                                    public editorSetResourcePropertiesCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourcePropertiesCommand|null);

                                    /** Command editorGetResourceDurationUsCommand. */
                                    public editorGetResourceDurationUsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommand|null);

                                    /** Command editorGetResourceSizeCommand. */
                                    public editorGetResourceSizeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommand|null);

                                    /** Command editorGetClipResourceInfoCommand. */
                                    public editorGetClipResourceInfoCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommand|null);

                                    /** Command editorSetResourceFullKeyFrameWithResIdCommand. */
                                    public editorSetResourceFullKeyFrameWithResIdCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourceFullKeyFrameWithResIdCommand|null);

                                    /** Command editorSetTextCommand. */
                                    public editorSetTextCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextCommand|null);

                                    /** Command editorSetTextColorCommand. */
                                    public editorSetTextColorCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextColorCommand|null);

                                    /** Command editorSetTextFontCommand. */
                                    public editorSetTextFontCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextFontCommand|null);

                                    /** Command editorSetDefaultFontFileCommand. */
                                    public editorSetDefaultFontFileCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetDefaultFontFileCommand|null);

                                    /** Command editorSetTextShadowCommand. */
                                    public editorSetTextShadowCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextShadowCommand|null);

                                    /** Command editorSetTextAlignmentCommand. */
                                    public editorSetTextAlignmentCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextAlignmentCommand|null);

                                    /** Command editorSetTextOutlineCommand. */
                                    public editorSetTextOutlineCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextOutlineCommand|null);

                                    /** Command editorSetTextUnderlineCommand. */
                                    public editorSetTextUnderlineCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextUnderlineCommand|null);

                                    /** Command editorSetTextBoldCommand. */
                                    public editorSetTextBoldCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextBoldCommand|null);

                                    /** Command editorSetTextItalicsCommand. */
                                    public editorSetTextItalicsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextItalicsCommand|null);

                                    /** Command editorSetTextWordSpaceCommand. */
                                    public editorSetTextWordSpaceCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextWordSpaceCommand|null);

                                    /** Command editorSetScaleCommand. */
                                    public editorSetScaleCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetScaleCommand|null);

                                    /** Command editorSetPositionCommand. */
                                    public editorSetPositionCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetPositionCommand|null);

                                    /** Command editorSetAnchorCommand. */
                                    public editorSetAnchorCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetAnchorCommand|null);

                                    /** Command editorSetRotationCommand. */
                                    public editorSetRotationCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetRotationCommand|null);

                                    /** Command editorSetClipStartTimeUsCommand. */
                                    public editorSetClipStartTimeUsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipStartTimeUsCommand|null);

                                    /** Command editorSetSourceTimeRangeCommand. */
                                    public editorSetSourceTimeRangeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetSourceTimeRangeCommand|null);

                                    /** Command editorSetClipSpeedCommand. */
                                    public editorSetClipSpeedCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipSpeedCommand|null);

                                    /** Command editorSetClipVolumeCommand. */
                                    public editorSetClipVolumeCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipVolumeCommand|null);

                                    /** Command editorGetClipPropListCommand. */
                                    public editorGetClipPropListCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListCommand|null);

                                    /** Command editorSetClipPropListCommand. */
                                    public editorSetClipPropListCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipPropListCommand|null);

                                    /** Command editorGetTrackIdListCommand. */
                                    public editorGetTrackIdListCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommand|null);

                                    /** Command editorGetClipIdListCommand. */
                                    public editorGetClipIdListCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommand|null);

                                    /** viewer related, 4000~ 4999 * */
                                    public viewerSetPropertiesCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSetPropertiesCommand|null);

                                    /** Command viewerPrepareCommand. */
                                    public viewerPrepareCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPrepareCommand|null);

                                    /** Command viewerStartCommand. */
                                    public viewerStartCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStartCommand|null);

                                    /** Command viewerPauseCommand. */
                                    public viewerPauseCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPauseCommand|null);

                                    /** Command viewerStopCommand. */
                                    public viewerStopCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStopCommand|null);

                                    /** Command viewerSeekToCommand. */
                                    public viewerSeekToCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSeekToCommand|null);

                                    /** Command viewerGetStateCommand. */
                                    public viewerGetStateCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommand|null);

                                    /** Command viewerGetDurationUsCommand. */
                                    public viewerGetDurationUsCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommand|null);

                                    /** exporter related, 5000~ 5999 * */
                                    public exporterRunCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommand|null);

                                    /** Command exporterCancelCommand. */
                                    public exporterCancelCommand?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterCancelCommand|null);

                                    /** Command data. */
                                    public data?: ("SystemRequireResendCommand"|"sessionCreateNewCommand"|"sessionPrepareRTCCommand"|"sessionBeginCommand"|"sessionKeepaliveCommand"|"sessionEndCurrentCommand"|"sessionInvalidCurrentCommand"|"projectLoadCommand"|"projectSaveCommand"|"projectNewCommand"|"projectCloseCommand"|"editorUndoCommand"|"editorRedoCommand"|"editorGetStackSizeCommand"|"editorSetCanvasPropertiesCommand"|"editorGetCanvasPropertiesCommand"|"editorAddMainClipCommand"|"editorAddLookupClipCommand"|"editorAddPipClipCommand"|"editorAddMusicClipCommand"|"editorAddTextClipCommand"|"editorAddStickerClipCommand"|"editorAddExtensionClipCommand"|"editorChangeClipResourceCommand"|"editorSplitClipCommand"|"editorDeleteClipCommand"|"editorMoveClipCommand"|"editorRemoveTrackCommand"|"editorSetClipLookupCommand"|"editorSetTransitionDurationUsCommand"|"editorRemoveTransitionCommand"|"editorSetClipCropCommand"|"editorSetClipCanvasBackgroundCommand"|"editorSetClipCanvasBackgroundResCommand"|"editorSetClipCanvasBackgroundBlurTypeCommand"|"editorDeleteMaterialCommand"|"editorCheckToAddMaterialCommand"|"editorSetTransitionEffectCommand"|"editorSetResourcePropertiesCommand"|"editorGetResourceDurationUsCommand"|"editorGetResourceSizeCommand"|"editorGetClipResourceInfoCommand"|"editorSetResourceFullKeyFrameWithResIdCommand"|"editorSetTextCommand"|"editorSetTextColorCommand"|"editorSetTextFontCommand"|"editorSetDefaultFontFileCommand"|"editorSetTextShadowCommand"|"editorSetTextAlignmentCommand"|"editorSetTextOutlineCommand"|"editorSetTextUnderlineCommand"|"editorSetTextBoldCommand"|"editorSetTextItalicsCommand"|"editorSetTextWordSpaceCommand"|"editorSetScaleCommand"|"editorSetPositionCommand"|"editorSetAnchorCommand"|"editorSetRotationCommand"|"editorSetClipStartTimeUsCommand"|"editorSetSourceTimeRangeCommand"|"editorSetClipSpeedCommand"|"editorSetClipVolumeCommand"|"editorGetClipPropListCommand"|"editorSetClipPropListCommand"|"editorGetTrackIdListCommand"|"editorGetClipIdListCommand"|"viewerSetPropertiesCommand"|"viewerPrepareCommand"|"viewerStartCommand"|"viewerPauseCommand"|"viewerStopCommand"|"viewerSeekToCommand"|"viewerGetStateCommand"|"viewerGetDurationUsCommand"|"exporterRunCommand"|"exporterCancelCommand");

                                    /**
                                     * Creates a new Command instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns Command instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Command;

                                    /**
                                     * Encodes the specified Command message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Command.verify|verify} messages.
                                     * @param message Command message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified Command message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Command.verify|verify} messages.
                                     * @param message Command message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a Command message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns Command
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Command;

                                    /**
                                     * Decodes a Command message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns Command
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Command;

                                    /**
                                     * Verifies a Command message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a Command message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns Command
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Command;

                                    /**
                                     * Creates a plain object from a Command message. Also converts values to other types if specified.
                                     * @param message Command
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this Command to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a Result. */
                                interface IResult {

                                    /** Result commandHeader */
                                    commandHeader?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader|null);

                                    /** Result errCode */
                                    errCode?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result.ERROR_CODE|null);

                                    /** Result errMsg */
                                    errMsg?: (string|null);

                                    /** Result voidResult */
                                    voidResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IVoidResult|null);

                                    /** Result sessionCreateNewCommandResult */
                                    sessionCreateNewCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommandResult|null);

                                    /** Result sessionPrepareRTCommandResult */
                                    sessionPrepareRTCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult|null);

                                    /** Result editorGetStackSizeCommandResult */
                                    editorGetStackSizeCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult|null);

                                    /** Result editorGetCanvasPropertiesCommandResult */
                                    editorGetCanvasPropertiesCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult|null);

                                    /** Result editorAddMainClipCommandResult */
                                    editorAddMainClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommandResult|null);

                                    /** Result editorAddLookupClipCommandResult */
                                    editorAddLookupClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommandResult|null);

                                    /** Result editorAddPipClipCommandResult */
                                    editorAddPipClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommandResult|null);

                                    /** Result editorAddMusicClipCommandResult */
                                    editorAddMusicClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommandResult|null);

                                    /** Result editorAddTextClipCommandResult */
                                    editorAddTextClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommandResult|null);

                                    /** Result editorAddStickerClipCommandResult */
                                    editorAddStickerClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommandResult|null);

                                    /** Result editorAddExtensionClipCommandResult */
                                    editorAddExtensionClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommandResult|null);

                                    /** Result editorSplitClipCommandResult */
                                    editorSplitClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommandResult|null);

                                    /** Result editorGetResourceDurationUsCommandResult */
                                    editorGetResourceDurationUsCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommandResult|null);

                                    /** Result editorGetResourceSizeCommandResult */
                                    editorGetResourceSizeCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult|null);

                                    /** Result editorGetClipResourceInfoCommandResult */
                                    editorGetClipResourceInfoCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommandResult|null);

                                    /** Result editorGetClipPropListResult */
                                    editorGetClipPropListResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListResult|null);

                                    /** Result editorGetTrackIdListCommandResult */
                                    editorGetTrackIdListCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommandResult|null);

                                    /** Result editorGetClipIdListCommandResult */
                                    editorGetClipIdListCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommandResult|null);

                                    /** Result viewerGetStateCommandResult */
                                    viewerGetStateCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommandResult|null);

                                    /** Result viewerGetDurationUsCommandResult */
                                    viewerGetDurationUsCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommandResult|null);
                                }

                                /** Represents a Result. */
                                class Result implements IResult {

                                    /**
                                     * Constructs a new Result.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult);

                                    /** Result commandHeader. */
                                    public commandHeader?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader|null);

                                    /** Result errCode. */
                                    public errCode: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result.ERROR_CODE;

                                    /** Result errMsg. */
                                    public errMsg: string;

                                    /** Result voidResult. */
                                    public voidResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IVoidResult|null);

                                    /** Result sessionCreateNewCommandResult. */
                                    public sessionCreateNewCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommandResult|null);

                                    /** Result sessionPrepareRTCommandResult. */
                                    public sessionPrepareRTCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult|null);

                                    /** Result editorGetStackSizeCommandResult. */
                                    public editorGetStackSizeCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult|null);

                                    /** Result editorGetCanvasPropertiesCommandResult. */
                                    public editorGetCanvasPropertiesCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult|null);

                                    /** Result editorAddMainClipCommandResult. */
                                    public editorAddMainClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommandResult|null);

                                    /** Result editorAddLookupClipCommandResult. */
                                    public editorAddLookupClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommandResult|null);

                                    /** Result editorAddPipClipCommandResult. */
                                    public editorAddPipClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommandResult|null);

                                    /** Result editorAddMusicClipCommandResult. */
                                    public editorAddMusicClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommandResult|null);

                                    /** Result editorAddTextClipCommandResult. */
                                    public editorAddTextClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommandResult|null);

                                    /** Result editorAddStickerClipCommandResult. */
                                    public editorAddStickerClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommandResult|null);

                                    /** Result editorAddExtensionClipCommandResult. */
                                    public editorAddExtensionClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommandResult|null);

                                    /** Result editorSplitClipCommandResult. */
                                    public editorSplitClipCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommandResult|null);

                                    /** Result editorGetResourceDurationUsCommandResult. */
                                    public editorGetResourceDurationUsCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommandResult|null);

                                    /** Result editorGetResourceSizeCommandResult. */
                                    public editorGetResourceSizeCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult|null);

                                    /** Result editorGetClipResourceInfoCommandResult. */
                                    public editorGetClipResourceInfoCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommandResult|null);

                                    /** Result editorGetClipPropListResult. */
                                    public editorGetClipPropListResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListResult|null);

                                    /** Result editorGetTrackIdListCommandResult. */
                                    public editorGetTrackIdListCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommandResult|null);

                                    /** Result editorGetClipIdListCommandResult. */
                                    public editorGetClipIdListCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommandResult|null);

                                    /** Result viewerGetStateCommandResult. */
                                    public viewerGetStateCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommandResult|null);

                                    /** Result viewerGetDurationUsCommandResult. */
                                    public viewerGetDurationUsCommandResult?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommandResult|null);

                                    /** Result data. */
                                    public data?: ("voidResult"|"sessionCreateNewCommandResult"|"sessionPrepareRTCommandResult"|"editorGetStackSizeCommandResult"|"editorGetCanvasPropertiesCommandResult"|"editorAddMainClipCommandResult"|"editorAddLookupClipCommandResult"|"editorAddPipClipCommandResult"|"editorAddMusicClipCommandResult"|"editorAddTextClipCommandResult"|"editorAddStickerClipCommandResult"|"editorAddExtensionClipCommandResult"|"editorSplitClipCommandResult"|"editorGetResourceDurationUsCommandResult"|"editorGetResourceSizeCommandResult"|"editorGetClipResourceInfoCommandResult"|"editorGetClipPropListResult"|"editorGetTrackIdListCommandResult"|"editorGetClipIdListCommandResult"|"viewerGetStateCommandResult"|"viewerGetDurationUsCommandResult");

                                    /**
                                     * Creates a new Result instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns Result instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result;

                                    /**
                                     * Encodes the specified Result message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result.verify|verify} messages.
                                     * @param message Result message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified Result message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result.verify|verify} messages.
                                     * @param message Result message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a Result message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns Result
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result;

                                    /**
                                     * Decodes a Result message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns Result
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result;

                                    /**
                                     * Verifies a Result message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a Result message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns Result
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result;

                                    /**
                                     * Creates a plain object from a Result message. Also converts values to other types if specified.
                                     * @param message Result
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this Result to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                namespace Result {

                                    /** ERROR_CODE enum. */
                                    enum ERROR_CODE {
                                        ERR_UNDEFINE = 0,
                                        ERROR_SUCCESS = 1,
                                        ERROR_SYS_INTERNAL_UNKNOWN = 2,
                                        ERROR_SYS_INTERNAL_CORE_FAILED = 3,
                                        ERROR_PARA_MISSED = 101,
                                        ERROR_PARA_INVALID = 102,
                                        ERROR_SESSION_ID_MISSED = 110,
                                        ERROR_SESSION_ID_INVALID = 111,
                                        ERROR_RESOURCE_URI_INVALID = 121,
                                        ERROR_RESOURCE_NOT_FOUND = 122,
                                        ERROR_RTC_UNKNOWN = 131
                                    }
                                }

                                /** Properties of a VoidResult. */
                                interface IVoidResult {
                                }

                                /** Represents a VoidResult. */
                                class VoidResult implements IVoidResult {

                                    /**
                                     * Constructs a new VoidResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IVoidResult);

                                    /**
                                     * Creates a new VoidResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns VoidResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IVoidResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VoidResult;

                                    /**
                                     * Encodes the specified VoidResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VoidResult.verify|verify} messages.
                                     * @param message VoidResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IVoidResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified VoidResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VoidResult.verify|verify} messages.
                                     * @param message VoidResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IVoidResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a VoidResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns VoidResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VoidResult;

                                    /**
                                     * Decodes a VoidResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns VoidResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VoidResult;

                                    /**
                                     * Verifies a VoidResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a VoidResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns VoidResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VoidResult;

                                    /**
                                     * Creates a plain object from a VoidResult message. Also converts values to other types if specified.
                                     * @param message VoidResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VoidResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this VoidResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SystemRequireResendCommand. */
                                interface ISystemRequireResendCommand {

                                    /** SystemRequireResendCommand commandHeader */
                                    commandHeader?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader|null);
                                }

                                /** System * */
                                class SystemRequireResendCommand implements ISystemRequireResendCommand {

                                    /**
                                     * Constructs a new SystemRequireResendCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISystemRequireResendCommand);

                                    /** SystemRequireResendCommand commandHeader. */
                                    public commandHeader?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ICommandHeader|null);

                                    /**
                                     * Creates a new SystemRequireResendCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SystemRequireResendCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISystemRequireResendCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SystemRequireResendCommand;

                                    /**
                                     * Encodes the specified SystemRequireResendCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SystemRequireResendCommand.verify|verify} messages.
                                     * @param message SystemRequireResendCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISystemRequireResendCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SystemRequireResendCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SystemRequireResendCommand.verify|verify} messages.
                                     * @param message SystemRequireResendCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISystemRequireResendCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SystemRequireResendCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SystemRequireResendCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SystemRequireResendCommand;

                                    /**
                                     * Decodes a SystemRequireResendCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SystemRequireResendCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SystemRequireResendCommand;

                                    /**
                                     * Verifies a SystemRequireResendCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SystemRequireResendCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SystemRequireResendCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SystemRequireResendCommand;

                                    /**
                                     * Creates a plain object from a SystemRequireResendCommand message. Also converts values to other types if specified.
                                     * @param message SystemRequireResendCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SystemRequireResendCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SystemRequireResendCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SessionCreateNewCommand. */
                                interface ISessionCreateNewCommand {

                                    /** SessionCreateNewCommand appKey */
                                    appKey?: (string|null);

                                    /** SessionCreateNewCommand appToken */
                                    appToken?: (string|null);
                                }

                                /** Session related * */
                                class SessionCreateNewCommand implements ISessionCreateNewCommand {

                                    /**
                                     * Constructs a new SessionCreateNewCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommand);

                                    /** SessionCreateNewCommand appKey. */
                                    public appKey: string;

                                    /** SessionCreateNewCommand appToken. */
                                    public appToken: string;

                                    /**
                                     * Creates a new SessionCreateNewCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SessionCreateNewCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommand;

                                    /**
                                     * Encodes the specified SessionCreateNewCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommand.verify|verify} messages.
                                     * @param message SessionCreateNewCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SessionCreateNewCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommand.verify|verify} messages.
                                     * @param message SessionCreateNewCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SessionCreateNewCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SessionCreateNewCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommand;

                                    /**
                                     * Decodes a SessionCreateNewCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SessionCreateNewCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommand;

                                    /**
                                     * Verifies a SessionCreateNewCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SessionCreateNewCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SessionCreateNewCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommand;

                                    /**
                                     * Creates a plain object from a SessionCreateNewCommand message. Also converts values to other types if specified.
                                     * @param message SessionCreateNewCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SessionCreateNewCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SessionCreateNewCommandResult. */
                                interface ISessionCreateNewCommandResult {

                                    /** SessionCreateNewCommandResult sessionId */
                                    sessionId?: (string|null);
                                }

                                /** Represents a SessionCreateNewCommandResult. */
                                class SessionCreateNewCommandResult implements ISessionCreateNewCommandResult {

                                    /**
                                     * Constructs a new SessionCreateNewCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommandResult);

                                    /** SessionCreateNewCommandResult sessionId. */
                                    public sessionId: string;

                                    /**
                                     * Creates a new SessionCreateNewCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SessionCreateNewCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommandResult;

                                    /**
                                     * Encodes the specified SessionCreateNewCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommandResult.verify|verify} messages.
                                     * @param message SessionCreateNewCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SessionCreateNewCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommandResult.verify|verify} messages.
                                     * @param message SessionCreateNewCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionCreateNewCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SessionCreateNewCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SessionCreateNewCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommandResult;

                                    /**
                                     * Decodes a SessionCreateNewCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SessionCreateNewCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommandResult;

                                    /**
                                     * Verifies a SessionCreateNewCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SessionCreateNewCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SessionCreateNewCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommandResult;

                                    /**
                                     * Creates a plain object from a SessionCreateNewCommandResult message. Also converts values to other types if specified.
                                     * @param message SessionCreateNewCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionCreateNewCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SessionCreateNewCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SessionPrepareRTCCommand. */
                                interface ISessionPrepareRTCCommand {
                                }

                                /** Represents a SessionPrepareRTCCommand. */
                                class SessionPrepareRTCCommand implements ISessionPrepareRTCCommand {

                                    /**
                                     * Constructs a new SessionPrepareRTCCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCCommand);

                                    /**
                                     * Creates a new SessionPrepareRTCCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SessionPrepareRTCCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCCommand;

                                    /**
                                     * Encodes the specified SessionPrepareRTCCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCCommand.verify|verify} messages.
                                     * @param message SessionPrepareRTCCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SessionPrepareRTCCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCCommand.verify|verify} messages.
                                     * @param message SessionPrepareRTCCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SessionPrepareRTCCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SessionPrepareRTCCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCCommand;

                                    /**
                                     * Decodes a SessionPrepareRTCCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SessionPrepareRTCCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCCommand;

                                    /**
                                     * Verifies a SessionPrepareRTCCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SessionPrepareRTCCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SessionPrepareRTCCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCCommand;

                                    /**
                                     * Creates a plain object from a SessionPrepareRTCCommand message. Also converts values to other types if specified.
                                     * @param message SessionPrepareRTCCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SessionPrepareRTCCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SessionPrepareRTCommandResult. */
                                interface ISessionPrepareRTCommandResult {

                                    /** SessionPrepareRTCommandResult streamUrl */
                                    streamUrl?: (string|null);

                                    /** SessionPrepareRTCommandResult msgUrl */
                                    msgUrl?: (string|null);
                                }

                                /** Represents a SessionPrepareRTCommandResult. */
                                class SessionPrepareRTCommandResult implements ISessionPrepareRTCommandResult {

                                    /**
                                     * Constructs a new SessionPrepareRTCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult);

                                    /** SessionPrepareRTCommandResult streamUrl. */
                                    public streamUrl: string;

                                    /** SessionPrepareRTCommandResult msgUrl. */
                                    public msgUrl: string;

                                    /**
                                     * Creates a new SessionPrepareRTCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SessionPrepareRTCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCommandResult;

                                    /**
                                     * Encodes the specified SessionPrepareRTCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCommandResult.verify|verify} messages.
                                     * @param message SessionPrepareRTCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SessionPrepareRTCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCommandResult.verify|verify} messages.
                                     * @param message SessionPrepareRTCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SessionPrepareRTCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SessionPrepareRTCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCommandResult;

                                    /**
                                     * Decodes a SessionPrepareRTCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SessionPrepareRTCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCommandResult;

                                    /**
                                     * Verifies a SessionPrepareRTCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SessionPrepareRTCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SessionPrepareRTCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCommandResult;

                                    /**
                                     * Creates a plain object from a SessionPrepareRTCommandResult message. Also converts values to other types if specified.
                                     * @param message SessionPrepareRTCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionPrepareRTCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SessionPrepareRTCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SessionBeginCommand. */
                                interface ISessionBeginCommand {
                                }

                                /** Represents a SessionBeginCommand. */
                                class SessionBeginCommand implements ISessionBeginCommand {

                                    /**
                                     * Constructs a new SessionBeginCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionBeginCommand);

                                    /**
                                     * Creates a new SessionBeginCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SessionBeginCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionBeginCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionBeginCommand;

                                    /**
                                     * Encodes the specified SessionBeginCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionBeginCommand.verify|verify} messages.
                                     * @param message SessionBeginCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionBeginCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SessionBeginCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionBeginCommand.verify|verify} messages.
                                     * @param message SessionBeginCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionBeginCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SessionBeginCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SessionBeginCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionBeginCommand;

                                    /**
                                     * Decodes a SessionBeginCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SessionBeginCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionBeginCommand;

                                    /**
                                     * Verifies a SessionBeginCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SessionBeginCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SessionBeginCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionBeginCommand;

                                    /**
                                     * Creates a plain object from a SessionBeginCommand message. Also converts values to other types if specified.
                                     * @param message SessionBeginCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionBeginCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SessionBeginCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SessionKeepaliveCommand. */
                                interface ISessionKeepaliveCommand {
                                }

                                /** Represents a SessionKeepaliveCommand. */
                                class SessionKeepaliveCommand implements ISessionKeepaliveCommand {

                                    /**
                                     * Constructs a new SessionKeepaliveCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionKeepaliveCommand);

                                    /**
                                     * Creates a new SessionKeepaliveCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SessionKeepaliveCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionKeepaliveCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionKeepaliveCommand;

                                    /**
                                     * Encodes the specified SessionKeepaliveCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionKeepaliveCommand.verify|verify} messages.
                                     * @param message SessionKeepaliveCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionKeepaliveCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SessionKeepaliveCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionKeepaliveCommand.verify|verify} messages.
                                     * @param message SessionKeepaliveCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionKeepaliveCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SessionKeepaliveCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SessionKeepaliveCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionKeepaliveCommand;

                                    /**
                                     * Decodes a SessionKeepaliveCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SessionKeepaliveCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionKeepaliveCommand;

                                    /**
                                     * Verifies a SessionKeepaliveCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SessionKeepaliveCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SessionKeepaliveCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionKeepaliveCommand;

                                    /**
                                     * Creates a plain object from a SessionKeepaliveCommand message. Also converts values to other types if specified.
                                     * @param message SessionKeepaliveCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionKeepaliveCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SessionKeepaliveCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SessionEndCurrentCommand. */
                                interface ISessionEndCurrentCommand {
                                }

                                /** Represents a SessionEndCurrentCommand. */
                                class SessionEndCurrentCommand implements ISessionEndCurrentCommand {

                                    /**
                                     * Constructs a new SessionEndCurrentCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionEndCurrentCommand);

                                    /**
                                     * Creates a new SessionEndCurrentCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SessionEndCurrentCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionEndCurrentCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionEndCurrentCommand;

                                    /**
                                     * Encodes the specified SessionEndCurrentCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionEndCurrentCommand.verify|verify} messages.
                                     * @param message SessionEndCurrentCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionEndCurrentCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SessionEndCurrentCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionEndCurrentCommand.verify|verify} messages.
                                     * @param message SessionEndCurrentCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionEndCurrentCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SessionEndCurrentCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SessionEndCurrentCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionEndCurrentCommand;

                                    /**
                                     * Decodes a SessionEndCurrentCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SessionEndCurrentCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionEndCurrentCommand;

                                    /**
                                     * Verifies a SessionEndCurrentCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SessionEndCurrentCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SessionEndCurrentCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionEndCurrentCommand;

                                    /**
                                     * Creates a plain object from a SessionEndCurrentCommand message. Also converts values to other types if specified.
                                     * @param message SessionEndCurrentCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionEndCurrentCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SessionEndCurrentCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a SessionInvalidCurrentCommand. */
                                interface ISessionInvalidCurrentCommand {
                                }

                                /** Represents a SessionInvalidCurrentCommand. */
                                class SessionInvalidCurrentCommand implements ISessionInvalidCurrentCommand {

                                    /**
                                     * Constructs a new SessionInvalidCurrentCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionInvalidCurrentCommand);

                                    /**
                                     * Creates a new SessionInvalidCurrentCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns SessionInvalidCurrentCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionInvalidCurrentCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionInvalidCurrentCommand;

                                    /**
                                     * Encodes the specified SessionInvalidCurrentCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionInvalidCurrentCommand.verify|verify} messages.
                                     * @param message SessionInvalidCurrentCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionInvalidCurrentCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified SessionInvalidCurrentCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionInvalidCurrentCommand.verify|verify} messages.
                                     * @param message SessionInvalidCurrentCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionInvalidCurrentCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a SessionInvalidCurrentCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns SessionInvalidCurrentCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionInvalidCurrentCommand;

                                    /**
                                     * Decodes a SessionInvalidCurrentCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns SessionInvalidCurrentCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionInvalidCurrentCommand;

                                    /**
                                     * Verifies a SessionInvalidCurrentCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a SessionInvalidCurrentCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns SessionInvalidCurrentCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionInvalidCurrentCommand;

                                    /**
                                     * Creates a plain object from a SessionInvalidCurrentCommand message. Also converts values to other types if specified.
                                     * @param message SessionInvalidCurrentCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SessionInvalidCurrentCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this SessionInvalidCurrentCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ProjectInfo. */
                                interface IProjectInfo {

                                    /** ProjectInfo projectId */
                                    projectId?: (string|null);

                                    /** ProjectInfo projectName */
                                    projectName?: (string|null);
                                }

                                /** Project * */
                                class ProjectInfo implements IProjectInfo {

                                    /**
                                     * Constructs a new ProjectInfo.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectInfo);

                                    /** ProjectInfo projectId. */
                                    public projectId: string;

                                    /** ProjectInfo projectName. */
                                    public projectName: string;

                                    /**
                                     * Creates a new ProjectInfo instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ProjectInfo instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectInfo): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectInfo;

                                    /**
                                     * Encodes the specified ProjectInfo message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectInfo.verify|verify} messages.
                                     * @param message ProjectInfo message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ProjectInfo message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectInfo.verify|verify} messages.
                                     * @param message ProjectInfo message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ProjectInfo message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ProjectInfo
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectInfo;

                                    /**
                                     * Decodes a ProjectInfo message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ProjectInfo
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectInfo;

                                    /**
                                     * Verifies a ProjectInfo message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ProjectInfo message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ProjectInfo
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectInfo;

                                    /**
                                     * Creates a plain object from a ProjectInfo message. Also converts values to other types if specified.
                                     * @param message ProjectInfo
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ProjectInfo to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ProjectGetProjectListCommand. */
                                interface IProjectGetProjectListCommand {
                                }

                                /** Represents a ProjectGetProjectListCommand. */
                                class ProjectGetProjectListCommand implements IProjectGetProjectListCommand {

                                    /**
                                     * Constructs a new ProjectGetProjectListCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectGetProjectListCommand);

                                    /**
                                     * Creates a new ProjectGetProjectListCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ProjectGetProjectListCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectGetProjectListCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListCommand;

                                    /**
                                     * Encodes the specified ProjectGetProjectListCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListCommand.verify|verify} messages.
                                     * @param message ProjectGetProjectListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectGetProjectListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ProjectGetProjectListCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListCommand.verify|verify} messages.
                                     * @param message ProjectGetProjectListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectGetProjectListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ProjectGetProjectListCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ProjectGetProjectListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListCommand;

                                    /**
                                     * Decodes a ProjectGetProjectListCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ProjectGetProjectListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListCommand;

                                    /**
                                     * Verifies a ProjectGetProjectListCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ProjectGetProjectListCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ProjectGetProjectListCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListCommand;

                                    /**
                                     * Creates a plain object from a ProjectGetProjectListCommand message. Also converts values to other types if specified.
                                     * @param message ProjectGetProjectListCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ProjectGetProjectListCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ProjectGetProjectListResult. */
                                interface IProjectGetProjectListResult {

                                    /** ProjectGetProjectListResult projectList */
                                    projectList?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectInfo[]|null);
                                }

                                /** Represents a ProjectGetProjectListResult. */
                                class ProjectGetProjectListResult implements IProjectGetProjectListResult {

                                    /**
                                     * Constructs a new ProjectGetProjectListResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectGetProjectListResult);

                                    /** ProjectGetProjectListResult projectList. */
                                    public projectList: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectInfo[];

                                    /**
                                     * Creates a new ProjectGetProjectListResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ProjectGetProjectListResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectGetProjectListResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListResult;

                                    /**
                                     * Encodes the specified ProjectGetProjectListResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListResult.verify|verify} messages.
                                     * @param message ProjectGetProjectListResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectGetProjectListResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ProjectGetProjectListResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListResult.verify|verify} messages.
                                     * @param message ProjectGetProjectListResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectGetProjectListResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ProjectGetProjectListResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ProjectGetProjectListResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListResult;

                                    /**
                                     * Decodes a ProjectGetProjectListResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ProjectGetProjectListResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListResult;

                                    /**
                                     * Verifies a ProjectGetProjectListResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ProjectGetProjectListResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ProjectGetProjectListResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListResult;

                                    /**
                                     * Creates a plain object from a ProjectGetProjectListResult message. Also converts values to other types if specified.
                                     * @param message ProjectGetProjectListResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectGetProjectListResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ProjectGetProjectListResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ProjectLoadCommand. */
                                interface IProjectLoadCommand {

                                    /** ProjectLoadCommand projectId */
                                    projectId?: (string|null);
                                }

                                /** Represents a ProjectLoadCommand. */
                                class ProjectLoadCommand implements IProjectLoadCommand {

                                    /**
                                     * Constructs a new ProjectLoadCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectLoadCommand);

                                    /** ProjectLoadCommand projectId. */
                                    public projectId: string;

                                    /**
                                     * Creates a new ProjectLoadCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ProjectLoadCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectLoadCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectLoadCommand;

                                    /**
                                     * Encodes the specified ProjectLoadCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectLoadCommand.verify|verify} messages.
                                     * @param message ProjectLoadCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectLoadCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ProjectLoadCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectLoadCommand.verify|verify} messages.
                                     * @param message ProjectLoadCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectLoadCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ProjectLoadCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ProjectLoadCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectLoadCommand;

                                    /**
                                     * Decodes a ProjectLoadCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ProjectLoadCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectLoadCommand;

                                    /**
                                     * Verifies a ProjectLoadCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ProjectLoadCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ProjectLoadCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectLoadCommand;

                                    /**
                                     * Creates a plain object from a ProjectLoadCommand message. Also converts values to other types if specified.
                                     * @param message ProjectLoadCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectLoadCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ProjectLoadCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ProjectSaveCommand. */
                                interface IProjectSaveCommand {

                                    /** ProjectSaveCommand projectId */
                                    projectId?: (string|null);

                                    /** ProjectSaveCommand projectName */
                                    projectName?: (string|null);
                                }

                                /** Represents a ProjectSaveCommand. */
                                class ProjectSaveCommand implements IProjectSaveCommand {

                                    /**
                                     * Constructs a new ProjectSaveCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectSaveCommand);

                                    /** ProjectSaveCommand projectId. */
                                    public projectId: string;

                                    /** ProjectSaveCommand projectName. */
                                    public projectName: string;

                                    /**
                                     * Creates a new ProjectSaveCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ProjectSaveCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectSaveCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectSaveCommand;

                                    /**
                                     * Encodes the specified ProjectSaveCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectSaveCommand.verify|verify} messages.
                                     * @param message ProjectSaveCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectSaveCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ProjectSaveCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectSaveCommand.verify|verify} messages.
                                     * @param message ProjectSaveCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectSaveCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ProjectSaveCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ProjectSaveCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectSaveCommand;

                                    /**
                                     * Decodes a ProjectSaveCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ProjectSaveCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectSaveCommand;

                                    /**
                                     * Verifies a ProjectSaveCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ProjectSaveCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ProjectSaveCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectSaveCommand;

                                    /**
                                     * Creates a plain object from a ProjectSaveCommand message. Also converts values to other types if specified.
                                     * @param message ProjectSaveCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectSaveCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ProjectSaveCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ProjectNewCommand. */
                                interface IProjectNewCommand {
                                }

                                /** Represents a ProjectNewCommand. */
                                class ProjectNewCommand implements IProjectNewCommand {

                                    /**
                                     * Constructs a new ProjectNewCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectNewCommand);

                                    /**
                                     * Creates a new ProjectNewCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ProjectNewCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectNewCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectNewCommand;

                                    /**
                                     * Encodes the specified ProjectNewCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectNewCommand.verify|verify} messages.
                                     * @param message ProjectNewCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectNewCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ProjectNewCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectNewCommand.verify|verify} messages.
                                     * @param message ProjectNewCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectNewCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ProjectNewCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ProjectNewCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectNewCommand;

                                    /**
                                     * Decodes a ProjectNewCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ProjectNewCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectNewCommand;

                                    /**
                                     * Verifies a ProjectNewCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ProjectNewCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ProjectNewCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectNewCommand;

                                    /**
                                     * Creates a plain object from a ProjectNewCommand message. Also converts values to other types if specified.
                                     * @param message ProjectNewCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectNewCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ProjectNewCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ProjectCloseCommand. */
                                interface IProjectCloseCommand {
                                }

                                /** Represents a ProjectCloseCommand. */
                                class ProjectCloseCommand implements IProjectCloseCommand {

                                    /**
                                     * Constructs a new ProjectCloseCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectCloseCommand);

                                    /**
                                     * Creates a new ProjectCloseCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ProjectCloseCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectCloseCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectCloseCommand;

                                    /**
                                     * Encodes the specified ProjectCloseCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectCloseCommand.verify|verify} messages.
                                     * @param message ProjectCloseCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectCloseCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ProjectCloseCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectCloseCommand.verify|verify} messages.
                                     * @param message ProjectCloseCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IProjectCloseCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ProjectCloseCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ProjectCloseCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectCloseCommand;

                                    /**
                                     * Decodes a ProjectCloseCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ProjectCloseCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectCloseCommand;

                                    /**
                                     * Verifies a ProjectCloseCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ProjectCloseCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ProjectCloseCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectCloseCommand;

                                    /**
                                     * Creates a plain object from a ProjectCloseCommand message. Also converts values to other types if specified.
                                     * @param message ProjectCloseCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ProjectCloseCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ProjectCloseCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorUndoCommand. */
                                interface IEditorUndoCommand {
                                }

                                /** Represents an EditorUndoCommand. */
                                class EditorUndoCommand implements IEditorUndoCommand {

                                    /**
                                     * Constructs a new EditorUndoCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorUndoCommand);

                                    /**
                                     * Creates a new EditorUndoCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorUndoCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorUndoCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorUndoCommand;

                                    /**
                                     * Encodes the specified EditorUndoCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorUndoCommand.verify|verify} messages.
                                     * @param message EditorUndoCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorUndoCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorUndoCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorUndoCommand.verify|verify} messages.
                                     * @param message EditorUndoCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorUndoCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorUndoCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorUndoCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorUndoCommand;

                                    /**
                                     * Decodes an EditorUndoCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorUndoCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorUndoCommand;

                                    /**
                                     * Verifies an EditorUndoCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorUndoCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorUndoCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorUndoCommand;

                                    /**
                                     * Creates a plain object from an EditorUndoCommand message. Also converts values to other types if specified.
                                     * @param message EditorUndoCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorUndoCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorUndoCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorRedoCommand. */
                                interface IEditorRedoCommand {
                                }

                                /** Represents an EditorRedoCommand. */
                                class EditorRedoCommand implements IEditorRedoCommand {

                                    /**
                                     * Constructs a new EditorRedoCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRedoCommand);

                                    /**
                                     * Creates a new EditorRedoCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorRedoCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRedoCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRedoCommand;

                                    /**
                                     * Encodes the specified EditorRedoCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRedoCommand.verify|verify} messages.
                                     * @param message EditorRedoCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRedoCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorRedoCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRedoCommand.verify|verify} messages.
                                     * @param message EditorRedoCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRedoCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorRedoCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorRedoCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRedoCommand;

                                    /**
                                     * Decodes an EditorRedoCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorRedoCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRedoCommand;

                                    /**
                                     * Verifies an EditorRedoCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorRedoCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorRedoCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRedoCommand;

                                    /**
                                     * Creates a plain object from an EditorRedoCommand message. Also converts values to other types if specified.
                                     * @param message EditorRedoCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRedoCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorRedoCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetStackSizeCommand. */
                                interface IEditorGetStackSizeCommand {
                                }

                                /** Represents an EditorGetStackSizeCommand. */
                                class EditorGetStackSizeCommand implements IEditorGetStackSizeCommand {

                                    /**
                                     * Constructs a new EditorGetStackSizeCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommand);

                                    /**
                                     * Creates a new EditorGetStackSizeCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetStackSizeCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommand;

                                    /**
                                     * Encodes the specified EditorGetStackSizeCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommand.verify|verify} messages.
                                     * @param message EditorGetStackSizeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetStackSizeCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommand.verify|verify} messages.
                                     * @param message EditorGetStackSizeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetStackSizeCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetStackSizeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommand;

                                    /**
                                     * Decodes an EditorGetStackSizeCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetStackSizeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommand;

                                    /**
                                     * Verifies an EditorGetStackSizeCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetStackSizeCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetStackSizeCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommand;

                                    /**
                                     * Creates a plain object from an EditorGetStackSizeCommand message. Also converts values to other types if specified.
                                     * @param message EditorGetStackSizeCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetStackSizeCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetStackSizeCommandResult. */
                                interface IEditorGetStackSizeCommandResult {

                                    /** EditorGetStackSizeCommandResult redoStackSize */
                                    redoStackSize?: (number|null);

                                    /** EditorGetStackSizeCommandResult undoStackSize */
                                    undoStackSize?: (number|null);
                                }

                                /** Represents an EditorGetStackSizeCommandResult. */
                                class EditorGetStackSizeCommandResult implements IEditorGetStackSizeCommandResult {

                                    /**
                                     * Constructs a new EditorGetStackSizeCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult);

                                    /** EditorGetStackSizeCommandResult redoStackSize. */
                                    public redoStackSize: number;

                                    /** EditorGetStackSizeCommandResult undoStackSize. */
                                    public undoStackSize: number;

                                    /**
                                     * Creates a new EditorGetStackSizeCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetStackSizeCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommandResult;

                                    /**
                                     * Encodes the specified EditorGetStackSizeCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommandResult.verify|verify} messages.
                                     * @param message EditorGetStackSizeCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetStackSizeCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommandResult.verify|verify} messages.
                                     * @param message EditorGetStackSizeCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetStackSizeCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetStackSizeCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetStackSizeCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommandResult;

                                    /**
                                     * Decodes an EditorGetStackSizeCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetStackSizeCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommandResult;

                                    /**
                                     * Verifies an EditorGetStackSizeCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetStackSizeCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetStackSizeCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommandResult;

                                    /**
                                     * Creates a plain object from an EditorGetStackSizeCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorGetStackSizeCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetStackSizeCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetStackSizeCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** ScaleType enum. */
                                enum ScaleType {
                                    Invalid = 0,
                                    FixXY = 1,
                                    CenterInside = 2,
                                    CenterCrop = 3,
                                    StartCrop = 4,
                                    EndCrop = 5,
                                    FitStart = 6,
                                    FitEnd = 7
                                }

                                /** Properties of an EditorSetCanvasPropertiesCommand. */
                                interface IEditorSetCanvasPropertiesCommand {

                                    /** EditorSetCanvasPropertiesCommand width */
                                    width?: (number|null);

                                    /** EditorSetCanvasPropertiesCommand height */
                                    height?: (number|null);

                                    /** EditorSetCanvasPropertiesCommand scaleType */
                                    scaleType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType|null);

                                    /** EditorSetCanvasPropertiesCommand backgroundColor */
                                    backgroundColor?: (number|null);
                                }

                                /** Represents an EditorSetCanvasPropertiesCommand. */
                                class EditorSetCanvasPropertiesCommand implements IEditorSetCanvasPropertiesCommand {

                                    /**
                                     * Constructs a new EditorSetCanvasPropertiesCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetCanvasPropertiesCommand);

                                    /** EditorSetCanvasPropertiesCommand width. */
                                    public width: number;

                                    /** EditorSetCanvasPropertiesCommand height. */
                                    public height: number;

                                    /** EditorSetCanvasPropertiesCommand scaleType. */
                                    public scaleType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType;

                                    /** EditorSetCanvasPropertiesCommand backgroundColor. */
                                    public backgroundColor: number;

                                    /**
                                     * Creates a new EditorSetCanvasPropertiesCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetCanvasPropertiesCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetCanvasPropertiesCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetCanvasPropertiesCommand;

                                    /**
                                     * Encodes the specified EditorSetCanvasPropertiesCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetCanvasPropertiesCommand.verify|verify} messages.
                                     * @param message EditorSetCanvasPropertiesCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetCanvasPropertiesCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetCanvasPropertiesCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetCanvasPropertiesCommand.verify|verify} messages.
                                     * @param message EditorSetCanvasPropertiesCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetCanvasPropertiesCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetCanvasPropertiesCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetCanvasPropertiesCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetCanvasPropertiesCommand;

                                    /**
                                     * Decodes an EditorSetCanvasPropertiesCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetCanvasPropertiesCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetCanvasPropertiesCommand;

                                    /**
                                     * Verifies an EditorSetCanvasPropertiesCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetCanvasPropertiesCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetCanvasPropertiesCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetCanvasPropertiesCommand;

                                    /**
                                     * Creates a plain object from an EditorSetCanvasPropertiesCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetCanvasPropertiesCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetCanvasPropertiesCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetCanvasPropertiesCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetCanvasPropertiesCommand. */
                                interface IEditorGetCanvasPropertiesCommand {
                                }

                                /** Represents an EditorGetCanvasPropertiesCommand. */
                                class EditorGetCanvasPropertiesCommand implements IEditorGetCanvasPropertiesCommand {

                                    /**
                                     * Constructs a new EditorGetCanvasPropertiesCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommand);

                                    /**
                                     * Creates a new EditorGetCanvasPropertiesCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetCanvasPropertiesCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommand;

                                    /**
                                     * Encodes the specified EditorGetCanvasPropertiesCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommand.verify|verify} messages.
                                     * @param message EditorGetCanvasPropertiesCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetCanvasPropertiesCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommand.verify|verify} messages.
                                     * @param message EditorGetCanvasPropertiesCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetCanvasPropertiesCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetCanvasPropertiesCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommand;

                                    /**
                                     * Decodes an EditorGetCanvasPropertiesCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetCanvasPropertiesCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommand;

                                    /**
                                     * Verifies an EditorGetCanvasPropertiesCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetCanvasPropertiesCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetCanvasPropertiesCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommand;

                                    /**
                                     * Creates a plain object from an EditorGetCanvasPropertiesCommand message. Also converts values to other types if specified.
                                     * @param message EditorGetCanvasPropertiesCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetCanvasPropertiesCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetCanvasPropertiesCommandResult. */
                                interface IEditorGetCanvasPropertiesCommandResult {

                                    /** EditorGetCanvasPropertiesCommandResult width */
                                    width?: (number|null);

                                    /** EditorGetCanvasPropertiesCommandResult height */
                                    height?: (number|null);

                                    /** EditorGetCanvasPropertiesCommandResult scaleType */
                                    scaleType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType|null);

                                    /** EditorGetCanvasPropertiesCommandResult backgroundColor */
                                    backgroundColor?: (number|null);
                                }

                                /** Represents an EditorGetCanvasPropertiesCommandResult. */
                                class EditorGetCanvasPropertiesCommandResult implements IEditorGetCanvasPropertiesCommandResult {

                                    /**
                                     * Constructs a new EditorGetCanvasPropertiesCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult);

                                    /** EditorGetCanvasPropertiesCommandResult width. */
                                    public width: number;

                                    /** EditorGetCanvasPropertiesCommandResult height. */
                                    public height: number;

                                    /** EditorGetCanvasPropertiesCommandResult scaleType. */
                                    public scaleType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType;

                                    /** EditorGetCanvasPropertiesCommandResult backgroundColor. */
                                    public backgroundColor: number;

                                    /**
                                     * Creates a new EditorGetCanvasPropertiesCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetCanvasPropertiesCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommandResult;

                                    /**
                                     * Encodes the specified EditorGetCanvasPropertiesCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommandResult.verify|verify} messages.
                                     * @param message EditorGetCanvasPropertiesCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetCanvasPropertiesCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommandResult.verify|verify} messages.
                                     * @param message EditorGetCanvasPropertiesCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetCanvasPropertiesCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetCanvasPropertiesCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetCanvasPropertiesCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommandResult;

                                    /**
                                     * Decodes an EditorGetCanvasPropertiesCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetCanvasPropertiesCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommandResult;

                                    /**
                                     * Verifies an EditorGetCanvasPropertiesCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetCanvasPropertiesCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetCanvasPropertiesCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommandResult;

                                    /**
                                     * Creates a plain object from an EditorGetCanvasPropertiesCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorGetCanvasPropertiesCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetCanvasPropertiesCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetCanvasPropertiesCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddMainClipCommand. */
                                interface IEditorAddMainClipCommand {

                                    /** EditorAddMainClipCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorAddMainClipCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorAddMainClipCommand endTime */
                                    endTime?: (number|Long|null);
                                }

                                /** Represents an EditorAddMainClipCommand. */
                                class EditorAddMainClipCommand implements IEditorAddMainClipCommand {

                                    /**
                                     * Constructs a new EditorAddMainClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommand);

                                    /** EditorAddMainClipCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorAddMainClipCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorAddMainClipCommand endTime. */
                                    public endTime: (number|Long);

                                    /**
                                     * Creates a new EditorAddMainClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddMainClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommand;

                                    /**
                                     * Encodes the specified EditorAddMainClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommand.verify|verify} messages.
                                     * @param message EditorAddMainClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddMainClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommand.verify|verify} messages.
                                     * @param message EditorAddMainClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddMainClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddMainClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommand;

                                    /**
                                     * Decodes an EditorAddMainClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddMainClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommand;

                                    /**
                                     * Verifies an EditorAddMainClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddMainClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddMainClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommand;

                                    /**
                                     * Creates a plain object from an EditorAddMainClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorAddMainClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddMainClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddMainClipCommandResult. */
                                interface IEditorAddMainClipCommandResult {

                                    /** EditorAddMainClipCommandResult clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorAddMainClipCommandResult. */
                                class EditorAddMainClipCommandResult implements IEditorAddMainClipCommandResult {

                                    /**
                                     * Constructs a new EditorAddMainClipCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommandResult);

                                    /** EditorAddMainClipCommandResult clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorAddMainClipCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddMainClipCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommandResult;

                                    /**
                                     * Encodes the specified EditorAddMainClipCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddMainClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddMainClipCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddMainClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMainClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddMainClipCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddMainClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommandResult;

                                    /**
                                     * Decodes an EditorAddMainClipCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddMainClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommandResult;

                                    /**
                                     * Verifies an EditorAddMainClipCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddMainClipCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddMainClipCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommandResult;

                                    /**
                                     * Creates a plain object from an EditorAddMainClipCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorAddMainClipCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMainClipCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddMainClipCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddLookupClipCommand. */
                                interface IEditorAddLookupClipCommand {

                                    /** EditorAddLookupClipCommand trackId */
                                    trackId?: (string|null);

                                    /** EditorAddLookupClipCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorAddLookupClipCommand intensity */
                                    intensity?: (number|null);

                                    /** EditorAddLookupClipCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorAddLookupClipCommand duration */
                                    duration?: (number|Long|null);
                                }

                                /** Represents an EditorAddLookupClipCommand. */
                                class EditorAddLookupClipCommand implements IEditorAddLookupClipCommand {

                                    /**
                                     * Constructs a new EditorAddLookupClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommand);

                                    /** EditorAddLookupClipCommand trackId. */
                                    public trackId: string;

                                    /** EditorAddLookupClipCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorAddLookupClipCommand intensity. */
                                    public intensity: number;

                                    /** EditorAddLookupClipCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorAddLookupClipCommand duration. */
                                    public duration: (number|Long);

                                    /**
                                     * Creates a new EditorAddLookupClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddLookupClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommand;

                                    /**
                                     * Encodes the specified EditorAddLookupClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommand.verify|verify} messages.
                                     * @param message EditorAddLookupClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddLookupClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommand.verify|verify} messages.
                                     * @param message EditorAddLookupClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddLookupClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddLookupClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommand;

                                    /**
                                     * Decodes an EditorAddLookupClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddLookupClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommand;

                                    /**
                                     * Verifies an EditorAddLookupClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddLookupClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddLookupClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommand;

                                    /**
                                     * Creates a plain object from an EditorAddLookupClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorAddLookupClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddLookupClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddLookupClipCommandResult. */
                                interface IEditorAddLookupClipCommandResult {

                                    /** EditorAddLookupClipCommandResult clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorAddLookupClipCommandResult. */
                                class EditorAddLookupClipCommandResult implements IEditorAddLookupClipCommandResult {

                                    /**
                                     * Constructs a new EditorAddLookupClipCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommandResult);

                                    /** EditorAddLookupClipCommandResult clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorAddLookupClipCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddLookupClipCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommandResult;

                                    /**
                                     * Encodes the specified EditorAddLookupClipCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddLookupClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddLookupClipCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddLookupClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddLookupClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddLookupClipCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddLookupClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommandResult;

                                    /**
                                     * Decodes an EditorAddLookupClipCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddLookupClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommandResult;

                                    /**
                                     * Verifies an EditorAddLookupClipCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddLookupClipCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddLookupClipCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommandResult;

                                    /**
                                     * Creates a plain object from an EditorAddLookupClipCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorAddLookupClipCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddLookupClipCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddLookupClipCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddPipClipCommand. */
                                interface IEditorAddPipClipCommand {

                                    /** EditorAddPipClipCommand trackId */
                                    trackId?: (string|null);

                                    /** EditorAddPipClipCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorAddPipClipCommand timePosition */
                                    timePosition?: (number|Long|null);

                                    /** EditorAddPipClipCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorAddPipClipCommand endTime */
                                    endTime?: (number|Long|null);
                                }

                                /** Represents an EditorAddPipClipCommand. */
                                class EditorAddPipClipCommand implements IEditorAddPipClipCommand {

                                    /**
                                     * Constructs a new EditorAddPipClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommand);

                                    /** EditorAddPipClipCommand trackId. */
                                    public trackId: string;

                                    /** EditorAddPipClipCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorAddPipClipCommand timePosition. */
                                    public timePosition: (number|Long);

                                    /** EditorAddPipClipCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorAddPipClipCommand endTime. */
                                    public endTime: (number|Long);

                                    /**
                                     * Creates a new EditorAddPipClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddPipClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommand;

                                    /**
                                     * Encodes the specified EditorAddPipClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommand.verify|verify} messages.
                                     * @param message EditorAddPipClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddPipClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommand.verify|verify} messages.
                                     * @param message EditorAddPipClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddPipClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddPipClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommand;

                                    /**
                                     * Decodes an EditorAddPipClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddPipClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommand;

                                    /**
                                     * Verifies an EditorAddPipClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddPipClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddPipClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommand;

                                    /**
                                     * Creates a plain object from an EditorAddPipClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorAddPipClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddPipClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddPipClipCommandResult. */
                                interface IEditorAddPipClipCommandResult {

                                    /** EditorAddPipClipCommandResult clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorAddPipClipCommandResult. */
                                class EditorAddPipClipCommandResult implements IEditorAddPipClipCommandResult {

                                    /**
                                     * Constructs a new EditorAddPipClipCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommandResult);

                                    /** EditorAddPipClipCommandResult clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorAddPipClipCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddPipClipCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommandResult;

                                    /**
                                     * Encodes the specified EditorAddPipClipCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddPipClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddPipClipCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddPipClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddPipClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddPipClipCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddPipClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommandResult;

                                    /**
                                     * Decodes an EditorAddPipClipCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddPipClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommandResult;

                                    /**
                                     * Verifies an EditorAddPipClipCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddPipClipCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddPipClipCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommandResult;

                                    /**
                                     * Creates a plain object from an EditorAddPipClipCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorAddPipClipCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddPipClipCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddPipClipCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddMusicClipCommand. */
                                interface IEditorAddMusicClipCommand {

                                    /** EditorAddMusicClipCommand trackId */
                                    trackId?: (string|null);

                                    /** EditorAddMusicClipCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorAddMusicClipCommand timePosition */
                                    timePosition?: (number|Long|null);

                                    /** EditorAddMusicClipCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorAddMusicClipCommand endTime */
                                    endTime?: (number|Long|null);
                                }

                                /** Represents an EditorAddMusicClipCommand. */
                                class EditorAddMusicClipCommand implements IEditorAddMusicClipCommand {

                                    /**
                                     * Constructs a new EditorAddMusicClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommand);

                                    /** EditorAddMusicClipCommand trackId. */
                                    public trackId: string;

                                    /** EditorAddMusicClipCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorAddMusicClipCommand timePosition. */
                                    public timePosition: (number|Long);

                                    /** EditorAddMusicClipCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorAddMusicClipCommand endTime. */
                                    public endTime: (number|Long);

                                    /**
                                     * Creates a new EditorAddMusicClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddMusicClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommand;

                                    /**
                                     * Encodes the specified EditorAddMusicClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommand.verify|verify} messages.
                                     * @param message EditorAddMusicClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddMusicClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommand.verify|verify} messages.
                                     * @param message EditorAddMusicClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddMusicClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddMusicClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommand;

                                    /**
                                     * Decodes an EditorAddMusicClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddMusicClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommand;

                                    /**
                                     * Verifies an EditorAddMusicClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddMusicClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddMusicClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommand;

                                    /**
                                     * Creates a plain object from an EditorAddMusicClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorAddMusicClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddMusicClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddMusicClipCommandResult. */
                                interface IEditorAddMusicClipCommandResult {

                                    /** EditorAddMusicClipCommandResult clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorAddMusicClipCommandResult. */
                                class EditorAddMusicClipCommandResult implements IEditorAddMusicClipCommandResult {

                                    /**
                                     * Constructs a new EditorAddMusicClipCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommandResult);

                                    /** EditorAddMusicClipCommandResult clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorAddMusicClipCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddMusicClipCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommandResult;

                                    /**
                                     * Encodes the specified EditorAddMusicClipCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddMusicClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddMusicClipCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddMusicClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddMusicClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddMusicClipCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddMusicClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommandResult;

                                    /**
                                     * Decodes an EditorAddMusicClipCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddMusicClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommandResult;

                                    /**
                                     * Verifies an EditorAddMusicClipCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddMusicClipCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddMusicClipCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommandResult;

                                    /**
                                     * Creates a plain object from an EditorAddMusicClipCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorAddMusicClipCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddMusicClipCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddMusicClipCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddTextClipCommand. */
                                interface IEditorAddTextClipCommand {

                                    /** EditorAddTextClipCommand trackId */
                                    trackId?: (string|null);

                                    /** EditorAddTextClipCommand content */
                                    content?: (string|null);

                                    /** EditorAddTextClipCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorAddTextClipCommand duration */
                                    duration?: (number|Long|null);
                                }

                                /** Represents an EditorAddTextClipCommand. */
                                class EditorAddTextClipCommand implements IEditorAddTextClipCommand {

                                    /**
                                     * Constructs a new EditorAddTextClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommand);

                                    /** EditorAddTextClipCommand trackId. */
                                    public trackId: string;

                                    /** EditorAddTextClipCommand content. */
                                    public content: string;

                                    /** EditorAddTextClipCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorAddTextClipCommand duration. */
                                    public duration: (number|Long);

                                    /**
                                     * Creates a new EditorAddTextClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddTextClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommand;

                                    /**
                                     * Encodes the specified EditorAddTextClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommand.verify|verify} messages.
                                     * @param message EditorAddTextClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddTextClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommand.verify|verify} messages.
                                     * @param message EditorAddTextClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddTextClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddTextClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommand;

                                    /**
                                     * Decodes an EditorAddTextClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddTextClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommand;

                                    /**
                                     * Verifies an EditorAddTextClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddTextClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddTextClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommand;

                                    /**
                                     * Creates a plain object from an EditorAddTextClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorAddTextClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddTextClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddTextClipCommandResult. */
                                interface IEditorAddTextClipCommandResult {

                                    /** EditorAddTextClipCommandResult clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorAddTextClipCommandResult. */
                                class EditorAddTextClipCommandResult implements IEditorAddTextClipCommandResult {

                                    /**
                                     * Constructs a new EditorAddTextClipCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommandResult);

                                    /** EditorAddTextClipCommandResult clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorAddTextClipCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddTextClipCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommandResult;

                                    /**
                                     * Encodes the specified EditorAddTextClipCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddTextClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddTextClipCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddTextClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddTextClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddTextClipCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddTextClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommandResult;

                                    /**
                                     * Decodes an EditorAddTextClipCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddTextClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommandResult;

                                    /**
                                     * Verifies an EditorAddTextClipCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddTextClipCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddTextClipCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommandResult;

                                    /**
                                     * Creates a plain object from an EditorAddTextClipCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorAddTextClipCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddTextClipCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddTextClipCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddStickerClipCommand. */
                                interface IEditorAddStickerClipCommand {

                                    /** EditorAddStickerClipCommand trackId */
                                    trackId?: (string|null);

                                    /** EditorAddStickerClipCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorAddStickerClipCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorAddStickerClipCommand duration */
                                    duration?: (number|Long|null);
                                }

                                /** Represents an EditorAddStickerClipCommand. */
                                class EditorAddStickerClipCommand implements IEditorAddStickerClipCommand {

                                    /**
                                     * Constructs a new EditorAddStickerClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommand);

                                    /** EditorAddStickerClipCommand trackId. */
                                    public trackId: string;

                                    /** EditorAddStickerClipCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorAddStickerClipCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorAddStickerClipCommand duration. */
                                    public duration: (number|Long);

                                    /**
                                     * Creates a new EditorAddStickerClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddStickerClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommand;

                                    /**
                                     * Encodes the specified EditorAddStickerClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommand.verify|verify} messages.
                                     * @param message EditorAddStickerClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddStickerClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommand.verify|verify} messages.
                                     * @param message EditorAddStickerClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddStickerClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddStickerClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommand;

                                    /**
                                     * Decodes an EditorAddStickerClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddStickerClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommand;

                                    /**
                                     * Verifies an EditorAddStickerClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddStickerClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddStickerClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommand;

                                    /**
                                     * Creates a plain object from an EditorAddStickerClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorAddStickerClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddStickerClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddStickerClipCommandResult. */
                                interface IEditorAddStickerClipCommandResult {

                                    /** EditorAddStickerClipCommandResult clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorAddStickerClipCommandResult. */
                                class EditorAddStickerClipCommandResult implements IEditorAddStickerClipCommandResult {

                                    /**
                                     * Constructs a new EditorAddStickerClipCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommandResult);

                                    /** EditorAddStickerClipCommandResult clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorAddStickerClipCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddStickerClipCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommandResult;

                                    /**
                                     * Encodes the specified EditorAddStickerClipCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddStickerClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddStickerClipCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddStickerClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddStickerClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddStickerClipCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddStickerClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommandResult;

                                    /**
                                     * Decodes an EditorAddStickerClipCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddStickerClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommandResult;

                                    /**
                                     * Verifies an EditorAddStickerClipCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddStickerClipCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddStickerClipCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommandResult;

                                    /**
                                     * Creates a plain object from an EditorAddStickerClipCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorAddStickerClipCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddStickerClipCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddStickerClipCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** SourceType enum. */
                                enum SourceType {
                                    SourceInvalid = 0,
                                    SourceUnknown = 1,
                                    SourceTexture = 2,
                                    SourcePcm = 3,
                                    SourceAll = 4
                                }

                                /** Properties of an EditorAddExtensionClipCommand. */
                                interface IEditorAddExtensionClipCommand {

                                    /** EditorAddExtensionClipCommand trackId */
                                    trackId?: (string|null);

                                    /** EditorAddExtensionClipCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorAddExtensionClipCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorAddExtensionClipCommand duration */
                                    duration?: (number|Long|null);

                                    /** EditorAddExtensionClipCommand name */
                                    name?: (string|null);

                                    /** EditorAddExtensionClipCommand sourceType */
                                    sourceType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SourceType|null);

                                    /** EditorAddExtensionClipCommand flag */
                                    flag?: (number|Long|null);
                                }

                                /** Represents an EditorAddExtensionClipCommand. */
                                class EditorAddExtensionClipCommand implements IEditorAddExtensionClipCommand {

                                    /**
                                     * Constructs a new EditorAddExtensionClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommand);

                                    /** EditorAddExtensionClipCommand trackId. */
                                    public trackId: string;

                                    /** EditorAddExtensionClipCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorAddExtensionClipCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorAddExtensionClipCommand duration. */
                                    public duration: (number|Long);

                                    /** EditorAddExtensionClipCommand name. */
                                    public name: string;

                                    /** EditorAddExtensionClipCommand sourceType. */
                                    public sourceType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SourceType;

                                    /** EditorAddExtensionClipCommand flag. */
                                    public flag: (number|Long);

                                    /**
                                     * Creates a new EditorAddExtensionClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddExtensionClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommand;

                                    /**
                                     * Encodes the specified EditorAddExtensionClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommand.verify|verify} messages.
                                     * @param message EditorAddExtensionClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddExtensionClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommand.verify|verify} messages.
                                     * @param message EditorAddExtensionClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddExtensionClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddExtensionClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommand;

                                    /**
                                     * Decodes an EditorAddExtensionClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddExtensionClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommand;

                                    /**
                                     * Verifies an EditorAddExtensionClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddExtensionClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddExtensionClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommand;

                                    /**
                                     * Creates a plain object from an EditorAddExtensionClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorAddExtensionClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddExtensionClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorAddExtensionClipCommandResult. */
                                interface IEditorAddExtensionClipCommandResult {

                                    /** EditorAddExtensionClipCommandResult clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorAddExtensionClipCommandResult. */
                                class EditorAddExtensionClipCommandResult implements IEditorAddExtensionClipCommandResult {

                                    /**
                                     * Constructs a new EditorAddExtensionClipCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommandResult);

                                    /** EditorAddExtensionClipCommandResult clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorAddExtensionClipCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorAddExtensionClipCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommandResult;

                                    /**
                                     * Encodes the specified EditorAddExtensionClipCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddExtensionClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorAddExtensionClipCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommandResult.verify|verify} messages.
                                     * @param message EditorAddExtensionClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorAddExtensionClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorAddExtensionClipCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorAddExtensionClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommandResult;

                                    /**
                                     * Decodes an EditorAddExtensionClipCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorAddExtensionClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommandResult;

                                    /**
                                     * Verifies an EditorAddExtensionClipCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorAddExtensionClipCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorAddExtensionClipCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommandResult;

                                    /**
                                     * Creates a plain object from an EditorAddExtensionClipCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorAddExtensionClipCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorAddExtensionClipCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorAddExtensionClipCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorChangeClipResourceCommand. */
                                interface IEditorChangeClipResourceCommand {

                                    /** EditorChangeClipResourceCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorChangeClipResourceCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorChangeClipResourceCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorChangeClipResourceCommand endTime */
                                    endTime?: (number|Long|null);
                                }

                                /** Represents an EditorChangeClipResourceCommand. */
                                class EditorChangeClipResourceCommand implements IEditorChangeClipResourceCommand {

                                    /**
                                     * Constructs a new EditorChangeClipResourceCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorChangeClipResourceCommand);

                                    /** EditorChangeClipResourceCommand clipId. */
                                    public clipId: string;

                                    /** EditorChangeClipResourceCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorChangeClipResourceCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorChangeClipResourceCommand endTime. */
                                    public endTime: (number|Long);

                                    /**
                                     * Creates a new EditorChangeClipResourceCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorChangeClipResourceCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorChangeClipResourceCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorChangeClipResourceCommand;

                                    /**
                                     * Encodes the specified EditorChangeClipResourceCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorChangeClipResourceCommand.verify|verify} messages.
                                     * @param message EditorChangeClipResourceCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorChangeClipResourceCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorChangeClipResourceCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorChangeClipResourceCommand.verify|verify} messages.
                                     * @param message EditorChangeClipResourceCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorChangeClipResourceCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorChangeClipResourceCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorChangeClipResourceCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorChangeClipResourceCommand;

                                    /**
                                     * Decodes an EditorChangeClipResourceCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorChangeClipResourceCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorChangeClipResourceCommand;

                                    /**
                                     * Verifies an EditorChangeClipResourceCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorChangeClipResourceCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorChangeClipResourceCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorChangeClipResourceCommand;

                                    /**
                                     * Creates a plain object from an EditorChangeClipResourceCommand message. Also converts values to other types if specified.
                                     * @param message EditorChangeClipResourceCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorChangeClipResourceCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorChangeClipResourceCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSplitClipCommand. */
                                interface IEditorSplitClipCommand {

                                    /** EditorSplitClipCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSplitClipCommand position */
                                    position?: (number|Long|null);
                                }

                                /** Represents an EditorSplitClipCommand. */
                                class EditorSplitClipCommand implements IEditorSplitClipCommand {

                                    /**
                                     * Constructs a new EditorSplitClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommand);

                                    /** EditorSplitClipCommand clipId. */
                                    public clipId: string;

                                    /** EditorSplitClipCommand position. */
                                    public position: (number|Long);

                                    /**
                                     * Creates a new EditorSplitClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSplitClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommand;

                                    /**
                                     * Encodes the specified EditorSplitClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommand.verify|verify} messages.
                                     * @param message EditorSplitClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSplitClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommand.verify|verify} messages.
                                     * @param message EditorSplitClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSplitClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSplitClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommand;

                                    /**
                                     * Decodes an EditorSplitClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSplitClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommand;

                                    /**
                                     * Verifies an EditorSplitClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSplitClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSplitClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommand;

                                    /**
                                     * Creates a plain object from an EditorSplitClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorSplitClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSplitClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSplitClipCommandResult. */
                                interface IEditorSplitClipCommandResult {

                                    /** EditorSplitClipCommandResult clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorSplitClipCommandResult. */
                                class EditorSplitClipCommandResult implements IEditorSplitClipCommandResult {

                                    /**
                                     * Constructs a new EditorSplitClipCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommandResult);

                                    /** EditorSplitClipCommandResult clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorSplitClipCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSplitClipCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommandResult;

                                    /**
                                     * Encodes the specified EditorSplitClipCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommandResult.verify|verify} messages.
                                     * @param message EditorSplitClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSplitClipCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommandResult.verify|verify} messages.
                                     * @param message EditorSplitClipCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSplitClipCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSplitClipCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSplitClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommandResult;

                                    /**
                                     * Decodes an EditorSplitClipCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSplitClipCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommandResult;

                                    /**
                                     * Verifies an EditorSplitClipCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSplitClipCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSplitClipCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommandResult;

                                    /**
                                     * Creates a plain object from an EditorSplitClipCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorSplitClipCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSplitClipCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSplitClipCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorDeleteClipCommand. */
                                interface IEditorDeleteClipCommand {

                                    /** EditorDeleteClipCommand clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorDeleteClipCommand. */
                                class EditorDeleteClipCommand implements IEditorDeleteClipCommand {

                                    /**
                                     * Constructs a new EditorDeleteClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteClipCommand);

                                    /** EditorDeleteClipCommand clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorDeleteClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorDeleteClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteClipCommand;

                                    /**
                                     * Encodes the specified EditorDeleteClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteClipCommand.verify|verify} messages.
                                     * @param message EditorDeleteClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorDeleteClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteClipCommand.verify|verify} messages.
                                     * @param message EditorDeleteClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorDeleteClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorDeleteClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteClipCommand;

                                    /**
                                     * Decodes an EditorDeleteClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorDeleteClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteClipCommand;

                                    /**
                                     * Verifies an EditorDeleteClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorDeleteClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorDeleteClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteClipCommand;

                                    /**
                                     * Creates a plain object from an EditorDeleteClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorDeleteClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorDeleteClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorMoveClipCommand. */
                                interface IEditorMoveClipCommand {

                                    /** EditorMoveClipCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorMoveClipCommand timePosition */
                                    timePosition?: (number|Long|null);

                                    /** EditorMoveClipCommand trackId */
                                    trackId?: (string|null);
                                }

                                /** Represents an EditorMoveClipCommand. */
                                class EditorMoveClipCommand implements IEditorMoveClipCommand {

                                    /**
                                     * Constructs a new EditorMoveClipCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorMoveClipCommand);

                                    /** EditorMoveClipCommand clipId. */
                                    public clipId: string;

                                    /** EditorMoveClipCommand timePosition. */
                                    public timePosition: (number|Long);

                                    /** EditorMoveClipCommand trackId. */
                                    public trackId: string;

                                    /**
                                     * Creates a new EditorMoveClipCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorMoveClipCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorMoveClipCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorMoveClipCommand;

                                    /**
                                     * Encodes the specified EditorMoveClipCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorMoveClipCommand.verify|verify} messages.
                                     * @param message EditorMoveClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorMoveClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorMoveClipCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorMoveClipCommand.verify|verify} messages.
                                     * @param message EditorMoveClipCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorMoveClipCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorMoveClipCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorMoveClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorMoveClipCommand;

                                    /**
                                     * Decodes an EditorMoveClipCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorMoveClipCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorMoveClipCommand;

                                    /**
                                     * Verifies an EditorMoveClipCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorMoveClipCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorMoveClipCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorMoveClipCommand;

                                    /**
                                     * Creates a plain object from an EditorMoveClipCommand message. Also converts values to other types if specified.
                                     * @param message EditorMoveClipCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorMoveClipCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorMoveClipCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorRemoveTrackCommand. */
                                interface IEditorRemoveTrackCommand {

                                    /** EditorRemoveTrackCommand trackId */
                                    trackId?: (string|null);
                                }

                                /** Represents an EditorRemoveTrackCommand. */
                                class EditorRemoveTrackCommand implements IEditorRemoveTrackCommand {

                                    /**
                                     * Constructs a new EditorRemoveTrackCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTrackCommand);

                                    /** EditorRemoveTrackCommand trackId. */
                                    public trackId: string;

                                    /**
                                     * Creates a new EditorRemoveTrackCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorRemoveTrackCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTrackCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTrackCommand;

                                    /**
                                     * Encodes the specified EditorRemoveTrackCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTrackCommand.verify|verify} messages.
                                     * @param message EditorRemoveTrackCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTrackCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorRemoveTrackCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTrackCommand.verify|verify} messages.
                                     * @param message EditorRemoveTrackCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTrackCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorRemoveTrackCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorRemoveTrackCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTrackCommand;

                                    /**
                                     * Decodes an EditorRemoveTrackCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorRemoveTrackCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTrackCommand;

                                    /**
                                     * Verifies an EditorRemoveTrackCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorRemoveTrackCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorRemoveTrackCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTrackCommand;

                                    /**
                                     * Creates a plain object from an EditorRemoveTrackCommand message. Also converts values to other types if specified.
                                     * @param message EditorRemoveTrackCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTrackCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorRemoveTrackCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipLookupCommand. */
                                interface IEditorSetClipLookupCommand {

                                    /** EditorSetClipLookupCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipLookupCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorSetClipLookupCommand intensity */
                                    intensity?: (number|null);
                                }

                                /** Represents an EditorSetClipLookupCommand. */
                                class EditorSetClipLookupCommand implements IEditorSetClipLookupCommand {

                                    /**
                                     * Constructs a new EditorSetClipLookupCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipLookupCommand);

                                    /** EditorSetClipLookupCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipLookupCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorSetClipLookupCommand intensity. */
                                    public intensity: number;

                                    /**
                                     * Creates a new EditorSetClipLookupCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipLookupCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipLookupCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipLookupCommand;

                                    /**
                                     * Encodes the specified EditorSetClipLookupCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipLookupCommand.verify|verify} messages.
                                     * @param message EditorSetClipLookupCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipLookupCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipLookupCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipLookupCommand.verify|verify} messages.
                                     * @param message EditorSetClipLookupCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipLookupCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipLookupCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipLookupCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipLookupCommand;

                                    /**
                                     * Decodes an EditorSetClipLookupCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipLookupCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipLookupCommand;

                                    /**
                                     * Verifies an EditorSetClipLookupCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipLookupCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipLookupCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipLookupCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipLookupCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipLookupCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipLookupCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipLookupCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTransitionDurationUsCommand. */
                                interface IEditorSetTransitionDurationUsCommand {

                                    /** EditorSetTransitionDurationUsCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTransitionDurationUsCommand durationUs */
                                    durationUs?: (number|Long|null);
                                }

                                /** Represents an EditorSetTransitionDurationUsCommand. */
                                class EditorSetTransitionDurationUsCommand implements IEditorSetTransitionDurationUsCommand {

                                    /**
                                     * Constructs a new EditorSetTransitionDurationUsCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionDurationUsCommand);

                                    /** EditorSetTransitionDurationUsCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTransitionDurationUsCommand durationUs. */
                                    public durationUs: (number|Long);

                                    /**
                                     * Creates a new EditorSetTransitionDurationUsCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTransitionDurationUsCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionDurationUsCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionDurationUsCommand;

                                    /**
                                     * Encodes the specified EditorSetTransitionDurationUsCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionDurationUsCommand.verify|verify} messages.
                                     * @param message EditorSetTransitionDurationUsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionDurationUsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTransitionDurationUsCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionDurationUsCommand.verify|verify} messages.
                                     * @param message EditorSetTransitionDurationUsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionDurationUsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTransitionDurationUsCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTransitionDurationUsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionDurationUsCommand;

                                    /**
                                     * Decodes an EditorSetTransitionDurationUsCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTransitionDurationUsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionDurationUsCommand;

                                    /**
                                     * Verifies an EditorSetTransitionDurationUsCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTransitionDurationUsCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTransitionDurationUsCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionDurationUsCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTransitionDurationUsCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTransitionDurationUsCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionDurationUsCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTransitionDurationUsCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorRemoveTransitionCommand. */
                                interface IEditorRemoveTransitionCommand {

                                    /** EditorRemoveTransitionCommand clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorRemoveTransitionCommand. */
                                class EditorRemoveTransitionCommand implements IEditorRemoveTransitionCommand {

                                    /**
                                     * Constructs a new EditorRemoveTransitionCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTransitionCommand);

                                    /** EditorRemoveTransitionCommand clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorRemoveTransitionCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorRemoveTransitionCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTransitionCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTransitionCommand;

                                    /**
                                     * Encodes the specified EditorRemoveTransitionCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTransitionCommand.verify|verify} messages.
                                     * @param message EditorRemoveTransitionCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTransitionCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorRemoveTransitionCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTransitionCommand.verify|verify} messages.
                                     * @param message EditorRemoveTransitionCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorRemoveTransitionCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorRemoveTransitionCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorRemoveTransitionCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTransitionCommand;

                                    /**
                                     * Decodes an EditorRemoveTransitionCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorRemoveTransitionCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTransitionCommand;

                                    /**
                                     * Verifies an EditorRemoveTransitionCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorRemoveTransitionCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorRemoveTransitionCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTransitionCommand;

                                    /**
                                     * Creates a plain object from an EditorRemoveTransitionCommand message. Also converts values to other types if specified.
                                     * @param message EditorRemoveTransitionCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorRemoveTransitionCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorRemoveTransitionCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorProp. */
                                interface IEditorProp {

                                    /** EditorProp propKey */
                                    propKey?: (string|null);

                                    /** EditorProp propType */
                                    propType?: (string|null);

                                    /** EditorProp voidVal */
                                    voidVal?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IVoidResult|null);

                                    /** EditorProp floatVal */
                                    floatVal?: (number|null);

                                    /** EditorProp strVal */
                                    strVal?: (string|null);

                                    /** EditorProp intVal */
                                    intVal?: (number|Long|null);
                                }

                                /** Represents an EditorProp. */
                                class EditorProp implements IEditorProp {

                                    /**
                                     * Constructs a new EditorProp.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp);

                                    /** EditorProp propKey. */
                                    public propKey: string;

                                    /** EditorProp propType. */
                                    public propType: string;

                                    /** EditorProp voidVal. */
                                    public voidVal?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IVoidResult|null);

                                    /** EditorProp floatVal. */
                                    public floatVal?: (number|null);

                                    /** EditorProp strVal. */
                                    public strVal?: (string|null);

                                    /** EditorProp intVal. */
                                    public intVal?: (number|Long|null);

                                    /** EditorProp value. */
                                    public value?: ("voidVal"|"floatVal"|"strVal"|"intVal");

                                    /**
                                     * Creates a new EditorProp instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorProp instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorProp;

                                    /**
                                     * Encodes the specified EditorProp message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorProp.verify|verify} messages.
                                     * @param message EditorProp message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorProp message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorProp.verify|verify} messages.
                                     * @param message EditorProp message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorProp message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorProp
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorProp;

                                    /**
                                     * Decodes an EditorProp message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorProp
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorProp;

                                    /**
                                     * Verifies an EditorProp message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorProp message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorProp
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorProp;

                                    /**
                                     * Creates a plain object from an EditorProp message. Also converts values to other types if specified.
                                     * @param message EditorProp
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorProp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorProp to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorPropDef. */
                                interface IEditorPropDef {

                                    /** EditorPropDef propKey */
                                    propKey?: (string|null);

                                    /** EditorPropDef propType */
                                    propType?: (string|null);

                                    /** EditorPropDef propValType */
                                    propValType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef.PropValueType|null);
                                }

                                /** Represents an EditorPropDef. */
                                class EditorPropDef implements IEditorPropDef {

                                    /**
                                     * Constructs a new EditorPropDef.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef);

                                    /** EditorPropDef propKey. */
                                    public propKey: string;

                                    /** EditorPropDef propType. */
                                    public propType: string;

                                    /** EditorPropDef propValType. */
                                    public propValType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef.PropValueType;

                                    /**
                                     * Creates a new EditorPropDef instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorPropDef instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef;

                                    /**
                                     * Encodes the specified EditorPropDef message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef.verify|verify} messages.
                                     * @param message EditorPropDef message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorPropDef message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef.verify|verify} messages.
                                     * @param message EditorPropDef message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorPropDef message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorPropDef
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef;

                                    /**
                                     * Decodes an EditorPropDef message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorPropDef
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef;

                                    /**
                                     * Verifies an EditorPropDef message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorPropDef message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorPropDef
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef;

                                    /**
                                     * Creates a plain object from an EditorPropDef message. Also converts values to other types if specified.
                                     * @param message EditorPropDef
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorPropDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorPropDef to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                namespace EditorPropDef {

                                    /** PropValueType enum. */
                                    enum PropValueType {
                                        PROP_VALUE_TYPE_INVALID = 0,
                                        PROP_VALUE_TYPE_STRING = 1,
                                        PROP_VALUE_TYPE_DOUBLE = 2,
                                        PROP_VALUE_TYPE_INT64 = 3
                                    }
                                }

                                /** Properties of an EditorGetClipPropListCommand. */
                                interface IEditorGetClipPropListCommand {

                                    /** EditorGetClipPropListCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorGetClipPropListCommand propDefList */
                                    propDefList?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[]|null);
                                }

                                /** Represents an EditorGetClipPropListCommand. */
                                class EditorGetClipPropListCommand implements IEditorGetClipPropListCommand {

                                    /**
                                     * Constructs a new EditorGetClipPropListCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListCommand);

                                    /** EditorGetClipPropListCommand clipId. */
                                    public clipId: string;

                                    /** EditorGetClipPropListCommand propDefList. */
                                    public propDefList: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorPropDef[];

                                    /**
                                     * Creates a new EditorGetClipPropListCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetClipPropListCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListCommand;

                                    /**
                                     * Encodes the specified EditorGetClipPropListCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListCommand.verify|verify} messages.
                                     * @param message EditorGetClipPropListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetClipPropListCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListCommand.verify|verify} messages.
                                     * @param message EditorGetClipPropListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetClipPropListCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetClipPropListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListCommand;

                                    /**
                                     * Decodes an EditorGetClipPropListCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetClipPropListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListCommand;

                                    /**
                                     * Verifies an EditorGetClipPropListCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetClipPropListCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetClipPropListCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListCommand;

                                    /**
                                     * Creates a plain object from an EditorGetClipPropListCommand message. Also converts values to other types if specified.
                                     * @param message EditorGetClipPropListCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetClipPropListCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetClipPropListResult. */
                                interface IEditorGetClipPropListResult {

                                    /** EditorGetClipPropListResult propList */
                                    propList?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp[]|null);
                                }

                                /** Represents an EditorGetClipPropListResult. */
                                class EditorGetClipPropListResult implements IEditorGetClipPropListResult {

                                    /**
                                     * Constructs a new EditorGetClipPropListResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListResult);

                                    /** EditorGetClipPropListResult propList. */
                                    public propList: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp[];

                                    /**
                                     * Creates a new EditorGetClipPropListResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetClipPropListResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListResult;

                                    /**
                                     * Encodes the specified EditorGetClipPropListResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListResult.verify|verify} messages.
                                     * @param message EditorGetClipPropListResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetClipPropListResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListResult.verify|verify} messages.
                                     * @param message EditorGetClipPropListResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipPropListResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetClipPropListResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetClipPropListResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListResult;

                                    /**
                                     * Decodes an EditorGetClipPropListResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetClipPropListResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListResult;

                                    /**
                                     * Verifies an EditorGetClipPropListResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetClipPropListResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetClipPropListResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListResult;

                                    /**
                                     * Creates a plain object from an EditorGetClipPropListResult message. Also converts values to other types if specified.
                                     * @param message EditorGetClipPropListResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipPropListResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetClipPropListResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipPropListCommand. */
                                interface IEditorSetClipPropListCommand {

                                    /** EditorSetClipPropListCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipPropListCommand propList */
                                    propList?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp[]|null);
                                }

                                /** Represents an EditorSetClipPropListCommand. */
                                class EditorSetClipPropListCommand implements IEditorSetClipPropListCommand {

                                    /**
                                     * Constructs a new EditorSetClipPropListCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipPropListCommand);

                                    /** EditorSetClipPropListCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipPropListCommand propList. */
                                    public propList: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorProp[];

                                    /**
                                     * Creates a new EditorSetClipPropListCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipPropListCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipPropListCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipPropListCommand;

                                    /**
                                     * Encodes the specified EditorSetClipPropListCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipPropListCommand.verify|verify} messages.
                                     * @param message EditorSetClipPropListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipPropListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipPropListCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipPropListCommand.verify|verify} messages.
                                     * @param message EditorSetClipPropListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipPropListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipPropListCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipPropListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipPropListCommand;

                                    /**
                                     * Decodes an EditorSetClipPropListCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipPropListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipPropListCommand;

                                    /**
                                     * Verifies an EditorSetClipPropListCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipPropListCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipPropListCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipPropListCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipPropListCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipPropListCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipPropListCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipPropListCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipCropCommand. */
                                interface IEditorSetClipCropCommand {

                                    /** EditorSetClipCropCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipCropCommand x */
                                    x?: (number|null);

                                    /** EditorSetClipCropCommand y */
                                    y?: (number|null);

                                    /** EditorSetClipCropCommand w */
                                    w?: (number|null);

                                    /** EditorSetClipCropCommand h */
                                    h?: (number|null);

                                    /** EditorSetClipCropCommand rotation */
                                    rotation?: (number|null);

                                    /** EditorSetClipCropCommand rotateByCenter */
                                    rotateByCenter?: (boolean|null);

                                    /** EditorSetClipCropCommand normalize */
                                    normalize?: (boolean|null);
                                }

                                /** Represents an EditorSetClipCropCommand. */
                                class EditorSetClipCropCommand implements IEditorSetClipCropCommand {

                                    /**
                                     * Constructs a new EditorSetClipCropCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCropCommand);

                                    /** EditorSetClipCropCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipCropCommand x. */
                                    public x: number;

                                    /** EditorSetClipCropCommand y. */
                                    public y: number;

                                    /** EditorSetClipCropCommand w. */
                                    public w: number;

                                    /** EditorSetClipCropCommand h. */
                                    public h: number;

                                    /** EditorSetClipCropCommand rotation. */
                                    public rotation: number;

                                    /** EditorSetClipCropCommand rotateByCenter. */
                                    public rotateByCenter: boolean;

                                    /** EditorSetClipCropCommand normalize. */
                                    public normalize: boolean;

                                    /**
                                     * Creates a new EditorSetClipCropCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipCropCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCropCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCropCommand;

                                    /**
                                     * Encodes the specified EditorSetClipCropCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCropCommand.verify|verify} messages.
                                     * @param message EditorSetClipCropCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCropCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipCropCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCropCommand.verify|verify} messages.
                                     * @param message EditorSetClipCropCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCropCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipCropCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipCropCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCropCommand;

                                    /**
                                     * Decodes an EditorSetClipCropCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipCropCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCropCommand;

                                    /**
                                     * Verifies an EditorSetClipCropCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipCropCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipCropCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCropCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipCropCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipCropCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCropCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipCropCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipCanvasBackgroundCommand. */
                                interface IEditorSetClipCanvasBackgroundCommand {

                                    /** EditorSetClipCanvasBackgroundCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipCanvasBackgroundCommand color */
                                    color?: (number|null);
                                }

                                /** Represents an EditorSetClipCanvasBackgroundCommand. */
                                class EditorSetClipCanvasBackgroundCommand implements IEditorSetClipCanvasBackgroundCommand {

                                    /**
                                     * Constructs a new EditorSetClipCanvasBackgroundCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundCommand);

                                    /** EditorSetClipCanvasBackgroundCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipCanvasBackgroundCommand color. */
                                    public color: number;

                                    /**
                                     * Creates a new EditorSetClipCanvasBackgroundCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipCanvasBackgroundCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundCommand;

                                    /**
                                     * Encodes the specified EditorSetClipCanvasBackgroundCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundCommand.verify|verify} messages.
                                     * @param message EditorSetClipCanvasBackgroundCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipCanvasBackgroundCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundCommand.verify|verify} messages.
                                     * @param message EditorSetClipCanvasBackgroundCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipCanvasBackgroundCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipCanvasBackgroundCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundCommand;

                                    /**
                                     * Decodes an EditorSetClipCanvasBackgroundCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipCanvasBackgroundCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundCommand;

                                    /**
                                     * Verifies an EditorSetClipCanvasBackgroundCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipCanvasBackgroundCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipCanvasBackgroundCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipCanvasBackgroundCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipCanvasBackgroundCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipCanvasBackgroundCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipCanvasBackgroundResCommand. */
                                interface IEditorSetClipCanvasBackgroundResCommand {

                                    /** EditorSetClipCanvasBackgroundResCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipCanvasBackgroundResCommand resourceUri */
                                    resourceUri?: (string|null);
                                }

                                /** Represents an EditorSetClipCanvasBackgroundResCommand. */
                                class EditorSetClipCanvasBackgroundResCommand implements IEditorSetClipCanvasBackgroundResCommand {

                                    /**
                                     * Constructs a new EditorSetClipCanvasBackgroundResCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundResCommand);

                                    /** EditorSetClipCanvasBackgroundResCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipCanvasBackgroundResCommand resourceUri. */
                                    public resourceUri: string;

                                    /**
                                     * Creates a new EditorSetClipCanvasBackgroundResCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipCanvasBackgroundResCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundResCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundResCommand;

                                    /**
                                     * Encodes the specified EditorSetClipCanvasBackgroundResCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundResCommand.verify|verify} messages.
                                     * @param message EditorSetClipCanvasBackgroundResCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundResCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipCanvasBackgroundResCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundResCommand.verify|verify} messages.
                                     * @param message EditorSetClipCanvasBackgroundResCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundResCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipCanvasBackgroundResCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipCanvasBackgroundResCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundResCommand;

                                    /**
                                     * Decodes an EditorSetClipCanvasBackgroundResCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipCanvasBackgroundResCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundResCommand;

                                    /**
                                     * Verifies an EditorSetClipCanvasBackgroundResCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipCanvasBackgroundResCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipCanvasBackgroundResCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundResCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipCanvasBackgroundResCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipCanvasBackgroundResCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundResCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipCanvasBackgroundResCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipCanvasBackgroundBlurTypeCommand. */
                                interface IEditorSetClipCanvasBackgroundBlurTypeCommand {

                                    /** EditorSetClipCanvasBackgroundBlurTypeCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipCanvasBackgroundBlurTypeCommand blurType */
                                    blurType?: (number|null);
                                }

                                /** Represents an EditorSetClipCanvasBackgroundBlurTypeCommand. */
                                class EditorSetClipCanvasBackgroundBlurTypeCommand implements IEditorSetClipCanvasBackgroundBlurTypeCommand {

                                    /**
                                     * Constructs a new EditorSetClipCanvasBackgroundBlurTypeCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundBlurTypeCommand);

                                    /** EditorSetClipCanvasBackgroundBlurTypeCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipCanvasBackgroundBlurTypeCommand blurType. */
                                    public blurType: number;

                                    /**
                                     * Creates a new EditorSetClipCanvasBackgroundBlurTypeCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipCanvasBackgroundBlurTypeCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundBlurTypeCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundBlurTypeCommand;

                                    /**
                                     * Encodes the specified EditorSetClipCanvasBackgroundBlurTypeCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundBlurTypeCommand.verify|verify} messages.
                                     * @param message EditorSetClipCanvasBackgroundBlurTypeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundBlurTypeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipCanvasBackgroundBlurTypeCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundBlurTypeCommand.verify|verify} messages.
                                     * @param message EditorSetClipCanvasBackgroundBlurTypeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipCanvasBackgroundBlurTypeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipCanvasBackgroundBlurTypeCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipCanvasBackgroundBlurTypeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundBlurTypeCommand;

                                    /**
                                     * Decodes an EditorSetClipCanvasBackgroundBlurTypeCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipCanvasBackgroundBlurTypeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundBlurTypeCommand;

                                    /**
                                     * Verifies an EditorSetClipCanvasBackgroundBlurTypeCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipCanvasBackgroundBlurTypeCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipCanvasBackgroundBlurTypeCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundBlurTypeCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipCanvasBackgroundBlurTypeCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipCanvasBackgroundBlurTypeCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipCanvasBackgroundBlurTypeCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipCanvasBackgroundBlurTypeCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** ResourceType enum. */
                                enum ResourceType {
                                    ResTypeUnknown = 0,
                                    ResTypeImage = 1,
                                    ResTypeMedia = 2,
                                    ResTypeLookup = 3,
                                    ResTypeSticker = 4,
                                    ResTypeMagic = 5,
                                    ResTypeFont = 6,
                                    ResTypeExtra = 7
                                }

                                /** Properties of an EditorDeleteMaterialCommand. */
                                interface IEditorDeleteMaterialCommand {

                                    /** EditorDeleteMaterialCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorDeleteMaterialCommand resType */
                                    resType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType|null);
                                }

                                /** Represents an EditorDeleteMaterialCommand. */
                                class EditorDeleteMaterialCommand implements IEditorDeleteMaterialCommand {

                                    /**
                                     * Constructs a new EditorDeleteMaterialCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteMaterialCommand);

                                    /** EditorDeleteMaterialCommand clipId. */
                                    public clipId: string;

                                    /** EditorDeleteMaterialCommand resType. */
                                    public resType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType;

                                    /**
                                     * Creates a new EditorDeleteMaterialCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorDeleteMaterialCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteMaterialCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteMaterialCommand;

                                    /**
                                     * Encodes the specified EditorDeleteMaterialCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteMaterialCommand.verify|verify} messages.
                                     * @param message EditorDeleteMaterialCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteMaterialCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorDeleteMaterialCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteMaterialCommand.verify|verify} messages.
                                     * @param message EditorDeleteMaterialCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorDeleteMaterialCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorDeleteMaterialCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorDeleteMaterialCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteMaterialCommand;

                                    /**
                                     * Decodes an EditorDeleteMaterialCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorDeleteMaterialCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteMaterialCommand;

                                    /**
                                     * Verifies an EditorDeleteMaterialCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorDeleteMaterialCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorDeleteMaterialCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteMaterialCommand;

                                    /**
                                     * Creates a plain object from an EditorDeleteMaterialCommand message. Also converts values to other types if specified.
                                     * @param message EditorDeleteMaterialCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorDeleteMaterialCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorDeleteMaterialCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorCheckToAddMaterialCommand. */
                                interface IEditorCheckToAddMaterialCommand {

                                    /** EditorCheckToAddMaterialCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorCheckToAddMaterialCommand resType */
                                    resType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType|null);
                                }

                                /** Represents an EditorCheckToAddMaterialCommand. */
                                class EditorCheckToAddMaterialCommand implements IEditorCheckToAddMaterialCommand {

                                    /**
                                     * Constructs a new EditorCheckToAddMaterialCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorCheckToAddMaterialCommand);

                                    /** EditorCheckToAddMaterialCommand clipId. */
                                    public clipId: string;

                                    /** EditorCheckToAddMaterialCommand resType. */
                                    public resType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType;

                                    /**
                                     * Creates a new EditorCheckToAddMaterialCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorCheckToAddMaterialCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorCheckToAddMaterialCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorCheckToAddMaterialCommand;

                                    /**
                                     * Encodes the specified EditorCheckToAddMaterialCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorCheckToAddMaterialCommand.verify|verify} messages.
                                     * @param message EditorCheckToAddMaterialCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorCheckToAddMaterialCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorCheckToAddMaterialCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorCheckToAddMaterialCommand.verify|verify} messages.
                                     * @param message EditorCheckToAddMaterialCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorCheckToAddMaterialCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorCheckToAddMaterialCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorCheckToAddMaterialCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorCheckToAddMaterialCommand;

                                    /**
                                     * Decodes an EditorCheckToAddMaterialCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorCheckToAddMaterialCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorCheckToAddMaterialCommand;

                                    /**
                                     * Verifies an EditorCheckToAddMaterialCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorCheckToAddMaterialCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorCheckToAddMaterialCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorCheckToAddMaterialCommand;

                                    /**
                                     * Creates a plain object from an EditorCheckToAddMaterialCommand message. Also converts values to other types if specified.
                                     * @param message EditorCheckToAddMaterialCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorCheckToAddMaterialCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorCheckToAddMaterialCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** TransitionMode enum. */
                                enum TransitionMode {
                                    TransitionModeInvalid = 0,
                                    TransitionOverlay = 1,
                                    TransitionDefault = 2
                                }

                                /** Properties of an EditorSetTransitionEffectCommand. */
                                interface IEditorSetTransitionEffectCommand {

                                    /** EditorSetTransitionEffectCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTransitionEffectCommand resourceUri */
                                    resourceUri?: (string|null);

                                    /** EditorSetTransitionEffectCommand mode */
                                    mode?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.TransitionMode|null);
                                }

                                /** Represents an EditorSetTransitionEffectCommand. */
                                class EditorSetTransitionEffectCommand implements IEditorSetTransitionEffectCommand {

                                    /**
                                     * Constructs a new EditorSetTransitionEffectCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionEffectCommand);

                                    /** EditorSetTransitionEffectCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTransitionEffectCommand resourceUri. */
                                    public resourceUri: string;

                                    /** EditorSetTransitionEffectCommand mode. */
                                    public mode: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.TransitionMode;

                                    /**
                                     * Creates a new EditorSetTransitionEffectCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTransitionEffectCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionEffectCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionEffectCommand;

                                    /**
                                     * Encodes the specified EditorSetTransitionEffectCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionEffectCommand.verify|verify} messages.
                                     * @param message EditorSetTransitionEffectCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionEffectCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTransitionEffectCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionEffectCommand.verify|verify} messages.
                                     * @param message EditorSetTransitionEffectCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTransitionEffectCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTransitionEffectCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTransitionEffectCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionEffectCommand;

                                    /**
                                     * Decodes an EditorSetTransitionEffectCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTransitionEffectCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionEffectCommand;

                                    /**
                                     * Verifies an EditorSetTransitionEffectCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTransitionEffectCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTransitionEffectCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionEffectCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTransitionEffectCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTransitionEffectCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTransitionEffectCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTransitionEffectCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetResourcePropertiesCommand. */
                                interface IEditorSetResourcePropertiesCommand {

                                    /** EditorSetResourcePropertiesCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetResourcePropertiesCommand remoteUri */
                                    remoteUri?: (string|null);

                                    /** EditorSetResourcePropertiesCommand name */
                                    name?: (string|null);

                                    /** EditorSetResourcePropertiesCommand version */
                                    version?: (number|null);

                                    /** EditorSetResourcePropertiesCommand resType */
                                    resType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType|null);
                                }

                                /** Represents an EditorSetResourcePropertiesCommand. */
                                class EditorSetResourcePropertiesCommand implements IEditorSetResourcePropertiesCommand {

                                    /**
                                     * Constructs a new EditorSetResourcePropertiesCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourcePropertiesCommand);

                                    /** EditorSetResourcePropertiesCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetResourcePropertiesCommand remoteUri. */
                                    public remoteUri: string;

                                    /** EditorSetResourcePropertiesCommand name. */
                                    public name: string;

                                    /** EditorSetResourcePropertiesCommand version. */
                                    public version: number;

                                    /** EditorSetResourcePropertiesCommand resType. */
                                    public resType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceType;

                                    /**
                                     * Creates a new EditorSetResourcePropertiesCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetResourcePropertiesCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourcePropertiesCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourcePropertiesCommand;

                                    /**
                                     * Encodes the specified EditorSetResourcePropertiesCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourcePropertiesCommand.verify|verify} messages.
                                     * @param message EditorSetResourcePropertiesCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourcePropertiesCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetResourcePropertiesCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourcePropertiesCommand.verify|verify} messages.
                                     * @param message EditorSetResourcePropertiesCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourcePropertiesCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetResourcePropertiesCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetResourcePropertiesCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourcePropertiesCommand;

                                    /**
                                     * Decodes an EditorSetResourcePropertiesCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetResourcePropertiesCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourcePropertiesCommand;

                                    /**
                                     * Verifies an EditorSetResourcePropertiesCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetResourcePropertiesCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetResourcePropertiesCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourcePropertiesCommand;

                                    /**
                                     * Creates a plain object from an EditorSetResourcePropertiesCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetResourcePropertiesCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourcePropertiesCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetResourcePropertiesCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetResourceDurationUsCommand. */
                                interface IEditorGetResourceDurationUsCommand {

                                    /** EditorGetResourceDurationUsCommand resourceId */
                                    resourceId?: (string|null);
                                }

                                /** Represents an EditorGetResourceDurationUsCommand. */
                                class EditorGetResourceDurationUsCommand implements IEditorGetResourceDurationUsCommand {

                                    /**
                                     * Constructs a new EditorGetResourceDurationUsCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommand);

                                    /** EditorGetResourceDurationUsCommand resourceId. */
                                    public resourceId: string;

                                    /**
                                     * Creates a new EditorGetResourceDurationUsCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetResourceDurationUsCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommand;

                                    /**
                                     * Encodes the specified EditorGetResourceDurationUsCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommand.verify|verify} messages.
                                     * @param message EditorGetResourceDurationUsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetResourceDurationUsCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommand.verify|verify} messages.
                                     * @param message EditorGetResourceDurationUsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetResourceDurationUsCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetResourceDurationUsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommand;

                                    /**
                                     * Decodes an EditorGetResourceDurationUsCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetResourceDurationUsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommand;

                                    /**
                                     * Verifies an EditorGetResourceDurationUsCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetResourceDurationUsCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetResourceDurationUsCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommand;

                                    /**
                                     * Creates a plain object from an EditorGetResourceDurationUsCommand message. Also converts values to other types if specified.
                                     * @param message EditorGetResourceDurationUsCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetResourceDurationUsCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetResourceDurationUsCommandResult. */
                                interface IEditorGetResourceDurationUsCommandResult {

                                    /** EditorGetResourceDurationUsCommandResult duration */
                                    duration?: (number|Long|null);
                                }

                                /** Represents an EditorGetResourceDurationUsCommandResult. */
                                class EditorGetResourceDurationUsCommandResult implements IEditorGetResourceDurationUsCommandResult {

                                    /**
                                     * Constructs a new EditorGetResourceDurationUsCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommandResult);

                                    /** EditorGetResourceDurationUsCommandResult duration. */
                                    public duration: (number|Long);

                                    /**
                                     * Creates a new EditorGetResourceDurationUsCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetResourceDurationUsCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommandResult;

                                    /**
                                     * Encodes the specified EditorGetResourceDurationUsCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommandResult.verify|verify} messages.
                                     * @param message EditorGetResourceDurationUsCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetResourceDurationUsCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommandResult.verify|verify} messages.
                                     * @param message EditorGetResourceDurationUsCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceDurationUsCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetResourceDurationUsCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetResourceDurationUsCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommandResult;

                                    /**
                                     * Decodes an EditorGetResourceDurationUsCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetResourceDurationUsCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommandResult;

                                    /**
                                     * Verifies an EditorGetResourceDurationUsCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetResourceDurationUsCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetResourceDurationUsCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommandResult;

                                    /**
                                     * Creates a plain object from an EditorGetResourceDurationUsCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorGetResourceDurationUsCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceDurationUsCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetResourceDurationUsCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetResourceSizeCommand. */
                                interface IEditorGetResourceSizeCommand {

                                    /** EditorGetResourceSizeCommand resourceId */
                                    resourceId?: (string|null);
                                }

                                /** Represents an EditorGetResourceSizeCommand. */
                                class EditorGetResourceSizeCommand implements IEditorGetResourceSizeCommand {

                                    /**
                                     * Constructs a new EditorGetResourceSizeCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommand);

                                    /** EditorGetResourceSizeCommand resourceId. */
                                    public resourceId: string;

                                    /**
                                     * Creates a new EditorGetResourceSizeCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetResourceSizeCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommand;

                                    /**
                                     * Encodes the specified EditorGetResourceSizeCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommand.verify|verify} messages.
                                     * @param message EditorGetResourceSizeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetResourceSizeCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommand.verify|verify} messages.
                                     * @param message EditorGetResourceSizeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetResourceSizeCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetResourceSizeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommand;

                                    /**
                                     * Decodes an EditorGetResourceSizeCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetResourceSizeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommand;

                                    /**
                                     * Verifies an EditorGetResourceSizeCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetResourceSizeCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetResourceSizeCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommand;

                                    /**
                                     * Creates a plain object from an EditorGetResourceSizeCommand message. Also converts values to other types if specified.
                                     * @param message EditorGetResourceSizeCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetResourceSizeCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetResourceSizeCommandResult. */
                                interface IEditorGetResourceSizeCommandResult {

                                    /** EditorGetResourceSizeCommandResult width */
                                    width?: (number|null);

                                    /** EditorGetResourceSizeCommandResult height */
                                    height?: (number|null);
                                }

                                /** Represents an EditorGetResourceSizeCommandResult. */
                                class EditorGetResourceSizeCommandResult implements IEditorGetResourceSizeCommandResult {

                                    /**
                                     * Constructs a new EditorGetResourceSizeCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult);

                                    /** EditorGetResourceSizeCommandResult width. */
                                    public width: number;

                                    /** EditorGetResourceSizeCommandResult height. */
                                    public height: number;

                                    /**
                                     * Creates a new EditorGetResourceSizeCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetResourceSizeCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommandResult;

                                    /**
                                     * Encodes the specified EditorGetResourceSizeCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommandResult.verify|verify} messages.
                                     * @param message EditorGetResourceSizeCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetResourceSizeCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommandResult.verify|verify} messages.
                                     * @param message EditorGetResourceSizeCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetResourceSizeCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetResourceSizeCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetResourceSizeCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommandResult;

                                    /**
                                     * Decodes an EditorGetResourceSizeCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetResourceSizeCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommandResult;

                                    /**
                                     * Verifies an EditorGetResourceSizeCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetResourceSizeCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetResourceSizeCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommandResult;

                                    /**
                                     * Creates a plain object from an EditorGetResourceSizeCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorGetResourceSizeCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetResourceSizeCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetResourceSizeCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetClipResourceInfoCommand. */
                                interface IEditorGetClipResourceInfoCommand {

                                    /** EditorGetClipResourceInfoCommand clipId */
                                    clipId?: (string|null);
                                }

                                /** Represents an EditorGetClipResourceInfoCommand. */
                                class EditorGetClipResourceInfoCommand implements IEditorGetClipResourceInfoCommand {

                                    /**
                                     * Constructs a new EditorGetClipResourceInfoCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommand);

                                    /** EditorGetClipResourceInfoCommand clipId. */
                                    public clipId: string;

                                    /**
                                     * Creates a new EditorGetClipResourceInfoCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetClipResourceInfoCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommand;

                                    /**
                                     * Encodes the specified EditorGetClipResourceInfoCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommand.verify|verify} messages.
                                     * @param message EditorGetClipResourceInfoCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetClipResourceInfoCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommand.verify|verify} messages.
                                     * @param message EditorGetClipResourceInfoCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetClipResourceInfoCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetClipResourceInfoCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommand;

                                    /**
                                     * Decodes an EditorGetClipResourceInfoCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetClipResourceInfoCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommand;

                                    /**
                                     * Verifies an EditorGetClipResourceInfoCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetClipResourceInfoCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetClipResourceInfoCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommand;

                                    /**
                                     * Creates a plain object from an EditorGetClipResourceInfoCommand message. Also converts values to other types if specified.
                                     * @param message EditorGetClipResourceInfoCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetClipResourceInfoCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetClipResourceInfoCommandResult. */
                                interface IEditorGetClipResourceInfoCommandResult {

                                    /** EditorGetClipResourceInfoCommandResult resourceId */
                                    resourceId?: (string|null);

                                    /** EditorGetClipResourceInfoCommandResult resourceUrl */
                                    resourceUrl?: (string|null);
                                }

                                /** Represents an EditorGetClipResourceInfoCommandResult. */
                                class EditorGetClipResourceInfoCommandResult implements IEditorGetClipResourceInfoCommandResult {

                                    /**
                                     * Constructs a new EditorGetClipResourceInfoCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommandResult);

                                    /** EditorGetClipResourceInfoCommandResult resourceId. */
                                    public resourceId: string;

                                    /** EditorGetClipResourceInfoCommandResult resourceUrl. */
                                    public resourceUrl: string;

                                    /**
                                     * Creates a new EditorGetClipResourceInfoCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetClipResourceInfoCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommandResult;

                                    /**
                                     * Encodes the specified EditorGetClipResourceInfoCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommandResult.verify|verify} messages.
                                     * @param message EditorGetClipResourceInfoCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetClipResourceInfoCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommandResult.verify|verify} messages.
                                     * @param message EditorGetClipResourceInfoCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipResourceInfoCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetClipResourceInfoCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetClipResourceInfoCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommandResult;

                                    /**
                                     * Decodes an EditorGetClipResourceInfoCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetClipResourceInfoCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommandResult;

                                    /**
                                     * Verifies an EditorGetClipResourceInfoCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetClipResourceInfoCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetClipResourceInfoCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommandResult;

                                    /**
                                     * Creates a plain object from an EditorGetClipResourceInfoCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorGetClipResourceInfoCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipResourceInfoCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetClipResourceInfoCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetResourceFullKeyFrameWithResIdCommand. */
                                interface IEditorSetResourceFullKeyFrameWithResIdCommand {

                                    /** EditorSetResourceFullKeyFrameWithResIdCommand resourceId */
                                    resourceId?: (string|null);

                                    /** EditorSetResourceFullKeyFrameWithResIdCommand isFullKeyframe */
                                    isFullKeyframe?: (boolean|null);
                                }

                                /** Represents an EditorSetResourceFullKeyFrameWithResIdCommand. */
                                class EditorSetResourceFullKeyFrameWithResIdCommand implements IEditorSetResourceFullKeyFrameWithResIdCommand {

                                    /**
                                     * Constructs a new EditorSetResourceFullKeyFrameWithResIdCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourceFullKeyFrameWithResIdCommand);

                                    /** EditorSetResourceFullKeyFrameWithResIdCommand resourceId. */
                                    public resourceId: string;

                                    /** EditorSetResourceFullKeyFrameWithResIdCommand isFullKeyframe. */
                                    public isFullKeyframe: boolean;

                                    /**
                                     * Creates a new EditorSetResourceFullKeyFrameWithResIdCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetResourceFullKeyFrameWithResIdCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourceFullKeyFrameWithResIdCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourceFullKeyFrameWithResIdCommand;

                                    /**
                                     * Encodes the specified EditorSetResourceFullKeyFrameWithResIdCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourceFullKeyFrameWithResIdCommand.verify|verify} messages.
                                     * @param message EditorSetResourceFullKeyFrameWithResIdCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourceFullKeyFrameWithResIdCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetResourceFullKeyFrameWithResIdCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourceFullKeyFrameWithResIdCommand.verify|verify} messages.
                                     * @param message EditorSetResourceFullKeyFrameWithResIdCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetResourceFullKeyFrameWithResIdCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetResourceFullKeyFrameWithResIdCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetResourceFullKeyFrameWithResIdCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourceFullKeyFrameWithResIdCommand;

                                    /**
                                     * Decodes an EditorSetResourceFullKeyFrameWithResIdCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetResourceFullKeyFrameWithResIdCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourceFullKeyFrameWithResIdCommand;

                                    /**
                                     * Verifies an EditorSetResourceFullKeyFrameWithResIdCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetResourceFullKeyFrameWithResIdCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetResourceFullKeyFrameWithResIdCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourceFullKeyFrameWithResIdCommand;

                                    /**
                                     * Creates a plain object from an EditorSetResourceFullKeyFrameWithResIdCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetResourceFullKeyFrameWithResIdCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetResourceFullKeyFrameWithResIdCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetResourceFullKeyFrameWithResIdCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextCommand. */
                                interface IEditorSetTextCommand {

                                    /** EditorSetTextCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextCommand content */
                                    content?: (string|null);
                                }

                                /** Represents an EditorSetTextCommand. */
                                class EditorSetTextCommand implements IEditorSetTextCommand {

                                    /**
                                     * Constructs a new EditorSetTextCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextCommand);

                                    /** EditorSetTextCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextCommand content. */
                                    public content: string;

                                    /**
                                     * Creates a new EditorSetTextCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextCommand;

                                    /**
                                     * Encodes the specified EditorSetTextCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextCommand.verify|verify} messages.
                                     * @param message EditorSetTextCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextCommand.verify|verify} messages.
                                     * @param message EditorSetTextCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextCommand;

                                    /**
                                     * Decodes an EditorSetTextCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextCommand;

                                    /**
                                     * Verifies an EditorSetTextCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextColorCommand. */
                                interface IEditorSetTextColorCommand {

                                    /** EditorSetTextColorCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextColorCommand color */
                                    color?: (number|null);
                                }

                                /** Represents an EditorSetTextColorCommand. */
                                class EditorSetTextColorCommand implements IEditorSetTextColorCommand {

                                    /**
                                     * Constructs a new EditorSetTextColorCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextColorCommand);

                                    /** EditorSetTextColorCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextColorCommand color. */
                                    public color: number;

                                    /**
                                     * Creates a new EditorSetTextColorCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextColorCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextColorCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextColorCommand;

                                    /**
                                     * Encodes the specified EditorSetTextColorCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextColorCommand.verify|verify} messages.
                                     * @param message EditorSetTextColorCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextColorCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextColorCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextColorCommand.verify|verify} messages.
                                     * @param message EditorSetTextColorCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextColorCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextColorCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextColorCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextColorCommand;

                                    /**
                                     * Decodes an EditorSetTextColorCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextColorCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextColorCommand;

                                    /**
                                     * Verifies an EditorSetTextColorCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextColorCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextColorCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextColorCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextColorCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextColorCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextColorCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextColorCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextFontCommand. */
                                interface IEditorSetTextFontCommand {

                                    /** EditorSetTextFontCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextFontCommand resourceUri */
                                    resourceUri?: (string|null);
                                }

                                /** Represents an EditorSetTextFontCommand. */
                                class EditorSetTextFontCommand implements IEditorSetTextFontCommand {

                                    /**
                                     * Constructs a new EditorSetTextFontCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextFontCommand);

                                    /** EditorSetTextFontCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextFontCommand resourceUri. */
                                    public resourceUri: string;

                                    /**
                                     * Creates a new EditorSetTextFontCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextFontCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextFontCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextFontCommand;

                                    /**
                                     * Encodes the specified EditorSetTextFontCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextFontCommand.verify|verify} messages.
                                     * @param message EditorSetTextFontCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextFontCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextFontCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextFontCommand.verify|verify} messages.
                                     * @param message EditorSetTextFontCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextFontCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextFontCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextFontCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextFontCommand;

                                    /**
                                     * Decodes an EditorSetTextFontCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextFontCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextFontCommand;

                                    /**
                                     * Verifies an EditorSetTextFontCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextFontCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextFontCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextFontCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextFontCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextFontCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextFontCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextFontCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetDefaultFontFileCommand. */
                                interface IEditorSetDefaultFontFileCommand {

                                    /** EditorSetDefaultFontFileCommand resourceUri */
                                    resourceUri?: (string|null);
                                }

                                /** Represents an EditorSetDefaultFontFileCommand. */
                                class EditorSetDefaultFontFileCommand implements IEditorSetDefaultFontFileCommand {

                                    /**
                                     * Constructs a new EditorSetDefaultFontFileCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetDefaultFontFileCommand);

                                    /** EditorSetDefaultFontFileCommand resourceUri. */
                                    public resourceUri: string;

                                    /**
                                     * Creates a new EditorSetDefaultFontFileCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetDefaultFontFileCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetDefaultFontFileCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetDefaultFontFileCommand;

                                    /**
                                     * Encodes the specified EditorSetDefaultFontFileCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetDefaultFontFileCommand.verify|verify} messages.
                                     * @param message EditorSetDefaultFontFileCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetDefaultFontFileCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetDefaultFontFileCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetDefaultFontFileCommand.verify|verify} messages.
                                     * @param message EditorSetDefaultFontFileCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetDefaultFontFileCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetDefaultFontFileCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetDefaultFontFileCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetDefaultFontFileCommand;

                                    /**
                                     * Decodes an EditorSetDefaultFontFileCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetDefaultFontFileCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetDefaultFontFileCommand;

                                    /**
                                     * Verifies an EditorSetDefaultFontFileCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetDefaultFontFileCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetDefaultFontFileCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetDefaultFontFileCommand;

                                    /**
                                     * Creates a plain object from an EditorSetDefaultFontFileCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetDefaultFontFileCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetDefaultFontFileCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetDefaultFontFileCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextShadowCommand. */
                                interface IEditorSetTextShadowCommand {

                                    /** EditorSetTextShadowCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextShadowCommand enable */
                                    enable?: (boolean|null);

                                    /** EditorSetTextShadowCommand color */
                                    color?: (number|null);

                                    /** EditorSetTextShadowCommand xOffset */
                                    xOffset?: (number|null);

                                    /** EditorSetTextShadowCommand yOffset */
                                    yOffset?: (number|null);
                                }

                                /** Represents an EditorSetTextShadowCommand. */
                                class EditorSetTextShadowCommand implements IEditorSetTextShadowCommand {

                                    /**
                                     * Constructs a new EditorSetTextShadowCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextShadowCommand);

                                    /** EditorSetTextShadowCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextShadowCommand enable. */
                                    public enable: boolean;

                                    /** EditorSetTextShadowCommand color. */
                                    public color: number;

                                    /** EditorSetTextShadowCommand xOffset. */
                                    public xOffset: number;

                                    /** EditorSetTextShadowCommand yOffset. */
                                    public yOffset: number;

                                    /**
                                     * Creates a new EditorSetTextShadowCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextShadowCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextShadowCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextShadowCommand;

                                    /**
                                     * Encodes the specified EditorSetTextShadowCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextShadowCommand.verify|verify} messages.
                                     * @param message EditorSetTextShadowCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextShadowCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextShadowCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextShadowCommand.verify|verify} messages.
                                     * @param message EditorSetTextShadowCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextShadowCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextShadowCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextShadowCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextShadowCommand;

                                    /**
                                     * Decodes an EditorSetTextShadowCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextShadowCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextShadowCommand;

                                    /**
                                     * Verifies an EditorSetTextShadowCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextShadowCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextShadowCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextShadowCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextShadowCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextShadowCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextShadowCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextShadowCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** AlignmentVerticalType enum. */
                                enum AlignmentVerticalType {
                                    ALIGN_VERTICAL_INVALID = 0,
                                    ALIGN_VERTICAL_CENTER = 1,
                                    ALIGN_VERTICAL_TOP = 2,
                                    ALIGN_VERTICAL_BOTTOM = 3
                                }

                                /** AlignmentHorizontalType enum. */
                                enum AlignmentHorizontalType {
                                    ALIGN_HORIZONTAL_INVALID = 0,
                                    ALIGN_HORIZONTAL_CENTER = 1,
                                    ALIGN_HORIZONTAL_LEFT = 2,
                                    ALIGN_HORIZONTAL_RIGHT = 3
                                }

                                /** Properties of an EditorSetTextAlignmentCommand. */
                                interface IEditorSetTextAlignmentCommand {

                                    /** EditorSetTextAlignmentCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextAlignmentCommand alignmentVerticalType */
                                    alignmentVerticalType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentVerticalType|null);

                                    /** EditorSetTextAlignmentCommand alignmentHorizontalType */
                                    alignmentHorizontalType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentHorizontalType|null);
                                }

                                /** Represents an EditorSetTextAlignmentCommand. */
                                class EditorSetTextAlignmentCommand implements IEditorSetTextAlignmentCommand {

                                    /**
                                     * Constructs a new EditorSetTextAlignmentCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextAlignmentCommand);

                                    /** EditorSetTextAlignmentCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextAlignmentCommand alignmentVerticalType. */
                                    public alignmentVerticalType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentVerticalType;

                                    /** EditorSetTextAlignmentCommand alignmentHorizontalType. */
                                    public alignmentHorizontalType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AlignmentHorizontalType;

                                    /**
                                     * Creates a new EditorSetTextAlignmentCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextAlignmentCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextAlignmentCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextAlignmentCommand;

                                    /**
                                     * Encodes the specified EditorSetTextAlignmentCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextAlignmentCommand.verify|verify} messages.
                                     * @param message EditorSetTextAlignmentCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextAlignmentCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextAlignmentCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextAlignmentCommand.verify|verify} messages.
                                     * @param message EditorSetTextAlignmentCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextAlignmentCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextAlignmentCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextAlignmentCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextAlignmentCommand;

                                    /**
                                     * Decodes an EditorSetTextAlignmentCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextAlignmentCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextAlignmentCommand;

                                    /**
                                     * Verifies an EditorSetTextAlignmentCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextAlignmentCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextAlignmentCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextAlignmentCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextAlignmentCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextAlignmentCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextAlignmentCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextAlignmentCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextOutlineCommand. */
                                interface IEditorSetTextOutlineCommand {

                                    /** EditorSetTextOutlineCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextOutlineCommand enable */
                                    enable?: (boolean|null);

                                    /** EditorSetTextOutlineCommand color */
                                    color?: (number|null);

                                    /** EditorSetTextOutlineCommand size */
                                    size?: (number|null);
                                }

                                /** Represents an EditorSetTextOutlineCommand. */
                                class EditorSetTextOutlineCommand implements IEditorSetTextOutlineCommand {

                                    /**
                                     * Constructs a new EditorSetTextOutlineCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextOutlineCommand);

                                    /** EditorSetTextOutlineCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextOutlineCommand enable. */
                                    public enable: boolean;

                                    /** EditorSetTextOutlineCommand color. */
                                    public color: number;

                                    /** EditorSetTextOutlineCommand size. */
                                    public size: number;

                                    /**
                                     * Creates a new EditorSetTextOutlineCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextOutlineCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextOutlineCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextOutlineCommand;

                                    /**
                                     * Encodes the specified EditorSetTextOutlineCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextOutlineCommand.verify|verify} messages.
                                     * @param message EditorSetTextOutlineCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextOutlineCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextOutlineCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextOutlineCommand.verify|verify} messages.
                                     * @param message EditorSetTextOutlineCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextOutlineCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextOutlineCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextOutlineCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextOutlineCommand;

                                    /**
                                     * Decodes an EditorSetTextOutlineCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextOutlineCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextOutlineCommand;

                                    /**
                                     * Verifies an EditorSetTextOutlineCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextOutlineCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextOutlineCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextOutlineCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextOutlineCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextOutlineCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextOutlineCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextOutlineCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextUnderlineCommand. */
                                interface IEditorSetTextUnderlineCommand {

                                    /** EditorSetTextUnderlineCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextUnderlineCommand enable */
                                    enable?: (boolean|null);
                                }

                                /** Represents an EditorSetTextUnderlineCommand. */
                                class EditorSetTextUnderlineCommand implements IEditorSetTextUnderlineCommand {

                                    /**
                                     * Constructs a new EditorSetTextUnderlineCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextUnderlineCommand);

                                    /** EditorSetTextUnderlineCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextUnderlineCommand enable. */
                                    public enable: boolean;

                                    /**
                                     * Creates a new EditorSetTextUnderlineCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextUnderlineCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextUnderlineCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextUnderlineCommand;

                                    /**
                                     * Encodes the specified EditorSetTextUnderlineCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextUnderlineCommand.verify|verify} messages.
                                     * @param message EditorSetTextUnderlineCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextUnderlineCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextUnderlineCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextUnderlineCommand.verify|verify} messages.
                                     * @param message EditorSetTextUnderlineCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextUnderlineCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextUnderlineCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextUnderlineCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextUnderlineCommand;

                                    /**
                                     * Decodes an EditorSetTextUnderlineCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextUnderlineCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextUnderlineCommand;

                                    /**
                                     * Verifies an EditorSetTextUnderlineCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextUnderlineCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextUnderlineCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextUnderlineCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextUnderlineCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextUnderlineCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextUnderlineCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextUnderlineCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextBoldCommand. */
                                interface IEditorSetTextBoldCommand {

                                    /** EditorSetTextBoldCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextBoldCommand enable */
                                    enable?: (boolean|null);
                                }

                                /** Represents an EditorSetTextBoldCommand. */
                                class EditorSetTextBoldCommand implements IEditorSetTextBoldCommand {

                                    /**
                                     * Constructs a new EditorSetTextBoldCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextBoldCommand);

                                    /** EditorSetTextBoldCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextBoldCommand enable. */
                                    public enable: boolean;

                                    /**
                                     * Creates a new EditorSetTextBoldCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextBoldCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextBoldCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextBoldCommand;

                                    /**
                                     * Encodes the specified EditorSetTextBoldCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextBoldCommand.verify|verify} messages.
                                     * @param message EditorSetTextBoldCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextBoldCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextBoldCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextBoldCommand.verify|verify} messages.
                                     * @param message EditorSetTextBoldCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextBoldCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextBoldCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextBoldCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextBoldCommand;

                                    /**
                                     * Decodes an EditorSetTextBoldCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextBoldCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextBoldCommand;

                                    /**
                                     * Verifies an EditorSetTextBoldCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextBoldCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextBoldCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextBoldCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextBoldCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextBoldCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextBoldCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextBoldCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextItalicsCommand. */
                                interface IEditorSetTextItalicsCommand {

                                    /** EditorSetTextItalicsCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextItalicsCommand enable */
                                    enable?: (boolean|null);
                                }

                                /** Represents an EditorSetTextItalicsCommand. */
                                class EditorSetTextItalicsCommand implements IEditorSetTextItalicsCommand {

                                    /**
                                     * Constructs a new EditorSetTextItalicsCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextItalicsCommand);

                                    /** EditorSetTextItalicsCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextItalicsCommand enable. */
                                    public enable: boolean;

                                    /**
                                     * Creates a new EditorSetTextItalicsCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextItalicsCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextItalicsCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextItalicsCommand;

                                    /**
                                     * Encodes the specified EditorSetTextItalicsCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextItalicsCommand.verify|verify} messages.
                                     * @param message EditorSetTextItalicsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextItalicsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextItalicsCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextItalicsCommand.verify|verify} messages.
                                     * @param message EditorSetTextItalicsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextItalicsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextItalicsCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextItalicsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextItalicsCommand;

                                    /**
                                     * Decodes an EditorSetTextItalicsCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextItalicsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextItalicsCommand;

                                    /**
                                     * Verifies an EditorSetTextItalicsCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextItalicsCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextItalicsCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextItalicsCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextItalicsCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextItalicsCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextItalicsCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextItalicsCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetTextWordSpaceCommand. */
                                interface IEditorSetTextWordSpaceCommand {

                                    /** EditorSetTextWordSpaceCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetTextWordSpaceCommand space */
                                    space?: (number|null);
                                }

                                /** Represents an EditorSetTextWordSpaceCommand. */
                                class EditorSetTextWordSpaceCommand implements IEditorSetTextWordSpaceCommand {

                                    /**
                                     * Constructs a new EditorSetTextWordSpaceCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextWordSpaceCommand);

                                    /** EditorSetTextWordSpaceCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetTextWordSpaceCommand space. */
                                    public space: number;

                                    /**
                                     * Creates a new EditorSetTextWordSpaceCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetTextWordSpaceCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextWordSpaceCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextWordSpaceCommand;

                                    /**
                                     * Encodes the specified EditorSetTextWordSpaceCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextWordSpaceCommand.verify|verify} messages.
                                     * @param message EditorSetTextWordSpaceCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextWordSpaceCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetTextWordSpaceCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextWordSpaceCommand.verify|verify} messages.
                                     * @param message EditorSetTextWordSpaceCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetTextWordSpaceCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetTextWordSpaceCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetTextWordSpaceCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextWordSpaceCommand;

                                    /**
                                     * Decodes an EditorSetTextWordSpaceCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetTextWordSpaceCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextWordSpaceCommand;

                                    /**
                                     * Verifies an EditorSetTextWordSpaceCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetTextWordSpaceCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetTextWordSpaceCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextWordSpaceCommand;

                                    /**
                                     * Creates a plain object from an EditorSetTextWordSpaceCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetTextWordSpaceCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetTextWordSpaceCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetTextWordSpaceCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetScaleCommand. */
                                interface IEditorSetScaleCommand {

                                    /** EditorSetScaleCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetScaleCommand scale */
                                    scale?: (number|null);
                                }

                                /** Represents an EditorSetScaleCommand. */
                                class EditorSetScaleCommand implements IEditorSetScaleCommand {

                                    /**
                                     * Constructs a new EditorSetScaleCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetScaleCommand);

                                    /** EditorSetScaleCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetScaleCommand scale. */
                                    public scale: number;

                                    /**
                                     * Creates a new EditorSetScaleCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetScaleCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetScaleCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetScaleCommand;

                                    /**
                                     * Encodes the specified EditorSetScaleCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetScaleCommand.verify|verify} messages.
                                     * @param message EditorSetScaleCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetScaleCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetScaleCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetScaleCommand.verify|verify} messages.
                                     * @param message EditorSetScaleCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetScaleCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetScaleCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetScaleCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetScaleCommand;

                                    /**
                                     * Decodes an EditorSetScaleCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetScaleCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetScaleCommand;

                                    /**
                                     * Verifies an EditorSetScaleCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetScaleCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetScaleCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetScaleCommand;

                                    /**
                                     * Creates a plain object from an EditorSetScaleCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetScaleCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetScaleCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetScaleCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetPositionCommand. */
                                interface IEditorSetPositionCommand {

                                    /** EditorSetPositionCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetPositionCommand x */
                                    x?: (number|null);

                                    /** EditorSetPositionCommand y */
                                    y?: (number|null);
                                }

                                /** Represents an EditorSetPositionCommand. */
                                class EditorSetPositionCommand implements IEditorSetPositionCommand {

                                    /**
                                     * Constructs a new EditorSetPositionCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetPositionCommand);

                                    /** EditorSetPositionCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetPositionCommand x. */
                                    public x: number;

                                    /** EditorSetPositionCommand y. */
                                    public y: number;

                                    /**
                                     * Creates a new EditorSetPositionCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetPositionCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetPositionCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetPositionCommand;

                                    /**
                                     * Encodes the specified EditorSetPositionCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetPositionCommand.verify|verify} messages.
                                     * @param message EditorSetPositionCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetPositionCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetPositionCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetPositionCommand.verify|verify} messages.
                                     * @param message EditorSetPositionCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetPositionCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetPositionCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetPositionCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetPositionCommand;

                                    /**
                                     * Decodes an EditorSetPositionCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetPositionCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetPositionCommand;

                                    /**
                                     * Verifies an EditorSetPositionCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetPositionCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetPositionCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetPositionCommand;

                                    /**
                                     * Creates a plain object from an EditorSetPositionCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetPositionCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetPositionCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetPositionCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetAnchorCommand. */
                                interface IEditorSetAnchorCommand {

                                    /** EditorSetAnchorCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetAnchorCommand x */
                                    x?: (number|null);

                                    /** EditorSetAnchorCommand y */
                                    y?: (number|null);
                                }

                                /** Represents an EditorSetAnchorCommand. */
                                class EditorSetAnchorCommand implements IEditorSetAnchorCommand {

                                    /**
                                     * Constructs a new EditorSetAnchorCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetAnchorCommand);

                                    /** EditorSetAnchorCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetAnchorCommand x. */
                                    public x: number;

                                    /** EditorSetAnchorCommand y. */
                                    public y: number;

                                    /**
                                     * Creates a new EditorSetAnchorCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetAnchorCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetAnchorCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetAnchorCommand;

                                    /**
                                     * Encodes the specified EditorSetAnchorCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetAnchorCommand.verify|verify} messages.
                                     * @param message EditorSetAnchorCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetAnchorCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetAnchorCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetAnchorCommand.verify|verify} messages.
                                     * @param message EditorSetAnchorCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetAnchorCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetAnchorCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetAnchorCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetAnchorCommand;

                                    /**
                                     * Decodes an EditorSetAnchorCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetAnchorCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetAnchorCommand;

                                    /**
                                     * Verifies an EditorSetAnchorCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetAnchorCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetAnchorCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetAnchorCommand;

                                    /**
                                     * Creates a plain object from an EditorSetAnchorCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetAnchorCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetAnchorCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetAnchorCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetRotationCommand. */
                                interface IEditorSetRotationCommand {

                                    /** EditorSetRotationCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetRotationCommand rotation */
                                    rotation?: (number|null);
                                }

                                /** Represents an EditorSetRotationCommand. */
                                class EditorSetRotationCommand implements IEditorSetRotationCommand {

                                    /**
                                     * Constructs a new EditorSetRotationCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetRotationCommand);

                                    /** EditorSetRotationCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetRotationCommand rotation. */
                                    public rotation: number;

                                    /**
                                     * Creates a new EditorSetRotationCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetRotationCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetRotationCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetRotationCommand;

                                    /**
                                     * Encodes the specified EditorSetRotationCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetRotationCommand.verify|verify} messages.
                                     * @param message EditorSetRotationCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetRotationCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetRotationCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetRotationCommand.verify|verify} messages.
                                     * @param message EditorSetRotationCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetRotationCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetRotationCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetRotationCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetRotationCommand;

                                    /**
                                     * Decodes an EditorSetRotationCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetRotationCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetRotationCommand;

                                    /**
                                     * Verifies an EditorSetRotationCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetRotationCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetRotationCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetRotationCommand;

                                    /**
                                     * Creates a plain object from an EditorSetRotationCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetRotationCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetRotationCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetRotationCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipStartTimeUsCommand. */
                                interface IEditorSetClipStartTimeUsCommand {

                                    /** EditorSetClipStartTimeUsCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipStartTimeUsCommand time */
                                    time?: (number|Long|null);
                                }

                                /** Represents an EditorSetClipStartTimeUsCommand. */
                                class EditorSetClipStartTimeUsCommand implements IEditorSetClipStartTimeUsCommand {

                                    /**
                                     * Constructs a new EditorSetClipStartTimeUsCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipStartTimeUsCommand);

                                    /** EditorSetClipStartTimeUsCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipStartTimeUsCommand time. */
                                    public time: (number|Long);

                                    /**
                                     * Creates a new EditorSetClipStartTimeUsCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipStartTimeUsCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipStartTimeUsCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipStartTimeUsCommand;

                                    /**
                                     * Encodes the specified EditorSetClipStartTimeUsCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipStartTimeUsCommand.verify|verify} messages.
                                     * @param message EditorSetClipStartTimeUsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipStartTimeUsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipStartTimeUsCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipStartTimeUsCommand.verify|verify} messages.
                                     * @param message EditorSetClipStartTimeUsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipStartTimeUsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipStartTimeUsCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipStartTimeUsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipStartTimeUsCommand;

                                    /**
                                     * Decodes an EditorSetClipStartTimeUsCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipStartTimeUsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipStartTimeUsCommand;

                                    /**
                                     * Verifies an EditorSetClipStartTimeUsCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipStartTimeUsCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipStartTimeUsCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipStartTimeUsCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipStartTimeUsCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipStartTimeUsCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipStartTimeUsCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipStartTimeUsCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetSourceTimeRangeCommand. */
                                interface IEditorSetSourceTimeRangeCommand {

                                    /** EditorSetSourceTimeRangeCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetSourceTimeRangeCommand startTime */
                                    startTime?: (number|Long|null);

                                    /** EditorSetSourceTimeRangeCommand endTime */
                                    endTime?: (number|Long|null);
                                }

                                /** Represents an EditorSetSourceTimeRangeCommand. */
                                class EditorSetSourceTimeRangeCommand implements IEditorSetSourceTimeRangeCommand {

                                    /**
                                     * Constructs a new EditorSetSourceTimeRangeCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetSourceTimeRangeCommand);

                                    /** EditorSetSourceTimeRangeCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetSourceTimeRangeCommand startTime. */
                                    public startTime: (number|Long);

                                    /** EditorSetSourceTimeRangeCommand endTime. */
                                    public endTime: (number|Long);

                                    /**
                                     * Creates a new EditorSetSourceTimeRangeCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetSourceTimeRangeCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetSourceTimeRangeCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetSourceTimeRangeCommand;

                                    /**
                                     * Encodes the specified EditorSetSourceTimeRangeCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetSourceTimeRangeCommand.verify|verify} messages.
                                     * @param message EditorSetSourceTimeRangeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetSourceTimeRangeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetSourceTimeRangeCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetSourceTimeRangeCommand.verify|verify} messages.
                                     * @param message EditorSetSourceTimeRangeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetSourceTimeRangeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetSourceTimeRangeCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetSourceTimeRangeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetSourceTimeRangeCommand;

                                    /**
                                     * Decodes an EditorSetSourceTimeRangeCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetSourceTimeRangeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetSourceTimeRangeCommand;

                                    /**
                                     * Verifies an EditorSetSourceTimeRangeCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetSourceTimeRangeCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetSourceTimeRangeCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetSourceTimeRangeCommand;

                                    /**
                                     * Creates a plain object from an EditorSetSourceTimeRangeCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetSourceTimeRangeCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetSourceTimeRangeCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetSourceTimeRangeCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipSpeedCommand. */
                                interface IEditorSetClipSpeedCommand {

                                    /** EditorSetClipSpeedCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipSpeedCommand speed */
                                    speed?: (number|null);
                                }

                                /** Represents an EditorSetClipSpeedCommand. */
                                class EditorSetClipSpeedCommand implements IEditorSetClipSpeedCommand {

                                    /**
                                     * Constructs a new EditorSetClipSpeedCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipSpeedCommand);

                                    /** EditorSetClipSpeedCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipSpeedCommand speed. */
                                    public speed: number;

                                    /**
                                     * Creates a new EditorSetClipSpeedCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipSpeedCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipSpeedCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipSpeedCommand;

                                    /**
                                     * Encodes the specified EditorSetClipSpeedCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipSpeedCommand.verify|verify} messages.
                                     * @param message EditorSetClipSpeedCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipSpeedCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipSpeedCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipSpeedCommand.verify|verify} messages.
                                     * @param message EditorSetClipSpeedCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipSpeedCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipSpeedCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipSpeedCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipSpeedCommand;

                                    /**
                                     * Decodes an EditorSetClipSpeedCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipSpeedCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipSpeedCommand;

                                    /**
                                     * Verifies an EditorSetClipSpeedCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipSpeedCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipSpeedCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipSpeedCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipSpeedCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipSpeedCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipSpeedCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipSpeedCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorSetClipVolumeCommand. */
                                interface IEditorSetClipVolumeCommand {

                                    /** EditorSetClipVolumeCommand clipId */
                                    clipId?: (string|null);

                                    /** EditorSetClipVolumeCommand volume */
                                    volume?: (number|null);
                                }

                                /** Represents an EditorSetClipVolumeCommand. */
                                class EditorSetClipVolumeCommand implements IEditorSetClipVolumeCommand {

                                    /**
                                     * Constructs a new EditorSetClipVolumeCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipVolumeCommand);

                                    /** EditorSetClipVolumeCommand clipId. */
                                    public clipId: string;

                                    /** EditorSetClipVolumeCommand volume. */
                                    public volume: number;

                                    /**
                                     * Creates a new EditorSetClipVolumeCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorSetClipVolumeCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipVolumeCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipVolumeCommand;

                                    /**
                                     * Encodes the specified EditorSetClipVolumeCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipVolumeCommand.verify|verify} messages.
                                     * @param message EditorSetClipVolumeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipVolumeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorSetClipVolumeCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipVolumeCommand.verify|verify} messages.
                                     * @param message EditorSetClipVolumeCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorSetClipVolumeCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorSetClipVolumeCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorSetClipVolumeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipVolumeCommand;

                                    /**
                                     * Decodes an EditorSetClipVolumeCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorSetClipVolumeCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipVolumeCommand;

                                    /**
                                     * Verifies an EditorSetClipVolumeCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorSetClipVolumeCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorSetClipVolumeCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipVolumeCommand;

                                    /**
                                     * Creates a plain object from an EditorSetClipVolumeCommand message. Also converts values to other types if specified.
                                     * @param message EditorSetClipVolumeCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorSetClipVolumeCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorSetClipVolumeCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** MarvelTrackType enum. */
                                enum MarvelTrackType {
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
                                    TrackTypeAll = 11
                                }

                                /** Properties of an EditorGetTrackIdListCommand. */
                                interface IEditorGetTrackIdListCommand {

                                    /** EditorGetTrackIdListCommand trackType */
                                    trackType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MarvelTrackType|null);
                                }

                                /** Represents an EditorGetTrackIdListCommand. */
                                class EditorGetTrackIdListCommand implements IEditorGetTrackIdListCommand {

                                    /**
                                     * Constructs a new EditorGetTrackIdListCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommand);

                                    /** EditorGetTrackIdListCommand trackType. */
                                    public trackType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.MarvelTrackType;

                                    /**
                                     * Creates a new EditorGetTrackIdListCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetTrackIdListCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommand;

                                    /**
                                     * Encodes the specified EditorGetTrackIdListCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommand.verify|verify} messages.
                                     * @param message EditorGetTrackIdListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetTrackIdListCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommand.verify|verify} messages.
                                     * @param message EditorGetTrackIdListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetTrackIdListCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetTrackIdListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommand;

                                    /**
                                     * Decodes an EditorGetTrackIdListCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetTrackIdListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommand;

                                    /**
                                     * Verifies an EditorGetTrackIdListCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetTrackIdListCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetTrackIdListCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommand;

                                    /**
                                     * Creates a plain object from an EditorGetTrackIdListCommand message. Also converts values to other types if specified.
                                     * @param message EditorGetTrackIdListCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetTrackIdListCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetTrackIdListCommandResult. */
                                interface IEditorGetTrackIdListCommandResult {

                                    /** EditorGetTrackIdListCommandResult values */
                                    values?: (string[]|null);
                                }

                                /** Represents an EditorGetTrackIdListCommandResult. */
                                class EditorGetTrackIdListCommandResult implements IEditorGetTrackIdListCommandResult {

                                    /**
                                     * Constructs a new EditorGetTrackIdListCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommandResult);

                                    /** EditorGetTrackIdListCommandResult values. */
                                    public values: string[];

                                    /**
                                     * Creates a new EditorGetTrackIdListCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetTrackIdListCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommandResult;

                                    /**
                                     * Encodes the specified EditorGetTrackIdListCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommandResult.verify|verify} messages.
                                     * @param message EditorGetTrackIdListCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetTrackIdListCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommandResult.verify|verify} messages.
                                     * @param message EditorGetTrackIdListCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetTrackIdListCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetTrackIdListCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetTrackIdListCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommandResult;

                                    /**
                                     * Decodes an EditorGetTrackIdListCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetTrackIdListCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommandResult;

                                    /**
                                     * Verifies an EditorGetTrackIdListCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetTrackIdListCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetTrackIdListCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommandResult;

                                    /**
                                     * Creates a plain object from an EditorGetTrackIdListCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorGetTrackIdListCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetTrackIdListCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetTrackIdListCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetClipIdListCommand. */
                                interface IEditorGetClipIdListCommand {

                                    /** EditorGetClipIdListCommand trackId */
                                    trackId?: (string|null);
                                }

                                /** Represents an EditorGetClipIdListCommand. */
                                class EditorGetClipIdListCommand implements IEditorGetClipIdListCommand {

                                    /**
                                     * Constructs a new EditorGetClipIdListCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommand);

                                    /** EditorGetClipIdListCommand trackId. */
                                    public trackId: string;

                                    /**
                                     * Creates a new EditorGetClipIdListCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetClipIdListCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommand;

                                    /**
                                     * Encodes the specified EditorGetClipIdListCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommand.verify|verify} messages.
                                     * @param message EditorGetClipIdListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetClipIdListCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommand.verify|verify} messages.
                                     * @param message EditorGetClipIdListCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetClipIdListCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetClipIdListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommand;

                                    /**
                                     * Decodes an EditorGetClipIdListCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetClipIdListCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommand;

                                    /**
                                     * Verifies an EditorGetClipIdListCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetClipIdListCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetClipIdListCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommand;

                                    /**
                                     * Creates a plain object from an EditorGetClipIdListCommand message. Also converts values to other types if specified.
                                     * @param message EditorGetClipIdListCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetClipIdListCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an EditorGetClipIdListCommandResult. */
                                interface IEditorGetClipIdListCommandResult {

                                    /** EditorGetClipIdListCommandResult values */
                                    values?: (string[]|null);
                                }

                                /** Represents an EditorGetClipIdListCommandResult. */
                                class EditorGetClipIdListCommandResult implements IEditorGetClipIdListCommandResult {

                                    /**
                                     * Constructs a new EditorGetClipIdListCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommandResult);

                                    /** EditorGetClipIdListCommandResult values. */
                                    public values: string[];

                                    /**
                                     * Creates a new EditorGetClipIdListCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns EditorGetClipIdListCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommandResult;

                                    /**
                                     * Encodes the specified EditorGetClipIdListCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommandResult.verify|verify} messages.
                                     * @param message EditorGetClipIdListCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified EditorGetClipIdListCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommandResult.verify|verify} messages.
                                     * @param message EditorGetClipIdListCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IEditorGetClipIdListCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an EditorGetClipIdListCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns EditorGetClipIdListCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommandResult;

                                    /**
                                     * Decodes an EditorGetClipIdListCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns EditorGetClipIdListCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommandResult;

                                    /**
                                     * Verifies an EditorGetClipIdListCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an EditorGetClipIdListCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns EditorGetClipIdListCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommandResult;

                                    /**
                                     * Creates a plain object from an EditorGetClipIdListCommandResult message. Also converts values to other types if specified.
                                     * @param message EditorGetClipIdListCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.EditorGetClipIdListCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this EditorGetClipIdListCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ViewerSetPropertiesCommand. */
                                interface IViewerSetPropertiesCommand {

                                    /** ViewerSetPropertiesCommand width */
                                    width?: (number|null);

                                    /** ViewerSetPropertiesCommand height */
                                    height?: (number|null);

                                    /** ViewerSetPropertiesCommand scaleType */
                                    scaleType?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType|null);
                                }

                                /** Viewer * */
                                class ViewerSetPropertiesCommand implements IViewerSetPropertiesCommand {

                                    /**
                                     * Constructs a new ViewerSetPropertiesCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSetPropertiesCommand);

                                    /** ViewerSetPropertiesCommand width. */
                                    public width: number;

                                    /** ViewerSetPropertiesCommand height. */
                                    public height: number;

                                    /** ViewerSetPropertiesCommand scaleType. */
                                    public scaleType: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType;

                                    /**
                                     * Creates a new ViewerSetPropertiesCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerSetPropertiesCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSetPropertiesCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSetPropertiesCommand;

                                    /**
                                     * Encodes the specified ViewerSetPropertiesCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSetPropertiesCommand.verify|verify} messages.
                                     * @param message ViewerSetPropertiesCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSetPropertiesCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerSetPropertiesCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSetPropertiesCommand.verify|verify} messages.
                                     * @param message ViewerSetPropertiesCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSetPropertiesCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerSetPropertiesCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerSetPropertiesCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSetPropertiesCommand;

                                    /**
                                     * Decodes a ViewerSetPropertiesCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerSetPropertiesCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSetPropertiesCommand;

                                    /**
                                     * Verifies a ViewerSetPropertiesCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerSetPropertiesCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerSetPropertiesCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSetPropertiesCommand;

                                    /**
                                     * Creates a plain object from a ViewerSetPropertiesCommand message. Also converts values to other types if specified.
                                     * @param message ViewerSetPropertiesCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSetPropertiesCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerSetPropertiesCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ViewerPrepareCommand. */
                                interface IViewerPrepareCommand {
                                }

                                /** Represents a ViewerPrepareCommand. */
                                class ViewerPrepareCommand implements IViewerPrepareCommand {

                                    /**
                                     * Constructs a new ViewerPrepareCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPrepareCommand);

                                    /**
                                     * Creates a new ViewerPrepareCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerPrepareCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPrepareCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPrepareCommand;

                                    /**
                                     * Encodes the specified ViewerPrepareCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPrepareCommand.verify|verify} messages.
                                     * @param message ViewerPrepareCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPrepareCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerPrepareCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPrepareCommand.verify|verify} messages.
                                     * @param message ViewerPrepareCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPrepareCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerPrepareCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerPrepareCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPrepareCommand;

                                    /**
                                     * Decodes a ViewerPrepareCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerPrepareCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPrepareCommand;

                                    /**
                                     * Verifies a ViewerPrepareCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerPrepareCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerPrepareCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPrepareCommand;

                                    /**
                                     * Creates a plain object from a ViewerPrepareCommand message. Also converts values to other types if specified.
                                     * @param message ViewerPrepareCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPrepareCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerPrepareCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ViewerStartCommand. */
                                interface IViewerStartCommand {
                                }

                                /** Represents a ViewerStartCommand. */
                                class ViewerStartCommand implements IViewerStartCommand {

                                    /**
                                     * Constructs a new ViewerStartCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStartCommand);

                                    /**
                                     * Creates a new ViewerStartCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerStartCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStartCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStartCommand;

                                    /**
                                     * Encodes the specified ViewerStartCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStartCommand.verify|verify} messages.
                                     * @param message ViewerStartCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStartCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerStartCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStartCommand.verify|verify} messages.
                                     * @param message ViewerStartCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStartCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerStartCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerStartCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStartCommand;

                                    /**
                                     * Decodes a ViewerStartCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerStartCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStartCommand;

                                    /**
                                     * Verifies a ViewerStartCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerStartCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerStartCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStartCommand;

                                    /**
                                     * Creates a plain object from a ViewerStartCommand message. Also converts values to other types if specified.
                                     * @param message ViewerStartCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStartCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerStartCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ViewerPauseCommand. */
                                interface IViewerPauseCommand {
                                }

                                /** Represents a ViewerPauseCommand. */
                                class ViewerPauseCommand implements IViewerPauseCommand {

                                    /**
                                     * Constructs a new ViewerPauseCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPauseCommand);

                                    /**
                                     * Creates a new ViewerPauseCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerPauseCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPauseCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPauseCommand;

                                    /**
                                     * Encodes the specified ViewerPauseCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPauseCommand.verify|verify} messages.
                                     * @param message ViewerPauseCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPauseCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerPauseCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPauseCommand.verify|verify} messages.
                                     * @param message ViewerPauseCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerPauseCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerPauseCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerPauseCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPauseCommand;

                                    /**
                                     * Decodes a ViewerPauseCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerPauseCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPauseCommand;

                                    /**
                                     * Verifies a ViewerPauseCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerPauseCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerPauseCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPauseCommand;

                                    /**
                                     * Creates a plain object from a ViewerPauseCommand message. Also converts values to other types if specified.
                                     * @param message ViewerPauseCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerPauseCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerPauseCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ViewerStopCommand. */
                                interface IViewerStopCommand {
                                }

                                /** Represents a ViewerStopCommand. */
                                class ViewerStopCommand implements IViewerStopCommand {

                                    /**
                                     * Constructs a new ViewerStopCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStopCommand);

                                    /**
                                     * Creates a new ViewerStopCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerStopCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStopCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStopCommand;

                                    /**
                                     * Encodes the specified ViewerStopCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStopCommand.verify|verify} messages.
                                     * @param message ViewerStopCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStopCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerStopCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStopCommand.verify|verify} messages.
                                     * @param message ViewerStopCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerStopCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerStopCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerStopCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStopCommand;

                                    /**
                                     * Decodes a ViewerStopCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerStopCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStopCommand;

                                    /**
                                     * Verifies a ViewerStopCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerStopCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerStopCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStopCommand;

                                    /**
                                     * Creates a plain object from a ViewerStopCommand message. Also converts values to other types if specified.
                                     * @param message ViewerStopCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerStopCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerStopCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** SeekFlag enum. */
                                enum SeekFlag {
                                    SeekFlagInvalid = 0,
                                    SeekGoing = 1,
                                    SeekStart = 2,
                                    SeekEnd = 3
                                }

                                /** Properties of a ViewerSeekToCommand. */
                                interface IViewerSeekToCommand {

                                    /** ViewerSeekToCommand time */
                                    time?: (number|Long|null);

                                    /** ViewerSeekToCommand flag */
                                    flag?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SeekFlag|null);
                                }

                                /** Represents a ViewerSeekToCommand. */
                                class ViewerSeekToCommand implements IViewerSeekToCommand {

                                    /**
                                     * Constructs a new ViewerSeekToCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSeekToCommand);

                                    /** ViewerSeekToCommand time. */
                                    public time: (number|Long);

                                    /** ViewerSeekToCommand flag. */
                                    public flag: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.SeekFlag;

                                    /**
                                     * Creates a new ViewerSeekToCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerSeekToCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSeekToCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSeekToCommand;

                                    /**
                                     * Encodes the specified ViewerSeekToCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSeekToCommand.verify|verify} messages.
                                     * @param message ViewerSeekToCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSeekToCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerSeekToCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSeekToCommand.verify|verify} messages.
                                     * @param message ViewerSeekToCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerSeekToCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerSeekToCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerSeekToCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSeekToCommand;

                                    /**
                                     * Decodes a ViewerSeekToCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerSeekToCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSeekToCommand;

                                    /**
                                     * Verifies a ViewerSeekToCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerSeekToCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerSeekToCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSeekToCommand;

                                    /**
                                     * Creates a plain object from a ViewerSeekToCommand message. Also converts values to other types if specified.
                                     * @param message ViewerSeekToCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerSeekToCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerSeekToCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ViewerGetStateCommand. */
                                interface IViewerGetStateCommand {
                                }

                                /** Represents a ViewerGetStateCommand. */
                                class ViewerGetStateCommand implements IViewerGetStateCommand {

                                    /**
                                     * Constructs a new ViewerGetStateCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommand);

                                    /**
                                     * Creates a new ViewerGetStateCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerGetStateCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommand;

                                    /**
                                     * Encodes the specified ViewerGetStateCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommand.verify|verify} messages.
                                     * @param message ViewerGetStateCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerGetStateCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommand.verify|verify} messages.
                                     * @param message ViewerGetStateCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerGetStateCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerGetStateCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommand;

                                    /**
                                     * Decodes a ViewerGetStateCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerGetStateCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommand;

                                    /**
                                     * Verifies a ViewerGetStateCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerGetStateCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerGetStateCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommand;

                                    /**
                                     * Creates a plain object from a ViewerGetStateCommand message. Also converts values to other types if specified.
                                     * @param message ViewerGetStateCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerGetStateCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** ViewerState enum. */
                                enum ViewerState {
                                    ViewInvalid = 0,
                                    ViewerUnInit = 1,
                                    ViewerPrepared = 2,
                                    ViewerRunning = 3,
                                    ViewerPaused = 4,
                                    ViewerStopped = 5,
                                    ViewerReleased = 6
                                }

                                /** Properties of a ViewerGetStateCommandResult. */
                                interface IViewerGetStateCommandResult {

                                    /** ViewerGetStateCommandResult viewerState */
                                    viewerState?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerState|null);

                                    /** ViewerGetStateCommandResult currentOffset */
                                    currentOffset?: (number|Long|null);
                                }

                                /** Represents a ViewerGetStateCommandResult. */
                                class ViewerGetStateCommandResult implements IViewerGetStateCommandResult {

                                    /**
                                     * Constructs a new ViewerGetStateCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommandResult);

                                    /** ViewerGetStateCommandResult viewerState. */
                                    public viewerState: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerState;

                                    /** ViewerGetStateCommandResult currentOffset. */
                                    public currentOffset: (number|Long);

                                    /**
                                     * Creates a new ViewerGetStateCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerGetStateCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommandResult;

                                    /**
                                     * Encodes the specified ViewerGetStateCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommandResult.verify|verify} messages.
                                     * @param message ViewerGetStateCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerGetStateCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommandResult.verify|verify} messages.
                                     * @param message ViewerGetStateCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetStateCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerGetStateCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerGetStateCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommandResult;

                                    /**
                                     * Decodes a ViewerGetStateCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerGetStateCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommandResult;

                                    /**
                                     * Verifies a ViewerGetStateCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerGetStateCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerGetStateCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommandResult;

                                    /**
                                     * Creates a plain object from a ViewerGetStateCommandResult message. Also converts values to other types if specified.
                                     * @param message ViewerGetStateCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetStateCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerGetStateCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ViewerGetDurationUsCommand. */
                                interface IViewerGetDurationUsCommand {
                                }

                                /** Represents a ViewerGetDurationUsCommand. */
                                class ViewerGetDurationUsCommand implements IViewerGetDurationUsCommand {

                                    /**
                                     * Constructs a new ViewerGetDurationUsCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommand);

                                    /**
                                     * Creates a new ViewerGetDurationUsCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerGetDurationUsCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommand;

                                    /**
                                     * Encodes the specified ViewerGetDurationUsCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommand.verify|verify} messages.
                                     * @param message ViewerGetDurationUsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerGetDurationUsCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommand.verify|verify} messages.
                                     * @param message ViewerGetDurationUsCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerGetDurationUsCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerGetDurationUsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommand;

                                    /**
                                     * Decodes a ViewerGetDurationUsCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerGetDurationUsCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommand;

                                    /**
                                     * Verifies a ViewerGetDurationUsCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerGetDurationUsCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerGetDurationUsCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommand;

                                    /**
                                     * Creates a plain object from a ViewerGetDurationUsCommand message. Also converts values to other types if specified.
                                     * @param message ViewerGetDurationUsCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerGetDurationUsCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of a ViewerGetDurationUsCommandResult. */
                                interface IViewerGetDurationUsCommandResult {

                                    /** ViewerGetDurationUsCommandResult value */
                                    value?: (number|Long|null);
                                }

                                /** Represents a ViewerGetDurationUsCommandResult. */
                                class ViewerGetDurationUsCommandResult implements IViewerGetDurationUsCommandResult {

                                    /**
                                     * Constructs a new ViewerGetDurationUsCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommandResult);

                                    /** ViewerGetDurationUsCommandResult value. */
                                    public value: (number|Long);

                                    /**
                                     * Creates a new ViewerGetDurationUsCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ViewerGetDurationUsCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommandResult;

                                    /**
                                     * Encodes the specified ViewerGetDurationUsCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommandResult.verify|verify} messages.
                                     * @param message ViewerGetDurationUsCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ViewerGetDurationUsCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommandResult.verify|verify} messages.
                                     * @param message ViewerGetDurationUsCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IViewerGetDurationUsCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a ViewerGetDurationUsCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ViewerGetDurationUsCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommandResult;

                                    /**
                                     * Decodes a ViewerGetDurationUsCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ViewerGetDurationUsCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommandResult;

                                    /**
                                     * Verifies a ViewerGetDurationUsCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a ViewerGetDurationUsCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ViewerGetDurationUsCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommandResult;

                                    /**
                                     * Creates a plain object from a ViewerGetDurationUsCommandResult message. Also converts values to other types if specified.
                                     * @param message ViewerGetDurationUsCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ViewerGetDurationUsCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ViewerGetDurationUsCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** VideoEncodeFormat enum. */
                                enum VideoEncodeFormat {
                                    VideoEncodeFormatInvalid = 0,
                                    VideoEncodeFormatH264 = 1,
                                    VideoEncodeFormatH265 = 2
                                }

                                /** AudioEncoding enum. */
                                enum AudioEncoding {
                                    ENCODING_INVALID = 0,
                                    ENCODING_PCM_16BIT = 1,
                                    ENCODING_AAC = 2,
                                    ENCODING_MP3 = 3
                                }

                                /** AudioChannel enum. */
                                enum AudioChannel {
                                    CHANNEL_INVALID = 0,
                                    CHANNEL_IN_MONO = 1,
                                    CHANNEL_IN_STEREO = 2
                                }

                                /** Properties of an ExporterRunCommand. */
                                interface IExporterRunCommand {

                                    /** ExporterRunCommand path */
                                    path?: (string|null);

                                    /** ExporterRunCommand width */
                                    width?: (number|null);

                                    /** ExporterRunCommand height */
                                    height?: (number|null);

                                    /** ExporterRunCommand scale */
                                    scale?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType|null);

                                    /** ExporterRunCommand format */
                                    format?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VideoEncodeFormat|null);

                                    /** ExporterRunCommand videoBps */
                                    videoBps?: (number|Long|null);

                                    /** ExporterRunCommand videoFps */
                                    videoFps?: (number|null);

                                    /** ExporterRunCommand audioFrequency */
                                    audioFrequency?: (number|Long|null);

                                    /** ExporterRunCommand audioBps */
                                    audioBps?: (number|Long|null);

                                    /** ExporterRunCommand audioEncoding */
                                    audioEncoding?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AudioEncoding|null);

                                    /** ExporterRunCommand channel */
                                    channel?: (com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AudioChannel|null);
                                }

                                /** Represents an ExporterRunCommand. */
                                class ExporterRunCommand implements IExporterRunCommand {

                                    /**
                                     * Constructs a new ExporterRunCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommand);

                                    /** ExporterRunCommand path. */
                                    public path: string;

                                    /** ExporterRunCommand width. */
                                    public width: number;

                                    /** ExporterRunCommand height. */
                                    public height: number;

                                    /** ExporterRunCommand scale. */
                                    public scale: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ScaleType;

                                    /** ExporterRunCommand format. */
                                    public format: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.VideoEncodeFormat;

                                    /** ExporterRunCommand videoBps. */
                                    public videoBps: (number|Long);

                                    /** ExporterRunCommand videoFps. */
                                    public videoFps: number;

                                    /** ExporterRunCommand audioFrequency. */
                                    public audioFrequency: (number|Long);

                                    /** ExporterRunCommand audioBps. */
                                    public audioBps: (number|Long);

                                    /** ExporterRunCommand audioEncoding. */
                                    public audioEncoding: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AudioEncoding;

                                    /** ExporterRunCommand channel. */
                                    public channel: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.AudioChannel;

                                    /**
                                     * Creates a new ExporterRunCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ExporterRunCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommand;

                                    /**
                                     * Encodes the specified ExporterRunCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommand.verify|verify} messages.
                                     * @param message ExporterRunCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ExporterRunCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommand.verify|verify} messages.
                                     * @param message ExporterRunCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an ExporterRunCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ExporterRunCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommand;

                                    /**
                                     * Decodes an ExporterRunCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ExporterRunCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommand;

                                    /**
                                     * Verifies an ExporterRunCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an ExporterRunCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ExporterRunCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommand;

                                    /**
                                     * Creates a plain object from an ExporterRunCommand message. Also converts values to other types if specified.
                                     * @param message ExporterRunCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ExporterRunCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an ExporterRunCommandResult. */
                                interface IExporterRunCommandResult {

                                    /** ExporterRunCommandResult progress */
                                    progress?: (number|null);

                                    /** ExporterRunCommandResult resourceUrl */
                                    resourceUrl?: (string|null);
                                }

                                /** Represents an ExporterRunCommandResult. */
                                class ExporterRunCommandResult implements IExporterRunCommandResult {

                                    /**
                                     * Constructs a new ExporterRunCommandResult.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommandResult);

                                    /** ExporterRunCommandResult progress. */
                                    public progress: number;

                                    /** ExporterRunCommandResult resourceUrl. */
                                    public resourceUrl: string;

                                    /**
                                     * Creates a new ExporterRunCommandResult instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ExporterRunCommandResult instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommandResult): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommandResult;

                                    /**
                                     * Encodes the specified ExporterRunCommandResult message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommandResult.verify|verify} messages.
                                     * @param message ExporterRunCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ExporterRunCommandResult message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommandResult.verify|verify} messages.
                                     * @param message ExporterRunCommandResult message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterRunCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an ExporterRunCommandResult message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ExporterRunCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommandResult;

                                    /**
                                     * Decodes an ExporterRunCommandResult message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ExporterRunCommandResult
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommandResult;

                                    /**
                                     * Verifies an ExporterRunCommandResult message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an ExporterRunCommandResult message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ExporterRunCommandResult
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommandResult;

                                    /**
                                     * Creates a plain object from an ExporterRunCommandResult message. Also converts values to other types if specified.
                                     * @param message ExporterRunCommandResult
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterRunCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ExporterRunCommandResult to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }

                                /** Properties of an ExporterCancelCommand. */
                                interface IExporterCancelCommand {
                                }

                                /** Represents an ExporterCancelCommand. */
                                class ExporterCancelCommand implements IExporterCancelCommand {

                                    /**
                                     * Constructs a new ExporterCancelCommand.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterCancelCommand);

                                    /**
                                     * Creates a new ExporterCancelCommand instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns ExporterCancelCommand instance
                                     */
                                    public static create(properties?: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterCancelCommand): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterCancelCommand;

                                    /**
                                     * Encodes the specified ExporterCancelCommand message. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterCancelCommand.verify|verify} messages.
                                     * @param message ExporterCancelCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterCancelCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified ExporterCancelCommand message, length delimited. Does not implicitly {@link com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterCancelCommand.verify|verify} messages.
                                     * @param message ExporterCancelCommand message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.IExporterCancelCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an ExporterCancelCommand message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns ExporterCancelCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterCancelCommand;

                                    /**
                                     * Decodes an ExporterCancelCommand message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns ExporterCancelCommand
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterCancelCommand;

                                    /**
                                     * Verifies an ExporterCancelCommand message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an ExporterCancelCommand message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns ExporterCancelCommand
                                     */
                                    public static fromObject(object: { [k: string]: any }): com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterCancelCommand;

                                    /**
                                     * Creates a plain object from an ExporterCancelCommand message. Also converts values to other types if specified.
                                     * @param message ExporterCancelCommand
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ExporterCancelCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this ExporterCancelCommand to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
