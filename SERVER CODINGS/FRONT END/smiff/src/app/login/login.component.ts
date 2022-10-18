import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'firebase-angular-auth';
  isSignedIn = false
  constructor(
    private firebaseService : AuthService,
    private router : Router){}

  async onSignin(email:string,password:string){
    await this.firebaseService.login(email,password).catch((e)=>console.log(e.message));
  }
  
  /*
  Not sure how this works. Change to enable registering.
  async onRegister(email:string,password:string){
    await this.firebaseService.login(email,password).catch((e)=>console.log(e.message));
  }
  
  */
  

  ngOnInit(): void {}
}
    
