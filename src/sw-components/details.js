import SwapiService from "../services/swapi-service";
import itemDetailsWithData from "../hoc-helper/item-details-with-data";

const {getPerson, getStarship, getPlanet} = new SwapiService();

const PersonDetails = itemDetailsWithData(getPerson);
const PlanetDetails = itemDetailsWithData(getPlanet);
const StarshipDetails = itemDetailsWithData(getStarship);

export {PersonDetails, PlanetDetails, StarshipDetails};
