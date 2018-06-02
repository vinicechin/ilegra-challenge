import { Component, OnInit, Input } from '@angular/core';
import { Starship } from '../../models/starship.model'; 

@Component({
  selector: 'app-starship-item',
  templateUrl: './starship-item.component.html',
  styleUrls: ['./starship-item.component.css']
})
export class StarshipItemComponent implements OnInit {
  @Input() starship: Starship;

  constructor() { }

  ngOnInit() {
  }

}
