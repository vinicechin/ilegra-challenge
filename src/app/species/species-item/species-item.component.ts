import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from '../../store/swapi.state';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-species-item',
  templateUrl: './species-item.component.html',
  styleUrls: ['./species-item.component.css']
})
export class SpeciesItemComponent implements OnInit {
  swapi$: Observable<SwapiState>;
  id: number;
  currentSpecies: any;
  filmsAppeared: any[] = [];
  members: any[] = [];

  constructor(private route: ActivatedRoute,
              private store: Store<SwapiState>,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');

    this.swapi$.subscribe((data) => {
      if (this.verifyDataToLoad()) {
        this.setCurrentSpecies();
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.setCurrentSpecies();
        }
      )
  }

  verifyDataToLoad() {
    return !this.currentSpecies || 
            this.filmsAppeared.length <= 0 ||
            this.members.length <= 0
  }

  setCurrentSpecies() {
    this.currentSpecies = this.dataService.getSpeciesById(this.id);
    if (this.currentSpecies) {
      console.log(this.currentSpecies);
      this.filmsAppeared = [];
      this.dataService.getFilmsFromUrls(this.currentSpecies.films, this.filmsAppeared);
      this.members = [];
      this.dataService.getCharactersFromUrls(this.currentSpecies.people, this.members);
    }
  }
}
