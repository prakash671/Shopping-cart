import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Product} from '../models/product'
import { productUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    //TODO: populate products from an API and an return an Observable
    return this.http.get<Product[]>(productUrl);
  }
}
