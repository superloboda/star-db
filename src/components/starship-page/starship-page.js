import React, {Component} from "react";
import Row from "../row/row";
import {StarshipDetails, StarshipList} from "../../sw-components";
import Record from "../record/record";

export default class StarshipPage extends Component {

    state = {
        selectedStarship: null
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectedStarship: id
        });
    }

    render() {
        return <Row
            left={<StarshipList onItemSelected={this.onStarshipSelected}
                                renderItem={({name}) => (`${name}`)}
            />}
            right={
                <StarshipDetails itemId={this.state.selectedStarship}>
                    <Record field="model" label="Model"/>
                    <Record field="manufacturer" label="Manufacturer"/>
                </StarshipDetails>
            }
        />
    }
}