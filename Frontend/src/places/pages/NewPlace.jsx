import React from 'react'
import './NewPlace.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from "formik";
import { signUpSchema } from '../../shared/components/FormElements/Schemas';
const initialValues = {
  name: '',
  // email: ''
  textarea: "",
  address:''
}

export default function NewPlace() {
  // all are provide by formik we have to just write in code 
  // const formik = useFormik({
  const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // setSubmitting(false);
      console.log("submitted")
      console.log(values); // stops default submission
      // resetForm(); //for clearing the data after submission

    }
  });


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

      {/* <div>
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
      </div> */}
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          autoComplete='off'
          name="address"
          id="address"
          placeholder="Address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address && touched.address ? <p className='form-error'>{errors.address}</p> : null}
      </div>
      <div>
        <label htmlFor="textarea">Description</label>
        <textarea
          autoComplete='off'
          name='textarea'
          id='textarea'
          placeholder='Enter description'
          value={values.textarea}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={3}
        />
        {errors.textarea && touched.textarea ? <p className='form-error'>{errors.textarea}</p> : null}
      </div>

      <button type="submit" >Submit</button>
    </form>
  );
}
