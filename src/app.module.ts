import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Demo, DemoSchema } from '../schemas/demo.schema';
import { DemoModule } from './demo/demo.module';
import { TestController } from './test.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'URI',
    ), DemoModule
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
