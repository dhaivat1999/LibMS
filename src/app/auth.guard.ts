import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.auth.authLogin();
      if(this.auth.isAuthLogin == true)
      {
        console.log(this.auth.isAuthLogin)
        return this.auth.isAuthLogin;
      }
      else{
        // console.log("Checked Here")
        alert("Unauthorized Access");
        this.router.navigate(['\home']);
        // console.log("redirection issue")
        // return this.auth.isAuthLogin;
      }
    
   
  }

}
