import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {selectedItem} from '../../actions';
import {withRouter} from 'react-router-dom';

class BestCoffeeItem extends Component {
    render() {
        const {name, url, price, id} = this.props.item;

        const someAct = () => {
            this.props.selectedItem(id);
            const history = this.props.history;
            history.push(`/coffee/${id}`)};
    
        return (
            <div className="best__item" onClick={someAct}>
                <img src={url} alt="coffee"/>
                <div className="best__item-title">
                    {name}
                </div>
                <div className="best__item-price">{price}$</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.selected,
        id: state.id
    }
}

const mapDispatchToProps = {
    selectedItem
}

export default withRouter(WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(BestCoffeeItem)));