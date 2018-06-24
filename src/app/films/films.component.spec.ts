import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { FilterPipe, SortByPipe } from '../app.pipes';
import { FilmsComponent } from './films.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmListComponent } from './film-list/film-list.component';

const appRoutes: Routes = [
  { path: 'films', component: FilmsComponent, children: [
    { path: '', component: FilmListComponent },
    { path: ':id', component: FilmItemComponent }
  ]}
]

describe('FilmsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes),
        FormsModule
      ],
      declarations: [
        FilmsComponent,
        FilmListComponent,
        FilmItemComponent,
        FilterPipe,
        SortByPipe,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FilmsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
