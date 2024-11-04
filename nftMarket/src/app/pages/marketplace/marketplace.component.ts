import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [
    NavMenuComponent,
    FirstUppercasePipe,
    FooterComponent
  ],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})
export class MarketplaceComponent {

    search: string = "/icons/MagnifyingGlass.svg";

    NFTs = [
      {
        img: "/img/magicMushroom0325.png",
        name: "magic mushroom 0325",
        authorAva: "/icons/Phillip.svg",
        authorName: "Shroomie",
        price: 1.63,
        bid: 0.33
      },
      {
        img: "/img/HappyRobot032.png",
        name: "happy robot 032",
        authorAva: "/icons/Davis.svg",
        authorName: "BeKind2Robots",
        price: 1.63,
        bid: 0.33
      },
      {
        img: "/img/HappyRobot024.png",
        name: "happy robot 024",
        authorAva: "/icons/Davis.svg",
        authorName: "BeKind2Robots",
        price: 1.63,
        bid: 0.33
      },


      {
        img: "/img/Bear.png",
        name: "design bear",
        authorAva: "/icons/Kianna.svg",
        authorName: "mr fox",
        price: 1.63,
        bid: 0.33
      },
      {
        img: "/img/colorfulDog0356.png",
        name: "colorful dog 0356",
        authorAva: "/icons/Lydia.svg",
        authorName: "keepitreal",
        price: 1.63,
        bid: 0.33
      },
      {
        img: "/img/Robot0312.png",
        name: "dancing robot 0312",
        authorAva: "/icons/Maria.svg",
        authorName: "robotica",
        price: 1.63,
        bid: 0.33
      },


      {
        img: "/img/CherryBlossomGirl037.png",
        name: "cherry blossom girl 037",
        authorAva: "/icons/Rayna.svg",
        authorName: "moonDancer",
        price: 1.63,
        bid: 0.33
      },
      {
        img: "/img/SpaceTravel.png",
        name: "space travel",
        authorAva: "/icons/Angel.svg",
        authorName: "nebulaKid",
        price: 1.63,
        bid: 0.33
      },
      {
        img: "/img/SunsetDimension.png",
        name: "sunset dimension",
        authorAva: "/icons/Avatar.svg",
        authorName: "animakid",
        price: 1.63,
        bid: 0.33
      },


      {
        img: "/img/DesertWalk.png",
        name: "desert walk",
        authorAva: "/img/AstroFiction.png",
        authorName: "Catch 22",
        price: 1.63,
        bid: 0.33
      },
      {
        img: "/img/IceCreamApe.png",
        name: "ice cream ape 0324",
        authorAva: "/img/IceCreamApe.png",
        authorName: "ice ape club",
        price: 1.63,
        bid: 0.33
      },
      {
        img: "/img/ColorfulDog0344.png",
        name: "colorful dog 0344",
        authorAva: "/img/colorfulDog0356.png",
        authorName: "puppyPower",
        price: 1.63,
        bid: 0.33
      },
    ]
}
