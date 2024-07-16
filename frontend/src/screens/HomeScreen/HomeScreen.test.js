// HomeScreen.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import HomeScreen from './HomeScreen';

jest.mock('axios');

const mockProducts = [
  { _id: '1', name: 'Product 1', image: '/product1.jpg', price: 100 },
  { _id: '2', name: 'Product 2', image: '/product2.jpg', price: 200 },
];

describe('HomeScreen', () => {
  it('should render loading box when products are being fetched', async () => {
    axios.get.mockResolvedValueOnce({ data: mockProducts });
    render(<HomeScreen />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText('Cargando...')).not.toBeInTheDocument()
    );
  });

  it('should render error message when products fail to load', async () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch products'));
    render(<HomeScreen />);
    expect(
      await screen.findByText('Failed to fetch products')
    ).toBeInTheDocument();
  });

  it('should render products when products are successfully loaded', async () => {
    axios.get.mockResolvedValueOnce({ data: mockProducts });
    render(<HomeScreen />);
    await screen.findByText('Product 1');
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});
