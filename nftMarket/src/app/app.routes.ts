import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {ConnectComponent} from './pages/connect/connect.component';
import {RankingComponent} from './pages/ranking/ranking.component';
import {ArtistComponent} from './pages/artist/artist.component';
import {MarketplaceComponent} from './pages/marketplace/marketplace.component';
import {NftComponent} from './pages/nft/nft.component';
import {LogInComponent} from './pages/auth/log-in/log-in.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'connect-a-wallet', component: ConnectComponent },
  { path: 'sign-up', component: AuthComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'nft-page', component: NftComponent },
];

