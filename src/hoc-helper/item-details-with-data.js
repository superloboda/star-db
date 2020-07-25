import React, {Component} from "react";
import Spinner from "../components/spinner/spinner";
import ItemDetails from "../components/item-details/item-details";

const itemDetailsWithData = (getData) => {
    return class extends Component {
        state = {
            item: null,
            loading: true
        }

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.updateItem();
            }
        }

        updateItem() {
            const {itemId} = this.props;
            this.setState({loading: true});
            if (!itemId) {
                return;
            }

            getData(itemId)
                .then((item) => {
                    this.setState({item, loading: false});
                });
        }

        render() {
            const {item, loading} = this.state;
            if (!item && loading) {
                return <span> Select item!!! </span>
            }

            if (loading) {
                return <Spinner/>
            }

            return <ItemDetails {...this.props} item={item}/>;
        }
    }
}

export default itemDetailsWithData;