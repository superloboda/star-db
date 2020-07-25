import React, {Component} from "react";
import Spinner from "../components/spinner/spinner";
import ItemList from "../components/item-list/item-list";

const itemListWithData = (getData) => {
    return class extends Component {

        state = {
            data: null
        };

        componentDidMount() {
            getData().then((data) => {
                this.setState({
                    data
                });
            });
        }

        render() {
            const {data} = this.state;
            if (!data) {
                return <Spinner/>
            }
            return <ItemList {...this.props} data={data}/>
        }
    };
};

export default itemListWithData;