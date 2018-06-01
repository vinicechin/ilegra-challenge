export class Film { 
  constructor(public director: string,
              public title: string,
              public id: number,
              public characters: string[],
              public planets: string[],
              public species: string[],
              public starships: string[],
              public vehicles: string[]) {} 

  // Build film structure based on film model
  public static buildFilmsStructure(films) {
    const filmsArray: Film[] = [];
    for (let film of films) {
      const newFilm = new Film(
        film.director, 
        film.title, 
        film.episode_id, 
        film.characters,
        film.planets,
        film.species,
        film.starships,
        film.vehicles,
      )

      filmsArray.push(newFilm)
    }
    return filmsArray;
  }
}
 
