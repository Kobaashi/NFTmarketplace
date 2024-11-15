import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ArrayObjectService} from '../../../shared/service/array-object.service';
import {VariableService} from '../../../shared/service/variable.service';

@Component({
  selector: 'app-discover-more',
  standalone: true,
    imports: [
        FirstUppercasePipe,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './discover-more.component.html',
  styleUrl: './discover-more.component.scss'
})
export class DiscoverMoreComponent {

  nfts: any[] = [];

  constructor( private arrayObjectService: ArrayObjectService, protected variableService: VariableService ) {
  }

  ngOnInit(): void {
    this.getArray();
  }

  getArray(): void {
    this.nfts = this.arrayObjectService.nfts;
  }

}
