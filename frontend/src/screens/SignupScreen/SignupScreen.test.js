// // SignupScreen.test.js
// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import axios from 'axios';
// import { MemoryRouter } from 'react-router-dom';
// import SignupScreen from './SignupScreen';

// jest.mock('axios');

// describe('SignupScreen', () => {
//   it('should render signup form correctly', () => {
//     render(<SignupScreen />, { wrapper: MemoryRouter });
//     expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
//     expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
//     expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
//     expect(
//       screen.getByLabelText('Vuelve a escribir la contraseña')
//     ).toBeInTheDocument();
//     expect(
//       screen.getByRole('button', { name: 'Crea tu cuenta' })
//     ).toBeInTheDocument();
//     expect(
//       screen.getByText('Al crear una cuenta, aceptas las')
//     ).toBeInTheDocument();
//     expect(screen.getByText('¿Ya tienes una cuenta?')).toBeInTheDocument();
//   });

//   it('should display error if passwords do not match', async () => {
//     render(<SignupScreen />, { wrapper: MemoryRouter });
//     fireEvent.change(screen.getByLabelText('Nombre'), {
//       target: { value: 'Test User' },
//     });
//     fireEvent.change(screen.getByLabelText('Correo electrónico'), {
//       target: { value: 'test@example.com' },
//     });
//     fireEvent.change(screen.getByLabelText('Contraseña'), {
//       target: { value: 'password123' },
//     });
//     fireEvent.change(screen.getByLabelText('Vuelve a escribir la contraseña'), {
//       target: { value: 'password456' },
//     });
//     fireEvent.click(screen.getByRole('button', { name: 'Crea tu cuenta' }));
//     await screen.findByText('Passwords do not match');
//   });

//   it('should submit form and redirect on successful signup', async () => {
//     axios.post.mockResolvedValueOnce({
//       data: { name: 'Test User', email: 'test@example.com' },
//     });
//     render(<SignupScreen />, { wrapper: MemoryRouter });
//     fireEvent.change(screen.getByLabelText('Nombre'), {
//       target: { value: 'Test User' },
//     });
//     fireEvent.change(screen.getByLabelText('Correo electrónico'), {
//       target: { value: 'test@example.com' },
//     });
//     fireEvent.change(screen.getByLabelText('Contraseña'), {
//       target: { value: 'password123' },
//     });
//     fireEvent.change(screen.getByLabelText('Vuelve a escribir la contraseña'), {
//       target: { value: 'password123' },
//     });
//     fireEvent.click(screen.getByRole('button', { name: 'Crea tu cuenta' }));
//     await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
//     expect(axios.post).toHaveBeenCalledWith(
//       `${process.env.REACT_APP_API_URL}/api/users/signup`,
//       {
//         name: 'Test User',
//         email: 'test@example.com',
//         password: 'password123',
//       }
//     );
//     await screen.findByText('Order History');
//   });
// });
