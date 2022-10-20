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

  title = 'firebase-angular-auth';
  isSignedIn = false
  constructor(
    private firebaseService : AuthService,
    private router : Router,
    private formbuild:FormBuilder){
      this.LoginForm= this.formbuild.group({
        email: formbuild.control(''),
        password: formbuild.control(''),
      })
    }

  public onSignin(){
    console.log(this.LoginForm.value.email);
    this.firebaseService.login(this.LoginForm.value.email,this.LoginForm.value.password).then((res:any)=>{console.log((res));this.router.navigate(['/Adminall'])}).catch((e)=>console.log(e.message));
  }
  
  /*
  Not sure how this works. Change to enable registering.
  async onRegister(email:string,password:string){
    await this.firebaseService.login(email,password).catch((e)=>console.log(e.message));
  }
  
  */
  

  ngOnInit(): void {}
}
    
