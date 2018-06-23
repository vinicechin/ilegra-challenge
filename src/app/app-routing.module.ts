import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { FilmsComponent } from './films/films.component';
import { FilmItemComponent } from './films/film-item/film-item.component';
import { FilmListComponent } from './films/film-list/film-list.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterItemComponent } from './characters/character-item/character-item.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesItemComponent } from './species/species-item/species-item.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetItemComponent } from './planets/planet-item/planet-item.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleItemComponent } from './vehicles/vehicle-item/vehicle-item.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipItemComponent } from './starships/starship-item/starship-item.component';
import { StarshipListComponent } from './starships/starship-list/starship-list.component';

const appRoutes: Routes = [
  { path: '', component: LoadingScreenComponent, pathMatch: 'full' },
  { path: 'films', component: FilmsComponent, children: [
    { path: '', component: FilmListComponent },
    { path: ':id', component: FilmItemComponent }
  ]},
  { path: 'characters', component: CharactersComponent, children: [
    { path: '', component: CharacterListComponent },
    { path: ':id', component: CharacterItemComponent }
  ]},
  { path: 'species', component: SpeciesComponent, children: [
    { path: '', component: SpeciesListComponent },
    { path: ':id', component: SpeciesItemComponent }
  ]},
  { path: 'planets', component: PlanetsComponent, children: [
    { path: '', component: PlanetListComponent },
    { path: ':id', component: PlanetItemComponent }
  ]},
  { path: 'vehicles', component: VehiclesComponent, children: [
    { path: '', component: VehicleListComponent },
    { path: ':id', component: VehicleItemComponent }
  ]},
  { path: 'starships', component: StarshipsComponent, children: [
    { path: '', component: StarshipListComponent },
    { path: ':id', component: StarshipItemComponent }
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
