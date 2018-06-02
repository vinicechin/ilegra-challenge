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
  public loadedData: boolean = false;

  constructor(private swapiService: SwapiService) {
    this.swapiService.charsUpdated.subscribe( 
      (charsArray: Character[]) => {
        charsArray.sort(this.compare)
        this.characters = charsArray
        this.loadedData = true
      }
    )
    this.swapiService.tabChanged.subscribe( 
      () => this.selectedChar = null
    )
    this.swapiService.selectCharacter.subscribe(
      (character) => {
        this.setSelectedChar(character)
        window.scrollTo(0, 0)
      }
    )
  }

  ngOnInit() {
  }

  setSelectedChar(selectedChar: Character) {
    this.selectedChar = selectedChar;
  }

  compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

}
