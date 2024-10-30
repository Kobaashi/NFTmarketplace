import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {HeroComponent} from './hero/hero.component';
import {TrendingCollectionComponent} from './trending-collection/trending-collection.component';
import {TopCreatorComponent} from '../../components/top-creator/top-creator.component';
import {TopcreatorsComponent} from './topcreators/topcreators.component';
import {BrowsecategoriesComponent} from './browsecategories/browsecategories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavMenuComponent,
    HeroComponent,
    TrendingCollectionComponent,
    TopCreatorComponent,
    TopcreatorsComponent,
    BrowsecategoriesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
