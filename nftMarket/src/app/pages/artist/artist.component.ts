import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  bg: string = "/img/tower.png";
  ava: string = "/icons/Avatar.svg";
  plus: string = "/icons/Plus.svg";
  copy: string = "/icons/Copy.svg";
  globe: string = "/icons/Globe.svg";
  diskord: string = "/icons/DiscordLogo.svg";
  youtube: string = "/icons/YoutubeLogo.svg";
  twitter: string = "/icons/TwitterLogo.svg";
  instagram: string = "/icons/InstagramLogo.svg";

  NFTS = [
    {
      img: "/img/DistantGalaxy.png",
      name: "Distant Galaxy",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/LifeOnEdena.png",
      name: "life on edena",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/AstroFiction.png",
      name: "astroFcition",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/criptocity.png",
      name: "cryptuCity",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/colorfulDog0524.png",
      name: "colorfulDog 0524",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/SpaceTales.png",
      name: "Space Tales",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/CherryBlossomGirl037.png",
      name: "cherry blossom girl 037",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0987.png",
      name: "dancing robot 0987",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/IceCreamApe.png",
      name: "ice cream ape",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
  ]

}
