import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../vehicle.model'; 

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }

}
