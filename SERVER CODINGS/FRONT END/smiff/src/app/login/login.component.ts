import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  RegisterForm!:FormGroup;

  title = 'firebase-angular-auth';
  isSignedIn = false
  isLogging= true
  constructor(
    private firebaseService : AuthService,
    private router : Router,
    private formbuild:FormBuilder){
      this.LoginForm= this.formbuild.group({
        email: formbuild.control(''),
        password: formbuild.control(''),
      })
      this.RegisterForm= this.formbuild.group({
        email: formbuild.control(''),
        password: formbuild.control(''),
        firstname:formbuild.control(''),
        lastname:formbuild.control(''),
        username:formbuild.control(''),
        phonenumber:formbuild.control(''),
      })
    }

  public onSignin(){
    console.log(this.LoginForm.value.email);
    this.firebaseService.login(this.LoginForm.value.email,this.LoginForm.value.password).then((res:any)=>{console.log((res));this.router.navigate(['/Adminall'])}).catch((e)=>console.log(e.message));
  }
  
  
  //Not sure how this works. Change to enable registering.
  public onRegister(){
    this.firebaseService.signup(
      this.RegisterForm.value.email,
      this.RegisterForm.value.password,
      this.RegisterForm.value.firstname,
      this.RegisterForm.value.lastname,
      this.RegisterForm.value.username,
      this.RegisterForm.value.phonenumber).catch((e)=>console.log(e.message));
  }
  
  
  

  ngOnInit(): void {}
}
    
