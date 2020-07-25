import React, {Component} from "react";
import Row from "../row/row";
import Record from "../record/record";
import {PlanetDetails, PlanetList} from "../../sw-components";

export default class PlanetPage extends Component {

    state = {
        selectedPlanet: null,
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    }

    render() {
        return (
            <Row
                left={<PlanetList
                    onItemSelected={this.onPlanetSelected}
                    renderItem={({name, population}) => (`${name}  Population=${population}`)}
                />}
                right={
                    <PlanetDetails itemId={this.state.selectedPlanet}>
                        <Record field="population" label="Population"/>
                        <Record field="rotationPeriod" label="Rotation Period"/>
                        <Record field="diameter" label="Diameter"/>
                    </PlanetDetails>
                }
            />
        );
    }
}
