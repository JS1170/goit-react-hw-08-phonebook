import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import scss from './ContactForm.module.scss';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'Redux/contacts/contactsSelector';

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

const schema = yup
  .object()
  .shape({ name: yup.string().required(), number: yup.string().required() });

export function ContactForm({ submitForm }) {
  const isLoading = useSelector(getIsLoading);
  const baseValues = { name: '', number: '' };
  const onSubmitChange = ({ name, number }, { resetForm }) => {
    const newContact = { name, number };
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
          <Field className={scss.formInput} type="text" name="name" />
          <FormError name="name" title="title" />
        </label>
        <label className={scss.formLabel}>
          <span>Number</span>
          <Field className={scss.formInput} type="tel" name="number" />
          <FormError name="number" title="title" />
        </label>
        <button className={scss.btn} type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Add contact'}
        </button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
