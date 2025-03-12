import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../shared/service/variable.service';
@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  constructor(protected variableService: VariableService) {
  }

  toggleActive() {
    this.variableService.isActive = !this.variableService.isActive
  }
}
