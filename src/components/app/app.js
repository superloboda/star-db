import React, {Component} from 'react';
import Header from '.././header/header';
import RandomPlanet from '.././random-planet/random-planet';
import PeoplePage from "../people-page/people-page";
import StarshipPage from "../starship-page/starship-page";
import PlanetPage from "../planet-page/planet-page";

export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
                <PlanetPage />
                <StarshipPage />
            </div>
        );
    }
}