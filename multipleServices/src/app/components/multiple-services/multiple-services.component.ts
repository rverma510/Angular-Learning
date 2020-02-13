import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from '../../services/hello-service.service';
import { CustomerServiceService } from '../../services/customer-service.service';

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
    this.hello.helloService().subscribe(res => this.res1 = res);
    this.customer.getCustomers().subscribe(res => this.res2 = res);
  }

}
