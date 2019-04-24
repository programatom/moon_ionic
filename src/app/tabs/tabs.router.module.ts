import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'hotel-selection',
        children: [
          {
            path: '',
            loadChildren: '../hotel-selection/hotel-selection.module#HotelSelectionPageModule'
          }
        ]
      },
      {
        path: 'excursiones',
        children: [
          {
            path: '',
            loadChildren: '../excursiones/excursiones.module#ExcursionesPageModule'
          }
        ]
      },
      {
        path: 'fiestas',
        children: [
          {
            path: '',
            loadChildren: '../fiestas/fiestas.module#FiestasPageModule'
          }
        ]
      },
      {
        path: 'contacto',
        children: [
          {
            path: '',
            loadChildren: '../contacto/contacto.module#ContactoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
