import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Vehicle } from '../vehicle.model'; 

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  public vehicles: Vehicle[];
  public selectedVehicle: Vehicle;

  constructor(private swapiService: SwapiService) {
    this.swapiService.vehiclesUpdated.subscribe(
      (vehiclesArray: Vehicle[]) => this.vehicles = vehiclesArray
    )
    this.swapiService.tabChanged.subscribe( 
      () => this.selectedVehicle = null
    )
  }

  ngOnInit() {
  }

  setSelectedVehicle(selectedVehicle: Vehicle) {
    this.selectedVehicle = selectedVehicle;
  }

}