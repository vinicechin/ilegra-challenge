import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwapiService } from '../../swapi.service';
import { Film } from '../../film.model'; 

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  @Input() selFilm: Film;
  characterNames: string[];

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.selFilm ? this.getCharactersName() : this.characterNames = []
  }

  getCharactersName() {
    this.characterNames = []
    for (let characterUrl of this.selFilm.characters) {
      this.swapiService.getUnitaryData(characterUrl)
        .subscribe(
          (character: any) => {
            this.characterNames.push(character.name)
            console.log(this.characterNames)
          }
        )
    }
  }

}
