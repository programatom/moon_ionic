import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'portada-texto', loadChildren: './portada-texto/portada-texto.module#PortadaTextoPageModule' },
  { path: 'registration-form', loadChildren: './registration-form/registration-form.module#RegistrationFormPageModule' },
  { path: 'coles', loadChildren: './colegios-modal/colegios-modal.module#ColegiosModalPageModule' },
  { path: 'hotel-selection', loadChildren: './hotel-selection/hotel-selection.module#HotelSelectionPageModule' },
  { path: 'moon-palace', loadChildren: './moon-palace/moon-palace.module#MoonPalacePageModule' },
  { path: 'oasis', loadChildren: './oasis/oasis.module#OasisPageModule' },
  { path: 'notificaciones', loadChildren: './notificaciones/notificaciones.module#NotificacionesPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
