import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const user = await this.authService.register(registerDto);
      return {
        message: 'Реєстрація успішна',
        userId: user.user_id,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
