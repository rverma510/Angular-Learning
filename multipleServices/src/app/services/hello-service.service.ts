import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private http:HttpClient) { }
  
  public helloService(): any{
    return this.http.get("http://test-routes.herokuapp.com/test/hello");
  }
}
