import './App.css';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar className="App-nav" fixed="top">
        <Navbar.Brand className="App-nav-left">Navbar</Navbar.Brand> 
      </Navbar>
      <Container>
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
      </Container>

    </div>
  );
}

export default App;
