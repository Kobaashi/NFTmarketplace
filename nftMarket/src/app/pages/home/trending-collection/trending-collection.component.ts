import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';

@Component({
  selector: 'app-trending-collection',
  standalone: true,
  imports: [
    FirstUppercasePipe
  ],
  templateUrl: './trending-collection.component.html',
  styleUrl: './trending-collection.component.scss'
})
export class TrendingCollectionComponent {
    dog: string = "/img/Dog.png";
    cat: string = "/img/Cat.png";
    bear: string = "/img/Bear.png";
    fox: string = "/img/fox.png";

    mushrum: string = "/img/mushrum.png";
    FirstMushrum: string = "/img/first-mushrum.png";
    SecondMushrum: string = "/img/three-mushrum.png";
    avatar: string = "/img/avatarka.png";

    robot0312: string = "/img/Robot0312.png";
    robot0512: string = "/img/Robot0512.png";
    robot0987: string = "/img/Robot0987.png";
    robot: string = "/icons/justRobot.svg";
}
