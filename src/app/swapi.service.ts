import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map'
import { Film } from './film.model'; 

@Injectable()
export class SwapiService {
  filmsUpdated = new EventEmitter<Film[]>();
  private films : Film[] = [new Film("a", "a", 100, [1,2], [1,2], [1,2], [1,2], [1,2])];
  
  // service constructor
  constructor(private http: Http) {}

  // Film setter and getter
  setFilms(films: any[]) {
    this.buildFilmsStructure(films)
    this.filmsUpdated.emit(this.films);
  }

  getFilms() {
    return this.films;
  }
  
  // Gets data from api based on purl parameter
  getData(url) {
    return this.http.get(url)
      .map(
        (response: Response) => {
          const data = response.json();
          const films = []
          for(let film of data.results) {
            films.push(film)
          }
          return films
        }
      )
      .pipe(catchError(
        (error => {
          return throwError('Error loading movies');
        }))
      );
  }

  // Build film structure based on film model
  buildFilmsStructure(films) {
    const filmsArray: Film[] = [];
    for (let film of films) {
      const charsArray = this.getIdsArray(film.characters)
      const planetsArray = this.getIdsArray(film.planets)
      const speciesArray = this.getIdsArray(film.species)
      const starshipsArray = this.getIdsArray(film.starships)
      const vehiclesArray = this.getIdsArray(film.vehicles)

      const newFilm = new Film(
        film.director, 
        film.title, 
        film.episode_id, 
        charsArray,
        planetsArray,
        speciesArray,
        starshipsArray,
        vehiclesArray
      )

      filmsArray.push(newFilm)
    }
    this.films = filmsArray;
  }

  // transform links into ids array
  getIdsArray(originArray) {
    const resultArray = []
    for (let item of originArray) {
      const itemId = parseInt(item.substr(item.length - 3, 2).replace('/',''))
      resultArray.push(itemId)
    }
    return resultArray;
  }
}
