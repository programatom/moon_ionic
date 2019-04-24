import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { BotonExcursionesFiestasComponent } from './boton-excursiones-fiestas/boton-excursiones-fiestas.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [BotonExcursionesFiestasComponent],
  exports: [BotonExcursionesFiestasComponent]
})
export class ComponentsModule {}
