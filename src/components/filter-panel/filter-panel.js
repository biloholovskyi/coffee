import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {filterItems} from '../../actions';

class FilterPanel extends Component {
    render() {
        return (
            <Row className="row">
                <Col lg={{size: 4}}>
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button onClick={() => this.props.filterItems('all')} className="shop__filter-btn">All</button>
                            <button onClick={() => this.props.filterItems('Brazil')} className="shop__filter-btn">Brazil</button>
                            <button onClick={() => this.props.filterItems('Kenya')} className="shop__filter-btn">Kenya</button>
                            <button onClick={() => this.props.filterItems('Columbia')} className="shop__filter-btn">Columbia</button>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    filterItems
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(FilterPanel));