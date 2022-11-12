import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { MainboardComponent } from '../mainboard/mainboard.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent,children:[
      {
        path:'',component:MainboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
