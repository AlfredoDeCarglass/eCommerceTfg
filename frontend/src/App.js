import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>laManchaCommerce</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="footer mt-auto py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-info">
                  <p className="mb-0">laManchaCommerce</p>
                  <p className="mb-0">Dirección: Corral de Almaguer, España</p>
                  <p className="mb-0">
                    Correo electrónico: alfredo.formacioning@gmail.com
                  </p>
                  <p className="mb-0">Teléfono: +123456789</p>
                </div>
              </div>
              <div className="social-icons col-md-6 d-flex justify-content-md-end justify-content-center">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  style={{ marginRight: '10px' }}
                >
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  style={{ marginRight: '10px' }}
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  style={{ marginRight: '10px' }}
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col text-center">
                <p className="mb-0">
                  &copy; 2024 Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
