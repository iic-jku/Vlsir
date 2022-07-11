// source: layout/tetris.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.vlsir.tetris.Abstract');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.tetris.AbstractPort');
goog.require('proto.vlsir.tetris.Outline');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.tetris.Abstract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.tetris.Abstract.repeatedFields_, null);
};
goog.inherits(proto.vlsir.tetris.Abstract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.tetris.Abstract.displayName = 'proto.vlsir.tetris.Abstract';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.tetris.Abstract.repeatedFields_ = [20];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.tetris.Abstract.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.tetris.Abstract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.tetris.Abstract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Abstract.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outline: (f = msg.getOutline()) && proto.vlsir.tetris.Outline.toObject(includeInstance, f),
    portsList: jspb.Message.toObjectList(msg.getPortsList(),
    proto.vlsir.tetris.AbstractPort.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.tetris.Abstract}
 */
proto.vlsir.tetris.Abstract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.tetris.Abstract;
  return proto.vlsir.tetris.Abstract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.tetris.Abstract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.tetris.Abstract}
 */
proto.vlsir.tetris.Abstract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = new proto.vlsir.tetris.Outline;
      reader.readMessage(value,proto.vlsir.tetris.Outline.deserializeBinaryFromReader);
      msg.setOutline(value);
      break;
    case 20:
      var value = new proto.vlsir.tetris.AbstractPort;
      reader.readMessage(value,proto.vlsir.tetris.AbstractPort.deserializeBinaryFromReader);
      msg.addPorts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.tetris.Abstract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.tetris.Abstract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.tetris.Abstract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Abstract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutline();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.vlsir.tetris.Outline.serializeBinaryToWriter
    );
  }
  f = message.getPortsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.vlsir.tetris.AbstractPort.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vlsir.tetris.Abstract.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.tetris.Abstract} returns this
 */
proto.vlsir.tetris.Abstract.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Outline outline = 10;
 * @return {?proto.vlsir.tetris.Outline}
 */
proto.vlsir.tetris.Abstract.prototype.getOutline = function() {
  return /** @type{?proto.vlsir.tetris.Outline} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.tetris.Outline, 10));
};


/**
 * @param {?proto.vlsir.tetris.Outline|undefined} value
 * @return {!proto.vlsir.tetris.Abstract} returns this
*/
proto.vlsir.tetris.Abstract.prototype.setOutline = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Abstract} returns this
 */
proto.vlsir.tetris.Abstract.prototype.clearOutline = function() {
  return this.setOutline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Abstract.prototype.hasOutline = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated AbstractPort ports = 20;
 * @return {!Array<!proto.vlsir.tetris.AbstractPort>}
 */
proto.vlsir.tetris.Abstract.prototype.getPortsList = function() {
  return /** @type{!Array<!proto.vlsir.tetris.AbstractPort>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.tetris.AbstractPort, 20));
};


/**
 * @param {!Array<!proto.vlsir.tetris.AbstractPort>} value
 * @return {!proto.vlsir.tetris.Abstract} returns this
*/
proto.vlsir.tetris.Abstract.prototype.setPortsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.vlsir.tetris.AbstractPort=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.tetris.AbstractPort}
 */
proto.vlsir.tetris.Abstract.prototype.addPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.vlsir.tetris.AbstractPort, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.tetris.Abstract} returns this
 */
proto.vlsir.tetris.Abstract.prototype.clearPortsList = function() {
  return this.setPortsList([]);
};


