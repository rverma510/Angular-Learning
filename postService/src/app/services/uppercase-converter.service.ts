import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UppercaseConverterService {

  constructor(private http:HttpClient) { }
  
  public convertToUppercase(obj): any{
    return this.http.post('http://test-routes.herokuapp.com/test/uppercase', obj);
  }
}
