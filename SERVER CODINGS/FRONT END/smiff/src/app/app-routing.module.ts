import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminallComponent } from './adminall/adminall.component';
import {  } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpetrolComponent } from './adminpetrol/adminpetrol.component';
import { MainboardComponent } from './dashboard/mainboard/mainboard.component';
import { UserComponent } from './user/user.component';
import { LoginpetrolComponent } from './loginpetrol/loginpetrol.component';



const routes: Routes = [
  {path: 'Adminall',component:AdminallComponent },
  {path: 'adminall',component:AdminallComponent },
  {path: 'Login',component:LoginComponent },
  {path: 'login',component:LoginComponent },
  {path: 'Adminpetrol',component:AdminpetrolComponent},
  {path: 'adminpetrol',component:AdminpetrolComponent},
  {path: 'User',component:UserComponent },
  {path: 'user',component:UserComponent },
  {path: 'Dashboard',loadChildren: ()=>import('./dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule),},
  {path:'newpetrol',component:LoginpetrolComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
