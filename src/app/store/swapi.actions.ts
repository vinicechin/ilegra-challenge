import { Action } from '@ngrx/store';

export const GET_FILMS = 'GET_FILMS';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_ERROR = 'GET_FILMS_ERROR';
export const GET_CHARS = 'GET_CHARS';
export const GET_CHARS_SUCCESS = 'GET_CHARS_SUCCESS';
export const GET_CHARS_ERROR = 'GET_CHARS_ERROR';
export const GET_SPECIES = 'GET_SPECIES';
export const GET_SPECIES_SUCCESS = 'GET_SPECIES_SUCCESS';
export const GET_SPECIES_ERROR = 'GET_SPECIES_ERROR';
export const GET_PLANETS = 'GET_PLANETS';
export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';
export const GET_PLANETS_ERROR = 'GET_PLANETS_ERROR';
export const GET_VEHICLES = 'GET_VEHICLES';
export const GET_VEHICLES_SUCCESS = 'GET_VEHICLES_SUCCESS';
export const GET_VEHICLES_ERROR = 'GET_VEHICLES_ERROR';

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

export class GetSpeciesAction implements Action {
  readonly type = GET_SPECIES;
}

export class GetSpeciesSuccessAction implements Action {
  readonly type = GET_SPECIES_SUCCESS;

  constructor(public payload: {species: any[]}) {}
}

export class GetSpeciesErrorAction implements Action {
  readonly type = GET_SPECIES_ERROR;

  constructor(public payload: {error: any}) {}
}

export class GetPlanetsAction implements Action {
  readonly type = GET_PLANETS;
}

export class GetPlanetsSuccessAction implements Action {
  readonly type = GET_PLANETS_SUCCESS;

  constructor(public payload: {planets: any[]}) {}
}

export class GetPlanetsErrorAction implements Action {
  readonly type = GET_PLANETS_ERROR;

  constructor(public payload: {error: any}) {}
}

export class GetVehiclesAction implements Action {
  readonly type = GET_VEHICLES;
}

export class GetVehiclesSuccessAction implements Action {
  readonly type = GET_VEHICLES_SUCCESS;

  constructor(public payload: {vehicles: any[]}) {}
}

export class GetVehiclesErrorAction implements Action {
  readonly type = GET_VEHICLES_ERROR;

  constructor(public payload: {error: any}) {}
}

export type SwapiActions = GetFilmsAction 
                         | GetFilmsSuccessAction 
                         | GetFilmsErrorAction
                         | GetCharsAction 
                         | GetCharsSuccessAction 
                         | GetCharsErrorAction
                         | GetSpeciesAction 
                         | GetSpeciesSuccessAction 
                         | GetSpeciesErrorAction
                         | GetPlanetsAction 
                         | GetPlanetsSuccessAction 
                         | GetPlanetsErrorAction
                         | GetVehiclesAction 
                         | GetVehiclesSuccessAction 
                         | GetVehiclesErrorAction;
