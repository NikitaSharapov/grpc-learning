import { NestFactory } from '@nestjs/core';
import {
  GrpcOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { resolve } from 'path';
import { AppModule } from './app.module';

export const GrpcServerServiceClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50052',
    package: 'grpcServer',
    protoPath: resolve(__dirname, '../grpc-server/proto/grpc.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(GrpcServerServiceClientOptions);
  app.startAllMicroservicesAsync();
  app.listen(3000);
}
bootstrap();
