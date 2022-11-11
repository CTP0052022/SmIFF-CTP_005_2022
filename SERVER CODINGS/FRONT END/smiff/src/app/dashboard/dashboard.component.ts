import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import{AngularFirestore}from '@angular/fire/compat/firestore'
import { AuthService } from '../auth.service';
import { collection, collectionData, CollectionReference, collectionSnapshots, DocumentData, Firestore } from '@angular/fire/firestore';
import { collectionGroup, query, QueryDocumentSnapshot, queryEqual, QuerySnapshot, where } from '@firebase/firestore';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0,0,0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  status:boolean=false;
  statusLink: boolean = false;
  uno!: string;
  ucount!:number;
  clickEvent() {
    this.status = !this.status;
    //this.statusLink = !this.statusLink;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }
  constructor(private as:AuthService,private db:Firestore) {
    this.uno=as.userid;
    console.log(this.uno);
    collectionSnapshots(collection(db,'users')).subscribe(res=>{
      this.ucount=res.length-1;
    })
    collectionSnapshots(collection(db,'users')).subscribe(res=>{
      QuerySnapshot
    })
  }

  getTotalUsers(): void {

  }

  ngOnInit(): void {
  }

}


function count(arg0: CollectionReference<DocumentData>): any {
  throw new Error('Function not implemented.');
}

