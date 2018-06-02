import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../../models/specie.model'; 

@Component({
  selector: 'app-specie-item',
  templateUrl: './specie-item.component.html',
  styleUrls: ['./specie-item.component.css']
})
export class SpecieItemComponent implements OnInit {
  @Input() specie: Specie;

  constructor() { }

  ngOnInit() {
  }

}
