import { Component, OnInit } from '@angular/core';
import { UppercaseConverterService } from "../../services/uppercase-converter.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})
export class UppercaseConverterComponent implements OnInit {

  result: any;
  my_message: any;

  constructor(private _service:UppercaseConverterService) { }

  ngOnInit(): void {
  }

  public convert(obj): any{
    return this._service.convertToUppercase(obj).subscribe(
      res => this.result = res,
      (err: HttpErrorResponse) => console.log(err)
    );
  }

}
