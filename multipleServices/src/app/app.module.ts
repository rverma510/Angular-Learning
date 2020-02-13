import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultipleServicesComponent } from './components/multiple-services/multiple-services.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
