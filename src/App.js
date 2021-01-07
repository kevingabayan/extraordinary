import './App.css';
import { Container, Col, Navbar, Nav, Row } from 'react-bootstrap';
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
      <Container fluid>
        <Row>
          <Col>
            <header id="eo" className="App-header">
              <p>
                Extraordinary [prod. Jeff kaale]
              </p>
            </header>
          </Col>
          <Col>
            <header className="App-header">
              <p>
                Tick, Tock, Tick, Tock...
              </p>
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <header id="tot" className="App-header">
              <p>
                The Only Thing [prod. Gyvus]
              </p>
            </header>
          </Col>
          <Col>
            <header id="tot" className="App-header">
              <p>
                Forever, Ever?
              </p>
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <header id="rt" className="App-header">
              <p>
                Road Trip [prod. Joakim Karud]
              </p>
          </header>
          </Col>
          <Col>
            <header id="rt" className="App-header">
              <p>
                1, 2, 3, 4...
              </p>
            </header>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;
