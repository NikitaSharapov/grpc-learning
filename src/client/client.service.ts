import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, ClientGrpcProxy } from '@nestjs/microservices';
import {
  GrpcServerServiceClient,
  GRPC_SERVER_PACKAGE_NAME,
} from 'src/grpc-server/proto/grpc';

@Injectable()
export class ClientService implements OnModuleInit {
  constructor(@Inject(GRPC_SERVER_PACKAGE_NAME) private client: ClientGrpc) {}
  grpcServer: GrpcServerServiceClient;
  onModuleInit() {
    this.grpcServer =
      this.client.getService<GrpcServerServiceClient>('GrpcServerService');
    console.log(this.client);
  }
  getGrpcServiceData() {
    return this.grpcServer.createGrpc({ grpcMessage: 'Data From grpcServer' });
  }
}