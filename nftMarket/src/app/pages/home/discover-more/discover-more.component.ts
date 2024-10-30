import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';

@Component({
  selector: 'app-discover-more',
  standalone: true,
  imports: [
    FirstUppercasePipe
  ],
  templateUrl: './discover-more.component.html',
  styleUrl: './discover-more.component.scss'
})
export class DiscoverMoreComponent {

  eye: string = "/icons/Eye.svg";

    nfts = [
      {
        image: "/img/DistantGalaxy.png",
        name: "distant galaxy",
        authorAva: "/icons/Rayna.svg",
        authorName: "MoonDancer",
        price: 1.63,
        highestBid: 0.33,
      },
      {
        image: "/img/LifeOnEdena.png",
        name: "life on edena",
        authorAva: "/icons/Angel.svg",
        authorName: "NebulaKid",
        price: 1.63,
        highestBid: 0.33,
      },
      {
        image: "/img/AstroFiction.png",
        name: "astroFiction",
        authorAva: "/icons/Lydia.svg",
        authorName: "Spaceone",
        price: 1.63,
        highestBid: 0.33,
      },
    ]
}
