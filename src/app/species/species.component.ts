import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Specie } from '../models/specie.model'; 

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  public species: Specie[];
  public selectedSpecie: Specie;
  public loadedData: boolean = false;

  constructor(private swapiService: SwapiService) {
    this.swapiService.speciesUpdated.subscribe(
      (speciesArray: Specie[]) => {
        speciesArray.sort(this.compare)
        this.species = speciesArray
        this.loadedData = true
      }
    )
    this.swapiService.tabChanged.subscribe( 
      () => this.selectedSpecie = null
    )
    this.swapiService.selectSpecie.subscribe(
      (specie) => {
        this.setSelectedSpecie(specie)
        window.scrollTo(0, 0)
      }
    )
  }

  ngOnInit() {
  }

  setSelectedSpecie(selectedSpecie: Specie) {
    this.selectedSpecie = selectedSpecie;
  }

  compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

}
