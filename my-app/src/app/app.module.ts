import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainAppModule } from './main-app/main-app.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [BrowserModule, CommonModule, MainAppModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
