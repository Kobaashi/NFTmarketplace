import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class NFT extends Document {
  @Prop({ required: true })
  nft_id: string;

  @Prop({ required: true })
  nft_name: string;

  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  artist: number;

  @Prop({ required: true })
  artist_ava: number;

  @Prop({ required: true })
  colections: number;

  @Prop({ required: true })
  categories: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  highest_bid: number;
}

export const NFTSchema = SchemaFactory.createForClass(NFT);
