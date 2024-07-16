import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Store } from './Store';

const renderApp = (component) => {
  return render(
    <Store>
      <BrowserRouter>{component}</BrowserRouter>
    </Store>
  );
};

describe('App Component', () => {
  test('should display laManchaCommerce Navbar logo text', () => {
    renderApp(<App />);
    const navbarBrand = screen.getByText(/laManchaCommerce/);
    expect(navbarBrand).toBeInTheDocument();
  });

  test('should have sign in link when user is not signed in', () => {
    renderApp(<App />);
    const signInLink = screen.getByText('Sign In');
    expect(signInLink).toBeInTheDocument();
  });

  test('should show user profile and sign out when user is signed in', () => {
    // Mock user context to simulate user being signed in
    renderApp(<App />, {
      state: { userInfo: { name: 'John Doe' }, cart: { cartItems: [] } },
      dispatch: jest.fn(),
    });
    const userProfile = screen.getByText('John Doe');
    expect(userProfile).toBeInTheDocument();

    const signOut = screen.getByText('Sign Out');
    fireEvent.click(signOut);
    expect(localStorage.removeItem).toHaveBeenCalledTimes(3); // userInfo, shippingAddress, paymentMethod
    expect(window.location.href).toContain('/signin');
  });

  test('displays correct number of items in the cart badge', () => {
    renderApp(<App />, {
      state: { cart: { cartItems: [{ quantity: 1 }, { quantity: 2 }] } },
    });
    const cartBadge = screen.getByText('3');
    expect(cartBadge).toBeInTheDocument();
  });

  test('should navigate to correct screen routes', () => {
    renderApp(<App />);
    const homeScreenLink = screen.getByText(/laManchaCommerce/).closest('a');
    const cartScreenLink = screen.getByText('Cart').closest('a');
    const signInScreenLink = screen.getByText('Sign In').closest('a');

    // validate if clicking these links would navigate to the correct path expect(homeScreenLink).toHaveAttribute('href', '/');
    expect(cartScreenUse).toHaveAttribute('href', '/cart');
    expect(signInScreenLink).toHaveAttribute('href', '/signin');
  });

  test('footer displays copyright and contact info', () => {
    renderApp(<App />);
    const footerText = screen.getByText(/Todos los derechos reservados/);
    expect(footerText).toBeInTheDocument();

    const phoneText = screen.getByText('Teléfono: +123456789');
    expect(phoneText).toBeInTheDocument();
  });
});
