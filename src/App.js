import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar/NavigationBar'

import Home from './pages/Home/Home'
import Universities from './pages/Universities/Universities';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Container className="mt-3" fluid>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/universities" element={<Universities />} />
                <Route path="/postal" />
              </Routes>
              
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
