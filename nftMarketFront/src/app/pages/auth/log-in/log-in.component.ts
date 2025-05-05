import { Component } from '@angular/core';
import { FirstUppercasePipe } from "../../../shared/pipe/first-uppercase.pipe";
import { FooterComponent } from "../../../components/footer/footer.component";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { NavMenuComponent } from "../../../components/nav-menu/nav-menu.component";
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VariableService } from '../../../shared/service/variable.service';
import { AuthService } from '../../../shared/service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BadRequestException } from "@nestjs/common";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    FirstUppercasePipe,
    FooterComponent,
    NavMenuComponent,
    NgClass,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  loginForm: FormGroup;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    protected variableService: VariableService
  ) {
      this.loginForm = this.fb.group({
        email: new FormControl('', [
          Validators.required,
          Validators.maxLength(32),
          Validators.minLength(8),
          Validators.pattern(this.emailRegex)
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32)
        ])
      })      
    };

  getControl(name: string): AbstractControl | null {
    return this.loginForm.get(name);
  }

  passwordsMatch(): void {
    const password = this.loginForm.get('password')?.value;
  }

  async loginFn() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    try {
      const response = await this.authService.login({ email, password }).toPromise();
      console.log('Login response:', response);
  
      if (response?.message === 'Login successful') {
        console.log('Login successful!');
      } else {
        console.warn('Unexpected response:', response);
      }
    } catch (error: any) {
      console.error('Login failed:', error?.error?.message || error);
    }
  }
  
  
  
  ngOnInit(): void {
  }
}
