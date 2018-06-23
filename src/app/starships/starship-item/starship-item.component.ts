import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from '../../store/swapi.state';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-starship-item',
  templateUrl: './starship-item.component.html',
  styleUrls: ['./starship-item.component.css']
})
export class StarshipItemComponent implements OnInit {
  swapi$: Observable<SwapiState>;
  id: number;
  currentStarship: any;
  filmsAppeared: any[] = [];
  pilots: any[] = [];

  constructor(private route: ActivatedRoute,
              private store: Store<SwapiState>,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');

    this.swapi$.subscribe((data) => {
      if (this.verifyDataToLoad()) {
        this.setCurrentStarship();
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.setCurrentStarship();
        }
      )
  }

  verifyDataToLoad() {
    return !this.currentStarship || 
            this.filmsAppeared.length <= 0 ||
            this.pilots.length <= 0;
  }

  setCurrentStarship() {
    this.currentStarship = this.dataService.getStarshipById(this.id);
    if (this.currentStarship) {
      console.log(this.currentStarship);
      this.filmsAppeared = [];
      this.dataService.getFilmsFromUrls(this.currentStarship.films, this.filmsAppeared);
      this.pilots = [];
      this.dataService.getCharactersFromUrls(this.currentStarship.pilots, this.pilots);
    }
  }

}
