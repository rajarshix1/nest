import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Demo, DemoDocument } from '../../schemas/demo.schema';
import { CreateDemoDto } from './dto/create-demo.dto';
@Injectable()
export class DemoService {
    constructor(
    @InjectModel(Demo.name)
    private demoModel: Model<DemoDocument>,
    ) { }
       async findAll(): Promise<Demo[]> {
        return await this.demoModel.find().exec();
      }
    
      async findOne(id: string): Promise<Demo> {
        const exact = await this.demoModel.findById(id).exec();
        console.log('ee', exact);
        
        return exact
      }
    
      async create(createDemoDto: CreateDemoDto): Promise<Demo> {
        return await new this.demoModel({
          ...createDemoDto,
          createdAt: new Date(),
        }).save();
      }
    }
    