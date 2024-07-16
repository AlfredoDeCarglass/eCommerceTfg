// OrderScreen.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { MemoryRouter, Route } from 'react-router-dom';
import OrderScreen from './OrderScreen';
import { Store } from '../../Store';

jest.mock('axios');

describe('OrderScreen', () => {
  it('should render loading box while fetching order', async () => {
    axios.get.mockResolvedValueOnce({ data: {} });
    const { container } = render(<OrderScreen />, { wrapper: MemoryRouter });
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.loading-box')).toBeInTheDocument();
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}/api/orders/undefined`,
      { headers: { authorization: `Bearer null` } }
    );
  });

  it('should render order details correctly', async () => {
    const orderData = {
      _id: '123456',
      shippingAddress: {
        fullName: 'Test User',
        address: '123 Main St',
        city: 'Test City',
        postalCode: '12345',
        country: 'Test Country',
      },
      isDelivered: false,
      paymentMethod: 'PayPal',
      isPaid: false,
      orderItems: [
        {
          _id: '789',
          name: 'Test Product',
          image: '/images/test.jpg',
          quantity: 2,
          price: 10,
          slug: 'test-product',
        },
      ],
      itemsPrice: 20,
      shippingPrice: 5,
      taxPrice: 2,
      totalPrice: 27,
    };
    axios.get.mockResolvedValueOnce({ data: orderData });
    render(
      <Store.Provider value={{ state: { userInfo: { token: 'test-token' } } }}>
        <MemoryRouter initialEntries={['/order/123456']}>
          <Route path="/order/:id">
            <OrderScreen />
          </Route>
        </MemoryRouter>
      </Store.Provider>
    );
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText('Order 123456')).toBeInTheDocument();
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(
      screen.getByText('123 Main St, Test City, 12345, Test Country')
    ).toBeInTheDocument();
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByText('Not Delivered')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
    expect(screen.getByText('Method: PayPal')).toBeInTheDocument();
    expect(screen.getByText('Not Paid')).toBeInTheDocument();
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('Items')).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();
    expect(screen.getByText('$5')).toBeInTheDocument();
    expect(screen.getByText('$2')).toBeInTheDocument();
    expect(screen.getByText('Order Total')).toBeInTheDocument();
    expect(screen.getByText('$27')).toBeInTheDocument();
  });

  it('should show PayPal buttons if order is not paid', async () => {
    const orderData = {
      _id: '123456',
      isPaid: false,
    };
    axios.get.mockResolvedValueOnce({ data: orderData });
    render(
      <Store.Provider value={{ state: { userInfo: { token: 'test-token' } } }}>
        <MemoryRouter initialEntries={['/order/123456']}>
          <Route path="/order/:id">
            <OrderScreen />
          </Route>
        </MemoryRouter>
      </Store.Provider>
    );
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByRole('button', { name: 'paypal' })).toBeInTheDocument();
  });
});
