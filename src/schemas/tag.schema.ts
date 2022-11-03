import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
export type TagDocument = Tag & mongoose.Document;

@Schema({ timestamps: true })
export class Tag {

  @Prop({ required:true })
  name: string;

  @Prop({ type:mongoose.Schema.Types.ObjectId, ref:User.name,  required: true })
  owner: mongoose.Types.ObjectId; 

  @Prop()
  type: number;

  @Prop()
  color: string;

}

export const TagSchema = SchemaFactory.createForClass(Tag);