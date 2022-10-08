import { Routes } from '@angular/router';
import { ClientLayoutComponent } from '../../layouts/client-layout/client-layout.component';

export class ClientRoutes {
  public static routes(): Routes {
    return [
      {
        path: 'user',
        component: ClientLayoutComponent,
        children: [
          {
            path: 'room-detail',
            loadComponent: () => import('./room-detail/room-detail.component').then((c) => c.RoomDetailComponent)
          },
        ],
      },
    ];
  }
}
