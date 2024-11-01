import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {ConnectComponent} from './pages/connect/connect.component';
import {RankingComponent} from './pages/ranking/ranking.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'connect-a-wallet', component: ConnectComponent },
  { path: 'sign-up', component: AuthComponent },
];

