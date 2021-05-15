import { Controller } from '@nestjs/common';
import {
  GrpcMessage,
  GrpcServerServiceController,
  GrpcServerServiceControllerMethods,
} from './proto/grpc';

@Controller('grpc-server')
@GrpcServerServiceControllerMethods()
export class GrpcServerController implements GrpcServerServiceController {
  createGrpc(data: GrpcMessage) {
    return data;
  }
}
