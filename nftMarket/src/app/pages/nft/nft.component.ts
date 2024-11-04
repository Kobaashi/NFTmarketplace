import {Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {isPlatformBrowser, UpperCasePipe} from '@angular/common';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';

@Component({
  selector: 'app-nft',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    UpperCasePipe,
    FirstUppercasePipe
  ],
  templateUrl: './nft.component.html',
  styleUrl: './nft.component.scss'
})
export class NftComponent {
    orbitaions: string = "/img/Orbitations.png";
    ava: string = '/icons/Stanton.svg';
    globe: string = '/icons/Globe.svg';
    arrowR: string = "/icons/ArrowRight.svg";

    tags = [
      {
        name: "animation"
      },
      {
        name: "illustration"
      },
      {
        name: "moon"
      },
    ]

  NFTs = [
    {
      img: "/img/fox.png",
      name: "foxy life",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Cat.png",
      name: "cat from future",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Dog.png",
      name: "psycho dog",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },


    {
      img: "/img/Bear.png",
      name: "design bear",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0375.png",
      name: "dancing robot 0375",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0356.png",
      name: "dancing robot 0356",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0312.png",
      name: "dancing robot 0321",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0512.png",
      name: "dancing robot 0512",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0024.png",
      name: "dancing robot 0024",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
  ]


  @Input() countdownTime: number = 30600;
  remainingTime: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startCountdown();
    }
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
