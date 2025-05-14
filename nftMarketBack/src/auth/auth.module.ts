import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../users/schema/users.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: 'secret', 
      signOptions: { expiresIn: '180m' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService], 
})
export class AuthModule {}
