import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  url:string = "http://localhost:8080/api/products/";

  constructor(private httpClient:HttpClient) { }

  public getProduct():any{
    return this.httpClient.get(this.url);
  }

  public create(product):any{
    return this.httpClient.post(this.url, product);
  }

  public update(product):any{
    return this.httpClient.put(this.url, product);
  }

  public delete(id:number):any{
    return this.httpClient.delete(this.url+id);
  }

}
