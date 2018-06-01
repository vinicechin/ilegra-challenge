import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../film.model'; 

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  @Input() selFilm: Film;

  constructor() { }

  ngOnInit() {
  }

  getCharactersName() {
    return 'teste'
  }

}
