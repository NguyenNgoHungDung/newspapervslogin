import { createReducer, on } from "@ngrx/store";
import {NewsState} from 'src/states/new.state';
import * as NewsActions from 'src/actions/news.action';

const initialState: NewsState={
    news: [],
    isSucces: true,
    error: '',
    loading: false
}

export const NewsReducer = createReducer(
    initialState,
    on(NewsActions.getPerginate,(state)=>({...state,loading: true})),
    on(NewsActions.getPerginateSuccess, (state, action)=>({...state,new:action.news})),
    on(NewsActions.getPerginateFailure, (state, action)=>({...state,new:[]}),
    
);