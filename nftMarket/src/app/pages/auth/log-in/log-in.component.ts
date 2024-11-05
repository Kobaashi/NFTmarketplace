import { Component } from '@angular/core';
import {FirstUppercasePipe} from "../../../shared/pipe/first-uppercase.pipe";
import {FooterComponent} from "../../../components/footer/footer.component";
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NavMenuComponent} from "../../../components/nav-menu/nav-menu.component";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    FirstUppercasePipe,
    FooterComponent,
    FormsModule,
    NavMenuComponent,
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  user: string = "/icons/UserGray.svg";
  email: string = "/icons/messageGray.svg";
  pasword: string = "/icons/LockKeyGray.svg";
  bg: string = "/img/authImage.png";

  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, this.customeEmailValidator]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8) ]),
  });

  successMessage: string = '';

  getError(control: AbstractControl): string {
    if (control.errors?.['required'] && control.touched) {
      return 'Ви нічого не ввели!';
    } else if (control.errors?.['emailError'] && control.touched) {
      return 'Будь ласка введіть правильну пошту!';
    } else if (control.errors?.['minlength'] && control.touched) {
      return `Пароль повинен містити щонайменше ${control.errors['minlength'].requiredLength} символів!`;
    } else if (control.errors?.['maxlength'] && control.touched) {
      return `Пароль не повинен перевищувати ${control.errors['maxlength'].requiredLength} символів!`;
    } else {
      return '';
    }
  }


  customeEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        emailError: true
      };
    else return null;
  }

  submitForm():void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.successMessage = 'Вхід успішний!';

      setTimeout(() => {
        this.form.reset();
        this.successMessage = '';
      }, 3000);
    }
  }

  constructor() { }
}
