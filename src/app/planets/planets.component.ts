import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Planet } from '../planet.model'; 

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  public planets: Planet[];
  public selectedPlanet: Planet;
  public loadedData: boolean = false;

  constructor(private swapiService: SwapiService) {
    this.swapiService.planetsUpdated.subscribe(
      (planetsArray: Planet[]) => {
        planetsArray.sort(this.compare)
        this.planets = planetsArray
        this.loadedData = true
      }
    )
    this.swapiService.tabChanged.subscribe( 
      () => this.selectedPlanet = null
    )
    this.swapiService.selectPlanet.subscribe(
      (planet) => {
        this.setSelectedPlanet(planet)
        window.scrollTo(0, 0)
      }
    )
  }

  ngOnInit() {
  }

  setSelectedPlanet(selectedPlanet: Planet) {
    this.selectedPlanet = selectedPlanet;
  }

  compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

}
