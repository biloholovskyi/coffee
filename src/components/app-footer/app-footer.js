import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './footer.sass';
import BeansDark from './Beans_logo_dark.svg';
import LogoDark from './Logo_black.svg';


const AppFooter = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={{size: 5, offset: 4}}>
            <ul className="footer">
              <li className="footer__item">
                <Link to="/">
                  <img src={LogoDark} alt="logo"/>
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/coffee">Our coffee</Link>
              </li>
              <li className="footer__item">
                <Link to="/pleasure">For your pleasure</Link>
              </li>
              <li className="footer__item">
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <img className="beanslogo" src={BeansDark} alt="Beans logo"/>
      </Container>
    </footer>
  )
}

export default AppFooter;