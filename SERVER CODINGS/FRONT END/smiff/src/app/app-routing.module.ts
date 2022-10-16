import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminallComponent } from './adminall/adminall.component';
import { AngularFireAuthGuard,canActivate,hasCustomClaim,redirectLoggedInTo,redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { LoginComponent } from './login/login.component';

const redirectLoggedInToAdminall = ()=>redirectLoggedInTo(['Adminall'])
const redirectUnauthorizedToLogin = ()=>redirectUnauthorizedTo(['Login'])

const routes: Routes = [
  {path: 'Adminall',component:AdminallComponent ,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path: 'Login',component:LoginComponent ,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectLoggedInToAdminall}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
