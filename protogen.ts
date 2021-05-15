import { exec } from 'child_process';
import * as path from 'path';

const plugin = path.resolve(__dirname, `node_modules/.bin/protoc-gen-ts_proto`);

const commands = [
  `cd src/grpc-server/proto/ && protoc --plugin=${plugin} --ts_proto_opt=nestJs=true --ts_proto_opt=snakeToCamel=false --ts_proto_out=. ./grpc.proto`,
];

commands.forEach((command) => {
  exec(command, (error, stdout, stderr) => {
    if (stdout) {
      console.log(stdout);
    }
    if (error) {
      console.error(error.message);
      return;
    }
    if (stderr) {
      console.error(stderr);
      return;
    }
  });
});
