// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Store } from '../../Store';
// import ShippingAddressScreen from './ShippingAddressScreen';

// describe('ShippingAddressScreen', () => {
//   const userInfo = {
//     _id: '123',
//     name: 'Test User',
//     email: 'test@example.com',
//     token: 'token123',
//   };

//   test('renders Shipping Address form', () => {
//     render(
//       <Store.Provider value={{ state: { userInfo } }}>
//         <ShippingAddressScreen />
//       </Store.Provider>
//     );

//     expect(
//       screen.getByText(/agregar una nueva dirección de envío/i)
//     ).toBeInTheDocument();
//     expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/dirección \(línea 1\)/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/ciudad/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/código postal/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/país/i)).toBeInTheDocument();
//     expect(
//       screen.getByRole('button', { name: /guardar dirección/i })
//     ).toBeInTheDocument();
//   });

//   test('submitting form dispatches action to save shipping address', () => {
//     const dispatch = jest.fn();

//     render(
//       <Store.Provider value={{ state: { userInfo }, dispatch }}>
//         <ShippingAddressScreen />
//       </Store.Provider>
//     );

//     fireEvent.change(screen.getByLabelText(/nombre completo/i), {
//       target: { value: 'John Doe' },
//     });
//     fireEvent.change(screen.getByLabelText(/dirección \(línea 1\)/i), {
//       target: { value: '123 Main St' },
//     });
//     fireEvent.change(screen.getByLabelText(/ciudad/i), {
//       target: { value: 'Example City' },
//     });
//     fireEvent.change(screen.getByLabelText(/código postal/i), {
//       target: { value: '12345' },
//     });
//     fireEvent.change(screen.getByLabelText(/país/i), {
//       target: { value: 'espana' },
//     });

//     fireEvent.click(screen.getByRole('button', { name: /guardar dirección/i }));

//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'SAVE_SHIPPING_ADDRESS',
//       payload: {
//         fullName: 'John Doe',
//         address: '123 Main St',
//         city: 'Example City',
//         postalCode: '12345',
//         country: 'espana',
//       },
//     });
//   });
// });
