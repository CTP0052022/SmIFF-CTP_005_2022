import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showvalue=false
  itm!: Observable<any[]>;
  pt!:Observable<any[]>;
  pf!:Observable<any[]>;
  id:any
  constructor(public afs:Firestore) {

  }

  openNav(id:string){
    this.itm=(collectionData(query(collection(this.afs,'petrolstations'),where('Name','==',id)),{idField:'id'}))as Observable<any[]>
    this.pt=(collectionData(query(collection(this.afs,'petrolfuletank'),where('name','==',id)),{idField:'id'}))as Observable<any[]>
    this.pf=(collectionData(query(collection(this.afs,'petrolfuelflow'),where('name','==',id)),{idField:'id'}))as Observable<any[]>
    this.showvalue=true
  }
  ngOnInit(): void {
  }

}
