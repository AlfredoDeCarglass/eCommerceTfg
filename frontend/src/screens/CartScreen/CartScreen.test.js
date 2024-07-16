// // CartScreen.test.js
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import CartScreen from './CartScreen';
// import { Store } from '../Store';
// import axios from 'axios';

// jest.mock('axios');

// const mockDispatch = jest.fn();
// const mockNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockNavigate,
// }));

// const mockState = {
//   cart: {
//     cartItems: [
//       {
//         _id: '1',
//         name: 'Test Product',
//         slug: 'test-product',
//         image: '/test-product.jpg',
//         price: 100,
//         countInStock: 10,
//         quantity: 1,
//       },
//     ],
//   },
// };

// const renderWithContext = (component) => {
//   return render(
//     <Store.Provider value={{ state: mockState, dispatch: mockDispatch }}>
//       <Router>{component}</Router>
//     </Store.Provider>
//   );
// };

// test('renders CartScreen component', () => {
//   renderWithContext(<CartScreen />);
//   expect(screen.getByText('Carretón Manchego')).toBeInTheDocument();
//   expect(screen.getByText('Test Product')).toBeInTheDocument();
//   expect(screen.getByText('100 €')).toBeInTheDocument();
//   expect(screen.getByText('1 productos')).toBeInTheDocument();
// });

// test('renders empty cart message', () => {
//   const emptyState = { ...mockState, cart: { cartItems: [] } };
//   render(
//     <Store.Provider value={{ state: emptyState, dispatch: mockDispatch }}>
//       <Router>
//         <CartScreen />
//       </Router>
//     </Store.Provider>
//   );
//   expect(
//     screen.getByText(
//       'El carréton esta vacio. ¡Hazte con tesoros manchegos y carga tu carretón!'
//     )
//   ).toBeInTheDocument();
// });

// test('updates item quantity in the cart', async () => {
//   axios.get.mockResolvedValue({ data: { countInStock: 10 } });
//   renderWithContext(<CartScreen />);
//   const incrementButton = screen.getByRole('button', {
//     name: /fas fa-plus-circle/i,
//   });
//   fireEvent.click(incrementButton);
//   expect(axios.get).toHaveBeenCalledWith(
//     `${process.env.REACT_APP_API_URL}/api/products/1`
//   );
//   expect(mockDispatch).toHaveBeenCalledWith({
//     type: 'CART_ADD_ITEM',
//     payload: { ...mockState.cart.cartItems[0], quantity: 2 },
//   });
// });

// test('removes item from the cart', () => {
//   renderWithContext(<CartScreen />);
//   const removeButton = screen.getByRole('button', {
//     name: /fas fa-trash/i,
//   });
//   fireEvent.click(removeButton);
//   expect(mockDispatch).toHaveBeenCalledWith({
//     type: 'CART_REMOVE_ITEM',
//     payload: mockState.cart.cartItems[0],
//   });
// });

// test('navigates to checkout', () => {
//   renderWithContext(<CartScreen />);
//   const checkoutButton = screen.getByRole('button', {
//     name: /pasar por caja/i,
//   });
//   fireEvent.click(checkoutButton);
//   expect(mockNavigate).toHaveBeenCalledWith('/signin?redirect=/shipping');
// });
