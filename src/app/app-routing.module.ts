import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FilmsComponent } from './films/films.component';
import { FilmItemComponent } from './films/film-item/film-item.component';
import { FilmListComponent } from './films/film-list/film-list.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterItemComponent } from './characters/character-item/character-item.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

const appRoutes: Routes = [
  { path: '', component: LoadingScreenComponent, pathMatch: 'full' },
  { path: 'films', component: FilmsComponent, children: [
    { path: '', component: FilmListComponent },
    { path: ':id', component: FilmItemComponent }
  ]},
  { path: 'characters', component: CharactersComponent, children: [
    { path: '', component: CharacterListComponent },
    { path: ':id', component: CharacterItemComponent }
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
