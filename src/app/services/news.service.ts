import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }
  get(){
    let url="https://newsapi.org/v2/everything?q=tesla&from=2023-01-16&sortBy=publishedAt&apiKey=759391b544564e869fb23de5333a6f5d";
    return this.httpClient.get(url).pipe(
      map((data:any)=>{
        return<News>data;

    }));
  }
}
