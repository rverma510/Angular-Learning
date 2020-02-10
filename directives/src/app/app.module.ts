import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
