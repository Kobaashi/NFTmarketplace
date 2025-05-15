import { Controller, Get, Param } from '@nestjs/common';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {

  constructor(private readonly nftService: NftService) {}

  @Get()
  async findAllNFTs(): Promise<any[]> {
    return this.nftService.findAllNFT();
  }

  @Get('id/:nft_id')
  async findNFTById(@Param('nft_id') nft_id: string) {
    console.log('Route hit:', nft_id);
    return this.nftService.findNFTById(nft_id);
  }

  @Get('name/:nft_name')
  async findNFTByName(@Param('nft_name') nft_name: string) {
    console.log(`Searching NFT with name: "${nft_name}"`);
    return this.nftService.findNFTByName(nft_name);
  }

  @Get('collection/:collections')
  async findNFTByCollections(@Param('collections') collections: string) {
    console.log(`Searching NFT with collections: "${collections}"`);
    return this.nftService.findNFTByCollections(collections);
  }

  @Get('categories/:categories')
  async findNFTByCategories(@Param('categories') categories: string) {
    console.log(`Searching NFT with categories: "${categories}"`);
    return this.nftService.findNFTByCategories(categories);
  }

}
