import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  constructor(private router :Router, public cart:CartService){}
  navigate(url:string){
    this.router.navigateByUrl(url)
  }

 
}
