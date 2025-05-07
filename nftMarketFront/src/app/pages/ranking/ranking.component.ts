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
import { map } from 'rxjs/operators';

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
    this.updateFilteredArtists();
  }

  updateFilteredArtists(): void {
    const index = this.variableService.currentSlideIndex;
  
    let metric: 'sold_today' | 'sold_week' | 'sold_month' | 'sold_allTime' = 'sold_today';
  
    switch (index) {
      case 0: metric = 'sold_today'; break;
      case 1: metric = 'sold_week'; break;
      case 2: metric = 'sold_month'; break;
      case 3: metric = 'sold_allTime'; break;
    }
  
    this.filteredArtists$ = this.usersService.getUsers().pipe(
      map(data =>
        data
          .filter(artist => +artist[metric] > 0)
          .sort((a, b) => +b[metric] - +a[metric])
      )
    );
  }


  getArray(): void {
    this.days = this.arrayObjectService.titles;
    this.mobDays = this.arrayObjectService.Mobtitle;
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(data => {
      this.artists = data;
    });
  }

  toogleActive(index: number): void {
    if (this.variableService.currentSlideIndex === index) {
      this.variableService.currentSlideIndex = null;
    } else {
      this.variableService.currentSlideIndex = index;
    }
    this.variableService.active = !this.variableService.active;
    this.updateFilteredArtists();
  }
}
