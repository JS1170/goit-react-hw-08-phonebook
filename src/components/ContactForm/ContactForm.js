import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import scss from './contactForm.module.scss';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

const schema = yup
  .object()
  .shape({ name: yup.string().required(), phone: yup.string().required() });

export default function ContactForm({ submitForm }) {
  const baseValues = { name: '', phone: '' };
  const onSubmitChange = ({ name, phone }, { resetForm }) => {
    const newContact = { name, phone };
    submitForm(newContact);
    resetForm();
  };

  return (
    <Formik
      onSubmit={onSubmitChange}
      initialValues={baseValues}
      validationSchema={schema}
    >
      <Form className={scss.form}>
        <label className={scss.formLabel}>
          <span>Name</span>
          <Field
            className={scss.formInput}
            // value={name}
            // onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <FormError name="name" title="title" />
        </label>
        <label className={scss.formLabel}>
          <span>Number</span>
          <Field
            className={scss.formInput}
            // value={phone}
            // onChange={e => setNumber(e.target.value)}
            type="tel"
            name="phone"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <FormError name="name" title="title" />
        </label>
        <button className={scss.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
