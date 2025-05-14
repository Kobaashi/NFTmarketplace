import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../shared/service/users.service';
import { AuthService } from '../../shared/service/auth.service';
import { User } from '../../shared/interface/user.ineterface';
import { NFTService } from '../../shared/service/nft.service';
import { VariableService } from '../../shared/service/variable.service';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FirstUppercasePipe } from '../../shared/pipe/first-uppercase.pipe';
import { ActivatedRoute, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ArrayObjectService } from '../../shared/service/array-object.service';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  private userSub?: Subscription;
  private nftSub?: Subscription;
  noNFt: string = '';
  Tabs: any[] = [];
  user: User | null = null;
  createdNfts: any[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly nftService: NFTService,
    public readonly variableService: VariableService,
    private readonly arrayObjectService: ArrayObjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserByJwt();
    this.getArray();
  }

  getArray(): void {
    this.Tabs = this.arrayObjectService.Tabs;
  }

  getUserByJwt(): void {
    this.userSub = this.authService.getUserByJwt().subscribe({
      next: (user) => {
        this.user = user;
        console.log('Authenticated User:', this.user);

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
          this.noNFt = 'not a single nft was created'
        }
      },
      error: (err) => {
        console.error('Error fetching authenticated user:', err);
      }
    });
  }

  toogleActive(index: number): void {
    this.variableService.currentSlideIndex = index;
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
    this.nftSub?.unsubscribe();
  }

}
