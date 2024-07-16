// // Product.test.js
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Product from './Product';
// import { Store } from '../../Store';

// const mockDispatch = jest.fn();
// const mockState = {
//   cart: { cartItems: [] },
// };

// jest.mock('axios');

// const product = {
//   _id: '1',
//   name: 'Test Product',
//   slug: 'test-product',
//   image: '/test-product.jpg',
//   price: 100,
//   countInStock: 10,
//   rating: 4.5,
//   numReviews: 10,
// };

// const renderWithContext = (component) => {
//   return render(
//     <Store.Provider value={{ state: mockState, dispatch: mockDispatch }}>
//       <Router>{component}</Router>
//     </Store.Provider>
//   );
// };

// test('renders Product component', () => {
//   renderWithContext(<Product product={product} />);
//   expect(screen.getByText('Test Product')).toBeInTheDocument();
//   expect(screen.getByText('100 €')).toBeInTheDocument();
//   expect(screen.getByAltText('Test Product')).toBeInTheDocument();
// });

// test('renders link to product details page', () => {
//   renderWithContext(<Product product={product} />);
//   const linkElement = screen.getByRole('link', { name: /test product/i });
//   expect(linkElement).toHaveAttribute('href', '/product/test-product');
// });

// test('renders "Producto agotado" button when out of stock', () => {
//   const outOfStockProduct = { ...product, countInStock: 0 };
//   renderWithContext(<Product product={outOfStockProduct} />);
//   expect(screen.getByText('Producto agotado')).toBeInTheDocument();
//   expect(screen.getByText('Producto agotado')).toBeDisabled();
// });

// test('calls addToCartHandler on click', async () => {
//   const axios = require('axios');
//   axios.get.mockResolvedValue({ data: { countInStock: 10 } });

//   renderWithContext(<Product product={product} />);
//   const button = screen.getByText('Añadir al carréton');
//   fireEvent.click(button);

//   expect(axios.get).toHaveBeenCalledWith(
//     `${process.env.REACT_APP_API_URL}/api/products/1`
//   );
//   expect(mockDispatch).toHaveBeenCalledWith({
//     type: 'CART_ADD_ITEM',
//     payload: { ...product, quantity: 1 },
//   });
// });
