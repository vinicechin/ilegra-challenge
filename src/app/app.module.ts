import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { SwapiService } from './swapi.service';
import { FilmsComponent } from './films/films.component';
import { CharacterComponent } from './character/character.component';
import { FilmComponent } from './films/film/film.component';
import { CharacterItemComponent } from './character/character-item/character-item.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleItemComponent } from './vehicles/vehicle-item/vehicle-item.component';
import { VehicleDetailsComponent } from './vehicles/vehicle-details/vehicle-details.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipItemComponent } from './starships/starship-item/starship-item.component';
import { StarshipDetailsComponent } from './starships/starship-details/starship-details.component';
import { SpeciesComponent } from './species/species.component';
import { SpecieItemComponent } from './species/specie-item/specie-item.component';
import { SpecieDetailsComponent } from './species/specie-details/specie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    CharacterComponent,
    FilmComponent,
    CharacterItemComponent,
    FilmDetailsComponent,
    CharacterDetailsComponent,
    VehiclesComponent,
    VehicleItemComponent,
    VehicleDetailsComponent,
    StarshipsComponent,
    StarshipItemComponent,
    StarshipDetailsComponent,
    SpeciesComponent,
    SpecieItemComponent,
    SpecieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
