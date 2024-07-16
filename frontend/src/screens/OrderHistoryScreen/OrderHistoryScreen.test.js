// OrderHistoryScreen.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import OrderHistoryScreen from './OrderHistoryScreen';

jest.mock('axios');

const mockOrders = [
  {
    _id: '1',
    createdAt: '2024-06-05T12:00:00.000Z',
    totalPrice: 100,
    isPaid: true,
    paidAt: '2024-06-05T12:00:00.000Z',
    isDelivered: false,
    deliveredAt: null,
  },
  {
    _id: '2',
    createdAt: '2024-06-04T12:00:00.000Z',
    totalPrice: 200,
    isPaid: false,
    paidAt: null,
    isDelivered: false,
    deliveredAt: null,
  },
];

describe('OrderHistoryScreen', () => {
  it('should render loading box when orders are being fetched', async () => {
    axios.get.mockResolvedValueOnce({ data: mockOrders });
    render(<OrderHistoryScreen />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    );
  });

  it('should render error message when orders fail to load', async () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch orders'));
    render(<OrderHistoryScreen />);
    expect(
      await screen.findByText('Failed to fetch orders')
    ).toBeInTheDocument();
  });

  it('should render orders when orders are successfully loaded', async () => {
    axios.get.mockResolvedValueOnce({ data: mockOrders });
    render(<OrderHistoryScreen />);
    await screen.findByText('1');
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should render order details button for each order', async () => {
    axios.get.mockResolvedValueOnce({ data: mockOrders });
    render(<OrderHistoryScreen />);
    await screen.findByText('Details');
  });
});
