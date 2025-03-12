import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {ArrayObjectService} from '../../../shared/service/array-object.service';

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

  categories: any[] = [];

  constructor(private arrayObjectService: ArrayObjectService) {
  }

  ngOnInit(): void {
    this.getArray();
  }

  getArray(): void {
    this.categories = this.arrayObjectService.categories;
  }

}
