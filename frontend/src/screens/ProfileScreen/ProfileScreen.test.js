// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import axios from 'axios';
// import { Store } from '../Store';
// import ProfileScreen from './ProfileScreen';

// // Mockear axios para controlar las llamadas a la API
// jest.mock('axios');

// describe('ProfileScreen Component', () => {
//   let userInfo;

//   beforeEach(() => {
//     // Configurar datos de usuario simulados
//     userInfo = {
//       name: 'John Doe',
//       email: 'john@example.com',
//       token: 'token123',
//     };
//   });

//   it('should render ProfileScreen component correctly', () => {
//     // Proveer el contexto del Store con datos simulados
//     render(
//       <Store.Provider value={{ state: { userInfo } }}>
//         <ProfileScreen />
//       </Store.Provider>
//     );

//     // Verificar que los elementos de la pantalla se rendericen correctamente
//     expect(screen.getByText('User Profile')).toBeInTheDocument();
//     expect(screen.getByLabelText('Name')).toBeInTheDocument();
//     expect(screen.getByLabelText('Email')).toBeInTheDocument();
//     expect(screen.getByLabelText('Password')).toBeInTheDocument();
//     expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: 'Update' })).toBeInTheDocument();
//   });

//   it('should update user profile when form is submitted', async () => {
//     // Configurar la respuesta simulada de la API
//     axios.put.mockResolvedValueOnce({
//       data: {
//         _id: '123',
//         name: 'Jane Doe',
//         email: 'jane@example.com',
//         token: 'token123',
//       },
//     });

//     // Renderizar el componente con el contexto del Store y los datos simulados
//     render(
//       <Store.Provider value={{ state: { userInfo } }}>
//         <ProfileScreen />
//       </Store.Provider>
//     );

//     // Simular cambios en los campos de entrada
//     fireEvent.change(screen.getByLabelText('Name'), {
//       target: { value: 'Jane Doe' },
//     });
//     fireEvent.change(screen.getByLabelText('Email'), {
//       target: { value: 'jane@example.com' },
//     });
//     fireEvent.change(screen.getByLabelText('Password'), {
//       target: { value: 'newpassword' },
//     });
//     fireEvent.change(screen.getByLabelText('Confirm Password'), {
//       target: { value: 'newpassword' },
//     });

//     // Simular envío del formulario
//     fireEvent.click(screen.getByRole('button', { name: 'Update' }));

//     // Esperar a que se realice la llamada a la API
//     await waitFor(() => {
//       expect(axios.put).toHaveBeenCalledWith(
//         `${process.env.REACT_APP_API_URL}/api/users/profile`,
//         {
//           name: 'Jane Doe',
//           email: 'jane@example.com',
//           password: 'newpassword',
//         },
//         { headers: { Authorization: `Bearer token123` } }
//       );
//     });

//     // Esperar a que se actualice el estado del usuario
//     await waitFor(() => {
//       expect(screen.getByText('User updated successfully')).toBeInTheDocument();
//     });
//   });
// });
