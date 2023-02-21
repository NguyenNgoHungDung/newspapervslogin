import { Injectable } from '@angular/core';
import { onAuthStateChanged, Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, 
    private authService: AuthService,
    private router: Router,
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) =>{
        onAuthStateChanged(this.auth,(user)=>{
      if(user){
        this.authService.currentUser=user;
        resolve (true);
      }else{
        this.authService.currentUser=null;
        window.alert("sorry baby!!!")
        resolve (false);
        this.router.navigate(['/login']);
      }
    })
  });
}
}
