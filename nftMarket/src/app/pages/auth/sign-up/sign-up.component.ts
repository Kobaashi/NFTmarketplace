import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {FooterComponent} from '../../../components/footer/footer.component';
import {NavMenuComponent} from '../../../components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FirstUppercasePipe,
    FooterComponent,
    NavMenuComponent,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  user: string = "/icons/UserGray.svg";
  Email: string = "/icons/messageGray.svg";
  Password: string = "/icons/LockKeyGray.svg";
  bg: string = "/img/authImage.png";

  password: string = '';
  confirmPassword: string = '';

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8), Validators.pattern(this.emailRegex)]),
      username: new FormControl("", [Validators.required, Validators.maxLength(32)]),
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  getControl(name: any) : AbstractControl | null {
    return this.registerForm.get(name)
  }

  passwordsMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }

  registerFn() {
    console.log(this.registerForm.value)
  }

}
