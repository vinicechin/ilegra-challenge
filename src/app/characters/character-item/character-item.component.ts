import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

import { SwapiState } from '../../store/swapi.state';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {
  swapi$: Observable<SwapiState>;
  id: number;
  currentCharacter: any;
  filmsAppeared: any[] = [];

  constructor(private route: ActivatedRoute,
              private store: Store<SwapiState>,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');

    this.swapi$.subscribe((data) => {
      if (this.verifyDataLoad()) {
        this.setCurrentCharacter();
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.setCurrentCharacter();
        }
      )
  }

  verifyDataLoad() {
    return !this.currentCharacter || this.filmsAppeared.length <= 0;
  }

  setCurrentCharacter() {
    this.currentCharacter = this.dataService.getCharacterById(this.id);
    if (this.currentCharacter) {
      console.log(this.currentCharacter)
      this.filmsAppeared = [];
      this.dataService.getFilmsFromUrls(this.currentCharacter.films, this.filmsAppeared)
    }
  }

}
