import {Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {isPlatformBrowser, UpperCasePipe} from '@angular/common';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../shared/service/variable.service';
import {ArrayObjectService} from '../../shared/service/array-object.service';

@Component({
  selector: 'app-nft',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    UpperCasePipe,
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nft.component.html',
  styleUrl: './nft.component.scss'
})
export class NftComponent {

  NFTs: any[] = [];
  tags: any[] = [];

  @Input() countdownTime: number = 86400;
  remainingTime: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private arrayObjectService: ArrayObjectService ,protected variableService: VariableService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startCountdown();
    }
    this.getArray();
  }

  getArray():void {
    this.NFTs = this.arrayObjectService.NFTsN;
    this.tags = this.arrayObjectService.tags;
  }

  startCountdown() {
    this.remainingTime = this.countdownTime;
    this.updateTimeUnits();

    this.intervalId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateTimeUnits();
      } else {
        this.stopCountdown();
        setTimeout(() => {
          this.startCountdown();
        });
      }
    }, 1000);
  }

  updateTimeUnits() {
    this.hours = Math.floor(this.remainingTime / 3600);
    this.minutes = Math.floor((this.remainingTime % 3600) / 60);
    this.seconds = this.remainingTime % 60;
  }

  stopCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy(): void {
    this.stopCountdown();
  }
}
