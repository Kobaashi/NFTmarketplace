import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class UsersService {
  private nftURL: string = "http://localhost:5000/nft"

  constructor(private http: HttpClient) { }
    fetchNFts():  Observable<any[]> {
      return this.http.get<any[]>(this.nftURL)
    }
  }
