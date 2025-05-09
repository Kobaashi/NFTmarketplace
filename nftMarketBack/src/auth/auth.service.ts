import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Users } from '../users/schema/users.schema';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectModel(Users.name) private userModel: Model<Users>,
  ) {}

  async register(registerDto: RegisterDto): Promise<Users> {
    if (registerDto.password !== registerDto.confirmPassword) {
      throw new BadRequestException('Паролі не збігаються');
    }

    const existingUser = await this.userModel.findOne({ email: registerDto.email });
    if (existingUser) {
      throw new BadRequestException('Користувач з такою поштою вже існує');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const newUser = new this.userModel({
      user_id: new Types.ObjectId().toString(),
      name: registerDto.name,
      email: registerDto.email,
      password: hashedPassword,
      ava: registerDto.ava || '/icons/Jaydon.svg',
      wallet: registerDto.wallet || '0x123456789qwerty',
      bio: registerDto.bio || 'Join in nft community',
      volume: 0,
      sold_allTime: 0,
      sold_month: 0,
      sold_week: 0,
      sold_today: 0,
      followers: 0,
      change: "+0.0%",             
      created: registerDto.created || [],          
    });

    try {
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      console.error('Save error:', error);
      throw new BadRequestException('Помилка при збереженні користувача');
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      console.log(`User with email ${email} not found`);
      throw new BadRequestException('Користувача не знайдено');
    }
  
    console.log('User found, checking password...');
    
    if (password !== user.password) {
      console.log(`Invalid password for user: ${email}`);
      throw new BadRequestException('Невірний пароль');
    }
  
    return user;
  }  

  async login(email: string, password: string): Promise<string> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }
  
    const token = this.jwtService.sign({ id: user.user_id });
  
    return token;
  }
  
}
