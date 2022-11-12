import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/app/user/user.component';
import { DashboardComponent } from '../dashboard.component';
import { MainboardComponent } from '../mainboard/mainboard.component';
import { PetrolmanageComponent } from '../petrolmanage/petrolmanage.component';
import { UsermanageComponent } from '../usermanage/usermanage.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent,children:[
      {
        path:'overview',component:MainboardComponent
      },
      {
        path:'user',component:UsermanageComponent
      },
      {
        path:'petrol',component:PetrolmanageComponent
      },
      {
        path:'',redirectTo:'overview',pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
