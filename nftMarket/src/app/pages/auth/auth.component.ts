import {Component} from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    FirstUppercasePipe
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  user: string = "/icons/UserGray.svg";
  bg: string = "/img/authImage.png";
}
