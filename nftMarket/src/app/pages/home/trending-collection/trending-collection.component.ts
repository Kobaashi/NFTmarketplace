import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../../shared/service/variable.service';

@Component({
  selector: 'app-trending-collection',
  standalone: true,
  imports: [
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './trending-collection.component.html',
  styleUrl: './trending-collection.component.scss'
})
export class TrendingCollectionComponent {

  constructor(protected variableService: VariableService) {
  }

  ngOnInit():void {
  }

}
