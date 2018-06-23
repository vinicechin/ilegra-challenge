import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from '../../store/swapi.state';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {
  swapi$: Observable<SwapiState>;
  id: number;
  currentVehicle: any;
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
        this.setCurrentVehicle();
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.setCurrentVehicle();
        }
      )
  }

  verifyDataToLoad() {
    return !this.currentVehicle || 
            this.filmsAppeared.length <= 0 ||
            this.pilots.length <= 0;
  }

  setCurrentVehicle() {
    this.currentVehicle = this.dataService.getVehicleById(this.id);
    if (this.currentVehicle) {
      console.log(this.currentVehicle);
      this.filmsAppeared = [];
      this.dataService.getFilmsFromUrls(this.currentVehicle.films, this.filmsAppeared);
      this.pilots = [];
      this.dataService.getCharactersFromUrls(this.currentVehicle.pilots, this.pilots);
    }
  }

}
