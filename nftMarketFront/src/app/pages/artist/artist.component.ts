import { Component, OnDestroy, OnInit } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {ActivatedRoute, RouterLink, RouterLinkActive, Router} from '@angular/router';
import {ArrayObjectService} from '../../shared/service/array-object.service';
import {VariableService} from '../../shared/service/variable.service';
import {NgClass} from '@angular/common';
import { UsersService } from '../../shared/service/users.service';
import { User } from '../../shared/interface/user.ineterface';
import { NFTService } from '../../shared/service/nft.service';
import { AuthService } from '../../shared/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent implements OnDestroy {

  private userSub?: Subscription;
  private nftSub?: Subscription;
  user: User | null = null;
  createdNfts: any[] = [];
  ownedNfts: any[] = [];  
  NFTS: any[] = [];
  Tabs: any[] = [];

  constructor(  
    private route: ActivatedRoute,
    private readonly router: Router,
    private readonly nftService: NFTService,
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private arrayObjectService: ArrayObjectService, 
    public variableService: VariableService) {
  }

  ngOnInit(): void {
    this.getArray();
    const name = this.route.snapshot.paramMap.get('name');
    const id = this.route.snapshot.paramMap.get('id');
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.getUserById(userId);
      this.getOwnedNft(userId);
    }
  }

  getArray(): void {
    this.NFTS = this.arrayObjectService.NFTS;
    this.Tabs = this.arrayObjectService.Tabs;
  }

  getUserById(userId: string): void {
    this.userSub = this.usersService.getUserById(userId).subscribe({
      next: (data) => {
        this.user = data;
        console.log('User data:', this.user);

        if (this.user?.created?.length) {
          for (const item of this.user.created) {
            this.nftSub = this.nftService.getNftById(item.nft_id).subscribe({
              next: (nftData) => {
                this.createdNfts.push(nftData); 
                console.log('NFT data:', this.createdNfts);
              },
              error: (err) => {
                console.error(`Error fetching NFT ${item.nft_id}:`, err);
              }
            });
          } 
        } else {
          console.log('No NFTs created by this user.');
        }
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }

  getOwnedNft(userId: string): void {
    this.userSub = this.usersService.getUserById(userId).subscribe({
      next: (data) => {
        this.user = data;
        console.log('User data:', this.user);

        if (this.user?.owned?.length) {
          for (const item of this.user.owned) {
            this.nftSub = this.nftService.getNftById(item.nft_id).subscribe({
              next: (nftData) => {
                this.ownedNfts.push(nftData); 
                console.log('NFT data:', this.ownedNfts);
              },
              error: (err) => {
                console.error(`Error fetching NFT ${item.nft_id}:`, err);
              }
            });
          } 
        } else {
          console.log('No NFTs created by this user.');
        }
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }


  toogleActive(index: number): void {
    this.variableService.currentSlideIndex = index;
    console.log(this.variableService.currentSlideIndex)
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
    this.nftSub?.unsubscribe();
  }

}
