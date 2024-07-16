import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // para tener disponibles los métodos .toBeInTheDocument() y otros

import PaymentMethodScreen from './PaymentMethodScreen';
import { Store } from '../../Store';
import { MemoryRouter } from 'react-router-dom';

describe('PaymentMethodScreen Component', () => {
  it('should render PaymentMethodScreen component correctly', () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Store>
          <PaymentMethodScreen />
        </Store>
      </MemoryRouter>
    );

    expect(screen.getByText('Método de Pago')).toBeInTheDocument();
    expect(screen.getByLabelText('PayPal')).toBeInTheDocument();
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('should select payment method and continue when clicking on "Continue" button', async () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Store>
          <PaymentMethodScreen />
        </Store>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText('PayPal'));
    fireEvent.click(screen.getByText('Continue'));

    // Puedes esperar a que cierto texto aparezca en la pantalla después de un evento
    await waitFor(() => {
      expect(screen.getByText('Método de envío')).toBeInTheDocument();
    });
  });
});
