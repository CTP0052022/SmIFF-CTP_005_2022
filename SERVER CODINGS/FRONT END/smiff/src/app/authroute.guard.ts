import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthrouteGuard implements CanActivate {
  constructor(private authservice : AuthService, private route : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> { 
    var logged=this.authservice.isLoggedIn()
    if (!logged){
      console.log('access denied')
      this.route.navigate(['/Login']);
    }
    return logged
  }
  
}
