import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
