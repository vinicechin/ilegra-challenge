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
  error: null
};
