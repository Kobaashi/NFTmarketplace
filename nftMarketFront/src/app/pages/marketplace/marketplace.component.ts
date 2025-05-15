import { Component, OnDestroy } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {FooterComponent} from '../../components/footer/footer.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../shared/service/variable.service';
import {NFTService} from '../../shared/service/nft.service';
import {ArrayObjectService} from '../../shared/service/array-object.service';
import {NgClass} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from '../../shared/service/users.service';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [
    NavMenuComponent,
    FirstUppercasePipe,
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    NgClass,
  ],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})
export class MarketplaceComponent implements OnDestroy {

      private marketSub?: Subscription
      NFTs: any[] = [];
      tabs: any[]= [];
      user_id: string = '';

     constructor(
      private arrayObjectService: ArrayObjectService,
      private NFTService: NFTService ,
      protected variableService: VariableService,
      private http: HttpClient,
      private cookieService: CookieService,
      private readonly usersService: UsersService
    ) {
     }

     ngOnInit():void {
        this.getArray();
        this.getNFts();
        this.loadUserIdFromToken();
        const userIdFromCookie = this.cookieService.get('user_id');
        console.log('User ID from cookies:', userIdFromCookie);
        this.user_id = userIdFromCookie;
     }

     loadUserIdFromToken(): void {
    const token = this.cookieService.get('jwt_token');
    if (token) {
      try {
        const payload = token.split('.')[1];
        const decoded = atob(payload);
        const parsed = JSON.parse(decoded);
        this.user_id = parsed.user_id || null;
      } catch (e) {
        console.error('Не вдалось розпарсити токен', e);
      }
    }
  }

  addNftToUser(nft_id: string): void {
    if (!this.user_id) {
      console.error('User ID відсутній');
      return;
    }
    console.log("Id Nft:", nft_id);
    this.usersService.addNftToUser(this.user_id, nft_id).subscribe({
      next: (res) => {
        console.log('NFT успішно додано:', res);
      },
      error: (err) => {
        console.error('Помилка додавання NFT:', err);
      }
    });
  }

     getNFts(): void {
      this.marketSub = this.NFTService.fetchNFts().subscribe(data => {
        this.NFTs = data;
        console.log('NFTs завантажено:', this.NFTs);
      });
     }

     getArray():void {
       this.tabs = this.arrayObjectService.tabs;
     }

    toogleActive(index: number): void {
      this.variableService.currentSlideIndex = index;
    }

    ngOnDestroy(): void {
      this.marketSub?.unsubscribe();
    }

}
