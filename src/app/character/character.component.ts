import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Character } from '../character.model'; 

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public characters: Character[];
  public selectedChar: Character;

  constructor(private swapiService: SwapiService) {
    this.swapiService.charsUpdated.subscribe( 
      (charsArray: Character[]) => this.characters = charsArray
    )
    this.swapiService.tabChanged.subscribe( 
      () => this.selectedChar = null
    )
  }

  ngOnInit() {
  }

  setSelectedChar(selectedChar: Character) {
    this.selectedChar = selectedChar;
  }

}
