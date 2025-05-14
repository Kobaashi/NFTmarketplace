import {Component, HostListener, OnDestroy} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {VariableService} from '../../../shared/service/variable.service';
import {ArrayObjectService} from '../../../shared/service/array-object.service';
import {UsersService} from '../../../shared/service/users.service';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topcreators',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        RouterLinkActive,
        FirstUppercasePipe
    ],
  templateUrl: './topcreators.component.html',
  styleUrl: './topcreators.component.scss'
})
export class TopcreatorsComponent implements OnDestroy {

  private userSub?: Subscription
  creators: any[] = [];

  constructor(
    private usersService: UsersService,
    protected variableService: VariableService) {
  }

  ngOnInit() {
    this.checkScreenSize();
    this.getUsers();
  }

  getUsers(): void {
    this.userSub = this.usersService.getUsers().subscribe(data => {
      this.creators = data.slice(0, 12);
      console.log('Дані з API:', data);
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.variableService.isMobile = window.innerWidth <= 768;
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

}
