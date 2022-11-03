import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type HistoryDocument = History & mongoose.Document;

@Schema({ timestamps: true })
export class History {


  @Prop({ required:true })
  title: string;

  @Prop()
  content: string;

  @Prop({ type:mongoose.Schema.Types.ObjectId, ref:User.name,  required: true })
  owner: mongoose.Types.ObjectId; 

  @Prop({ required:true })
  date: number;

  @Prop()
  review: string; 
}

export const HistorySchema = SchemaFactory.createForClass(History);