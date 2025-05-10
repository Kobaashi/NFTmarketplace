import { Controller, Get, Param } from '@nestjs/common';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {

  constructor(private readonly nftService: NftService) {}

  @Get()
  async findAllNFTs(): Promise<any[]> {
    return this.nftService.findAllNFT();
  }

  @Get(':nft_id')
  async findNFTById(@Param('nft_id') nft_id: string) {
    console.log('Route hit:', nft_id);
    return this.nftService.findNFTById(nft_id);
  }


}
