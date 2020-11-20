import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Login.css'
import { Link } from "react-router-dom";
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email('Ingrese un Email Valido'),
  password: yup.string().required('Ingrese Password').min(6, 'Debe Ingresar un Password de 6 a 12 caracteres').max(12, 'Debe Ingresar un Password de 6 a 12 caracteres')

});

const handleSubmit = (event) => {
  const form = event.currentTarget;

  const email = document.getElementById('formBasicEmail')

  console.log(email.value)

};


const Login = () => {

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        userName: '',
        password: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" >
                {errors.email}
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Nombre de Usuario
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={touched.email && !!errors.password}
              />

              <Form.Control.Feedback type="invalid" >
                {errors.password}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Iniciar Sesion
  </Button>
            <Link to="/register"><Button variant="secondary">Registrarse</Button></Link>
          </Form>
        )}
    </Formik>

  )

}
export default Login