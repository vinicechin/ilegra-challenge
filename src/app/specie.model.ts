export class Specie { 
  constructor(public name: string,
              public classification: string,
              public designation: string,
              public average_height: string,
              public skin_colors: string,
              public hair_colors: string,
              public eye_colors: string,
              public average_lifespan: string,
              public homeworld: string,
              public language: string,
              public characters: string[],
              public films: string[],
              public created: string,
              public edited: string
              ) {} 

  // Build film structure based on film model
  public static buildSpeciesStructure(species) {
    const speciesArray: Specie[] = [];
    for (let specie of species) {
      const newSpecie = new Specie(
        specie.name,
        specie.classification,
        specie.designation,
        specie.average_height,
        specie.skin_colors,
        specie.hair_colors,
        specie.eye_colors,
        specie.average_lifespan,
        specie.homeworld,
        specie.language,
        specie.people,
        specie.films,
        specie.created,
        specie.edited,
      )

      speciesArray.push(newSpecie)
    }
    return speciesArray;
  }
}
 
