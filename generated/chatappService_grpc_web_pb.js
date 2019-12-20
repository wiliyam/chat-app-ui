/**
 * @fileoverview gRPC-Web generated client stub for chatappService
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chatappService = require('./chatappService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chatappService.chatappServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chatappService.chatappServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatappService.req,
 *   !proto.chatappService.res>}
 */
const methodDescriptor_chatappService_newUsr = new grpc.web.MethodDescriptor(
  '/chatappService.chatappService/newUsr',
  grpc.web.MethodType.UNARY,
  proto.chatappService.req,
  proto.chatappService.res,
  /**
   * @param {!proto.chatappService.req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatappService.res.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chatappService.req,
 *   !proto.chatappService.res>}
 */
const methodInfo_chatappService_newUsr = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chatappService.res,
  /**
   * @param {!proto.chatappService.req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatappService.res.deserializeBinary
);


/**
 * @param {!proto.chatappService.req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chatappService.res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chatappService.res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chatappService.chatappServiceClient.prototype.newUsr =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chatappService.chatappService/newUsr',
      request,
      metadata || {},
      methodDescriptor_chatappService_newUsr,
      callback);
};


/**
 * @param {!proto.chatappService.req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chatappService.res>}
 *     A native promise that resolves to the response
 */
proto.chatappService.chatappServicePromiseClient.prototype.newUsr =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chatappService.chatappService/newUsr',
      request,
      metadata || {},
      methodDescriptor_chatappService_newUsr);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatappService.req,
 *   !proto.chatappService.res>}
 */
const methodDescriptor_chatappService_subscribe = new grpc.web.MethodDescriptor(
  '/chatappService.chatappService/subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chatappService.req,
  proto.chatappService.res,
  /**
   * @param {!proto.chatappService.req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatappService.res.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chatappService.req,
 *   !proto.chatappService.res>}
 */
const methodInfo_chatappService_subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chatappService.res,
  /**
   * @param {!proto.chatappService.req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatappService.res.deserializeBinary
);


/**
 * @param {!proto.chatappService.req} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chatappService.res>}
 *     The XHR Node Readable Stream
 */
proto.chatappService.chatappServiceClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chatappService.chatappService/subscribe',
      request,
      metadata || {},
      methodDescriptor_chatappService_subscribe);
};


/**
 * @param {!proto.chatappService.req} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chatappService.res>}
 *     The XHR Node Readable Stream
 */
proto.chatappService.chatappServicePromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chatappService.chatappService/subscribe',
      request,
      metadata || {},
      methodDescriptor_chatappService_subscribe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatappService.req,
 *   !proto.chatappService.res>}
 */
const methodDescriptor_chatappService_sendSms = new grpc.web.MethodDescriptor(
  '/chatappService.chatappService/sendSms',
  grpc.web.MethodType.UNARY,
  proto.chatappService.req,
  proto.chatappService.res,
  /**
   * @param {!proto.chatappService.req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatappService.res.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chatappService.req,
 *   !proto.chatappService.res>}
 */
const methodInfo_chatappService_sendSms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chatappService.res,
  /**
   * @param {!proto.chatappService.req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatappService.res.deserializeBinary
);


/**
 * @param {!proto.chatappService.req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chatappService.res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chatappService.res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chatappService.chatappServiceClient.prototype.sendSms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chatappService.chatappService/sendSms',
      request,
      metadata || {},
      methodDescriptor_chatappService_sendSms,
      callback);
};


/**
 * @param {!proto.chatappService.req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chatappService.res>}
 *     A native promise that resolves to the response
 */
proto.chatappService.chatappServicePromiseClient.prototype.sendSms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chatappService.chatappService/sendSms',
      request,
      metadata || {},
      methodDescriptor_chatappService_sendSms);
};


module.exports = proto.chatappService;

