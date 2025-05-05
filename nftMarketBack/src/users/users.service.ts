import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schema/users.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(Users.name) private readonly userModel: Model<Users>) {}

  async findAllUsers(): Promise<Users[]> {
    return this.userModel.find();
  }

  async findUserByEmail(email: string): Promise<Users | null> {
    return this.userModel.findOne({ email })
  }
  
}
