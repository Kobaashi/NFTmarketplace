import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nft } from '../interface/nft.interface';

@Injectable({
  providedIn: 'root',

})
export class NFTService {
  private nftURL: string = "http://localhost:3000/nft"


  constructor(private http: HttpClient) { }
    fetchNFts():  Observable<any[]> {
      return this.http.get<any[]>(this.nftURL)
    }

    getNftById(id: string): Observable<Nft> {
      return this.http.get<Nft>(`${this.nftURL}/${id}`);
    }

    getNftByName(name: string): Observable<Nft[]> {
      return this.http.get<Nft[]>(`${this.nftURL}/name/${name}`);
    }

     getNftByCollesction(collections: string): Observable<Nft> {
      return this.http.get<Nft>(`${this.nftURL}/collection/${collections}`);
    }

    getNftByCategories(categories: string): Observable<Nft> {
      return this.http.get<Nft>(`${this.nftURL}/categories/${categories}`);
    }

  }
