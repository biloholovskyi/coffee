import React from 'react';
import AppHeader from '../../app-header';
import {Container} from 'reactstrap';
import './coffeepage.sass';
import AboutShop from '../../aboutShop';
import AppFooter from '../../app-footer';
import SearchPanel from '../../search-panel';
import CoffeeItems from '../../coffeeItems';
import FilterPanel from '../../filter-panel';

const CoffeePage = () => {
    return (
        <>
            <Container className='banner'>
                <AppHeader/>
                <h1 className="title-big">Our coffee</h1>
            </Container>
            <section className="shop">
                <AboutShop/>
                <div className="line"></div>
                <SearchPanel/>
                <FilterPanel/>
                <CoffeeItems/>
            </section>
            <AppFooter/>
        </>
    )
}

export default CoffeePage;