import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Users extends Document {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  Name: string;

  @Prop({ required: true })
  wallet: string;

  @Prop({ required: true })
  volume: number;

  @Prop({ required: true })
  sold_allTime: number;

  @Prop({ required: true })
  sold_month: number;

  @Prop({ required: true })
  sold_week: number;

  @Prop({ required: true })
  sold_today: number;

  @Prop({ required: true })
  followers: number;

  @Prop({ required: true })
  bio: string;

  @Prop({ required: true })
  change: string;

  @Prop({ type: Types.ObjectId, ref: 'nft', required: true })
  created: Types.ObjectId;

  @Prop({ required: true })
  Ava: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
