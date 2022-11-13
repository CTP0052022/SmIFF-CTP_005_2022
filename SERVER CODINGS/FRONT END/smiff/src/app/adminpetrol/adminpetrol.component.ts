import { Component, OnInit } from '@angular/core';
import { Auth, authState, user } from '@angular/fire/auth';
import { doc, docData, Firestore, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { Observable } from 'rxjs';
interface pft{
  petroltank:any
}

@Component({
  selector: 'app-adminpetrol',
  templateUrl: './adminpetrol.component.html',
  styleUrls: ['./adminpetrol.component.css']
})
export class AdminpetrolComponent implements OnInit {
  public pt:any
  public pft:any
  public uid:any
  constructor(public afs:Firestore,public af:Auth, public router:Router) {
  this.af.onAuthStateChanged(user =>{
    this.uid=user?.uid
    this.retruuid(this.uid)
  })


}

retruuid(uid2:any){
  this.uid=uid2
  this.redirector(this.uid)
}
 async redirector(uid:any){
  const docref = await doc(this.afs,'Admin',uid)
      const docy=await getDoc(docref)
      if(!docy.exists()){
        this.router.navigate(['/Login'])
      }else{
        const docref2 = await doc(this.afs,'petrolfuletank',uid)
        docData(docref2).forEach(user=>{
          this.pt=user

        })
        const docref3 = await doc(this.afs,'petrolfuelflow',uid)
        docData(docref2).forEach(user=>{
          this.pft=user

        })
      }
}

  ngOnInit(): void {
  }

}


