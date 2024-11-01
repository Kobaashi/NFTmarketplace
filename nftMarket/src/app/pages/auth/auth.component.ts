import { Component } from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  user: string = "/icons/UserGray.svg";
  email: string = "/icons/messageGray.svg";
  password: string = "/icons/LockKeyGray.svg";
  bg: string = "/img/authImage.png";

}
