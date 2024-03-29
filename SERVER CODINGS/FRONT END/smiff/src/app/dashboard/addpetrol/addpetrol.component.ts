import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-addpetrol',
  templateUrl: './addpetrol.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class AddpetrolComponent implements OnInit {

  stationregister!: FormGroup;
  constructor(public as:AuthService, private formbuild:FormBuilder) {
    this.stationregister= this.formbuild.group({
      SName: formbuild.control(''),
      SAName: ['',Validators.required],
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
      this.stationregister.value.Location).catch((e)=>console.log(e.message))
  }


  ngOnInit(): void {
  }

}
