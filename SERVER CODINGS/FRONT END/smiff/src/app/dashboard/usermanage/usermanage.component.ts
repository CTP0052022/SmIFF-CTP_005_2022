import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class UsermanageComponent implements OnInit {
  user:Observable<User[]>
  role:string=''
  constructor(private afs:Firestore) {
    const docs=collection(this.afs,'users/')
    this.user=collectionData(docs) as Observable<User[]>
    console.log(this.user.forEach(doc=>{
      console.log(doc)
    }))
    }

  ngOnInit(): void {
  }

}
