import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SwapiService } from './swapi.service';

const FILMS = 0
const CHARACTERS = 1
const VEHICLES = 2

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  filmsSelected = true;
  charactersSelected = false;
  vehiclesSelected = false;

  constructor(private swapiService: SwapiService) {
    this.swapiService.redirectEvent.subscribe( 
      (redirectObj) => this.redirect(redirectObj)
    )
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.swapiService.getData("https://swapi.co/api/films", 1, [], 0)
    this.swapiService.getData("https://swapi.co/api/people", 1, [], 1)
    this.swapiService.getData("https://swapi.co/api/vehicles", 1, [], 2)
  }

  onFilmsSelected() {
    this.selectFilmsTab();
    this.swapiService.tabChanged.emit();
  }

  onCharacterSelected() {
    this.selectCharacterTab();
    this.swapiService.tabChanged.emit();
  }

  onVehiclesSelected() {
    this.selectVehiclesTab();
    this.swapiService.tabChanged.emit();
  }

  selectFilmsTab() {
    this.filmsSelected = true;
    this.charactersSelected = false;
    this.vehiclesSelected = false;
  }

  selectCharacterTab() {
    this.filmsSelected = false;
    this.charactersSelected = true;
    this.vehiclesSelected = false;
  }

  selectVehiclesTab() {
    this.filmsSelected = false;
    this.charactersSelected = false;
    this.vehiclesSelected = true;
  }

  redirect(redirectObj) {
    switch (redirectObj.type) {
      case FILMS:
        this.selectFilmsTab()
        this.swapiService.selectFilm.emit(redirectObj.selected)
        break;
      case CHARACTERS:
        this.selectCharacterTab()
        this.swapiService.selectCharacter.emit(redirectObj.selected)
        break;
      case VEHICLES:
        this.selectVehiclesTab()
        this.swapiService.selectVehicle.emit(redirectObj.selected)
        break;
      default:
        break;
    }
  }

}
