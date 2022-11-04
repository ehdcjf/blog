import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type CategoryDocument = Category & mongoose.Document;

@Schema()
export class Category {

  @Prop({ required:true })
  name: string;

  @Prop({ type:mongoose.Schema.Types.ObjectId, ref:User.name,  required: true })
  owner: mongoose.Types.ObjectId; 
 
}

export const CategorySchema = SchemaFactory.createForClass(Category);