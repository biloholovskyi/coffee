import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import LogoDark from './Beans_logo_dark.svg';

const AboutUs = () => {
    return (
        <section className="about">
            <Container className="container">
                <Row className="row">
                    <Col lg={{size: 6, offset: 3}}>
                        <div className="title">About Us</div>
                        <img className="beanslogo" src={LogoDark} alt="Beans logo"/>
                        <div className="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br/><br/>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs;