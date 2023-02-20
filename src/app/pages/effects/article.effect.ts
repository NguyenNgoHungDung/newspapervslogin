import { Injectable } from "@angular/core";
import { createEffect,ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { ArticleService } from 'src/app/services/article.service';
import {switchMap, map} from "rxjs";
import * as ArticleActions from 'src/actions/article.action';

@Injectable()
export class ArticleEffect{
    constructor(private action$: Actions, private articleService: ArticleService){}

    getArticle$ = createEffect(
        () => this.action$.pipe(
        ofType(ArticleActions.getPerginate),
        switchMap((action) => {
            return this.articleService.getArticle(action.page, action.itemPerPage);
        }),
        map((response) => {
            return ArticleActions.getPerginateSuccess ({ article: <Array<ArticleModel>>response})
        }),
        catchError((error) => {
            return of(ArticleActions.getgetPerginateFailure({ error: error.message}))
        }),
))
            }
            
        
    
        
    
