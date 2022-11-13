import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainboardComponent } from '../mainboard/mainboard.component';
import { UserComponent } from 'src/app/user/user.component';
import { PetrolmanageComponent } from '../petrolmanage/petrolmanage.component';
import { UsermanageComponent } from '../usermanage/usermanage.component';
import { AddpetrolComponent } from '../addpetrol/addpetrol.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainboardComponent,
    UsermanageComponent,
    PetrolmanageComponent,
    AddpetrolComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
