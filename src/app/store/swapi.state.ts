import { Action } from '@ngrx/store';

export interface SwapiState {
  films: {
    items: any[],
    loading: boolean
  };
  chars: {
    items: any[],
    loading: boolean
  };
  species: {
    items: any[],
    loading: boolean
  };
  planets: {
    items: any[],
    loading: boolean
  };
  vehicles: {
    items: any[],
    loading: boolean
  };
  error: any;
}

export const initialState: SwapiState = {
  films: {
    items: [],
    loading: true
  },
  chars: {
    items: [],
    loading: true
  },
  species: {
    items: [],
    loading: true
  },
  planets: {
    items: [],
    loading: true
  },
  vehicles: {
    items: [],
    loading: true
  },
  error: null
};
