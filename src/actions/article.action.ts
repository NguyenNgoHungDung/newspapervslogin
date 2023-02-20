import {createAction, props} from "@ngrx/store";
import {Ariticle} from 'src/app/models/article.models'

export const getPerginate = createAction ('[Article] Get Perginate', props<{page: number, itemPerPage: number}>());
export const getPerginateSuccess = createAction ('[Article] Get Perginate Success', props<{article: Ariticle[]}>());
export const getPerginateFailure = createAction ('[Article] Get Perginate Failure', props<{error: string}>());