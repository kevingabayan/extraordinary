import './App.css';
import { Container, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar fixed="top">
        <Container fluid>
        <Col sm={8}>
        <Navbar.Text className="App-nav text-center">kgabayan@cs.stonybrook.edu</Navbar.Text>
        </Col>
        <Nav.Link href="#eo" className="App-nav text-center">Extraordinary</Nav.Link>
        <Nav.Link href="#tot" className="App-nav text-center">The Only Thing</Nav.Link>
        <Nav.Link href="#rt" className="App-nav text-center">Road Trip</Nav.Link>
        </Container>
      </Navbar>
        <header id="eo" className="App-header">
          <p>
            Extraordinary
          </p>
        </header>
        <header id="tot" className="App-header">
          <p>
            The Only Thing
          </p>
        </header>
        <header id="rt" className="App-header">
          <p>
            Road Trip
          </p>
        </header>
    </div>
  );
}

export default App;
