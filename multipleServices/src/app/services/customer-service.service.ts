import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }
  
  public getCustomers(): any{
    return this.http.get("https://www.w3schools.com/angular/customers.php");
  }
}
