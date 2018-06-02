import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwapiService } from '../../swapi.service';
import { Starship } from '../../starship.model'; 

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {
  @Input() selStarship: Starship;
  characterNames: string[] = [];
  filmNames: string[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selStarship) {
      this.getCharactersName()
      this.getFilmsName()
    }
  }

  getCharactersName() {
    this.characterNames = []
    for (let characterUrl of this.selStarship.pilots) {
      this.swapiService.getUnitaryData(characterUrl)
        .subscribe(
          (character: any) => {
            this.characterNames.push(character.name)
          }
        )
    }
  }

  getFilmsName() {
    this.filmNames = []
    for (let filmUrl of this.selStarship.films) {
      this.swapiService.getUnitaryData(filmUrl)
        .subscribe(
          (film: any) => {
            this.filmNames.push(film.title)
          }
        )
    }
  }

  redirect(name, type) {
    this.swapiService.redirect(name, type)
  }

}
