import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from '../../services/hello-service.service';
import { CustomerServiceService } from '../../services/customer-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.css']
})
export class MultipleServicesComponent implements OnInit {

  public res1: any;
  public res2: any;

  constructor(private hello:HelloServiceService, private customer:CustomerServiceService) { }

  ngOnInit(): void {
    forkJoin([this.hello.helloService(), this.customer.getCustomers()])
      .subscribe(Response => {
        this.res1 = Response[0],
          this.res2 = Response[1];
      });
  }

}
