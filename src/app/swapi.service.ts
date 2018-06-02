import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map'
import { Film } from './film.model'; 
import { Character } from './character.model'; 
import { Vehicle } from './vehicle.model'; 
import { Starship } from './starship.model';
import { Specie } from './specie.model';
import { Planet } from './planet.model';

const FILMS = 0
const CHARACTERS = 1
const VEHICLES = 2
const STARSHIPS = 3
const SPECIES = 4
const PLANETS = 5

@Injectable()
export class SwapiService {
  // emit event for data updates
  filmsUpdated = new EventEmitter<Film[]>();
  charsUpdated = new EventEmitter<Character[]>();
  vehiclesUpdated = new EventEmitter<Vehicle[]>();
  starshipsUpdated = new EventEmitter<Starship[]>();
  speciesUpdated = new EventEmitter<Specie[]>();
  planetsUpdated = new EventEmitter<Planet[]>();
  // emit event to change tab
  tabChanged = new EventEmitter<void>();
  // redirection and selections events
  redirectEvent = new EventEmitter<{ selected: any[], type: number }>();
  selectFilm = new EventEmitter<Film>();
  selectCharacter = new EventEmitter<Character>();
  selectVehicle = new EventEmitter<Vehicle>();
  selectStarship = new EventEmitter<Starship>();
  selectSpecie = new EventEmitter<Specie>();
  selectPlanet = new EventEmitter<Planet>();
  // variable to control components data values
  public films : Film[] = [];
  public characters : Character[] = [];
  public vehicles : Vehicle[] = [];
  public starships : Starship[] = [];
  public species : Specie[] = [];
  public planets : Planet[] = [];

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

  setVehicles(vehicles: Vehicle[]) {
    this.vehicles = Vehicle.buildVehicleStructure(vehicles)
    this.vehiclesUpdated.emit(this.vehicles)
  }

  setStarships(starships: Starship[]) {
    this.starships = Starship.buildStarshipStructure(starships)
    this.starshipsUpdated.emit(this.starships)
  }

  setSpecies(species: Specie[]) {
    this.species = Specie.buildSpeciesStructure(species)
    this.speciesUpdated.emit(this.species)
  }

  setPlanets(planets: Planet[]) {
    this.planets = Planet.buildPlanetsStructure(planets)
    this.planetsUpdated.emit(this.planets)
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
            // console.log("Loaded data: " + type)
            this.setData(type, items)
          }
        }
      )
  }

  // Set data for component of respective type
  setData(type, array) {
    switch (type) {
      case FILMS:
        this.setFilms(array)
        break;
      case CHARACTERS:
        this.setCharacters(array)
        break;
      case VEHICLES:
        this.setVehicles(array)
        break;
      case STARSHIPS:
        this.setStarships(array)
        break;
      case SPECIES:
        this.setSpecies(array)
        break;
      case PLANETS:
        this.setPlanets(array)
        break;
      default:
        console.log(array)
        break;
    }
  }

  redirect(name, type) {
    var filterResult
    switch (type) {
      case FILMS:
        filterResult = this.films.filter(
          film => film.title === name)
        break;
      case CHARACTERS:
        filterResult = this.characters.filter(
          char => char.name === name)
        break;
      case VEHICLES:
        filterResult = this.vehicles.filter(
          vehicle => vehicle.name === name)
        break;
      case STARSHIPS:
        filterResult = this.starships.filter(
          starship => starship.name === name)
        break;
      case SPECIES:
        filterResult = this.species.filter(
          specie => specie.name === name)
        break;
      case PLANETS:
        filterResult = this.planets.filter(
          planet => planet.name === name)
        break;
      default:
        console.log(name, type)
        break;
    }
    if (filterResult[0]) {
      this.redirectEvent.emit({selected: filterResult[0], type: type})
    }
  }
}
