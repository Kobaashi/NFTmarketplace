import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';

@Component({
  selector: 'app-how-work',
  standalone: true,
  imports: [
    FirstUppercasePipe
  ],
  templateUrl: './how-work.component.html',
  styleUrl: './how-work.component.scss'
})
export class HowWorkComponent {
    guides = [
      {
        image: "/icons/wallet.svg",
        title: "setup your wallet",
        description: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
      },
      {
        image: "/icons/collection.svg",
        title: "create collection",
        description: "Upload your work and setup your collection. Add a description, social links and floor price."
      },
      {
        image: "/icons/earning.svg",
        title: "start earning",
        description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
      },
    ]
}
