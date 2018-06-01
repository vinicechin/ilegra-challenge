import { Component, OnInit, Input, ngOnChanges } from '@angular/core';

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

}
