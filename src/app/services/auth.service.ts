import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser!: User | null

  constructor(private auth:Auth, private router :Router) { 

  }
  async loginGoogle(){
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider)
  }

  logOut(){
    this.auth.signOut();
    this.router.navigateByUrl("/login")
  }


}
