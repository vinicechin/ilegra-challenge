export class Character { 
  constructor(public eye_color: string,
              public height: number,
              public mass: number,
              public name: string,
              public films: number[],
              public homeworld: number,
              public species: number[],
              public starships: number[],
              public vehicles: number[]) {} 

  // Build film structure based on film model
  public static buildCharactersStructure(chars) {
    const charsArray: Character[] = [];
    for (let char of chars) {
      const filmsArray = this.getIdsArray(char.films)
      const homeworld = parseInt(char.homeworld.substr(char.homeworld.length - 3, 2).replace('/',''))
      const speciesArray = this.getIdsArray(char.species)
      const starshipsArray = this.getIdsArray(char.starships)
      const vehiclesArray = this.getIdsArray(char.vehicles)

      const newChar = new Character(
        char.eye_color, 
        char.height, 
        char.mass,
        char.name, 
        filmsArray,
        homeworld,
        speciesArray,
        starshipsArray,
        vehiclesArray
      )

      charsArray.push(newChar)
    }
    return charsArray;
  }

  // transform links into ids array
  public static getIdsArray(originArray) {
    const resultArray = []
    for (let item of originArray) {
      const itemId = parseInt(item.substr(item.length - 3, 2).replace('/',''))
      resultArray.push(itemId)
    }
    return resultArray;
  }
}
