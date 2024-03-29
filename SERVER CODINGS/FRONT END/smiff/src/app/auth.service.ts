import { Injectable, NgZone } from '@angular/core';

import {User} from './services/user';
import { Auth,AuthInstances,authState,createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword, signOut, user} from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { first, last, Observable, take } from 'rxjs';
import { emailVerified } from '@angular/fire/compat/auth-guard';
import { addDoc, CollectionReference, doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { FIRESTORE_PROVIDER_NAME } from '@angular/fire/firestore/firestore';
import { Petroluser } from './services/petroluser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userid="";
   // Save logged in user data
  constructor(
    private af:Auth,
    private afs:Firestore,
    public router:Router,

  ) {


  }
  login(email:string,password:string){
    return signInWithEmailAndPassword(this.af,email,password)
  }

  signup(email:string,password:string,firstname:string,lastname:string,username:string,phonenumber:string,role:string){

    return createUserWithEmailAndPassword(this.af,email,password).then((result)=>{
      this.setdata(result.user,firstname,lastname,username,phonenumber,role);
      this.userid=result.user.uid

    })
  }

  setdata(user:any,firstname:string,lastname:string,username:string,phonenumber:string,role:string){
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
    setDoc(doc(userref,user.uid),Userdata).then(docref=>{
      console.log("Success");
    }).catch(error=>{console.log(error)});
  }
  signuppet(email:string,password:string,name:string,phonenumber:string,SAname:string,Location:string){

    return createUserWithEmailAndPassword(this.af,email,password).then((result)=>{
      this.setpetdata(result.user,name,phonenumber,SAname,Location);

    })
  }
  setpetdata(user:any,name:string,SAname:string,phonenumber:string,Location:string){
    flow:Number
    tank:Number
    const userref=collection(this.afs,"petrolstations")
    const Userdata:Petroluser={
      uid:user.uid,
      email:user.email,
      Name:name,
      phonenumber:phonenumber,
      Location:Location,
      emailVerified:user.emailVerified
    };
    const petfloref=collection(this.afs,"petrolfuelflow")
    const pettankref=collection(this.afs,"petrolfuletank")
    const petflow:any={
      flow:0,
      name:name
    }
    const pettank:any={
      tank:0,
      name:name
    }
    setDoc(doc(userref,user.uid),Userdata).then(docref=>{
      console.log("Success");
    }).catch(error=>{console.log(error)});
    setDoc(doc(petfloref,user.uid),petflow).then(docref=>{
      console.log("Success");
    }).catch(error=>{console.log(error)});
    setDoc(doc(pettankref,user.uid),pettank).then(docref=>{
      console.log("Success");
    }).catch(error=>{console.log(error)});

  }
  logout(){
    return signOut(this.af)
  }

  rerouting(user:any){
    doc(collection(this.afs,'users'),user.uid)

  }

}
