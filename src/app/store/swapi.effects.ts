import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import * as swapiActions from './swapi.actions';

@Injectable()
export class SwapiEffects {
  constructor(private http: HttpClient,
              private action$: Actions) {}

  // EFFECTS
  @Effect()
  getFilms$ = this.action$
    .ofType(swapiActions.GET_FILMS)
    .switchMap(() => {
      return this.getDataRecursively('https://swapi.co/api/films')
        .then((data: any) => {
          console.log(data)
          return new swapiActions.GetFilmsSuccessAction({films: data})
        })
        .catch((error) => {
          return new swapiActions.GetFilmsErrorAction({error: error})
        });
    })

  @Effect()
  getChars$ = this.action$
    .ofType(swapiActions.GET_CHARS)
    .switchMap(() => {
      return this.getDataRecursively('https://swapi.co/api/people')
        .then((data: any) => {
          for(let char of data) {
            char.id = this.getIdFromUrl(char.url)
          }
          console.log(data)
          return new swapiActions.GetCharsSuccessAction({chars: data})
        })
        .catch((error) => {
            new swapiActions.GetCharsErrorAction({error: error})
        });
    })

  // AUXILIAR METHODS
  getDataRecursively(url = 'https://swapi.co/api/people', array = []) {
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then(
          (data: any) => {
            console.log("loaded: " + url);
            array = array.concat(data.results);

            if(data.next) {
              this.getDataRecursively(data.next, array).then(resolve).catch(reject)
            } else {
              resolve(array);
            }
          },
          error => {
            reject(error);
          }
        )
    });
  }

  getIdFromUrl(url) {
    return parseInt(url.substr(url.length - 3, 2).replace('/',''))
  }
}
