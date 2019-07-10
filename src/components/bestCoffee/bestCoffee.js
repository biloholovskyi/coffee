import React, {Component} from 'react';
import {Row, Col, Container} from 'reactstrap';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import BestCoffeeItem from '../bestCoffeeItem';
import {itemsLoaded, somethingLoading, errorOccurred} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import MainBlock from '../mainBlock';

class BestCoffee extends Component {

    componentDidMount() {
        this.props.somethingLoading();

        const {CoffeeService} = this.props;
        CoffeeService.getBestsellers()
            .then(res => this.props.itemsLoaded(res, 'BEST_COFFEE_LOADED'))
            .catch(this.props.errorOccurred);

        CoffeeService.getAllCoffee()
            .then(res => this.props.itemsLoaded(res, 'COFFEE_LOADED'))
            .catch(this.props.errorOccurred);
    }

    render() {
        const {loading, error, bestsellers} = this.props;

        if (error) {
            return <Error/>
        }

        const isLoaded = (loading) ? <Spinner/> : <MainBlock items={bestsellers} Component={BestCoffeeItem}/>

        return (
            <section className="best">
                <Container className="container">
                    <div className="title">Our best</div>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            <div className="best__wrapper">
                                {
                                    isLoaded
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bestsellers: state.bestsellers,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    itemsLoaded,
    somethingLoading,
    errorOccurred
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(BestCoffee));