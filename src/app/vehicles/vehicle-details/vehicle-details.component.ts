import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwapiService } from '../../swapi.service';
import { Vehicle } from '../../vehicle.model'; 

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  @Input() selVehicle: Vehicle;
  characterNames: string[] = [];
  filmNames: string[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selVehicle) {
      this.getCharactersName()
      this.getFilmsName()
    }
  }

  getCharactersName() {
    this.characterNames = []
    for (let characterUrl of this.selVehicle.pilots) {
      this.swapiService.getUnitaryData(characterUrl)
        .subscribe(
          (character: any) => {
            this.characterNames.push(character.name)
          }
        )
    }
  }

  getFilmsName() {
    this.filmNames = []
    for (let filmUrl of this.selVehicle.films) {
      this.swapiService.getUnitaryData(filmUrl)
        .subscribe(
          (film: any) => {
            this.filmNames.push(film.title)
          }
        )
    }
  }

  redirect(name, type) {
    this.swapiService.redirect(name, type)
  }

}
