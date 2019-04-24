import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColegiosModalPage } from './colegios-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ColegiosModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColegiosModalPage]
})
export class ColegiosModalPageModule {}
