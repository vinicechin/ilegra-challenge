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
import { FilmListComponent } from './film-list.component';

const appRoutes: Routes = [
  { path: 'films', component: FilmListComponent }
]

describe('FilmListComponent', () => {
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
        FilmListComponent,
        FilterPipe,
        SortByPipe,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, DataService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FilmListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
