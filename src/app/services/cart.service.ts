import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getCartItems(): Observable <CartItem[]>{
    //Todo: mapping the obtained result to our cartItems prop . ((pipe()) and Map())
    return this.http.get<CartItem[]>(cartUrl);

  }
  addProductToCart(product: Product):Observable<any>{
    return this.http.post(cartUrl,{product});   
  }
}
