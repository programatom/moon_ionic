import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoonPalacePage } from './moon-palace.page';

const routes: Routes = [
  {
    path: '',
    component: MoonPalacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoonPalacePage]
})
export class MoonPalacePageModule {}
