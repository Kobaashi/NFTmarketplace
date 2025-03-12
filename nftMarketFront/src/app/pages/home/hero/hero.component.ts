import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../../shared/service/variable.service';

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

  constructor(protected variableService: VariableService) {
  }

  ngOnInit():void {
  }


}
