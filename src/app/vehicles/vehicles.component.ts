import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Vehicle } from '../models/vehicle.model'; 

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  public vehicles: Vehicle[];
  public selectedVehicle: Vehicle;
  public loadedData: boolean = false;

  constructor(private swapiService: SwapiService) {
    this.swapiService.vehiclesUpdated.subscribe(
      (vehiclesArray: Vehicle[]) => {
        vehiclesArray.sort(this.compare)
        this.vehicles = vehiclesArray
        this.loadedData = true
      }
    )
    this.swapiService.tabChanged.subscribe( 
      () => this.selectedVehicle = null
    )
    this.swapiService.selectVehicle.subscribe(
      (vehicle) => {
        this.setSelectedVehicle(vehicle)
        window.scrollTo(0, 0)
      }
    )
  }

  ngOnInit() {
  }

  setSelectedVehicle(selectedVehicle: Vehicle) {
    this.selectedVehicle = selectedVehicle;
  }

  compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

}
