import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminallComponent } from './adminall/adminall.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'Adminall',component:AdminallComponent},
  {path: 'Login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
