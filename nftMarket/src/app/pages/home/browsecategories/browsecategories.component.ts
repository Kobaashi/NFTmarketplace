import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';

@Component({
  selector: 'app-browsecategories',
  standalone: true,
  imports: [
    FirstUppercasePipe
  ],
  templateUrl: './browsecategories.component.html',
  styleUrl: './browsecategories.component.scss'
})
export class BrowsecategoriesComponent {
      categories = [
        {
          icon: "/icons/PaintBrush.svg",
          image: "/img/art.png",
          name: "art"
        },
        {
          icon: "/icons/Swatches.svg",
          image: "/img/IceCreamApe.png",
          name: "collectibles"
        },
        {
          icon: "/icons/MusicNotes.svg",
          image: "/img/music.png",
          name: "music"
        },
        {
          icon: "/icons/Camera.svg",
          image: "/img/photography.png",
          name: "photography"
        },
        {
          icon: "/icons/VideoCamera.svg",
          image: "/img/LifeOnEdena.png",
          name: "video"
        },
        {
          icon: "/icons/MagicWand.svg",
          image: "/img/utility.png",
          name: "utility"
        },
        {
          icon: "/icons/Basketball.svg",
          image: "/img/sport.png",
          name: "sport"
        },
        {
          icon: "/icons/Planet.svg",
          image: "/img/virtualworld.png",
          name: "virtual worlds"
        },
      ]
}
