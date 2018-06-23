import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from '../../store/swapi.state';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  swapi$: Observable<any>;
  starships: any[];
  searchTerm = '';

  constructor(private store: Store<SwapiState>,
              private router: Router) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');
    this.swapi$.subscribe((data) => {
      this.starships = data.starships.items;
    });
  }

}
