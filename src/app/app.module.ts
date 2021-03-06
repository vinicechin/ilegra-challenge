import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwapiReducer } from './store/swapi.reducers';
import { SwapiEffects } from './store/swapi.effects';
import { FilterPipe, SortByPipe } from './app.pipes';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { FilmsComponent } from './films/films.component';
import { FilmListComponent } from './films/film-list/film-list.component';
import { FilmItemComponent } from './films/film-item/film-item.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterItemComponent } from './characters/character-item/character-item.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { SpeciesItemComponent } from './species/species-item/species-item.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetItemComponent } from './planets/planet-item/planet-item.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicles/vehicle-item/vehicle-item.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipListComponent } from './starships/starship-list/starship-list.component';
import { StarshipItemComponent } from './starships/starship-item/starship-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortByPipe,
    LoadingScreenComponent,
    FilmsComponent,
    FilmListComponent,
    FilmItemComponent,
    CharactersComponent,
    CharacterItemComponent,
    CharacterListComponent,
    SpeciesComponent,
    SpeciesListComponent,
    SpeciesItemComponent,
    PlanetsComponent,
    PlanetListComponent,
    PlanetItemComponent,
    VehiclesComponent,
    VehicleListComponent,
    VehicleItemComponent,
    StarshipsComponent,
    StarshipListComponent,
    StarshipItemComponent
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
