import React from 'react'
import './NewPlace.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from "formik";
import { signUpSchema } from '../../shared/components/FormElements/Schemas';
const initialValues = {
  name: '',
  email: ''
}

export default function NewPlace() {
  // all are provide by formik we have to just write in code 
  // const formik = useFormik({
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // setSubmitting(false);
      console.log(values); // stops default submission
      resetForm(); //for clearing the data after submission

    }
  });
  // console.log(formik)

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          autoComplete='off'
          name="name"
          id="name"
          placeholder="Name"
          // provided by default by formik both values and onchange
          value={values.name}
          onChange={handleChange} //these are returned by formik automatically
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? <p className='form-error'>{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          autoComplete='off'
          name="email"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? <p className='form-error'>{errors.email}</p> : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
