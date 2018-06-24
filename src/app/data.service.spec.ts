import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

enum Type {
    FILMS = 0,
    CHARACTERS = 1,
    SPECIES = 2,
    PLANETS = 3,
    VEHICLES = 4,
    STARSHIPS = 5
}

describe('Service: DataService', () => {
  let service: DataService;
  let http: HttpClient;
  let router: Router;

  let testApiData = {
    films: {
      items: [{episode_id: '1', title: 'Film 1'}, {episode_id: '2', title: 'Film 2'}],
      loading: true
    },
    chars: {
      items: [{id: '1', name: 'Character 1'}, {id: '2', name: 'Character 2'}],
      loading: true
    },
    species: {
      items: [{id: '1', name: 'Species 1'}, {id: '2', name: 'Species 2'}],
      loading: true
    },
    planets: {
      items: [{id: '1', name: 'Planet 1'}, {id: '2', name: 'Planet 2'}],
      loading: true
    },
    vehicles: {
      items: [{id: '1', name: 'Vehicle 1'}, {id: '2', name: 'Vehicle 2'}],
      loading: true
    },
    starships: {
      items: [{id: '1', name: 'Starship 1'}, {id: '2', name: 'Starship 2'}],
      loading: true
    }
  }

  beforeEach(() => {
      service = new DataService(http, router);
  });

  it('#getIdsArray with an empty array parameter should return an empty array', () => {
      expect(service.getIdsArray([])).toEqual([]);
  });

  it('#getIdsArray with an array of urls as parameter should return an array of ids', () => {
      expect(service.getIdsArray(['url/1/','url/2/','url/3/'])).toEqual([1,2,3]);
  });

  it('#verifyDataLoaded should return false while loading data', () => {
    expect(service.verifyDataLoaded(testApiData)).toBeFalsy();
  });

  it('#setData should return false after setting data but not completing the data load process', () => {
    expect(service.setData(testApiData)).toBeFalsy();
  })

  it('#verifyDataLoaded should return true after loading data', () => {
    testApiData.films.loading = false;
    testApiData.chars.loading = false;
    testApiData.species.loading = false;
    testApiData.planets.loading = false;
    testApiData.vehicles.loading = false;
    testApiData.starships.loading = false;
    expect(service.verifyDataLoaded(testApiData)).toBeTruthy();
  });

  it('#setData should return true after completing the data load process', () => {
    expect(service.setData(testApiData)).toBeTruthy();
  })

  describe('#Data getters', () => {
    beforeEach(() => {
      service.setData(testApiData);
    });

    it('#should get array of objects based on ids from array of urls and Type', () => {
      var array: any[] = [];
      service.getArrayFromUrls(["url/1/","url/2/"], array, Type.FILMS)
      expect(array).toEqual(testApiData.films.items);
      array = [];
      service.getArrayFromUrls(["url/1/","url/2/"], array, Type.CHARACTERS)
      expect(array).toEqual(testApiData.chars.items);
      array = [];
      service.getArrayFromUrls(["url/1/","url/2/"], array, Type.SPECIES)
      expect(array).toEqual(testApiData.species.items);
      array = [];
      service.getArrayFromUrls(["url/1/","url/2/"], array, Type.PLANETS)
      expect(array).toEqual(testApiData.planets.items);
      array = [];
      service.getArrayFromUrls(["url/1/","url/2/"], array, Type.VEHICLES)
      expect(array).toEqual(testApiData.vehicles.items);
      array = [];
      service.getArrayFromUrls(["url/1/","url/2/"], array, Type.STARSHIPS)
      expect(array).toEqual(testApiData.starships.items);
    });

    it('#getFilmById should get a film object based on its id', () => {
      expect(service.getFilmById(testApiData.films.items[0].episode_id))
        .toEqual(testApiData.films.items[0]);
    });

    it('#getFilmsFromUrls should get an array of films based on urls', () => {
      var array: any[] = [];
      service.getFilmsFromUrls(["url/1/","url/2/"], array)
      expect(array).toEqual(testApiData.films.items);
    });

    it('#getCharacterById should get a character object based on its id', () => {
      expect(service.getCharacterById(testApiData.chars.items[0].id))
        .toEqual(testApiData.chars.items[0]);
    });

    it('#getCharactersFromUrls should get an array of characters based on urls', () => {
      var array: any[] = [];
      service.getCharactersFromUrls(["url/1/","url/2/"], array)
      expect(array).toEqual(testApiData.chars.items);
    });

    it('#getSpeciesById should get a species object based on its id', () => {
      expect(service.getSpeciesById(testApiData.species.items[0].id))
        .toEqual(testApiData.species.items[0]);
    });

    it('#getSpeciesFromUrls should get an array of species based on urls', () => {
      var array: any[] = [];
      service.getSpeciesFromUrls(["url/1/","url/2/"], array)
      expect(array).toEqual(testApiData.species.items);
    });

    it('#getPlanetsById should get a planet object based on its id', () => {
      expect(service.getPlanetsById(testApiData.planets.items[0].id))
        .toEqual(testApiData.planets.items[0]);
    });

    it('#getPlanetsFromUrls should get an array of planets based on urls', () => {
      var array: any[] = [];
      service.getPlanetsFromUrls(["url/1/","url/2/"], array)
      expect(array).toEqual(testApiData.planets.items);
    });

    it('#getPlanetFromUrl should get a planet object based on its url', () => {
      expect(service.getPlanetFromUrl("url/1/"))
        .toEqual(testApiData.planets.items[0]);
    });

    it('#getVehicleById should get a vehicle object based on its id', () => {
      expect(service.getVehicleById(testApiData.vehicles.items[0].id))
        .toEqual(testApiData.vehicles.items[0]);
    });

    it('#getVehiclesFromUrls should get an array of vehicles based on urls', () => {
      var array: any[] = [];
      service.getVehiclesFromUrls(["url/1/","url/2/"], array)
      expect(array).toEqual(testApiData.vehicles.items);
    });

    it('#getStarshipById should get a starship object based on its id', () => {
      expect(service.getStarshipById(testApiData.starships.items[0].id))
        .toEqual(testApiData.starships.items[0]);
    });

    it('#getStarshipsFromUrls should get an array of starships based on urls', () => {
      var array: any[] = [];
      service.getStarshipsFromUrls(["url/1/","url/2/"], array)
      expect(array).toEqual(testApiData.starships.items);
    });
  });
});
