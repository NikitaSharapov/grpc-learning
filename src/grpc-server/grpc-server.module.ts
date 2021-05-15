import { Module } from '@nestjs/common';
import { GrpcServerController } from './grpc-server.controller';
import { GrpcServerService } from './grpc-server.service';

@Module({
  controllers: [GrpcServerController],
  providers: [GrpcServerService]
})
export class GrpcServerModule {}
