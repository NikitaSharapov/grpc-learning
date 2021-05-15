import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { GRPC_SERVER_PACKAGE_NAME } from 'src/grpc-server/proto/grpc';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: GRPC_SERVER_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50052',
          package: 'grpcServer',
          protoPath: resolve(__dirname, '../../grpc-server/proto/grpc.proto'),
        },
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
