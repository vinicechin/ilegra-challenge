export class Starship { 
  constructor(public name: string,
              public model: string,
              public manufacturer: string,
              public cost_in_credits: string,
              public length: string,
              public max_atm_speed: string,
              public crew: string,
              public passengers: string,
              public cargo_capacity: string,
              public consumables: string,
              public hyperdrive_rating: string,
              public MGLT: string,
              public starship_class: string,
              public films: string[],
              public pilots: string[],
              public created: string,
              public edited: string
              ) {} 

  // Build film structure based on film model
  public static buildStarshipStructure(starships) {
    const starshipsArray: Starship[] = [];
    for (let starship of starships) {
      const newStarship = new Starship(
        starship.name, 
        starship.model,
        starship.manufacturer,
        starship.cost_in_credits,
        starship.length,
        starship.max_atmosphering_speed,
        starship.crew,
        starship.passengers,
        starship.cargo_capacity,
        starship.consumables,
        starship.hyperdrive_rating,
        starship.MGLT,
        starship.starship_class,
        starship.films,
        starship.pilots,
        starship.created,
        starship.edited,
      )

      starshipsArray.push(newStarship)
    }
    return starshipsArray;
  }
}
 
