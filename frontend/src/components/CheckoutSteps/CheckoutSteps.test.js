// // CheckoutSteps.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import CheckoutSteps from './CheckoutSteps';

// test('renders CheckoutSteps component with correct steps', () => {
//   render(<CheckoutSteps step1 step2 step3 step4 />);
//   expect(screen.getByText(/Iniciar Sesión/i)).toHaveClass('active');
//   expect(screen.getByText(/Envío/i)).toHaveClass('active');
//   expect(screen.getByText(/Pago/i)).toHaveClass('active');
//   expect(screen.getByText(/Realizar Pedido/i)).toHaveClass('active');
// });

// test('renders CheckoutSteps component with only step1 active', () => {
//   render(<CheckoutSteps step1 />);
//   expect(screen.getByText(/Iniciar Sesión/i)).toHaveClass('active');
//   expect(screen.getByText(/Envío/i)).not.toHaveClass('active');
//   expect(screen.getByText(/Pago/i)).not.toHaveClass('active');
//   expect(screen.getByText(/Realizar Pedido/i)).not.toHaveClass('active');
// });

// test('renders CheckoutSteps component with steps 1 and 2 active', () => {
//   render(<CheckoutSteps step1 step2 />);
//   expect(screen.getByText(/Iniciar Sesión/i)).toHaveClass('active');
//   expect(screen.getByText(/Envío/i)).toHaveClass('active');
//   expect(screen.getByText(/Pago/i)).not.toHaveClass('active');
//   expect(screen.getByText(/Realizar Pedido/i)).not.toHaveClass('active');
// });

// test('renders CheckoutSteps component with no steps active', () => {
//   render(<CheckoutSteps />);
//   expect(screen.getByText(/Iniciar Sesión/i)).not.toHaveClass('active');
//   expect(screen.getByText(/Envío/i)).not.toHaveClass('active');
//   expect(screen.getByText(/Pago/i)).not.toHaveClass('active');
//   expect(screen.getByText(/Realizar Pedido/i)).not.toHaveClass('active');
// });
