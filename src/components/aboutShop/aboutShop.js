import React from 'react';
import {Row, Col} from 'reactstrap';
import LogoDark from './Beans_logo_dark.svg';
import girl from './coffee_girl.jpg';

const AboutShop = () => {
    return (
    <Row className="rowshop">
        <Col lg={{size: 4, offset: 2}}>
            <img className="shop__girl" src={girl} alt="girl"/>
        </Col>
        <Col lg={{size: 4}}>
            <div className="title">About our beans</div>
            <img className="beanslogo" src={LogoDark} alt="Beans logo"/>
            <div className="shop__text">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br/><br/>
                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                so questions. <br/>
                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                is song that held help face.
            </div>
        </Col>
    </Row>
    )
}

export default AboutShop;