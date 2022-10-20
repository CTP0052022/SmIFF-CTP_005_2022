import { Injectable, NgZone } from '@angular/core';

import {User} from './services/user';
import { Auth,AuthInstances,authState,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, user} from '@angular/fire/auth';
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
   // Save logged in user data
  constructor(
    private af:Auth,
    public router:Router
  ) {
    
  }
  login(email:string,password:string){
    return signInWithEmailAndPassword(this.af,email,password)
  }
  
  signup(email:string,password:string){
    return createUserWithEmailAndPassword(this.af,email,password)
  }

  logout(){
    return signOut(this.af)
  }
  
}
