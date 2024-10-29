import { Component } from '@angular/core';

@Component({
  selector: 'app-primary',
  standalone: true,
  imports: [],
  templateUrl: './primary.component.html',
  styleUrl: './primary.component.scss'
})
export class PrimaryComponent {
  rocket: string = "/icons/RocketPurple.svg";
}
