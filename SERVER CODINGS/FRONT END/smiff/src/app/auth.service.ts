import { Injectable, NgZone } from '@angular/core';

import {User} from './services/user';
import { Auth,AuthInstances,authState,createUserWithEmailAndPassword,signInWithEmailAndPassword, user} from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { first, Observable, take } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<any>; // Save logged in user data
  constructor(
    private af:Auth
  ) {
    this.user$=user(this.af);
  }
  login(email:string,password:string){
    return signInWithEmailAndPassword(this.af,email,password)
  }
  
  async isLoggedIn() :Promise<boolean>{
    return !! await this.user$.pipe(take(1)).toPromise();
  }
  
}
