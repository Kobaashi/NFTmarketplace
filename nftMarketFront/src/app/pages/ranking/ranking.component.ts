import { Component } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {CurrencyPipe, formatCurrency, NgClass} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../shared/service/variable.service';
import {ArrayObjectService} from '../../shared/service/array-object.service';
import { UsersService } from '../../shared/service/users.service';

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
    NgClass,
    FirstUppercasePipe
  ],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {

  artists: any[] = [];
  days: any[] = [];
  mobDays: any[] = [];

  constructor(
    private usersService: UsersService,
    private arrayObjectService: ArrayObjectService,
    protected variableService: VariableService ) {
  }

  ngOnInit():void {
    this.getArray()
    this.getUsers()
  }

  getArray():void {
    this.days = this.arrayObjectService.titles;
    this.mobDays = this.arrayObjectService.Mobtitle;
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(data => {
      this.artists = data;
      console.log('Користувачів завантажено:', this.artists);
    });
  }



  toogleActive(index: number): void {
    if (this.variableService.currentSlideIndex === index) {
      this.variableService.currentSlideIndex = null;
    } else {
      this.variableService.currentSlideIndex = index;
    }
    this.variableService.active === !this.variableService.active;
  }

  getFilteredArtists(): any[] {
    if (this.variableService.currentSlideIndex === null) {
      return this.artists;
    }

    return this.artists.filter(artist => artist.dayIndex  === this.variableService.currentSlideIndex);
  }
}
