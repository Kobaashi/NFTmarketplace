import { IsString } from 'class-validator';

export class AddNftDto {

  @IsString()
  user_id: string;

  @IsString()
  nft_id: string;
}
