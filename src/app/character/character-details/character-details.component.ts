import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwapiService } from '../../swapi.service';
import { Character } from '../../character.model'; 

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() selChar: Character;
  filmNames: string[] = [];
  starshipNames: string[] = [];
  vehicleNames: string[] = [];
  specieNames: string[] = [];
  homeworld: string = '';

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selChar) {
      this.getFilmTitles()
      this.getStarshipsName()
      this.getVehiclesName()
      this.getSpeciesName()
      this.getHomeworld()
    }
  }

  getFilmTitles() {
    this.filmNames = []
    for (let filmUrl of this.selChar.films) {
      this.swapiService.getUnitaryData(filmUrl)
        .subscribe(
          (film: any) => {
            this.filmNames.push(film.title)
          }
        )
    }
  }

  getStarshipsName() {
    this.starshipNames = []
    for (let starshipUrl of this.selChar.starships) {
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
    for (let vehiclesUrl of this.selChar.vehicles) {
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
    for (let specieUrl of this.selChar.species) {
      this.swapiService.getUnitaryData(specieUrl)
        .subscribe(
          (specie: any) => {
            this.specieNames.push(specie.name)
          }
        )
    }
  }

  getHomeworld() {
    this.homeworld = ''
    this.swapiService.getUnitaryData(this.selChar.homeworld)
      .subscribe(
        (planet: any) => {
          this.homeworld = planet.name
        }
      )
  }

  redirect(name, type) {
    this.swapiService.redirect(name, type)
  }

}
