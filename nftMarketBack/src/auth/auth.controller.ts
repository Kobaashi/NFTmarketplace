import { Controller, Post, Body, BadRequestException, Res, UseGuards, Get, Req } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

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

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) response: Response
  ) {
    const token = await this.authService.login(body.email, body.password);
    response.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return { message: 'Login successful' };
  }
  


  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return { message: 'Вихід виконано успішно' };
  }



}
