import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../models/planet.model'; 

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent implements OnInit {
  @Input() planet: Planet;

  constructor() { }

  ngOnInit() {
  }

}
