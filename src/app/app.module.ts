import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SwapiService } from './swapi.service';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
