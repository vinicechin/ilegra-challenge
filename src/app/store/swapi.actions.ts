import { Action } from '@ngrx/store';

export const GET_FILMS = 'GET_FILMS';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_ERROR = 'GET_FILMS_ERROR';
export const GET_CHARS = 'GET_CHARS';
export const GET_CHARS_SUCCESS = 'GET_CHARS_SUCCESS';
export const GET_CHARS_ERROR = 'GET_CHARS_ERROR';

export class GetFilmsAction implements Action {
  readonly type = GET_FILMS;
}

export class GetFilmsSuccessAction implements Action {
  readonly type = GET_FILMS_SUCCESS;

  constructor(public payload: {films: any[]}) {}
}

export class GetFilmsErrorAction implements Action {
  readonly type = GET_FILMS_ERROR;

  constructor(public payload: {error: any}) {}
}

export class GetCharsAction implements Action {
  readonly type = GET_CHARS;
}

export class GetCharsSuccessAction implements Action {
  readonly type = GET_CHARS_SUCCESS;

  constructor(public payload: {chars: any[]}) {}
}

export class GetCharsErrorAction implements Action {
  readonly type = GET_CHARS_ERROR;

  constructor(public payload: {error: any}) {}
}

export type SwapiActions = GetFilmsAction 
                         | GetFilmsSuccessAction 
                         | GetFilmsErrorAction
                         | GetCharsAction 
                         | GetCharsSuccessAction 
                         | GetCharsErrorAction;
