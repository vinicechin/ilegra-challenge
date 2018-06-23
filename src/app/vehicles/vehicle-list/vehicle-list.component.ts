import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from '../../store/swapi.state';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  swapi$: Observable<any>;
  vehicles: any[];
  searchTerm = '';

  constructor(private store: Store<SwapiState>,
              private router: Router) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');
    this.swapi$.subscribe((data) => {
      this.vehicles = data.vehicles.items;
    });
  }

}
