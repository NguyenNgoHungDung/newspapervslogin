import { createReducer, on } from "@ngrx/store";
import {ArticleState} from ""
import * as ArticleActions from 'src/actions/article.action';

const initialState: ArticleState={
    article: [],
    isSucces: true,
    error: '',
    loading: false
}

export const articleReducer = createReducer(
    initialState,
    on(ArticleActions.getPerginate,(state)=>({...state,loading: true})),
    on(ArticleActions.getPerginateSuccess, (state, action)=>({...state,article:action.article})),
    on(ArticleActions.getPerginateFailure, (state, action)=>({...state,loading:false, isSuccess: false})),
)