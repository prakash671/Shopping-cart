import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[
    // {id:1,productId:1,quantity:4,productName:'Test1', price:100},
    // {id:2,productId:2,quantity:4,productName:'Test2',price:100},
    // {id:3,productId:4,quantity:4,productName:'Test3',price:100},
    // {id:4,productId:7,quantity:4,productName:'Test4',price:100},
    // {id:5,productId:8,quantity:4,productName:'Test5',price:100}, 

  ];
  cartTotal=0
  constructor(private msg:MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product:Product)=>{   this.addProductToCart(product) })
               
  }
  addProductToCart(product:Product){

    
   let productExists= false
   for(let i in this.cartItems)
     {
       if (this.cartItems[i].productID === product.id ) {
       this.cartItems[i].quantity++
       productExists = true
       break;
       }
      }

       if(!productExists)
       {
        this.cartItems.push({
                productID:product.id,
                productName:product.name,
                quantity:1,
                price:product.price
              })
       }  
  this.cartTotal = 0
  this.cartItems.forEach(item=>{
    this.cartTotal+=(item.quantity * item.price) })
}
}

