import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

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
  
}
