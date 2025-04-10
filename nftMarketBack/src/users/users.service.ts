import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('users') private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    console.log('Found users:', users);
    return users;
  }

}
