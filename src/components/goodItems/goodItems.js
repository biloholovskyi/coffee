import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {itemsLoaded, somethingLoading, errorOccurred} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import GoodItem from '../goodItem';
import MainBlock from '../mainBlock';

class GoodItems extends Component {
    componentDidMount() {
        this.props.somethingLoading();

        const {CoffeeService} = this.props;
        CoffeeService.getGoods()
            .then(res => this.props.itemsLoaded(res, 'GOODS_LOADED'))
            .catch(this.props.errorOccurred);
    }

    render() {
        const {loading, error, goods} = this.props;

        if (error) {
            return <Error/>
        }
    
        const isLoaded = (loading) ? <Spinner/> : <MainBlock items={goods} Component={GoodItem}/>
    
        return (
        <Row className="row">
            <Col lg={{size: 10, offset: 1}}>
                <div className="pleasure__wrapper">
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
        goods: state.goods,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    itemsLoaded,
    somethingLoading,
    errorOccurred
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(GoodItems));