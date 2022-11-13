import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import{AngularFirestore}from '@angular/fire/compat/firestore'
import { AuthService } from '../auth.service';
import { collection, collectionData, CollectionReference, collectionSnapshots, doc, docData, DocumentData, Firestore, getDoc } from '@angular/fire/firestore';
import { collectionGroup, query, QueryDocumentSnapshot, queryEqual, QuerySnapshot, where } from '@firebase/firestore';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
  pcount!: number;
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
  constructor(private as:Auth,private db:Firestore,private router:Router) {
    this.as.onAuthStateChanged(user =>{
      this.redirector(user?.uid)
    })
        collectionSnapshots(collection(db,'users')).subscribe(res=>{
      this.ucount=res.length;
    })
    collectionSnapshots(collection(db,'petrolstations')).subscribe(res=>{
      this.pcount=res.length;
    })}



  async redirector(uid:any){
  const docref = await doc(this.db, 'Admin', uid)
    const docy=await getDoc(docref)
      if(!docy.exists()){
        this.router.navigate(['/Login'])
      }
    }

  ngOnInit(): void {
  }

}


function count(arg0: CollectionReference<DocumentData>): any {
  throw new Error('Function not implemented.');
}

