import React from 'react';
import AppHeader from '../../app-header';
import {Container} from 'reactstrap';
import AppFooter from '../../app-footer';
import CoffeeItem from '../../coffeeItem';
import {connect} from 'react-redux';

const CoffeeItemPage = ({pageId}) => {
    return (
        <>
            <Container className='banner'>
                <AppHeader/>
                <h1 className="title-big">Your coffee</h1>
            </Container>
            <CoffeeItem pageId={pageId}/>
            <AppFooter/>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        pageId: ownProps.match.params.id
    }
}

export default connect(mapStateToProps)(CoffeeItemPage);