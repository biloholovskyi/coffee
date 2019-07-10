import React, {Component} from 'react';
import DarkLogo from './Beans_logo_dark.svg'
import {Row, Col, Container} from 'reactstrap';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {somethingLoading, errorOccurred, itemsLoaded} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CoffeeItem extends Component {
    state = {
        description: this.props.selected.description.slice(0, 200) + '...'
    }

    componentDidMount() {
        this.props.somethingLoading();

        const {CoffeeService} = this.props;
        CoffeeService.getAllCoffee()
            .then(res => this.props.itemsLoaded(res, 'COFFEE_LOADED'))
            .catch(this.props.errorOccurred);
    }

    showFullDesc = () => {
        this.setState({description: this.props.selected.description})
    }

    render() {
        const {loading, error, pageId, coffee} = this.props;

        if (error) {
            return <Error/>
        }

        const selected = coffee.find(item => item.id === pageId)

        const MainBlock = () => {
            return (
                <Container className="container">
                    <Row className="rowitem">
                        <Col lg={{size: 5, offset: 1}}>
                            <img className="shop__girl_item" src={selected.url} alt="coffee_item"/>
                        </Col>
                        <Col lg={{size: 4}}>
                            <div className="title">About it</div>
                            <img className="beanslogo" src={DarkLogo} alt="Beans logo"/>
                            <div className="shop__point">
                                <span>Country: </span>
                                {selected.country}
                            </div>
                            <div className="shop__point" onClick={this.showFullDesc}>
                                <span>Description: </span>
                                {this.state.description}
                            </div>
                            <div className="shop__point">
                                <span>Price: </span>
                                <span className="shop__point-price">{selected.price}$</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }

        const isLoaded = (loading) ? <Spinner/> : <MainBlock/>

        return (
            <section className="shop">
                {isLoaded}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.selected,
        error: state.error,
        loading: state.loading,
        coffee: state.coffee
    }
}

const mapDispatchToProps = {
    somethingLoading,
    errorOccurred,
    itemsLoaded
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeItem));