import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ArrayObjectService} from '../../shared/service/array-object.service';
import {VariableService} from '../../shared/service/variable.service';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {

  NFTS: any[] = [];

  constructor(  private arrayObjectService: ArrayObjectService, public variableService: VariableService) {
  }

  ngOnInit(): void {
    this.getArray(); // Викликаємо метод для отримання даних при ініціалізації
  }

  getArray(): void {
    this.NFTS = this.arrayObjectService.NFTS; // Отримуємо масив із сервісу
  }


}
