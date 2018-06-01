import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.getFilmsData()
  }

  getFilmsData() {
    this.swapiService.getFilmsData()
      .subscribe(
        (films: any[]) => {
          this.swapiService.setFilms(films)
        },
        (error) => console.log(error)
      );
  }
}
