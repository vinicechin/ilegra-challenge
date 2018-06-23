import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from './store/swapi.state';
import * as SwapiActions from './store/swapi.actions';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  isCollapsed = true;
  title = 'app';
  swapi$: Observable<any>;
  loading: boolean = true;
  error: boolean = false;

  constructor(private store: Store<SwapiState>,
              private dataService: DataService,
              private router: Router) {}

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');
    this.swapi$.subscribe((data) => {
      const loadEnded = this.dataService.setData(data);
      if (this.loading && loadEnded) {
        this.loading = false;
      }

      if (data.error) {
        this.error = true;
        console.log(data.error.message);
        data.error = null;
      }
    });

    this.loadData();
  }

  reload() {
    this.loading = true;
    this.error = false;
    this.loadData();
  }

  loadData() {
    this.store.dispatch(new SwapiActions.GetFilmsAction())
    this.store.dispatch(new SwapiActions.GetCharsAction())
  }
}
