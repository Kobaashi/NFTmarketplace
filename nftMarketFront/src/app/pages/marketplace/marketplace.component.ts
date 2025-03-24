import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {FooterComponent} from '../../components/footer/footer.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../shared/service/variable.service';
import {NFTService} from '../../shared/service/nft.service';
import {ArrayObjectService} from '../../shared/service/array-object.service';
import {NgClass} from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
export class MarketplaceComponent {

      NFTs: any[] = [];
      tabs: any[]= [];
     constructor(
      private arrayObjectService: ArrayObjectService,
      private NFTService: NFTService ,
      protected variableService: VariableService,
      private http: HttpClient
    ) {
     }

     ngOnInit():void {
        this.getArray();
        this.getNFts();
     }

     getNFts(): void {
      this.NFTService.fetchNFts().subscribe(data => {
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

}
