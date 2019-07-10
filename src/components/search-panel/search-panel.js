import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {searchItems} from '../../actions';

class SearchPanel extends Component {
    render() {
        return (
            <Row className="row">
                <Col lg={{size: 4, offset: 2}}>
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input onChange={(e) => this.props.searchItems(e.target.value)} id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
                    </form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

const mapDispatchToProps = {
    searchItems
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(SearchPanel));