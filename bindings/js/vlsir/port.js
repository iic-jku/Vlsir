// source: circuit.proto
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

goog.provide('proto.vlsir.circuit.Port');
goog.provide('proto.vlsir.circuit.Port.Direction');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.circuit.Signal');

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
proto.vlsir.circuit.Port = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vlsir.circuit.Port, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.circuit.Port.displayName = 'proto.vlsir.circuit.Port';
}



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
proto.vlsir.circuit.Port.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.circuit.Port.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.circuit.Port} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Port.toObject = function(includeInstance, msg) {
  var f, obj = {
    signal: (f = msg.getSignal()) && proto.vlsir.circuit.Signal.toObject(includeInstance, f),
    direction: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.vlsir.circuit.Port}
 */
proto.vlsir.circuit.Port.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.circuit.Port;
  return proto.vlsir.circuit.Port.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.circuit.Port} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.circuit.Port}
 */
proto.vlsir.circuit.Port.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vlsir.circuit.Signal;
      reader.readMessage(value,proto.vlsir.circuit.Signal.deserializeBinaryFromReader);
      msg.setSignal(value);
      break;
    case 2:
      var value = /** @type {!proto.vlsir.circuit.Port.Direction} */ (reader.readEnum());
      msg.setDirection(value);
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
proto.vlsir.circuit.Port.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.circuit.Port.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.circuit.Port} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Port.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vlsir.circuit.Signal.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vlsir.circuit.Port.Direction = {
  INPUT: 0,
  OUTPUT: 1,
  INOUT: 2,
  NONE: 3
};

/**
 * optional Signal signal = 1;
 * @return {?proto.vlsir.circuit.Signal}
 */
proto.vlsir.circuit.Port.prototype.getSignal = function() {
  return /** @type{?proto.vlsir.circuit.Signal} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.circuit.Signal, 1));
};


/**
 * @param {?proto.vlsir.circuit.Signal|undefined} value
 * @return {!proto.vlsir.circuit.Port} returns this
*/
proto.vlsir.circuit.Port.prototype.setSignal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.circuit.Port} returns this
 */
proto.vlsir.circuit.Port.prototype.clearSignal = function() {
  return this.setSignal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.circuit.Port.prototype.hasSignal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Direction direction = 2;
 * @return {!proto.vlsir.circuit.Port.Direction}
 */
proto.vlsir.circuit.Port.prototype.getDirection = function() {
  return /** @type {!proto.vlsir.circuit.Port.Direction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vlsir.circuit.Port.Direction} value
 * @return {!proto.vlsir.circuit.Port} returns this
 */
proto.vlsir.circuit.Port.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};

