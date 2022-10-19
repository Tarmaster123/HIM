import { Routes } from '@angular/router';
import { ClientLayoutComponent } from '../../layouts/client-layout/client-layout.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

export class ClientRoutes {
  public static routes(): Routes {
    return [
      {
        path: 'user',
        component: ClientLayoutComponent,
        children: [
          {
            path: 'room-detail',
            component: RoomDetailComponent,
            //ใช้แบบนี้น่ะเพื่อน 
          },
          {
            path: 'test',
            loadComponent: () => import('./test/test.component').then((c) => c.TestComponent)
          }
        ],
      },
    ];
  }
}
