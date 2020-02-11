import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesService } from './services/countries.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
