import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from '../../store/swapi.state';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  swapi$: Observable<SwapiState>;
  id: number;
  currentFilm: any;
  filmCharacters: any[] = [];
  filmSpecies: any[] = [];
  filmPlanets: any[] = [];

  constructor(private route: ActivatedRoute,
              private store: Store<SwapiState>,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');

    this.swapi$.subscribe((data) => {
      if (this.verifyDataToLoad()) {
        this.setCurrentFilm();
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.setCurrentFilm();
        }
      )
  }

  verifyDataToLoad() {
    return !this.currentFilm || 
            this.filmCharacters.length <= 0 || 
            this.filmSpecies.length <= 0 ||
            this.filmPlanets.length <= 0;
  }

  setCurrentFilm() {
    this.currentFilm = this.dataService.getFilmById(this.id);
    if (this.currentFilm) {
      console.log(this.currentFilm);
      this.filmCharacters = [];
      this.dataService.getCharactersFromUrls(this.currentFilm.characters, this.filmCharacters);
      this.filmSpecies = [];
      this.dataService.getSpeciesFromUrls(this.currentFilm.species, this.filmSpecies);
      this.filmPlanets = [];
      this.dataService.getPlanetsFromUrls(this.currentFilm.planets, this.filmPlanets);
    }
  }

}
