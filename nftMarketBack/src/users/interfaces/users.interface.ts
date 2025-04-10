import { Document } from 'mongoose';

export interface User extends Document {
  user_id: string;
  Name: string;
  wallet: string;
  volume: number;
  sold_allTime: number;
  sold_month: number;
  sold_week: number;
  sold_today: number;
  followers: number;
  bio: string;
  change: string;
  created: { nft_id: number }[];
  Ava: string;
}
