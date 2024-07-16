// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom'; // Para tener disponibles los métodos .toBeInTheDocument() y otros
// import { MemoryRouter } from 'react-router-dom';
// import axios from 'axios';

// import ProductScreen from './ProductScreen';

// jest.mock('axios'); // Mockear axios para controlar las llamadas a la API

// describe('ProductScreen Component', () => {
//   beforeEach(() => {
//     axios.get.mockResolvedValue({
//       data: {
//         _id: '1',
//         name: 'Product 1',
//         image: '/images/product1.jpg',
//         rating: 4.5,
//         numReviews: 10,
//         price: 100,
//         origen: 'Spain',
//         certificaciones: 'Organic',
//         descripcion: 'Product 1 Description',
//         countInStock: 5,
//       },
//     });
//   });

//   it('should render ProductScreen component correctly', async () => {
//     render(
//       <MemoryRouter>
//         <ProductScreen />
//       </MemoryRouter>
//     );

//     // Verificar que la pantalla está cargando
//     expect(screen.getByText('Loading...')).toBeInTheDocument();

//     // Esperar a que los datos se carguen
//     await waitFor(() => {
//       expect(screen.getByText('Product 1')).toBeInTheDocument();
//     });

//     // Verificar que los datos se renderizaron correctamente
//     expect(screen.getByText('Rating: 4.5 from 10 reviews')).toBeInTheDocument();
//     expect(screen.getByText('Precio: 100 €')).toBeInTheDocument();
//     expect(screen.getByText('Origen: Spain')).toBeInTheDocument();
//     expect(screen.getByText('Certificaciones: Organic')).toBeInTheDocument();
//     expect(
//       screen.getByText('Description: Product 1 Description')
//     ).toBeInTheDocument();
//     expect(screen.getByText('Estado: Disponible')).toBeInTheDocument();
//   });

//   it('should call addToCartHandler function when "Añadir al carréton" button is clicked', async () => {
//     render(
//       <MemoryRouter>
//         <ProductScreen />
//       </MemoryRouter>
//     );

//     // Esperar a que los datos se carguen
//     await waitFor(() => {
//       expect(screen.getByText('Product 1')).toBeInTheDocument();
//     });

//     // Simular hacer clic en el botón de "Añadir al carréton"
//     const addToCartButton = screen.getByText('Añadir al carréton');
//     addToCartButton.click();

//     // Verificar que se llamó la función addToCartHandler
//     // Asegúrate de que addToCartHandler haga un cambio en la interfaz de usuario para verificar que se ha llamado correctamente
//     // Por ejemplo, podrías verificar que el icono del carrito de compras en la barra de navegación se actualizó
//   });
// });
