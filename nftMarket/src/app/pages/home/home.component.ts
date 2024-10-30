import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {HeroComponent} from './hero/hero.component';
import {TrendingCollectionComponent} from './trending-collection/trending-collection.component';
import {TopcreatorsComponent} from './topcreators/topcreators.component';
import {BrowsecategoriesComponent} from './browsecategories/browsecategories.component';
import {DiscoverMoreComponent} from './discover-more/discover-more.component';
import {HighlightComponent} from './highlight/highlight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavMenuComponent,
    HeroComponent,
    TrendingCollectionComponent,
    TopcreatorsComponent,
    BrowsecategoriesComponent,
    DiscoverMoreComponent,
    NavMenuComponent,
    NavMenuComponent,
    HighlightComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
