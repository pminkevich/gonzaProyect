//firebase
import { db, auth } from './firebase'

//rutas
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, useLocation } from "react-router-dom";

//estilos y bootstrap
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import './App.css';

//Pages
import Home from './pages/Home'
import Register from './pages/Register'

//componentes
import LocalList from './components/LocalList'

//redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//ejemplos pages
const Nosotros = () => <p>Nosotros</p>
const Contacto = () => <p>contacto</p>


//usando redux
const initialState = {
  localList: []

}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOCAL_LIST': {
      return { ...state, localList: action.payload }
    }
    default: {
      return state;
    }

  }
}

const store = createStore(reducer, initialState)



function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="Container-fluid">
          <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/">  <Nav.Link href="#home">Home</Nav.Link></Link>
                <Link to="/nosotros"> <Nav.Link href="#link">Nosotros</Nav.Link></Link>
                <Link to="/contacto"> <Nav.Link href="#link">Contacto</Nav.Link></Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link to="/locales/gomeria"><NavDropdown.Item href="#local">Gomerias</NavDropdown.Item></Link>
                  <Link to="/locales/taller"> <NavDropdown.Item href="#taller">Talleres</NavDropdown.Item></Link>
                  <Link to="/locales/estaciones"> <NavDropdown.Item href="#estaciones">Estaciones de Servicio</NavDropdown.Item></Link>
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
            <Route path="/locales/:tipo">
              <LocalList />
            </Route>




          </Switch>



          <footer>
            <p>footer</p>
          </footer>
        </div>
      </Router >
    </Provider>

  );
}

export default App;
