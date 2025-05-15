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

  async findUserById(user_id: string): Promise<Users | null> {
    return this.userModel.findOne({ user_id });
  }

  async addNftToUser(user_id: string, nft_id: string): Promise<Users | null> {
    const user = await this.userModel.findOne({ user_id });

    if (!user) {
      console.log('User not found');
      return null;
    }

    if (!user.owned.some(item => item.nft_id === nft_id)) {
      user.owned.push({ date: new Date().toISOString(), nft_id });
    }

    await user.save();

    return user;
  }



}
