import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Screens/Home/Home';
import About from './Screens/About/About';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import logo from "./Assets/WVDOT.png";

function App() {
  return (
    <Fragment>
          <Router>
            {/* Nav bar that is included in all pages */}
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/"><img src={logo} style={{ width: 30, height: 30}} alt="It didn't load."/></Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/About">About</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

            
            <Fragment>
              <Switch>
                <Route exact path="/" component={Home}>
                  <Home/>
                </Route>
                <Route exact path="/About" component={About}>
                  <About/>
                </Route>
              </Switch>
            </Fragment>
          </Router>
    </Fragment>
  );
}

export default App;
