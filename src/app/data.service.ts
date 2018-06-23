import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router'; 

enum Type {
    FILMS = 0,
    CHARACTERS = 1,
}

@Injectable()
export class DataService {
  films: any[] = [];
  chars: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  //Receive an id and returns a film object
  getFilmById(id) {
    return this.films.find((film) => {
      return film.episode_id === id;
    });
  }

  //Receive a films url array and returns a films array
  getFilmsFromUrls(filmsArray: any[], array: any[]) {
    this.getArrayFromUrls(filmsArray, array, Type.FILMS);
  }

  //Receive an id and returns a character object
  getCharacterById(id) {
    return this.chars.find((character) => {
      return character.id === id;
    });
  }

  //Receive a characters url array and returns a characters array
  getCharactersFromUrls(charsArray: any[], array: any[]) {
    this.getArrayFromUrls(charsArray, array, Type.CHARACTERS);
  }

  setData(data: any) {
    this.films = data.films.items;
    this.chars = data.chars.items;

    return this.verifyDataLoaded(data);
  }

  verifyDataLoaded(data) {
    const filmsLoading = data.films.loading
    const charsLoading = data.chars.loading

    return !filmsLoading && !charsLoading;
  }

  getArrayFromUrls(urlArray: any[], array: any[], type: Type) {
    var dataArray: any[];
    switch(type) {
      case Type.FILMS:
        dataArray = this.films;
        break;
      case Type.CHARACTERS:
        dataArray = this.chars;
        break;
      default:
        dataArray = [];
    }

    if (dataArray.length > 0) {
      for (let id of this.getIdsArray(urlArray)) {
        const item = dataArray.find((item) => {
          if (type === Type.FILMS) {
            return item.episode_id === id;
          } else {
            return item.id === id;
          }
        });
        array.push(item);
      }
    }
  }

  getIdsArray(originArray) { 
    const resultArray = [] 
    for (let item of originArray) { 
      const itemId = parseInt(item.substr(item.length - 3, 2).replace('/','')) 
      resultArray.push(itemId) 
    } 
    return resultArray; 
  }

}
