import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get<string>('FRONTEND_URI') || 'http://localhost:4200',
    credentials: true,
  });
  
  app.use(cookieParser());

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
