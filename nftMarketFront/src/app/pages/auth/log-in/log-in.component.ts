import { Component } from '@angular/core';
import {FirstUppercasePipe} from "../../../shared/pipe/first-uppercase.pipe";
import {FooterComponent} from "../../../components/footer/footer.component";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NavMenuComponent} from "../../../components/nav-menu/nav-menu.component";
import {NgClass, NgIf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../../shared/service/variable.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    FirstUppercasePipe,
    FooterComponent,
    FormsModule,
    NavMenuComponent,
    NgClass,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  password: string = '';
  confirmPassword: string = '';

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  registerForm: FormGroup;

  constructor(private fb: FormBuilder, protected variableService: VariableService) {
    this.registerForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8), Validators.pattern(this.emailRegex)]),
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
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

  ngOnInit():void  {

  }

}
