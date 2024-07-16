// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { Store } from '../../Store';
// import { BrowserRouter as Router } from 'react-router-dom';
// import SigninScreen from './SigninScreen';
// import Axios from 'axios';

// jest.mock('axios');

// describe('SigninScreen', () => {
//   const userInfo = null;
//   const dispatch = jest.fn();
//   const mockNavigate = jest.fn();

//   test('renders signin form', () => {
//     render(
//       <Store.Provider value={{ state: { userInfo }, dispatch }}>
//         <Router>
//           <SigninScreen />
//         </Router>
//       </Store.Provider>
//     );

//     expect(screen.getByText(/iniciar sesión/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
//     expect(
//       screen.getByRole('button', { name: /iniciar sesión/i })
//     ).toBeInTheDocument();
//     expect(screen.getByText(/¿eres nuevo aquí/i)).toBeInTheDocument();
//   });

//   test('signin form dispatches action on submit', async () => {
//     const email = 'test@example.com';
//     const password = '123456';
//     const data = {
//       _id: '123',
//       name: 'Test User',
//       email: 'test@example.com',
//       token: 'token123',
//     };

//     Axios.post.mockResolvedValueOnce({ data });

//     render(
//       <Store.Provider value={{ state: { userInfo }, dispatch }}>
//         <Router>
//           <SigninScreen />
//         </Router>
//       </Store.Provider>
//     );

//     fireEvent.change(screen.getByLabelText(/correo electrónico/i), {
//       target: { value: email },
//     });
//     fireEvent.change(screen.getByLabelText(/contraseña/i), {
//       target: { value: password },
//     });
//     fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }));

//     await waitFor(() => expect(Axios.post).toHaveBeenCalledTimes(1));

//     expect(Axios.post).toHaveBeenCalledWith(expect.any(String), {
//       email,
//       password,
//     });

//     await waitFor(() =>
//       expect(dispatch).toHaveBeenCalledWith({
//         type: 'USER_SIGNIN',
//         payload: data,
//       })
//     );
//   });

//   test('redirects to the specified route after successful signin', async () => {
//     const email = 'test@example.com';
//     const password = '123456';
//     const data = {
//       _id: '123',
//       name: 'Test User',
//       email: 'test@example.com',
//       token: 'token123',
//     };

//     Axios.post.mockResolvedValueOnce({ data });

//     render(
//       <Store.Provider value={{ state: { userInfo }, dispatch }}>
//         <Router>
//           <SigninScreen />
//         </Router>
//       </Store.Provider>
//     );

//     fireEvent.change(screen.getByLabelText(/correo electrónico/i), {
//       target: { value: email },
//     });
//     fireEvent.change(screen.getByLabelText(/contraseña/i), {
//       target: { value: password },
//     });
//     fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }));

//     await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));
//   });
// });
