import SwapiService from "../services/swapi-service";
import itemListWithData from "../hoc-helper/item-list-with-data";

const {getAllPeople, getAllStarships, getAllPlanets} = new SwapiService()

const PersonList = itemListWithData(getAllPeople);
const PlanetList = itemListWithData(getAllPlanets);
const StarshipList = itemListWithData(getAllStarships);

export { PersonList, PlanetList, StarshipList};
