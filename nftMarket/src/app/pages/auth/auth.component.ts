import {Component, Input} from '@angular/core';
import {NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {FirstUppercasePipe} from '../../shared/pipe/first-uppercase.pipe';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NavMenuComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule,
    FirstUppercasePipe,
    RouterLink,
    RouterLinkActive,
    NgClass,
    RouterOutlet
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  user: string = "/icons/UserGray.svg";
  Email: string = "/icons/messageGray.svg";
  Password: string = "/icons/LockKeyGray.svg";
  bg: string = "/img/authImage.png";

  password: string = '';
  confirmPassword: string = '';

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  registerForm: FormGroup;

  // registerForm = new FormGroup({
  //   email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8), Validators.pattern(this.emailRegex)]),
  //   // password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
  //   username: new FormControl("", [Validators.required, Validators.maxLength(32)]),
  //   // confirmPassword: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
  // })

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
