import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../services/countries.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public data: any;

  constructor(private service:CountriesService) { }

  ngOnInit(): void {
    this.service.getCountries().subscribe(res =>{
      this.data = res;
      // console.log(res);
    }
    );
  }

}
