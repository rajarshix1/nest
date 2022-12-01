import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Demo, DemoSchema } from '../../schemas/demo.schema';

@Module({
  providers: [DemoService],
  controllers: [DemoController],
  imports: [
    MongooseModule.forFeature([{ name: Demo.name, schema: DemoSchema }]),
  ],
})
 
export class DemoModule {}