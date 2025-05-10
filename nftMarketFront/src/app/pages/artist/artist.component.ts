import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {ArrayObjectService} from '../../shared/service/array-object.service';
import {VariableService} from '../../shared/service/variable.service';
import {NgClass} from '@angular/common';
import { UsersService } from '../../shared/service/users.service';
import { User } from '../../shared/interface/user.inetrface';

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
export class ArtistComponent {

  user: User | null = null;
  createdNfts: any[] = [];
  NFTS: any[] = [];
  Tabs: any[] = [];

  constructor(  
    private route: ActivatedRoute,
    private readonly usersService: UsersService,
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
    }
    if (this.user?.created) {
      this.user.created.forEach(item => {
        this.nftService.getNftById(item.nft_id).subscribe(nftData => {
          this.createdNfts.push(nftData);
        });
      });
    }
  }

  getArray(): void {
    this.NFTS = this.arrayObjectService.NFTS;
    this.Tabs = this.arrayObjectService.Tabs;
  }

  getUserById(userId: string): void {
    this.usersService.getUserById(userId).subscribe({
      next: (data) => {
        this.user = data;
        console.log('User data:', this.user);
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }

  toogleActive(index: number): void {
    this.variableService.currentSlideIndex = index;
  }

}
