//firebase
import { db, auth } from './firebase'

//rutas
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//estilos y bootstrap
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import './App.css';

//Pages
import Home from './pages/Home'
import Register from './pages/Register'


const Nosotros = () => <p>Nosotros</p>
const Contacto = () => <p>contacto</p>



function App() {
  return (
    <Router>
      <div className="Container-fluid">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">  <Nav.Link href="#home">Home</Nav.Link></Link>
              <Link to="/nosotros"> <Nav.Link href="#link">Nosotros</Nav.Link></Link>
              <Link to="/contacto"> <Nav.Link href="#link">Contacto</Nav.Link></Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>


        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/nosotros"><Nosotros /></Route>
          <Route path="/contacto"><Contacto /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>



        <footer>
          <p>footer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
