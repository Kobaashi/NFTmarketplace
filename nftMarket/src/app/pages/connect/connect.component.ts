import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavMenuComponent} from "../../components/nav-menu/nav-menu.component";
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [
    FooterComponent,
    NavMenuComponent,
    FirstUppercasePipe
  ],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {
  bg: string = "/img/authImage.png";

  wallets = [
    {
      name: "metamask",
      image: "/icons/Metamask.svg"
    },
    {
      name: "wallet connect",
      image: "/icons/WalletConnect.svg"
    },
    {
      name: "coinbase",
      image: "/icons/Coinbase.svg"
    },
  ]

}
