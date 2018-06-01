export class Character { 
  constructor(public eye_color: string,
              public height: number,
              public mass: number,
              public name: string,
              public films: string[],
              public homeworld: string,
              public species: string[],
              public starships: string[],
              public vehicles: string[]) {} 

  // Build film structure based on film model
  public static buildCharactersStructure(chars) {
    const charsArray: Character[] = [];
    for (let char of chars) {
      const newChar = new Character(
        char.eye_color, 
        char.height, 
        char.mass,
        char.name, 
        char.films,
        char.homeworld,
        char.species,
        char.starships,
        char.vehicles
      )

      charsArray.push(newChar)
    }
    return charsArray;
  }
}
