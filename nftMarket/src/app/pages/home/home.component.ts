import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {HeroComponent} from './hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavMenuComponent,
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
