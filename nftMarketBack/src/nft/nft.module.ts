import { Module } from '@nestjs/common';
import { NftService } from './nft.service';
import { NFT, NFTSchema } from './schema/nft.schema';
import { MongooseModule } from '@nestjs/mongoose';  
import { NftController } from './nft.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: NFT.name, schema: NFTSchema, collection: 'nft' }])],
  controllers: [NftController],
  providers: [NftService]
})
export class NftModule {}
