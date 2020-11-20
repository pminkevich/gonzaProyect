import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email('Ingrese un Email Valido'),
  userName: yup.string().required('Falta Ingresar Nombre y Apellido').matches(/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/, { message: 'Ingrese su Nombre y Apellido', excludeEmptyString: true }),
  password: yup.string().required('Ingrese Password').min(6, 'Debe Ingresar un Password de 6 a 12 caracteres').max(12, 'Debe Ingresar un Password de 6 a 12 caracteres')

});




const Register = () => {

  //const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;


    console.log('submit')
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   console.log('no es valido')
    // }

    // setValidated(true);
  };



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
          <div className="registerBox">
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
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
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  isValid={touched.userName && !errors.userName}
                  isInvalid={touched.email && !!errors.userName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid" >
                  {errors.userName}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">

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
              {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
              <Button variant="primary" type="submit">
                Registrar
  </Button>
            </Form>


          </div>
        )}
    </Formik>

  )

}
export default Register