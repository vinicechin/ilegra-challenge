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
  charsUpdated = new EventEmitter<Film[]>();
  public films : Film[] = [];
  public characters : any[] = [];

  // service constructor
  constructor(private http: Http) {}

  // Film setter and getter
  setFilms(films: Film[]) {
    this.buildFilmsStructure(films)
    this.filmsUpdated.emit(this.films);
  }

  setCharacters(chars: any[]) {
    this.buildCharactersStructure(chars)
    this.charsUpdated.emit(this.characters);
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

  // Build film structure based on film model
  buildCharactersStructure(chars) {
    const charsArray: Character[] = [];
    for (let char of chars) {
      const filmsArray = this.getIdsArray(char.films)
      const homeworld = parseInt(char.homeworld.substr(char.homeworld.length - 3, 2).replace('/',''))
      const speciesArray = this.getIdsArray(char.species)
      const starshipsArray = this.getIdsArray(char.starships)
      const vehiclesArray = this.getIdsArray(char.vehicles)

      const newChar = new Character(
        char.eye_color, 
        char.height, 
        char.mass,
        char.name, 
        filmsArray,
        homeworld,
        speciesArray,
        starshipsArray,
        vehiclesArray
      )

      charsArray.push(newChar)
    }
    this.characters = charsArray;
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
