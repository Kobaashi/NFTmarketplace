import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {ArrayObjectService} from '../../../shared/service/array-object.service';

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

  guides: any[] = [];

  constructor(private arrayObjectService: ArrayObjectService) {
  }

  ngOnInit(): void {
    this.getArray();
  }

  getArray(): void {
    this.guides = this.arrayObjectService.guides;
  }

}
