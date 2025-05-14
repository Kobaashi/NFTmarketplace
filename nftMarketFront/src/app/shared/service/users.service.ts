import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user.ineterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',

})
export class UsersService {
  private nftURL: string = "http://localhost:3000/users";
  private userIdUrl = 'http://localhost:3000/users/id';

  constructor(private http: HttpClient) { }
    getUsers():  Observable<any[]> {
      return this.http.get<any[]>(this.nftURL)
    }

    getUserById(userId: string): Observable<User> {
      return this.http.get<User>(`${this.userIdUrl}/${userId}`);
    }
    
  }
