export default class SwapiService {

_apiBase = 'https://swapi.dev/api'

async getResource(url) {
	const res = await fetch(`${this._apiBase}${url}`);
	if (!res.ok) {
		throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`);
	}
	return await res.json();
}

async getAllPeople(){
	const res = await this.getResource(`/people`);
	return res.results.map(this._transformPerson);	
}

async getAllPlanets(){
	const res = await this.getResource(`/planets`);
	return res.results.map(this._transformPlanet);	
}

async getAllStarships(){
	const res = await this.getResource(`/starships`);
	return res.results.map(this._transformStarship);	
}

 async getPerson(id) {
	const person = await this.getResource(`/people/${id}`);
	return this._transformPerson(person);
}

async getPlanet(id) {
	const planet = await this.getResource(`/planets/${id}`);
	return this._transformPlanet(planet)
}

async getStarship(id) {
	const starship = await this.getResource(`/starships/${id}`);
	return this._transformStarship(starship);
}

_extractId (item) {
	const idRegex = /\/([0-9]*)\/$/;
	return item.url.match(idRegex)[1];
}

_transformPlanet = (planet) => {
	return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
}

_transformStarship = (starship) => {
	return{
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer
	}
}

_transformPerson = (person) => {
	return {
			id: this._extractId(person),
			name: person.name,
			mass: person.mass,
			hairColor: person.hair_color,
			gender: person.gender,
			birthYear: person.birth_year,
			height: person.height
	}
}
}
