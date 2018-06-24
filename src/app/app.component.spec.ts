import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SwapiReducer } from './store/swapi.reducers';
import { SwapiEffects } from './store/swapi.effects';
import { SwapiState } from './store/swapi.state';
import { DataService } from './data.service';

const appRoutes: Routes = []

const dataState: SwapiState = {
  films: {
    items: [],
    loading: true
  },
  chars: {
    items: [],
    loading: true
  },
  species: {
    items: [],
    loading: true
  },
  planets: {
    items: [],
    loading: true
  },
  vehicles: {
    items: [],
    loading: true
  },
  starships: {
    items: [],
    loading: true
  },
  error: null
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(({ swapi: SwapiReducer})),
        EffectsModule.forRoot([ SwapiEffects ]),
        HttpClientModule,
        NgbModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, DataService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Star Wars Wiki'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Star Wars Wiki');
  }));

  it('while loading, should receive false from service on setData', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    
    fixture.detectChanges();
    
    let loadEnded = dataService.setData(dataState);
    expect(loadEnded).toEqual(false);
  });

  it('When finished load, should receive true from service on setData', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    
    fixture.detectChanges();
    
    dataState.films.loading = false;
    dataState.chars.loading = false;
    dataState.species.loading = false;
    dataState.planets.loading = false;
    dataState.vehicles.loading = false;
    dataState.starships.loading = false;
    let loadEnded = dataService.setData(dataState);
    expect(loadEnded).toEqual(true);
  });
});
