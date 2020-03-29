import { Component } from '@angular/core';
import { ProductDataService } from './services/product-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public products:any;
  public id1:number;
  public name1:string;
  public description1:string;
  public price1:number;

  public id2:number;
  public name2:string;
  public price2:number;

  public id3:number;

  public id4:number;

  public createResponse:any;
  public updateResponse:any;
  public getProductResponse:any;
  public deleteResponse:any;

  constructor(private service:ProductDataService){ }

  ngOnInit(){
    this.service.getProduct().subscribe(res=>{
      this.products = res
    });
  }

  public getProductById(id:number){
    this.service.getProductById(id).subscribe(res=>{
      this.getProductResponse = res
    });
  }

  public createProduct(product:any){
    this.service.create(product).subscribe(res=>{
      this.createResponse = res
    });
  }

  public updateProduct(product:any){
    this.service.update(product).subscribe(res=>{
      this.updateResponse = res
    });
  }

  public deleteProduct(id:number){
    this.service.delete(id).subscribe(res=>{
      this.deleteResponse = res
    });
  }

}
