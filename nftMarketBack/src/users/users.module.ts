import { Module, forwardRef  } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './schema/users.schema';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  AuthModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule, UsersService], 
})
export class UsersModule {}
