import { Controller, Headers, Post, Body, BadRequestException, Res, Query, Get, Request } from '@nestjs/common';
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
       httpOnly: false,
       sameSite: 'strict',
       maxAge: 7 * 24 * 60 * 60 * 1000,
       path: '/'
     });
     return { message: 'Login successful', token }; 
   }

  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt', {
      httpOnly: false,
      sameSite: 'strict',
      secure: false,  
      path: '/'
    });
    return { message: 'Вихід виконано успішно' };
  }

  @Get('user-token')
  async getUserFromToken(@Request() req) {
    const token = req.cookies.jwt; 

    if (!token) {
      throw new BadRequestException('Authorization cookie is missing or invalid');
    }

    return this.authService.decodeTokenAndFindUser(token);
  }

}
