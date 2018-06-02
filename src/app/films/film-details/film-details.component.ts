import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwapiService } from '../../swapi.service';
import { Film } from '../../film.model'; 

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  @Input() selFilm: Film;
  characterNames: string[] = [];
  starshipNames: string[] = [];
  vehicleNames: string[] = [];
  specieNames: string[] = [];
  planetNames: string[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selFilm) {
      this.getCharactersName()
      this.getStarshipsName()
      this.getVehiclesName()
      this.getSpeciesName()
      this.getPlanetsName()
    }
  }

  getCharactersName() {
    this.characterNames = []
    for (let characterUrl of this.selFilm.characters) {
      this.swapiService.getUnitaryData(characterUrl)
        .subscribe(
          (character: any) => {
            this.characterNames.push(character.name)
          }
        )
    }
  }

  getStarshipsName() {
    this.starshipNames = []
    for (let starshipUrl of this.selFilm.starships) {
      this.swapiService.getUnitaryData(starshipUrl)
        .subscribe(
          (starship: any) => {
            this.starshipNames.push(starship.name)
          }
        )
    }
  }

  getVehiclesName() {
    this.vehicleNames = []
    for (let vehiclesUrl of this.selFilm.vehicles) {
      this.swapiService.getUnitaryData(vehiclesUrl)
        .subscribe(
          (vehicle: any) => {
            this.vehicleNames.push(vehicle.name)
          }
        )
    }
  }

  getSpeciesName() {
    this.specieNames = []
    for (let specieUrl of this.selFilm.species) {
      this.swapiService.getUnitaryData(specieUrl)
        .subscribe(
          (specie: any) => {
            this.specieNames.push(specie.name)
          }
        )
    }
  }

  getPlanetsName() {
    this.planetNames = []
    for (let planetUrl of this.selFilm.planets) {
      this.swapiService.getUnitaryData(planetUrl)
        .subscribe(
          (planet: any) => {
            this.planetNames.push(planet.name)
          }
        )
    }
  }

  redirect(name, type) {
    this.swapiService.redirect(name, type)
  }

}
