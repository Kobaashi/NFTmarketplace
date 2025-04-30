import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
class ChangeItem {
  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  nft_id: string;
}

@Schema()
export class Users {
  @Prop({ unique: true, default: () => new Types.ObjectId().toString() })
  user_id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: '/icons/Jaydon.svg' })
  ava: string;

  @Prop({ default: '0x123456789qwerty' })
  wallet: string;

  @Prop({ default: 0 })
  volume: number;

  @Prop({ default: 0 })
  sold_allTime: number;

  @Prop({ default: 0 })
  sold_month: number;

  @Prop({ default: 0 })
  sold_week: number;

  @Prop({ default: 0 })
  sold_today: number;

  @Prop({ default: 0 })
  followers: number;

  @Prop({ default: 'Join in nft community' })
  bio: string;

  @Prop({ default: '+0.00%' })
  change: string;

  @Prop({ type: Types.ObjectId, ref: 'nft', required: false, default: null }) 
  created: Types.ObjectId | null;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
