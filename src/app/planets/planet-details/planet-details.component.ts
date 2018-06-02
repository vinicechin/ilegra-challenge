import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwapiService } from '../../swapi.service';
import { Planet } from '../../models/planet.model'; 

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  @Input() selPlanet: Planet;
  filmNames: string[] = [];
  characterNames: string[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selPlanet) {
      this.getFilmTitles()
      this.getCharactersName()
    }
  }

  getFilmTitles() {
    this.filmNames = []
    for (let filmUrl of this.selPlanet.films) {
      this.swapiService.getUnitaryData(filmUrl)
        .subscribe(
          (film: any) => {
            this.filmNames.push(film.title)
          }
        )
    }
  }

  getCharactersName() {
    this.characterNames = []
    for (let characterUrl of this.selPlanet.residents) {
      this.swapiService.getUnitaryData(characterUrl)
        .subscribe(
          (character: any) => {
            this.characterNames.push(character.name)
          }
        )
    }
  }

  redirect(name, type) {
    this.swapiService.redirect(name, type)
  }

}
