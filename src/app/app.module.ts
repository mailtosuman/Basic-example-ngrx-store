import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, counter } from './app.component';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({counter},{counter:0})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//