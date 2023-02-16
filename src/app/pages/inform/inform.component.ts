import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.scss']
})
export class InformComponent {


  news$: Observable<News> = this.newsService.get();
  constructor(private newsService:NewsService) {}
  
}
export class ProgressBarIndeterminateExample {}