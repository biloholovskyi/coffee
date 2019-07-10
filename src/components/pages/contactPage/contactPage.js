import React from 'react';
import AppHeader from '../../app-header';
import {Container} from 'reactstrap';
import './contactPage.sass';
import AppFooter from '../../app-footer';
import ContactForm from '../../contactForm';

const ContactPage = () => {
    return (
    <>
        <Container className='contact-banner'>
            <AppHeader/>
            <h1 className="title-big">Contact us</h1>
        </Container>
        <ContactForm/>
        <AppFooter/>
    </>
    )
}

export default ContactPage;