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
  
}
