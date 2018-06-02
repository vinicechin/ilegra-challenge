import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Specie } from '../specie.model'; 

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  public species: Specie[];
  public selectedSpecie: Specie;

  constructor(private swapiService: SwapiService) {
    this.swapiService.speciesUpdated.subscribe(
      (speciesArray: Specie[]) => {
        speciesArray.sort(this.compare)
        this.species = speciesArray
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
    if (a.release < b.release)
      return -1;
    if (a.release > b.release)
      return 1;
    return 0;
  }

}
