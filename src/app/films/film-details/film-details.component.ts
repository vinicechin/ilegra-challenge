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
    this.characterNames = this.selFilm ? this.getCharactersName() : []
  }

  getCharactersName() {
    console.log(this.selFilm.characters)
    for (let characterUrl of this.selFilm.characters) {
      // console.log(characterUrl)
      // this.swapiService.getUnitaryData("")
      //   .subscribe(
      //     (character: any) => {
      //       console.log(character)
      //     }
      //   )
    }

    return ['teste']
  }

}
