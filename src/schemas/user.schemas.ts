import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document,now } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
        @Prop({ required:true })
        name: string;

        @Prop({ required:true })
        id: string;

        @Prop({ required:true })
        password: string;

        @Prop({})
        dob: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);