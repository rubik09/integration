import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './configuration/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
})
export class AppModule {}