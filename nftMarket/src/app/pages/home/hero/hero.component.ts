import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {PrimaryComponent} from '../../../components/button/primary/primary.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    FirstUppercasePipe,
    PrimaryComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  spaceWalking: string = "/img/spaceWalking.png";
  avatar: string = "/icons/Avatar.svg";
}
