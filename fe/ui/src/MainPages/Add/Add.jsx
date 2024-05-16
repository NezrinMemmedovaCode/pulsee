import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

function Add() {
  return (

    <div className='container'>
      <h1>Salam</h1>
         <Formik
       initialValues={{ img: '', name: '', price: '' }}
       validationSchema={Yup.object({
        img: Yup.string()
           .max(50440, 'Must be 15 characters or less')
           .required('Required'),
           name: Yup.string()
           .max(5999, 'Must be 20 characters or less')
           .required('Required'),
           price: Yup.string()
           .max(244440, 'Must be 20 characters or less')
           .required('Required'),
         
       })}
       onSubmit={(values) => {
         fetch("http://localhost:3000/user" , {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
         })
         
       }}
     >
       <Form>
         <label htmlFor="img">img</label>
         <Field name="img" type="url" />
         <ErrorMessage name="img" />
 
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
        
    </div>
  )
}

export default Add