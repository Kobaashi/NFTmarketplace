import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user.ineterface';
import { RegisterResponse } from '../interface/registerresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private jwtUserUrl = 'http://localhost:3000/auth/user-token';

  constructor(private http: HttpClient) { }

  register(userData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/auth/register`, userData);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials, { withCredentials: true });
  }

  
  findUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${email}`);
  }

  getUserByJwt(): Observable<User> {
    return this.http.get<User>(this.jwtUserUrl, { withCredentials: true });
  }

  setUser(user: User) {
  }


}
