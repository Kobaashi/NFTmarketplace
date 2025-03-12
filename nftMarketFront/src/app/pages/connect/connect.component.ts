import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavMenuComponent} from "../../components/nav-menu/nav-menu.component";
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {ArrayObjectService} from '../../shared/service/array-object.service';
import {VariableService} from '../../shared/service/variable.service';

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

  wallets: any[] = [];

  constructor(private arrayObjectService: ArrayObjectService, protected variableService: VariableService) {
  }

  ngOnInit(): void {
    this.getArray();
  }

  getArray(): void {
    this.wallets = this.arrayObjectService.wallets;
  }

}
