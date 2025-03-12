import { Component } from '@angular/core';
import {FirstUppercasePipe} from "../../../shared/pipe/first-uppercase.pipe";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ArrayObjectService} from '../../../shared/service/array-object.service';
import {VariableService} from '../../../shared/service/variable.service';

@Component({
  selector: 'app-today',
  standalone: true,
    imports: [
        FirstUppercasePipe,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent {

  artists: any[] = [];

  constructor(private arrayObjectService: ArrayObjectService) {
  }

  ngOnInit():void {
    this.getArray()
  }

  getArray():void {
    this.artists = this.arrayObjectService.artists;
  }

}
