import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Patch, Post, Put, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { AddNftDto } from './dto/nft.dto';

@Controller('users')
export class UsersController {
  
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<any[]> {
    return this.usersService.findAllUsers();
  }

  @Get(':email')
  async findUserByEmail(@Param('email') email: string) {
      return this.usersService.findUserByEmail(email);
  }

  @Get("id/:user_id")
  async findUserById(@Param('user_id') user_id: string) {
    console.log("user_id:", user_id);
    const user = await this.usersService.findUserById(user_id);
    console.log("user found:", user);
    return user;
  }

  @Patch('add-nft')
  async addNft(@Body() dto: AddNftDto) {
    const updatedUser = await this.usersService.addNftToUser(dto.user_id, dto.nft_id);
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    return updatedUser;
  }

}
