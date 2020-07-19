import React, {Component} from 'react';
import './item-list.css'
import SwapiService from '../../services/swapi-service';
import Spinner from '.././spinner/spinner';

export default class ItemList extends Component {	

	swapiService = new SwapiService();

	state = {
		peopleList: null
	};

	componentDidMount(){

		this.swapiService
		.getAllPeople()
		.then((peopleList) => {
			this.setState({
				peopleList
			});
		});
	}


	renderPeopleList (peopleList) {
		return peopleList.map((person) => {
   			const {id, name } = person;
    		return (
      			<li key={id} className="list-group-item" onClick={()=>this.props.onItemSelected(id)}>
					{name}
				</li>
   			);
  		});
	}


	render (){
		const {peopleList} = this.state;
		if (!peopleList){
			return <Spinner/>
		}

		const elements = this.renderPeopleList(peopleList);

		return (
			<div className="item-list list-group">
				{elements}
			</div>

		);
	}
}