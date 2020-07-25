import React, {Component} from "react";
import Row from "../row/row";
import ErrorBoundary from "../error-boundary/error-boundary";
import {PersonDetails, PersonList} from "../../sw-components";
import Record from "../record/record";

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <Row left={
                    <PersonList
                        onItemSelected={this.onPersonSelected}
                        renderItem={({name, birthYear}) => (`${name} (${birthYear})`)}
                    />}

                     right={
                         <PersonDetails itemId={this.state.selectedPerson}>
                             <Record field="name" label="Name"/>
                             <Record field="mass" label="Mass"/>
                             <Record field="hairColor" label="Hair color"/>
                             <Record field="gender" label="Gender"/>
                         </PersonDetails>
                     }
                />
            </ErrorBoundary>
        );
    }
}