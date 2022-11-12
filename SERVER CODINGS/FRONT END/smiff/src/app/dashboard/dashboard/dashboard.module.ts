import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainboardComponent } from '../mainboard/mainboard.component';
import { UserComponent } from 'src/app/user/user.component';
import { PetrolmanageComponent } from '../petrolmanage/petrolmanage.component';
import { UsermanageComponent } from '../usermanage/usermanage.component';


@NgModule({
  declarations: [
    MainboardComponent,
    UsermanageComponent,
    PetrolmanageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
