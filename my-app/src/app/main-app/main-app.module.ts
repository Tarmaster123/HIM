import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({

  imports: [PagesModule, HttpClientModule],
  exports: [PagesModule],
  declarations: [],
})
export class MainAppModule { }
