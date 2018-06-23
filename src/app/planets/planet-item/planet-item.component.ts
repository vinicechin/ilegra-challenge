import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from '../../store/swapi.state';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent implements OnInit {
  swapi$: Observable<SwapiState>;
  id: number;
  currentPlanet: any;
  filmsAppeared: any[] = [];
  residents: any[] = [];

  constructor(private route: ActivatedRoute,
              private store: Store<SwapiState>,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');

    this.swapi$.subscribe((data) => {
      if (this.verifyDataToLoad()) {
        this.setCurrentPlanet();
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.setCurrentPlanet();
        }
      )
  }

  verifyDataToLoad() {
    return !this.currentPlanet || 
            this.filmsAppeared.length <= 0 ||
            this.residents.length <= 0
  }

  setCurrentPlanet() {
    this.currentPlanet = this.dataService.getPlanetsById(this.id);
    if (this.currentPlanet) {
      console.log(this.currentPlanet);
      this.filmsAppeared = [];
      this.dataService.getFilmsFromUrls(this.currentPlanet.films, this.filmsAppeared);
      this.residents = [];
      this.dataService.getCharactersFromUrls(this.currentPlanet.residents, this.residents);
    }
  }

}
