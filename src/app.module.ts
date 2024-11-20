import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './configuration/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('MONGO_DB'),
      }),
      inject: [ConfigService],
    }),
    TransactionsModule,
  ],
})
export class AppModule {}
