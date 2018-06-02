import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SwapiService } from './swapi.service';

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

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.swapiService.getData("https://swapi.co/api/films", 1, [], 0)
    this.swapiService.getData("https://swapi.co/api/people", 1, [], 1)
    this.swapiService.getData("https://swapi.co/api/vehicles", 1, [], 2)
  }

  onCharacterSelected() {
    this.filmsSelected = false;
    this.charactersSelected = true;
    this.vehiclesSelected = false;
    this.swapiService.tabChanged.emit();
  }

  onFilmsSelected() {
    this.filmsSelected = true;
    this.charactersSelected = false;
    this.vehiclesSelected = false;
    this.swapiService.tabChanged.emit();
  }

  onVehiclesSelected() {
    this.filmsSelected = false;
    this.charactersSelected = false;
    this.vehiclesSelected = true;
    this.swapiService.tabChanged.emit();
  }

}
