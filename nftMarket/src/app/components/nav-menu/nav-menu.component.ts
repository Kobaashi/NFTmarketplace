import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  logo: string = "/icons/LogoPurple.svg";
  user: string = "/icons/User.svg";
}
