import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject()
  sendMsg(product){
    
    this.subject.next(product)//trigerring an event
  }
  getMsg(){
    return this.subject.asObservable()
     
  }
  
  constructor() { }
}
