import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Login.css'
import { Link } from "react-router-dom";


const Login = () => {

  return (

    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
    </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar Sesion
  </Button>
      <Link to="/register"><Button variant="secondary">Registrarse</Button></Link>
    </Form>


  )

}
export default Login