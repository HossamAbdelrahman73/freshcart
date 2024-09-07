import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private readonly _HttpClient:HttpClient) { };

  cartNum:BehaviorSubject<number> = new BehaviorSubject(0)


  addToCart(id:string):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`, {
      "productId": id,
    },
  );
  };

  getUserCart():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`,);
  };

  removeSpecificProduct(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`,)
  };

  productQuantity(id:string, newCount:number):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`, 
      {
        "count": newCount,
      },
    )
  };


  clearCart():Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`,)
  }
}
