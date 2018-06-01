export class Film { 
  constructor(public director: string,
              public title: string,
              public id: number,
              public characters: number[],
              public planets: number[],
              public species: number[],
              public starships: number[],
              public vehicles: number[]) {} 

  // Build film structure based on film model
  public static buildFilmsStructure(films) {
    const filmsArray: Film[] = [];
    for (let film of films) {
      const charsArray = this.getIdsArray(film.characters)
      const planetsArray = this.getIdsArray(film.planets)
      const speciesArray = this.getIdsArray(film.species)
      const starshipsArray = this.getIdsArray(film.starships)
      const vehiclesArray = this.getIdsArray(film.vehicles)

      const newFilm = new Film(
        film.director, 
        film.title, 
        film.episode_id, 
        charsArray,
        planetsArray,
        speciesArray,
        starshipsArray,
        vehiclesArray
      )

      filmsArray.push(newFilm)
    }
    return filmsArray;
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
 
