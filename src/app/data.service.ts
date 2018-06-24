import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router'; 

export enum Type {
    FILMS = 0,
    CHARACTERS = 1,
    SPECIES = 2,
    PLANETS = 3,
    VEHICLES = 4,
    STARSHIPS = 5
}

@Injectable()
export class DataService {
  films: any[] = [];
  chars: any[] = [];
  species: any[] = [];
  planets: any[] = [];
  vehicles: any[] = [];
  starships: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  // FILMS GETTERS
  getFilmById(id) {
    return this.films.find((film) => {
      return film.episode_id === id;
    });
  }

  getFilmsFromUrls(filmsArray: any[], array: any[]) {
    this.getArrayFromUrls(filmsArray, array, Type.FILMS);
  }

  // CHARACTERS GETTERS
  getCharacterById(id) {
    return this.chars.find((character) => {
      return character.id === id;
    });
  }

  getCharactersFromUrls(charsArray: any[], array: any[]) {
    this.getArrayFromUrls(charsArray, array, Type.CHARACTERS);
  }

  // SPECIES GETTERS
  getSpeciesById(id) {
    return this.species.find((species) => {
      return species.id === id;
    });
  }

  getSpeciesFromUrls(speciesArray: any[], array: any[]) {
    this.getArrayFromUrls(speciesArray, array, Type.SPECIES);
  }

  // PLANETS GETTERS
  getPlanetsById(id) {
    return this.planets.find((planet) => {
      return planet.id === id;
    });
  }

  getPlanetsFromUrls(planetsArray: any[], array: any[]) {
    this.getArrayFromUrls(planetsArray, array, Type.PLANETS);
  }

  getPlanetFromUrl(planetUrl: any) {
    var planetsArray = [];
    this.getArrayFromUrls([planetUrl], planetsArray, Type.PLANETS);
    return planetsArray[0];
  }

  // VEHICLES GETTERS
  getVehicleById(id) {
    return this.vehicles.find((vehicle) => {
      return vehicle.id === id;
    });
  }

  getVehiclesFromUrls(vehiclesArray: any[], array: any[]) {
    this.getArrayFromUrls(vehiclesArray, array, Type.VEHICLES);
  }

  // STARSHIPS GETTERS
  getStarshipById(id) {
    return this.starships.find((starship) => {
      return starship.id === id;
    });
  }

  getStarshipsFromUrls(starshipsArray: any[], array: any[]) {
    this.getArrayFromUrls(starshipsArray, array, Type.STARSHIPS);
  }

  // DATA SETTER METHODS
  setData(data: any) {
    this.films = data.films.items;
    this.chars = data.chars.items;
    this.species = data.species.items;
    this.planets = data.planets.items;
    this.vehicles = data.vehicles.items;
    this.starships = data.starships.items;

    return this.verifyDataLoaded(data);
  }

  verifyDataLoaded(data) {
    const filmsLoading = data.films.loading;
    const charsLoading = data.chars.loading;
    const speciesLoading = data.species.loading;
    const planetsLoading = data.planets.loading;
    const vehiclesLoading = data.vehicles.loading;
    const starshipsLoading = data.starships.loading;

    return !filmsLoading && !charsLoading && !speciesLoading && !planetsLoading && !vehiclesLoading && !starshipsLoading;
  }

  // AUXILIAR METHODS
  getArrayFromUrls(urlArray: any[], array: any[], type: Type) {
    var dataArray: any[];
    switch(type) {
      case Type.FILMS:
        dataArray = this.films;
        break;
      case Type.CHARACTERS:
        dataArray = this.chars;
        break;
      case Type.SPECIES:
        dataArray = this.species;
        break;
      case Type.PLANETS:
        dataArray = this.planets;
        break;
      case Type.VEHICLES:
        dataArray = this.vehicles;
        break;
      case Type.STARSHIPS:
        dataArray = this.starships;
        break;
      default:
        dataArray = [];
    }

    if (dataArray.length > 0) {
      for (let id of this.getIdsArray(urlArray)) {
        const item = dataArray.find((item) => {
          if (type == Type.FILMS) {
            return item.episode_id == id;
          } else {
            return item.id == id;
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
