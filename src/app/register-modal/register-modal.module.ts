import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterModalPage } from './register-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [RegisterModalPage],
  entryComponents:[RegisterModalPage]
})
export class RegisterModalPageModule {}
