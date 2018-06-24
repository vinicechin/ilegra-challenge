import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { SwapiReducer } from '../../store/swapi.reducers';
import { SwapiEffects } from '../../store/swapi.effects';
import { SwapiState } from '../../store/swapi.state';
import { DataService } from '../../data.service';
import { FilterPipe, SortByPipe } from '../../app.pipes';
import { FilmItemComponent } from './film-item.component';

const appRoutes: Routes = [
  { path: 'films/:id', component: FilmItemComponent }
]
const mockFilm = {name: 'Film 1'}
const mockFilms: any[] = [{id: 1, name: 'Film 1'}]
const mockFilmCharacters = [{id: 1, name: 'Char 1'}]
const mockFilmSpecies = [{id: 1, name: 'Species 1'}]
const mockFilmPlanets = [{id: 1, name: 'Planet 1'}]
const mockFilmVehicles = [{id: 1, name: 'Vehicle 1'}]
const mockFilmStarships = [{id: 1, name: 'Starship 1'}]

describe('FilmItemComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(({ swapi: SwapiReducer})),
        EffectsModule.forRoot([ SwapiEffects ]),
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        FilmItemComponent,
        FilterPipe,
        SortByPipe,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/films/1' }, DataService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FilmItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should return true if there is data to load yet', async(() => {
    const fixture = TestBed.createComponent(FilmItemComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.verifyDataToLoad()).toBeTruthy();
  }));

  it('should return false if there is no data to load', async(() => {
    const fixture = TestBed.createComponent(FilmItemComponent);
    const app = fixture.debugElement.componentInstance;

    app.currentFilm = mockFilm
    app.filmCharacters = mockFilmCharacters
    app.filmSpecies = mockFilmSpecies
    app.filmPlanets = mockFilmPlanets
    app.filmVehicles = mockFilmVehicles
    app.filmStarships = mockFilmStarships
    expect(app.verifyDataToLoad()).toBeFalsy();
  }));

  it('should get film by id', () => {
    let fixture = TestBed.createComponent(FilmItemComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService,'getFilmById').and.callFake(function(id) {
      return mockFilms.find((film) => {
        return film.id === id;
      });
    });

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(dataService.getFilmById(1)).toBeTruthy();
    });
  });

  it('should fail to get film by id', () => {
    let fixture = TestBed.createComponent(FilmItemComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService,'getFilmById').and.callFake(function(id) {
      return mockFilms.find((film) => {
        return film.id === id;
      });
    });

    fixture.detectChanges();
    expect(dataService.getFilmById(2)).toBeFalsy();
  });

  it('should get list of characters by urls', () => {
    let fixture = TestBed.createComponent(FilmItemComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService,'getCharactersFromUrls').and.callFake(function(urlArray, resArray) {
      let array = dataService.getIdsArray(urlArray);
      for(let id of array) {
        resArray.push(mockFilmCharacters.find((char) => {
          return char.id === id;
        }));
      }
    });

    fixture.detectChanges();
    var array = [];
    dataService.getCharactersFromUrls(['url/1/'], array)
    expect(array).toEqual(mockFilmCharacters);
  });
});
