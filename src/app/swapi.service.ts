import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map'
import { Film } from './film.model'; 
import { Character } from './character.model'; 

@Injectable()
export class SwapiService {
  filmsUpdated = new EventEmitter<Film[]>();
  charsUpdated = new EventEmitter<Character[]>();
  public films : Film[] = [];
  public characters : Character[] = [];

  // service constructor
  constructor(private http: Http) {}

  setFilms(films: Film[]) {
    this.films = Film.buildFilmsStructure(films)
    this.filmsUpdated.emit(this.films);
  }

  setCharacters(chars: Character[]) {
    this.characters = Character.buildCharactersStructure(chars)
    this.charsUpdated.emit(this.characters);
  }

  //Gets data from api based on purl parameter
  getUnitaryData(url) {
    return this.http.get(url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data
        }
      )
  }
  
  // Gets data from api based on purl parameter
  getData(url, page, items, type) {
    this.http.get(url + "/?page=" + page)
      .subscribe(
        (response: Response) => {
          const data = response.json();
          for(let item of data.results) {
            items.push(item)
          }
          if (data.next) {
            this.getData(url, ++page, items, type)
          } else {
            console.log(items)
            this.setData(type, items)
          }
        }
      )
  }

  // Set data for component of respective type
  setData(type, array) {
    switch (type) {
      case 0:
        this.setFilms(array)
        break;
      case 1:
        this.setCharacters(array)
        break;
      default:
        console.log(array)
        break;
    }
  }
}
