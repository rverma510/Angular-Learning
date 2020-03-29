import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public id:number;
  public name:string;
  public price:number;
  public updateResponse:any;

  constructor(private service:ProductDataService) { }

  ngOnInit(): void {
  }

  public updateProduct(product:any){
    this.service.update(product).subscribe(res=>{
      this.updateResponse = res
    });
  }

}
