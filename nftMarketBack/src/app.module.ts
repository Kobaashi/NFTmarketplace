import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_DB || 'mongodb://localhost:27017/nftMarket',),
  ],
  controllers: [AppController, UsersController,],
  providers: [AppService],
})
export class AppModule {

  async IsConnected() {

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    })

    connection.on('error', () => {
      console.log('MongoDB connection error');
    })

    connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    })
  }
}
