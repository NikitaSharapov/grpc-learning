import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrpcServerModule } from './grpc-server/grpc-server.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [GrpcServerModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
