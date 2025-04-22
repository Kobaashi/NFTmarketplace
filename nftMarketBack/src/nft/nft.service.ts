import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NFT } from './schema/nft.schema';

@Injectable()
export class NftService {

  constructor(@InjectModel(NFT.name) private readonly nftModel: Model<NFT>) {}

  async findAllNFT(): Promise<NFT[]> {
      return this.nftModel.find();
    }

}
