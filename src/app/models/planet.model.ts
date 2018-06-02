export class Planet {
  constructor(public name: string,
              public rotation_period: string,
              public orbital_period: string,
              public diameter: string,
              public climate: string,
              public gravity: string,
              public terrain: string,
              public surface_water: string,
              public population: string,
              public residents: string[],
              public films: string[],
              public created: string,
              public edited: string
              ) {}

  // Build film structure based on film model
  public static buildPlanetsStructure(planets) {
    const planetsArray: Planet[] = [];
    for (let planet of planets) {
      const newPlanet = new Planet(
        planet.name,
        planet.rotation_period,
        planet.orbital_period,
        planet.diameter,
        planet.climate,
        planet.gravity,
        planet.terrain,
        planet.surface_water,
        planet.population,
        planet.residents,
        planet.films,
        planet.created,
        planet.edited,
      )

      planetsArray.push(newPlanet)
    }
    return planetsArray;
  }
}
