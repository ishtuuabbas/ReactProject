import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AForm = ({ type }) => {
  const initialValues = {
    email: '',
    password: '',
    // Add more fields for signup if needed
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission, e.g., API call
    // Store user data in local storage on successful login
    localStorage.setItem('userData', JSON.stringify(values));
    // Redirect to the home screen using React Router
    // You'll need to implement this based on your router setup
    // For simplicity, we'll just refresh the page for demo purposes
    window.location.reload();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">{type === 'login' ? 'Login' : 'Signup'}</button>
      </Form>
    </Formik>
  );
};

export default AForm;
