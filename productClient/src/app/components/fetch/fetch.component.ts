import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service'

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  public id:number;
  public fetchResponse:any;

  constructor(private service:ProductDataService) { }

  ngOnInit(): void {
  }

  public fetchProduct(id:number){
    this.service.getProductById(id).subscribe(res=>{
      this.fetchResponse = res
    });
  }

}
