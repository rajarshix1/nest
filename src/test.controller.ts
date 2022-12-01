import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class TestController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getTest();
    }
  @Post()
  postTest(@Req() request: any): string {
      console.log(request.body);
      
    return 'check'
    }
  @Put()
  puttTest(@Body() request: any): string {
      console.log(request);
      
    return JSON.stringify(request)
    }

}