import { Injectable } from "@angular/core";
import {createEffect, ofType } from "@ngrx/effects";
import {Actions} from "@ngrx/effects";
import {map, switchMap, catchError, of} from "rxjs";
import { News }  from 'src/app/models/news.model';

@Injectable()
export class NewsEffect{
    constructor(private actions$: Actions, private articleService: ArticleService){}

    getNews$ =createEffect(()=> this.actions$.pipe(
        ofType(ArticleAction.getPerginate),
        switchMap((action) =>{
            return this.articleService.getNews(action.page, action.itemPerPage);
        }),
        map((response)=>{
            return ArticleActions.getPerginateSuccess({article:<Array<ArticleModel>>response})
        }),
        catchError((error)=>{
            return of(ArticleActions.getPerginateFailure({error: error.message}))
        }
    ))
}