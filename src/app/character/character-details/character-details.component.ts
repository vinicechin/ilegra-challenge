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

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selChar) {
      this.getFilmTitles()
    }
  }

  getFilmTitles() {
    this.filmNames = []
    for (let filmUrl of this.selChar.films) {
      this.swapiService.getUnitaryData(filmUrl)
        .subscribe(
          (film: any) => {
            console.log(film)
            this.filmNames.push(film.title)
          }
        )
    }
  }

}
