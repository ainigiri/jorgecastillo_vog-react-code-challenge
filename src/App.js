import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar/NavigationBar'

import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Container fluid>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="universities" />
                  <Route path="postal" />
                </Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
