import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from './models/news.model';
import { AuthService } from './services/auth.service';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'demo';

 
  logs = new Array<string>();
  counter2: number=0;
  counter1: number=0;
  counterChange(event: string){
    this.logs.push(event);
  }

  constructor(private auth:Auth, private authService:AuthService, private router :Router){}

  ngOnInit(){
    onAuthStateChanged(this.auth,(user)=>{
      if(user){
        this.authService.currentUser=user
        console.log(user)
        this.router.navigateByUrl("/home")
      }else{
        console.log("no user")
        this.authService.currentUser=null
      }
    })
  }

}
  
  



  
  

