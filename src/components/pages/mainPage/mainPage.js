import React from 'react';
import logo from './Beans_logo.svg';
import './mainpage.sass';
import {Row, Col, Container} from 'reactstrap';
import AppHeader from '../../app-header';
import {Link} from 'react-router-dom';
import BestCoffee from '../../bestCoffee/bestCoffee';
import AboutUs from '../../aboutUs';
import AppFooter from '../../app-footer';

const MainPage = () => {
    return (
        <>
            <Container className='preview'>
                <AppHeader/>
                <Row className="row">
                        <Col lg={{size: 10, offset: 1}}>
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                            <img className="beanslogo" src={logo} alt="Beans logo"/>
                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                            <div className="preview__subtitle">Want to try our beans?</div>
                            <Link to="/coffee" className="preview__btn">More</Link>
                        </Col>
                </Row>
            </Container>
            <AboutUs/>
            <BestCoffee/>
            <AppFooter/>
        </>
    )
}

export default MainPage;