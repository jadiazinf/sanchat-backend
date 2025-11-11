import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './config/env.validation';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ExamplesModule } from './examples/examples.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    DatabaseModule,
    ExamplesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
