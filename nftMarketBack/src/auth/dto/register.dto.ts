import { IsArray, IsEmail, IsString, IsNumber, MinLength, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChangeItem {
  @IsString()
  date: string;

  @IsString()
  value: string;
}

export class RegisterDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  confirmPassword: string;

  @IsOptional()
  @IsString()
  ava?: string;

  @IsOptional()
  @IsString()
  wallet?: string;

  @IsOptional()
  @IsNumber()
  volume?: number;

  @IsOptional()
  @IsNumber()
  sold_allTime?: number;

  @IsOptional()
  @IsNumber()
  sold_month?: number;

  @IsOptional()
  @IsNumber()
  sold_week?: number;

  @IsOptional()
  @IsNumber()
  sold_today?: number;

  @IsOptional()
  @IsNumber()
  followers?: number;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChangeItem)
  change?: ChangeItem[];
}
