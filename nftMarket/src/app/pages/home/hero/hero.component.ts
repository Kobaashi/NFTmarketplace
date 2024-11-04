import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  spaceWalking: string = "/img/spaceWalking.png";
  avatar: string = "/icons/Avatar.svg";
  rocket: string = "/icons/RocketWhite.svg";
}
