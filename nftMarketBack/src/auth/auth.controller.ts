import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {

  @Post('register')
  async register(@Body() RegisterDto: RegisterDto) {
    const user = await this.authService.register(RegisterDto.email, RegisterDto.password, RegisterDto.name, RegisterDto.ava, RegisterDto.wallet, RegisterDto.volume, RegisterDto.sold_allTime, RegisterDto.sold_month, RegisterDto.sold_week, RegisterDto.sold_today, RegisterDto.followers, RegisterDto.bio, RegisterDto.change);
  }
}
