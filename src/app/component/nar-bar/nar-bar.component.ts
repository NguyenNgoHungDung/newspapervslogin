import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nar-bar',
  templateUrl: './nar-bar.component.html',
  styleUrls: ['./nar-bar.component.scss']
})
export class NarBarComponent {
  constructor(private router :Router){}
  navigate(url:string){
    this.router.navigateByUrl(url)
  }
}
