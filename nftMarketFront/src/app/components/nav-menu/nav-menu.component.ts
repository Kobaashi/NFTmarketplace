import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VariableService } from '../../shared/service/variable.service';
import { environment } from '../../../environment/environmet';
import { AuthGuard } from '../../auth.guard';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  buttonText: string = 'Log In';

  constructor(
    private authGuard: AuthGuard,
    private authService: AuthService,
    protected variableService: VariableService,
    private http: HttpClient,
    private router: Router
  ) {
    this.checkJwtCookie();
  }

  goToProfile() {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/jwtuser/:nameuser/:user_id']);
    } else {  
      this.router.navigate(['/log-in']);
    }
  }

  checkJwtCookie() {
    if (typeof document !== 'undefined') {
      const hasJwt = document.cookie.includes('jwt');
      this.buttonText = hasJwt ? 'Log Out' : 'Log In';
    }
  }


  onAuthButtonClick() {
  if (this.buttonText === 'Log Out') {
    this.http.post(`${environment.apiUrl}/auth/logout`, {}, { withCredentials: true }).subscribe({
      next: () => {
        this.buttonText = 'Log In';
        window.location.reload(); 
      },
      error: (err) => {
        console.error('Logout failed:', err);
      }
    });
  } else {
    this.router.navigate(['/log-in']);
  }
}


  toggleActive() {
    this.variableService.isActive = !this.variableService.isActive;
  }
}
