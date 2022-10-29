import { Injectable, NgZone } from '@angular/core';

import {User} from './services/user';
import { Auth,AuthInstances,authState,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, user} from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { first, last, Observable, take } from 'rxjs';
import { emailVerified } from '@angular/fire/compat/auth-guard';
import { addDoc, CollectionReference, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { FIRESTORE_PROVIDER_NAME } from '@angular/fire/firestore/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   // Save logged in user data
  constructor(
    private af:Auth,
    private afs:Firestore,
    public router:Router
  ) {
    
  }
  login(email:string,password:string){
    return signInWithEmailAndPassword(this.af,email,password)
  }
  
  signup(email:string,password:string,firstname:string,lastname:string,username:string,phonenumber:string){

    return createUserWithEmailAndPassword(this.af,email,password).then((result)=>{
      this.setdata(result.user,firstname,lastname,username,phonenumber);
    })
  }
  setdata(user:any,firstname:string,lastname:string,username:string,phonenumber:string){
    const userref=collection(this.afs,"users")
    const Userdata:User={
      uid:user.uid,
      email:user.email,
      displayName:username,
      firstname:firstname,
      lastname:lastname,
      phonenumber:phonenumber,
      photoURL:user.photoURL,
      emailVerified:user.emailVerified
    };
    addDoc(userref,Userdata).then(docref=>{
      console.log("Success");
    }).catch(error=>{console.log(error)});
    
  }
  logout(){
    return signOut(this.af)
  }
  
}
