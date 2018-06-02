import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Film } from '../film.model'; 

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  public films: Film[];
  public selectedFilm: Film;
  public loadedData: boolean = false;

  constructor(private swapiService: SwapiService) {
    this.swapiService.filmsUpdated.subscribe(
      (filmsArray: Film[]) => {
        filmsArray.sort(this.compare)
        this.films = filmsArray
        this.loadedData = true
      }
    )
    this.swapiService.tabChanged.subscribe( 
      () => this.selectedFilm = null
    )
    this.swapiService.selectFilm.subscribe(
      (film) => {
        this.setSelectedFilm(film)
        window.scrollTo(0, 0)
      }
    )
  }

  ngOnInit() {
  }

  setSelectedFilm(selectedFilm: Film) {
    this.selectedFilm = selectedFilm;
  }

  compare(a,b) {
    if (a.release < b.release)
      return -1;
    if (a.release > b.release)
      return 1;
    return 0;
  }

}
