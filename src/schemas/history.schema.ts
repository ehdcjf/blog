import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Category } from './category.schema';
import { User } from './user.schema';

export type HistoryDocument = History & mongoose.Document;

@Schema({ timestamps: true })
export class History {

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Category.name })
  category: mongoose.Types.ObjectId;

  @Prop()
  detail: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  owner: mongoose.Types.ObjectId;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  startTime: number;

  @Prop({ required: true })
  endTime: number;
}

export const HistorySchema = SchemaFactory.createForClass(History);