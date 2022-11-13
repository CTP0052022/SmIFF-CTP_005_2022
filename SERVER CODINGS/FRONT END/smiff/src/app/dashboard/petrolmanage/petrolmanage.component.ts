import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

import { User } from 'src/app/services/user';

@Component({
  selector: 'app-petrolmanage',
  templateUrl: './petrolmanage.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class PetrolmanageComponent implements OnInit {

  user:Observable<User[]>
  role:string=''
  constructor(private afs:Firestore) {
    const docs=collection(this.afs,'petrolstations')
    this.user=collectionData(docs) as Observable<User[]>
    console.log(this.user.forEach(doc=>{
      console.log(doc)
    }))
    }





  ngOnInit(): void {
  }



}

