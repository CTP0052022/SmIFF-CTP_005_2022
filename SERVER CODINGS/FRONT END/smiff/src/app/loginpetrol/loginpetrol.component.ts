import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpetrol',
  templateUrl: './loginpetrol.component.html',
  styleUrls: ['./loginpetrol.component.css']
})
export class LoginpetrolComponent implements OnInit {

  stationregister!: FormGroup;
  constructor(public as:AuthService, private formbuild:FormBuilder,public router:Router) {
    this.stationregister= this.formbuild.group({
      SName: formbuild.control(''),
      SAName:formbuild.control(''),
      email:formbuild.control(''),
      password:['',Validators.required],
      Phonenumber:formbuild.control(''),
      Location:formbuild.control(''),
    })
  }

  public onpetreg(){
    this.as.signuppet(
      this.stationregister.value.email,
      this.stationregister.value.password,
      this.stationregister.value.SName,
      this.stationregister.value.phonenumber,
      this.stationregister.value.SAName,
      this.stationregister.value.Location).then(res=>{this.router.navigate(['/adminpetrol'])}
      ).catch((e)=>console.log(e.message))

  }

  ngOnInit(): void {
  }

}
