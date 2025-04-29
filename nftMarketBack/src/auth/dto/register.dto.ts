import { IsOptional, ValidateNested, IsString } from 'class-validator';
import { Type } from 'class-transformer';

class ChangeItem {
  @IsString()
  date: string;

  @IsString()
  nft_id: string;
}

export class RegisterDto {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  @IsOptional()
  ava?: string;

  @IsOptional()
  wallet?: string;

  @IsOptional()
  bio?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ChangeItem)
  change?: ChangeItem[];
}
