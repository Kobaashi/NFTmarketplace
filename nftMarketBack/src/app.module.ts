import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { NftModule } from './nft/nft.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { NftController } from './nft/nft.controller';
import { HttpExceptionFilter } from './shared/httpexceptionfilter';
import { APP_FILTER } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    UsersModule,
    NftModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService,
    {
       provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
