import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateDemoDto } from './dto/create-demo.dto';
  import { DemoService } from './demo.service';
  
  @Controller('demo')
  export class DemoController {
    constructor(private readonly service: DemoService) {}
  
    @Get()
    async index() {
      console.log('s');
      
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post()
    async create(@Body() createDemoDto: CreateDemoDto) {
      return await this.service.create(createDemoDto);
    }
  
   
  }