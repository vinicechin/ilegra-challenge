import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwapiService } from '../../swapi.service';
import { Specie } from '../../specie.model'; 

@Component({
  selector: 'app-specie-details',
  templateUrl: './specie-details.component.html',
  styleUrls: ['./specie-details.component.css']
})
export class SpecieDetailsComponent implements OnInit {
  @Input() selSpecie: Specie;
  filmNames: string[] = [];
  characterNames: string[] = [];
  homeworld: string = '';

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selSpecie) {
      this.getFilmTitles()
      this.getCharactersName()
      this.getHomeworld()
    }
  }

  getFilmTitles() {
    this.filmNames = []
    for (let filmUrl of this.selSpecie.films) {
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
    for (let characterUrl of this.selSpecie.characters) {
      this.swapiService.getUnitaryData(characterUrl)
        .subscribe(
          (character: any) => {
            this.characterNames.push(character.name)
          }
        )
    }
  }

  getHomeworld() {
    this.homeworld = ''
    this.swapiService.getUnitaryData(this.selSpecie.homeworld)
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
