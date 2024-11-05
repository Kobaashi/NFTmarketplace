import { Component } from '@angular/core';
import {FirstUppercasePipe} from "../../../shared/pipe/first-uppercase.pipe";
import {FooterComponent} from "../../../components/footer/footer.component";
import {AbstractControl, FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {NavMenuComponent} from "../../../components/nav-menu/nav-menu.component";

@Component({
  selector: 'app-log-in',
  standalone: true,
    imports: [
        FirstUppercasePipe,
        FooterComponent,
        FormsModule,
        NavMenuComponent
    ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  user: string = "/icons/UserGray.svg";
  email: string = "/icons/messageGray.svg";
  pasword: string = "/icons/LockKeyGray.svg";
  bg: string = "/img/authImage.png";
  password : string = "";
  Email: string = "";

  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, this.customeEmailValidator]),
    username: new FormControl("", [Validators.required]),
  });

  successMessage: string = '';

  getError(control:any) : string {
    if(control.errors?.required && control.touched)
      return 'Ви нічого не ввели!';
    else if(control.errors?.emailError && control.touched)
      return 'Будь ласка введіть правильну пошту!';
    else return '';
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
      this.successMessage = 'Форма відправлена успішно!';

      setTimeout(() => {
        this.form.reset();
        this.successMessage = '';
      }, 3000);
    }
  }

  constructor() { }
}
