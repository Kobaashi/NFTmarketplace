import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './shared/service/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private cookieService: CookieService,
    private auth: AuthService, 
    private router: Router) {}

  isLoggedIn(): boolean {
    return this.cookieService.check('jwt'); 
  }

  getUserToken(): string | null {
    return this.cookieService.get('jwt') || null;
  }

  canActivate(): boolean {
    const token = this.getUserToken();

    if (token) {
      return true; 
    } else {
      this.router.navigate(['/log-in']);
      return false;
    }
  }

}
