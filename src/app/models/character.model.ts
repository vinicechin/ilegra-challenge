export class Character { 
  constructor(public name: string,
              public eye_color: string,
              public skin_color: string,
              public hair_color: string,
              public gender: string,
              public height: number,
              public mass: number,
              public films: string[],
              public homeworld: string,
              public species: string[],
              public starships: string[],
              public vehicles: string[],
              public birth_year: string,
              public created: string,
              public edited: string) {} 

  // Build film structure based on film model
  public static buildCharactersStructure(chars) {
    const charsArray: Character[] = [];
    for (let char of chars) {
      const newChar = new Character(
        char.name, 
        char.eye_color, 
        char.skin_color,
        char.hair_color,
        char.gender,
        char.height, 
        char.mass,
        char.films,
        char.homeworld,
        char.species,
        char.starships,
        char.vehicles,
        char.birth_year,
        char.created,
        char.edited
      )

      charsArray.push(newChar)
    }
    return charsArray;
  }
}
