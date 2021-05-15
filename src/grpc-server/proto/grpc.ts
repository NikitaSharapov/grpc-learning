/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';

export const protobufPackage = 'grpcServer';

export interface GrpcMessage {
  grpcMessage: string;
}

export const GRPC_SERVER_PACKAGE_NAME = 'grpcServer';

export interface GrpcServerServiceClient {
  createGrpc(request: GrpcMessage): Observable<GrpcMessage>;
}

export interface GrpcServerServiceController {
  createGrpc(
    request: GrpcMessage,
  ): Promise<GrpcMessage> | Observable<GrpcMessage> | GrpcMessage;
}

export function GrpcServerServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['createGrpc'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('GrpcServerService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('GrpcServerService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const GRPC_SERVER_SERVICE_NAME = 'GrpcServerService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
