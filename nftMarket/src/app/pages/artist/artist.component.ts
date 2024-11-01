import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    NavMenuComponent
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

}
