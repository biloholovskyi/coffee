import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import CoffeeItemsItem from '../coffeeItemsItem';
import {itemsLoaded, somethingLoading, errorOccurred} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import MainBlock from '../mainBlock';

class CoffeeItems extends Component {
    componentDidMount() {
        this.props.somethingLoading();

        const {CoffeeService} = this.props;
        CoffeeService.getAllCoffee()
            .then(res => this.props.itemsLoaded(res, 'COFFEE_LOADED'))
            .catch(this.props.errorOccurred);
    }

    render() {
        const {loading, error, coffee, filter, search} = this.props;

        if (error) {
            return <Error/>
        }

        let visible = coffee.filter(item => {
           if (filter === 'all') {
               return item;
           } else {
               return item.country === filter;
           }
        });

        visible = visible.filter(item => {
            if (search === '') {
                return item;
            } else {
                return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            }
        });

        const isLoaded = (loading) ? <Spinner/> : <MainBlock items={visible} Component={CoffeeItemsItem}/>
        return (
            <Row className="row">
                <Col lg={{size: 10, offset: 1}}>
                    <div className="shop__wrapper">
                       {
                        isLoaded
                       }
                    </div>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coffee: state.coffee,
        filter: state.filter,
        search: state.search,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    itemsLoaded,
    somethingLoading,
    errorOccurred
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeItems));