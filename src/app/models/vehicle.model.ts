export class Vehicle { 
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
              public vehicle_class: string,
              public films: string[],
              public pilots: string[],
              public created: string,
              public edited: string
              ) {} 

  // Build film structure based on film model
  public static buildVehicleStructure(vehicles) {
    const vehiclesArray: Vehicle[] = [];
    for (let vehicle of vehicles) {
      const newVehicle = new Vehicle(
        vehicle.name, 
        vehicle.model,
        vehicle.manufacturer,
        vehicle.cost_in_credits,
        vehicle.length,
        vehicle.max_atmosphering_speed,
        vehicle.crew,
        vehicle.passengers,
        vehicle.cargo_capacity,
        vehicle.consumables,
        vehicle.vehicle_class,
        vehicle.films,
        vehicle.pilots,
        vehicle.created,
        vehicle.edited,
      )

      vehiclesArray.push(newVehicle)
    }
    return vehiclesArray;
  }
}
 
