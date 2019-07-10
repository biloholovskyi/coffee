import React from 'react';
import logo from './Logo.svg';
import './app-header.sass';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

const AppHeader = () => {
    return (
            <Row>
                <Col lg={{size: 6, offset: 0}}>
                    <div className='header'>
                        <ul className="header">
                            <li className="header__item">
                                <Link to="/">
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/coffee">Our coffee</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/pleasure">For your pleasure</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
    )
}

export default AppHeader;