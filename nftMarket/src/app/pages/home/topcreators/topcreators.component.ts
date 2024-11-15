import {Component, HostListener} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {VariableService} from '../../../shared/service/variable.service';
import {ArrayObjectService} from '../../../shared/service/array-object.service';

@Component({
  selector: 'app-topcreators',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './topcreators.component.html',
  styleUrl: './topcreators.component.scss'
})
export class TopcreatorsComponent {

  creators: any[] = [];

  constructor(private arrayObjectServices: ArrayObjectService ,protected variableService: VariableService) {
  }

  ngOnInit() {
    this.checkScreenSize();
    this.getArray();
  }

  getArray(): void {
    this.creators = this.arrayObjectServices.creators;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.variableService.isMobile = window.innerWidth <= 768; // Условие для мобильных устройств
  }


}
