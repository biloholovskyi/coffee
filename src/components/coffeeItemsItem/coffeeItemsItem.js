import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {selectedItem} from '../../actions';

class CoffeeItemsItem extends Component {
    render() {
        const {name, price, url, country, id} = this.props.item;
        const someAct = () => {
            this.props.selectedItem(id);
            const history = this.props.history;
            history.push(`/coffee/${id}`)};
        return (
            <div className="shop__item" onClick={someAct}>
                <img src={url} alt="coffee"/>
                <div className="shop__item-title">
                    {name}
                </div>
                <div className="shop__item-country">{country}</div>
                <div className="shop__item-price">{price}$</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}

const mapDispatchToProps = {
    selectedItem
}

export default withRouter(WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeItemsItem)));