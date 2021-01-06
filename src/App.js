import './App.css';
import { Navbar, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar fixed="top">
        <Container fluid>
        <Col sm={8}>
        <Navbar.Text className="App-nav text-center">kgabayan@cs.stonybrook.edu</Navbar.Text>
        </Col>
        <Navbar.Text className="App-nav text-center">Extraordinary</Navbar.Text>
        <Navbar.Text className="App-nav text-center">The Only Thing</Navbar.Text>
        <Navbar.Text className="App-nav text-center">Road Trip</Navbar.Text>
        </Container>
      </Navbar>
        <header className="App-header">
          <p>
            Extraordinary
          </p>
        </header>
        <header className="App-header">
          <p>
            The Only Thing
          </p>
        </header>
        <header className="App-header">
          <p>
            Road Trip
          </p>
        </header>
    </div>
  );
}

export default App;
