import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminallComponent } from './adminall/adminall.component';
import { AdminpetrolComponent } from './adminpetrol/adminpetrol.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { AngularFireAuthGuard, AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import{ReactiveFormsModule}from '@angular/forms';
import { UsermanageComponent } from './dashboard/usermanage/usermanage.component';
import { PetrolmanageComponent } from './dashboard/petrolmanage/petrolmanage.component';
import { MainboardComponent } from './dashboard/mainboard/mainboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminallComponent,
    AdminpetrolComponent,
    UserComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    BrowserAnimationsModule,
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
