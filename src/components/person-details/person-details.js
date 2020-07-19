import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '.././spinner/spinner';


export default class PersonDetails extends Component {	

	swapiService = new SwapiService();


	state = {
		person: null,
		loading: true
	}

	componentDidMount(){
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId){
			this.updatePerson();
		}
	}

	updatePerson() {
		this.setState({loading: true});
		const { personId } = this.props;
		console.log(personId);
		if (!personId){
			return;
		}

		this.swapiService
			.getPerson(personId)
			.then((person) => {
				this.setState({person, loading: false})
			});
	}

	render (){

		if (!this.state.person && this.state.loading){
			return <span> Select person!!! </span>
		}

		const spinner = this.state.loading ? <Spinner /> : null;
		const content = !this.state.loading ? <PersonView person={this.state.person}/> : null;
		return (
			<div className="person-details card">
				{spinner}
				{content}
			</div>
		);
	}

}


const PersonView = ({person}) => {
	return (
				<React.Fragment>
					<img alt={person.name} className="person-image" src="url"/> 
					<div className="card-body">
					<h4>{person.name} </h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term"> Gender </span>
							<span>{person.gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term"> Hair color </span>
							<span>{person.hairColor}</span>
						</li>
						<li className="list-group-item">
							<span className="term"> height </span>
							<span>{person.height}</span>
						</li>
					</ul>
					</div>
				</React.Fragment>
	);
}

