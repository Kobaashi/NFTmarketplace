import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { MController } from './s/m/m.controller';
import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UsersController, MController],
  providers: [AppService],
})
export class AppModule {}
