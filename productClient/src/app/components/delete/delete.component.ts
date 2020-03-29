import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public id:number;
  public deleteResponse:any;

  constructor(private service:ProductDataService) { }

  ngOnInit(): void {
  }

  public deleteProduct(id:number){
    this.service.delete(id).subscribe(res=>{
      this.deleteResponse = res
    });
  }

}
