import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from '../partners/partners.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
   {
        path: '',
        pathMatch: 'full',
        component: PartnersComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartnersComponent]
})
export class PartnersModule { }
