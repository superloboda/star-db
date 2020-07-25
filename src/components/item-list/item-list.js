import React from 'react';
import './item-list.css'

const ItemList = (props) => {

    const {data, renderItem, onItemSelected} = props;
    const elements = data.map((item) => {
        const {id} = item;
        const rendered = renderItem(item);
        return (
            <li key={id} className="list-group-item" onClick={() => onItemSelected(id)}>
                {rendered}
            </li>
        );
    });
    return (
        <div className="item-list list-group">
            {elements}
        </div>
    );

}
export default ItemList;