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

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    CharacterComponent,
    FilmComponent,
    CharacterItemComponent,
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
