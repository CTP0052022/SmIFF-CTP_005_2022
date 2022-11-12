import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminallComponent } from './adminall/adminall.component';
import {  } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpetrolComponent } from './adminpetrol/adminpetrol.component';



const routes: Routes = [
  {path: 'Adminall',component:AdminallComponent },
  {path: 'adminall',component:AdminallComponent },
  {path: 'Login',component:LoginComponent },
  {path: 'login',component:LoginComponent },
  {path: 'Dashboard',component:DashboardComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'Adminpetrol',component:AdminpetrolComponent},
  {path: 'adminpetrol',component:AdminpetrolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
