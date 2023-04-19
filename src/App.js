import { useFormik } from "formik";
import React from "react";

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values =>{
      console.log('form', values);
    },
    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'Field Required';
      if (!values.email) {
        errors.email = "Field Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email= "Username should be an email";
        } 
      if(!values.password) errors.password = 'Field Required';
      if (formik.errors.name === undefined && formik.errors.email === undefined && formik.errors.password === undefined) {
        window.alert("Login Successful");
      } 
      return errors;
      
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: undefined}

        <div>Email</div>
        <input name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div>: undefined}
        
        <div>Password</div>
        <input name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.pswField}</div>: undefined}
        <button id="submitBtn" type="submit">Submit</button>

      </form>
    </div>
  )


  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
    </div>
  );
}

export default App;
