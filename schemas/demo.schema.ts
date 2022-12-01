import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DemoDocument = Demo & Document;

@Schema()
export class Demo {
    @Prop({ required: true })
    name: string;

    @Prop()
    age: string;
}


export const DemoSchema = SchemaFactory.createForClass(Demo);