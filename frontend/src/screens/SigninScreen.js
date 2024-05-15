import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>

      <Form className="login-form">
        <h1 className="my-3">Iniciar Sesión</h1>
        <div className="input-group">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
        </div>
        <div className="input-group">
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
        </div>
        <div className="mb-3">
          <Button className="button" type="submit">
            Iniciar Sesión
          </Button>
        </div>
        <div className="mb-3 bottom-text">
          ¿Eres nuevo aquí?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Crea tu cuenta</Link>
        </div>
      </Form>
    </Container>
  );
}
