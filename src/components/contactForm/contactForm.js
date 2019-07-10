import React, {Component} from 'react';
import LogoDark from './Beans_logo_dark.svg'
import reply from './reply-solid.svg';
import mug from './mug-hot-solid.svg';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';


class ContactForm extends Component {

  state = {
    sent: false,
    items: null,
    email: '',
    name: '',
    phone: '',
    message: ''
  }

  changeForm = () => {
    this.setState({sent: !this.state.sent})
  }

  sendData = async (items) => {
    await fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    });
  };

  render() {
    const AlternativeForm = () => {
      return (
        <div className="contact__alt-form">
          <h1>Thank you so much</h1>
          <br/>
          <h1>We contact you as soon as possible</h1>
          <img src={mug} alt='mug'/>
          <button type="button" onClick={this.changeForm}>Another?<img src={reply} alt='reply'/></button>
        </div>
      )
    }

    const MainForm = ({
      errors,
      touched,
      isSubmitting
    }) => {
      return (
        <Form className="contact__form">
          <div className="contact__form__formgroup">
            { touched.name && errors.name && <p>{errors.name}</p>}
            <label htmlFor="somename">Name<span className="contact__form__asterisk">*</span></label>
            <Field type="text" name="name"/>
          </div>
          <div className="contact__form__formgroup">
            { touched.email && errors.email && <p>{errors.email}</p>}
            <label htmlFor="some">Email<span className="contact__form__asterisk">*</span></label>
            <Field type="email" name="email"/>
          </div>
          <div className="contact__form__formgroup">
            { touched.phone && errors.phone && <p>{errors.phone}</p>}
            <label htmlFor="somephone">Phone</label>
            <Field type="tel" name="phone"/>
          </div>
          <div className="contact__form__formgroup">
            <div className="contact__form__formgroup__4">
              { touched.message && errors.message && <p>{errors.message}</p>}
              <label htmlFor="somemessage">Your message<span className="contact__form__asterisk">*</span></label>
              <Field type="text" id="somemessage" name="message"/>
            </div>    
          </div>      
          <button disabled={isSubmitting}>Submit</button>
        </Form>
      )
    }

    const phoneRegExp = /\+7(\s+)?-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

    const FormikApp = withFormik({
      mapPropsToValues({ name, email, phone, message}) {
        return {
          email: email || '',
          name: name || '',
          phone: phone || '',
          message: message || ''
        }
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().email('Enter the proper email').required('Email is required'),
        name: Yup.string().min(2, 'Name must be at least 2 symbols').max(20, 'The name is too long, sorry').required('Name is required'),
        message: Yup.string().required('Message is requred'),
        phone: Yup.string().matches(phoneRegExp, 'Phonу number must be like +7-999-999-99-99')
      }),
      async handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
        if (values.email === 'thisemailistaken@test.io') {
          setErrors({ email: 'This email is already taken'})
        } else {
          await fetch('http://localhost:3000/contacts', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
          resetForm();
        }
        setSubmitting(false)
      }
    })(MainForm);

    const whatForm = (this.state.sent) ? <AlternativeForm/> : <FormikApp/>


    return (
      <section className="contact">
        <div className="title">Tell us about your tastes</div>
        <img className="beanslogo" src={LogoDark} alt="Beans logo"/>
        {whatForm}
      </section>  
    )
  }
}

export default ContactForm;