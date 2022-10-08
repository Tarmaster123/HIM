import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [FooterComponent, NavBarComponent]
})
export class ComponetsModule { }
