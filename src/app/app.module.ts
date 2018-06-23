import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmListComponent } from './films/film-list/film-list.component';
import { FilmItemComponent } from './films/film-item/film-item.component';
import { AppRoutingModule } from './app-routing.module';

import { SwapiReducer } from './store/swapi.reducers';
import { SwapiEffects } from './store/swapi.effects';
import { CharactersComponent } from './characters/characters.component';
import { CharacterItemComponent } from './characters/character-item/character-item.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { FilterPipe, SortByPipe } from './app.pipes';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmListComponent,
    FilmItemComponent,
    CharactersComponent,
    CharacterItemComponent,
    CharacterListComponent,
    FilterPipe,
    SortByPipe,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(({ swapi: SwapiReducer})),
    EffectsModule.forRoot([ SwapiEffects ]),
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
