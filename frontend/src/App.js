import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faHome,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    src="sancho.ico"
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />{' '}
                  laManchaCommerce
                </Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                  Carréton
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ marginLeft: '5px' }}
                  />
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main className="mt-3 mb-3">
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="footer mt-auto py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-info">
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{ marginRight: '5px' }}
                    />
                    laManchaCommerce
                  </p>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      style={{ marginRight: '5px' }}
                    />
                    Dirección: Sierra del Gollino, Toledo, España, 45000
                  </p>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: '5px' }}
                    />
                    Correo electrónico: laManchaCommerce@xxxxx.com
                  </p>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: '5px' }}
                    />
                    Teléfono: +123456789
                  </p>
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
