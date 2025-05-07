import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FirstUppercasePipe } from '../../shared/pipe/first-uppercase.pipe';
import { CurrencyPipe, formatCurrency, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VariableService } from '../../shared/service/variable.service';
import { ArrayObjectService } from '../../shared/service/array-object.service';
import { UsersService } from '../../shared/service/users.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    CommonModule,
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
  filteredArtists$!: Observable<any[]>;


  constructor(
    private usersService: UsersService,
    private arrayObjectService: ArrayObjectService,
    protected variableService: VariableService 
  ) {}

  ngOnInit(): void {
    this.getArray();
    this.getUsers();
    this.filteredArtists$ = this.usersService.getUsers().pipe(
      map(data => 
        data
        .filter(artist => artist.sold_today > 0)
        .sort((a, b) => b.sold_today - a.sold_today)
        .filter(artist => artist.sold_week > 0)
        .sort((a, b) => b.sold_week - a.sold_week)
        .filter(artist => artist.sold_month > 0)
        .sort((a, b) => b.sold_month - a.sold_month)
        .filter(artist => artist.sold_allTime > 0)
        .sort((a, b) => b.sold_allTime - a.sold_allTime)
      ));
  }

  getArray(): void {
    this.days = this.arrayObjectService.titles;
    this.mobDays = this.arrayObjectService.Mobtitle;
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(data => {
      this.artists = data;
      // this.filterArtists();
    });
  }

  // filterArtists(): void {
  //   this.filteredArtists = this.artists.filter(artist => artist.sold_today > artist.sold_today);
  // }

  toogleActive(index: number): void {
    if (this.variableService.currentSlideIndex === index) {
      this.variableService.currentSlideIndex = null;
    } else {
      this.variableService.currentSlideIndex = index;
    }
    this.variableService.active = !this.variableService.active;
  }
}
