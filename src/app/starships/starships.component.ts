import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Starship } from '../starship.model'; 

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  public starships: Starship[];
  public selectedStarship: Starship;
  public loadedData: boolean = false;

  constructor(private swapiService: SwapiService) {
    this.swapiService.starshipsUpdated.subscribe(
      (starshipsArray: Starship[]) => {
        starshipsArray.sort(this.compare)
        this.starships = starshipsArray
        this.loadedData = true
      }
    )
    this.swapiService.tabChanged.subscribe( 
      () => this.selectedStarship = null
    )
    this.swapiService.selectStarship.subscribe(
      (starship) => {
        this.setSelectedStarship(starship)
        window.scrollTo(0, 0)
      }
    )
  }

  ngOnInit() {
  }

  setSelectedStarship(selectedStarship: Starship) {
    this.selectedStarship = selectedStarship;
  }

  compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

}
