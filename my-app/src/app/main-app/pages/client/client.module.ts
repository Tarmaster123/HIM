import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ClientRoutes } from './client.routes';
import { ComponetsModule } from '../../componets/componets.module';
import { ClientLayoutComponent } from '../../layouts/client-layout/client-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    ClientLayoutComponent,
    HomePageComponent,
    RoomDetailComponent,
    TestComponent
  ],
  imports: [SharedModule, ComponetsModule, RouterModule.forChild(ClientRoutes.routes())],
  exports: [RouterModule]
})
export class ClientModule { }
