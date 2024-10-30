import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    FirstUppercasePipe
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
    actronavt: string = "/img/astronavt.png";
    message: string = "/icons/message.svg";
}
