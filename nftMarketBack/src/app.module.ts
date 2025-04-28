import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { NftModule } from './nft/nft.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://IvanUkrainets:UdeChnu@cluster0.yzjnh.mongodb.net/NFTMarketplace?retryWrites=true&w=majority&appName=Cluster0'),
    UsersModule,
    NftModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
