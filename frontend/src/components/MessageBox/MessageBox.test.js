// // MessageBox.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import MessageBox from './MessageBox';

// test('renders MessageBox component with default variant', () => {
//   render(<MessageBox>Test Message</MessageBox>);
//   const alertElement = screen.getByText(/Test Message/i);
//   expect(alertElement).toBeInTheDocument();
//   expect(alertElement).toHaveClass('alert alert-info');
// });

// test('renders MessageBox component with provided variant', () => {
//   render(<MessageBox variant="danger">Error Message</MessageBox>);
//   const alertElement = screen.getByText(/Error Message/i);
//   expect(alertElement).toBeInTheDocument();
//   expect(alertElement).toHaveClass('alert alert-danger');
// });
