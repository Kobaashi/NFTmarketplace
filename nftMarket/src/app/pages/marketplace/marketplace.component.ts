import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {FooterComponent} from '../../components/footer/footer.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../shared/service/variable.service';
import {ArrayObjectService} from '../../shared/service/array-object.service';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [
    NavMenuComponent,
    FirstUppercasePipe,
    FooterComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})
export class MarketplaceComponent {

      NFTs: any[] = [];
     constructor(private arrayObjectService: ArrayObjectService , protected varialeService: VariableService) {
     }

     ngOnInit():void {
        this.getArray()
     }

     getArray():void {
       this.NFTs = this.arrayObjectService.NFTs
     }



}
