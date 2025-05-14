import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly logger = new Logger(AppService.name);
     handleError(error: any) {
       this.logger.error('An error occurred', error.stack);
    }
}
