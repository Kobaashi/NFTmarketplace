   import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
   import { AuthService } from './auth.service';

   @Injectable()
   export class JwtAuthGuard implements CanActivate {
     constructor(private authService: AuthService) {}

     canActivate(context: ExecutionContext): boolean {
       const request = context.switchToHttp().getRequest();
       const token = request.cookies.token; 

       if (!token || !this.authService.validateToken(token)) {
         throw new UnauthorizedException('Invalid or missing token');
       }
       return true;
     }
   }
   