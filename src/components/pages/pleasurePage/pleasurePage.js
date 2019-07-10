import React from 'react';
import AppHeader from '../../app-header';
import {Container} from 'reactstrap';
import './pleasurePage.sass';
import AppFooter from '../../app-footer';
import AboutGoods from '../../aboutGoods';
import GoodItems from '../../goodItems/goodItems';

const PleasurePage = () => {
    return (
    <>
        <Container className='pleasure-banner'>
            <AppHeader/>
            <h1 className="title-big">For your pleasure</h1>
        </Container>
        <section className="pleasure">
                <AboutGoods/>
                <div className="line"></div>
                <GoodItems/>
        </section>
        <AppFooter/>
    </>
    )
}

export default PleasurePage;