import { Component } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {CurrencyPipe, formatCurrency, NgClass} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../shared/service/variable.service';
import {ArrayObjectService} from '../../shared/service/array-object.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    FirstUppercasePipe,
    CurrencyPipe,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {

  artists: any[] = [];
  days: any[] = [];
  mobDays: any[] = [];

  constructor(private arrayObjectService: ArrayObjectService,protected variableService: VariableService ) {
  }

  ngOnInit():void {
    this.getArray()
  }

  getArray():void {
    this.artists = this.arrayObjectService.artists;
    this.days = this.arrayObjectService.titles;
    this.mobDays = this.arrayObjectService.Mobtitle;
  }


  toogleActive(index: number): void {
    if (this.variableService.currentSlideIndex === index) {
      this.variableService.currentSlideIndex = null;
    } else {
      this.variableService.currentSlideIndex = index;
    }
  }

}
