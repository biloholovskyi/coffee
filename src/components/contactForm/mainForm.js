import React, {Component} from 'react';
import LogoDark from './Beans_logo_dark.svg'
import reply from './reply-solid.svg';
import mug from './mug-hot-solid.svg';
import {Form, Field, Formik} from 'formik';
import * as Yup from 'yup';

class MainForm extends Component {

    state = {
      sent: false
    }
  
  
    render() {
        const phoneRegExp = /\+7(\s+)?-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

        const validationSchema = Yup.object().shape({
            email: Yup.string().email('Enter the proper email').required('Email is required'),
            name: Yup.string().min(2, 'Name must be at least 2 symbols').max(20, 'The name is too long, sorry').required('Name is required'),
            message: Yup.string().required('Message is required'),
            phone: Yup.string().matches(phoneRegExp, 'Phone number must be like +7-999-999-99-99')
        });
        
        const AlternativeForm = () => {
            return (
              <div className="contact__alt-form">
                <h1>Thank you so much</h1>
                <br/>
                <h1>We contact you as soon as possible</h1>
                <img src={mug} alt='mug'/>
                <button type="button" onClick={() => this.setState({sent: false})}>Another?<img src={reply} alt='reply'/></button>
              </div>
            )
        }

        const TheForm = () => {
            return (
                <Formik
                    initialValues={{ name: '', email: '', phone: '', message: '' }}
                    onSubmit={ (values) => {
                        setTimeout( () => {fetch('http://localhost:3000/contacts', {
                            method: 'POST',
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(values)
                            });
                            }, 3000);                       
                        this.setState({sent: true});
                    }}
                    validationSchema={validationSchema}
                    render = { ({errors, touched, handleSubmit}) => ( <Form onSubmit={handleSubmit} className="contact__form">
                        <div className="contact__form__formgroup">
                            { touched.name && errors.name && <p className="errmessage">{errors.name}</p>}
                            <label htmlFor="somename">Name<span className="contact__form__asterisk">*</span></label>
                            <Field type="text" name="name"/>
                        </div>
                        <div className="contact__form__formgroup">
                            { touched.email && errors.email && <p className="errmessage">{errors.email}</p>}
                            <label htmlFor="some">Email<span className="contact__form__asterisk">*</span></label>
                            <Field type="email" name="email"/>
                        </div>
                        <div className="contact__form__formgroup">
                            { touched.phone && errors.phone && <p className="errmessage">{errors.phone}</p>}
                            <label htmlFor="somephone">Phone</label>
                            <Field type="tel" name="phone" placeholder="+7(___) ___-____"/>
                        </div>
                        <div className="contact__form__formgroup">
                        <div className="contact__form__formgroup__4">
                            { touched.message && errors.message && <p className="errmessage">{errors.message}</p>}
                            <label htmlFor="somemessage">Your message<span className="contact__form__asterisk">*</span></label>
                            <Field type="text" id="somemessage" name="message" placeholder="Tell us..."/>
                        </div>
                        </div>      
                        <button type="submit">Send us</button>
                    </Form>  
                    )}          
                />
            )
        }

        const whichForm = (this.state.sent) ? <AlternativeForm/> : <TheForm/>
  
      return (
        <section className="contact">
          <div className="title">Tell us about your tastes</div>
          <img className="beanslogo" src={LogoDark} alt="Beans logo"/>
            {whichForm}
        </section>  
      )
    }
}
  
export default MainForm;