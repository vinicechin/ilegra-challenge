import { Component, OnInit, AfterContentInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Film } from '../film.model'; 

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  public films: Film[];

  constructor(private swapiService: SwapiService) {
    this.swapiService.filmsUpdated.subscribe( 
      (filmsArray: Film[]) => this.films = filmsArray
    )
  }

  ngOnInit() {
  }

}
