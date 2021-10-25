export class Product {
id:number;
name:string;
description:string;
price:number;
imageUrl:string;

constructor(id=0,name='',description='',price=0,imageUrl='https://m.media-amazon.com/images/I/81wkmS595sL._AC_SS450_.jpg'){
this.id=id
this.name=name
this.description=description
this.price=price
this.imageUrl=imageUrl
}
}
