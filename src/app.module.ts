import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import config from './configuration/config';
import { TransactionsModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const dbConfig = configService.getOrThrow('MONGO_DB_SETTINGS');
        return {
          uri: `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}?authSource=${dbConfig.authSource}`,
        };
      },
      inject: [ConfigService],
    }),
    TransactionsModule,
  ],
})
export class AppModule {}
