import { Component } from '@angular/core';

@Component({
  selector: 'app-highlight',
  standalone: true,
  imports: [],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent {
  bg: string = "/img/NFTHighlight.png";
  eye: string = "/icons/Eye.svg";
  ava: string = "/icons/Phillip.svg";
}
