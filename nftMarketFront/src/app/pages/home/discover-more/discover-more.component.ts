import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ArrayObjectService} from '../../../shared/service/array-object.service';
import {VariableService} from '../../../shared/service/variable.service';
import { NFTService } from '../../../shared/service/nft.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover-more',
  standalone: true,
    imports: [
        FirstUppercasePipe,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './discover-more.component.html',
  styleUrl: './discover-more.component.scss'
})
export class DiscoverMoreComponent {

  private discoverSub?: Subscription;
  nfts: any[] = [];

  constructor( 
    private NFTService: NFTService,
    private arrayObjectService: ArrayObjectService, 
    protected variableService: VariableService ) {}

  ngOnInit(): void {
    this.getNFts();
  }

  getNFts(): void {
    this.discoverSub = this.NFTService.fetchNFts().subscribe(data => {
      this.nfts = data.slice(-3);
      console.log('NFTs завантажено:', this.nfts);
    });
  }

  ngOnDestroy(): void {
    this.discoverSub?.unsubscribe();
  }

}
