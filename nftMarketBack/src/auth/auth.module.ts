import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../users/schema/users.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'seckret', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [AuthService],
  exports: [AuthService], 
})
export class AuthModule {}
