import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactFormFunc = props => {
  const { handleSubmit } = props;

  const submitMyForm = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(submitMyForm)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactFormFunc)

export default ContactForm