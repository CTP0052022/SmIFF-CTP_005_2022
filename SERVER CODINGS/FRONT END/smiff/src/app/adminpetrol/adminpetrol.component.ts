import { Component, OnInit } from '@angular/core';
import { Auth, authState, user } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { getAuth } from '@firebase/auth';

@Component({
  selector: 'app-adminpetrol',
  templateUrl: './adminpetrol.component.html',
  styleUrls: ['./adminpetrol.component.css']
})
export class AdminpetrolComponent implements OnInit {

  uid:string;
  constructor(private afs:Firestore,private af:Auth) {
    this.uid=this.af.currentUser?.uid as string
    console.log(authState(this.af))
   }



  ngOnInit(): void {
  }

}
