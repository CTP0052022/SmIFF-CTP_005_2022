import { query } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { user } from '@angular/fire/auth';
import { collection, docData, Firestore, getDoc, getDocs } from '@angular/fire/firestore';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { doc } from '@firebase/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent implements OnInit {


  LoginForm!: FormGroup;
  RegisterForm!:FormGroup;
  errormsg="";
  title = 'firebase-angular-auth';
  isSignedIn = false
  isLogging= true
  constructor(
    private firebaseService : AuthService,
    private afs:Firestore,
    private router : Router,
    private formbuild:FormBuilder){
      this.LoginForm= this.formbuild.group({
        email: formbuild.control(''),
        password: ['',Validators.required],
      })
      this.RegisterForm= this.formbuild.group({
        email: formbuild.control(''),
        password: ['',Validators.required],
        firstname:formbuild.control(''),
        lastname:formbuild.control(''),
        username:formbuild.control(''),
        phonenumber:formbuild.control(''),
      })
    }

  public onSignin(){
    console.log(this.LoginForm.value.email);
    this.firebaseService.login(this.LoginForm.value.email,this.LoginForm.value.password).then(async (res:any)=>{
      console.log((res));
      const docref = await doc(this.afs,'users',res.user.uid)
      const docy=await getDoc(docref)
      console.log('admin/${res.user.uid}')
      if(!docy.exists()){
        console.log("hi")
      }else{
        console.log(docref)
      }
      this.router.navigate(['/Adminall'])}).catch((e)=>this.errormsg=e.message);
  }


  //Not sure how this works. Change to enable registering.
  public onRegister(){
    this.firebaseService.signup(
      this.RegisterForm.value.email,
      this.RegisterForm.value.password,
      this.RegisterForm.value.firstname,
      this.RegisterForm.value.lastname,
      this.RegisterForm.value.username,
      this.RegisterForm.value.phonenumber,
      "user").catch((e)=>
      console.log(e.message));
  }



  ngOnInit(): void {}
}



