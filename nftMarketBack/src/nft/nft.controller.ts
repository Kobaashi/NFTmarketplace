import { Controller, Get } from '@nestjs/common';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {

  constructor(private readonly nftService: NftService) {}

  @Get()
  async findAllNFTs(): Promise<any[]> {
    return this.nftService.findAllNFT();
  }

}
