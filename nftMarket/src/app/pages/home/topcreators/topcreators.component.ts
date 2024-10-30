import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-topcreators',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './topcreators.component.html',
  styleUrl: './topcreators.component.scss'
})
export class TopcreatorsComponent {

  rocket: string = "/icons/RocketPurple.svg";

  creators = [
    {
      id: 1,
      ava: "/icons/Jaydon.svg",
      name: "Keepitreal",
      total: 34.53
    },
    {
      id: 2,
      ava: "/icons/Ruben.svg",
      name: "DigiLab",
      total: 34.53
    },
    {
      id: 3,
      ava: "/icons/Alfredo.svg",
      name: "GravityOne",
      total: 34.53
    },
    {
      id: 4,
      ava: "/icons/Davis.svg",
      name: "Juanie",
      total: 34.53
    },
    {
      id: 5,
      ava: "/icons/Livia.svg",
      name: "BlueWhale",
      total: 34.53
    },
    {
      id: 6,
      ava: "/img/fox.png",
      name: "Mr Fox",
      total: 34.53
    },
    {
      id: 7,
      ava: "/icons/Phillip.svg",
      name: "Shroomie",
      total: 34.53
    },
    {
      id: 8,
      ava: "/icons/Maria.svg",
      name: "Robotica",
      total: 34.53
    },
    {
      id: 9,
      ava: "/icons/Stanton.svg",
      name: "RustyRobot",
      total: 34.53
    },
    {
      id: 10,
      ava: "/icons/Avatar.svg",
      name: "Animakid",
      total: 34.53
    },
    {
      id: 11,
      ava: "/icons/Lydia.svg",
      name: "Dotgu",
      total: 34.53
    },
    {
      id: 12,
      ava: "/icons/Jocelyn.svg",
      name: "Ghiblier",
      total: 34.53
    },
  ]
}
