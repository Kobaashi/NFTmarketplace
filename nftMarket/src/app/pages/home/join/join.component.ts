import { Component } from '@angular/core';
import {FirstUppercasePipe} from '../../../shared/pipe/first-uppercase.pipe';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    FirstUppercasePipe,
    ReactiveFormsModule
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
    actronavt: string = "/img/astronavt.png";
    message: string = "/icons/message.svg";
    successMessage: string = '';

  form:FormGroup =new FormGroup({
    email:new FormControl("",[Validators.required,this.customeEmailValidator])
  })

  getError(control:any) : string {
    if(control.errors?.required && control.touched)
      return 'Ви нічого не ввели!';
    else if(control.errors?.emailError && control.touched)
      return 'Будь ласка введіть правильну пошту!';
    else return '';
  }

  customeEmailValidator(control:AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if(!pattern.test(value) && control.touched)
      return {
        emailError:true
      }
    else return null;
  }

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.successMessage = 'Ви підписалися, очікуйте повідомлень!';

      setTimeout(() => {
        this.form.reset();
        this.successMessage = '';
      }, 3000);
    }
  }

  constructor() { }


}
