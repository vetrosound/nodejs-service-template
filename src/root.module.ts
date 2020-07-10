import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    HelloModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class RootModule {}
