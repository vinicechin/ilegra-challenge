import { ActionReducer, Action } from '@ngrx/store';
import * as fromSwapi from './swapi.actions';
import { initialState } from './swapi.state';

export function SwapiReducer( state = initialState, action: fromSwapi.SwapiActions ) {
  switch (action.type) {
    
    // FILMS CASES
    case fromSwapi.GET_FILMS: {
      const films = state.films;
      films.loading = true;
      return {
        ...state,
        films: films
      };
    };

    case fromSwapi.GET_FILMS_SUCCESS: {
      return {
        ...state,
        films: {items: action.payload.films, loading: false},
        error: null
      };
    };

    case fromSwapi.GET_FILMS_ERROR: {
      return {
        ...state,
        films: {items: [], loading: false},
        error: action.payload.error
      };
    };

    // CHARACTERS CASES
    case fromSwapi.GET_CHARS: {
      const chars = state.chars;
      chars.loading = true;
      return {
        ...state,
        chars: chars
      };
    };

    case fromSwapi.GET_CHARS_SUCCESS: {
      return {
        ...state,
        chars: {items: action.payload.chars, loading: false},
        error: null
      };
    };

    case fromSwapi.GET_CHARS_ERROR: {
      return {
        ...state,
        chars: {items: [], loading: false},
        error: action.payload.error
      };
    };

    // SPECIES CASES
    case fromSwapi.GET_SPECIES: {
      const species = state.species;
      species.loading = true;
      return {
        ...state,
        species: species
      };
    };

    case fromSwapi.GET_SPECIES_SUCCESS: {
      return {
        ...state,
        species: {items: action.payload.species, loading: false},
        error: null
      };
    };

    case fromSwapi.GET_SPECIES_ERROR: {
      return {
        ...state,
        species: {items: [], loading: false},
        error: action.payload.error
      };
    };

    // PLANETS CASES
    case fromSwapi.GET_PLANETS: {
      const planets = state.planets;
      planets.loading = true;
      return {
        ...state,
        planets: planets
      };
    };

    case fromSwapi.GET_PLANETS_SUCCESS: {
      return {
        ...state,
        planets: {items: action.payload.planets, loading: false},
        error: null
      };
    };

    case fromSwapi.GET_PLANETS_ERROR: {
      return {
        ...state,
        planets: {items: [], loading: false},
        error: action.payload.error
      };
    };

    // DEFAULT CASE
    default:
      return state;
  }
}
