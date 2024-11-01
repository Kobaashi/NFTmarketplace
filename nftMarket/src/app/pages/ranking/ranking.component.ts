import { Component } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {CurrencyPipe, formatCurrency} from '@angular/common';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    FirstUppercasePipe,
    CurrencyPipe
  ],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {

  active: boolean = true;

  toogleActive() {
    this.active = !this.active;
  }

  artists = [
    {
      id: 1,
      ava: "/icons/Jaydon.svg",
      fullname: "jaydon ekstorm bothman",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 2,
      ava: "/icons/Ruben.svg",
      fullname: "ruben carder",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 3,
      ava: "/icons/Alfredo.svg",
      fullname: "alfredo septimus",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 4,
      ava: "/icons/Davis.svg",
      fullname: "davis franci",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 5,
      ava: "/icons/Livia.svg",
      fullname: "livia rosser",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 6,
      ava: "/icons/Kianna.svg",
      fullname: "kianna donin",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 7,
      ava: "/icons/Phillip.svg",
      fullname: "Phillip Lipshutz",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 8,
      ava: "/icons/Maria.svg",
      fullname: "Maria Rosser",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 9,
      ava: "/icons/Stanton.svg",
      fullname: "Kianna Stanton",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 10,
      ava: "/icons/Angel.svg",
      fullname: "angel lubin",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 11,
      ava: "/icons/Allison.svg",
      fullname: "allison torff",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 12,
      ava: "/icons/Davis.svg",
      fullname: "davis workman",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 13,
      ava: "/icons/Lindsey.svg",
      fullname: "Lindsey Lipshutz",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 14,
      ava: "/icons/Randy.svg",
      fullname: "randy carder",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 15,
      ava: "/icons/Lydia.svg",
      fullname: "lydia culhane",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 16,
      ava: "/icons/Rayna.svg",
      fullname: "rayna bator",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 17,
      ava: "/icons/Jocelyn.svg",
      fullname: "jocelyn westervelt",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 18,
      ava: "/icons/Jaydon.svg",
      fullname: "marilyn torff",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 19,
      ava: "/icons/Angel.svg",
      fullname: "skylar levin",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 20,
      ava: "/icons/Alfredo.svg",
      fullname: "terry dorwart",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
  ]
}
