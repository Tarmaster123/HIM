import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './client/home-page/home-page.component';



@NgModule({
  imports: [
    AdminModule,
    ClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomePageComponent,
          pathMatch: 'full',
        },
      ],
      {
        scrollPositionRestoration: 'top',
      },
    ),
  ],
  exports: [RouterModule],
})
export class PagesModule { }
