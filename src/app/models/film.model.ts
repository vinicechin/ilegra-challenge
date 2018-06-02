export class Film { 
  constructor(public id: number,
              public title: string,
              public director: string,
              public producer: string,
              public crawl: string,
              public characters: string[],
              public planets: string[],
              public species: string[],
              public starships: string[],
              public vehicles: string[],
              public created: string,
              public edited: string,
              public release: string
              ) {} 

  // Build film structure based on film model
  public static buildFilmsStructure(films) {
    const filmsArray: Film[] = [];
    for (let film of films) {
      const newFilm = new Film(
        film.episode_id, 
        film.title,
        film.director,
        film.producer,
        film.opening_crawl,
        film.characters,
        film.planets,
        film.species,
        film.starships,
        film.vehicles,
        film.created,
        film.edited,
        film.release_date
      )

      filmsArray.push(newFilm)
    }
    return filmsArray;
  }
}
 
