import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ArrayObjectService} from '../../shared/service/array-object.service';
import {VariableService} from '../../shared/service/variable.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {

  NFTS: any[] = [];
  Tabs: any[] = [];

  constructor(  private arrayObjectService: ArrayObjectService, public variableService: VariableService) {
  }

  ngOnInit(): void {
    this.getArray();
  }

  getArray(): void {
    this.NFTS = this.arrayObjectService.NFTS;
    this.Tabs = this.arrayObjectService.Tabs;
  }

  toogleActive(index: number): void {
    this.variableService.currentSlideIndex = index;
  }

}
