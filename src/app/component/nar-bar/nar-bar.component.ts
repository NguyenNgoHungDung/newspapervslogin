import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nar-bar',
  templateUrl: './nar-bar.component.html',
  styleUrls: ['./nar-bar.component.scss']
})
export class NarBarComponent {
  constructor(private router :Router, public authService:AuthService){}
  navigate(url:string){
    this.router.navigateByUrl(url)
  }
  
}
