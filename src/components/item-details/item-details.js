import React, {Component} from 'react';

export default class ItemDetails extends Component {

    render() {
        const {item} = this.props;
        const content = <div className="card-body">
            <h4>{item.name} </h4>
            <ul className="list-group list-group-flush">
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, { item });
                })}
            </ul>
        </div>

        return (
            <div className="item-details card">
                {content}
            </div>
        );
    }
}