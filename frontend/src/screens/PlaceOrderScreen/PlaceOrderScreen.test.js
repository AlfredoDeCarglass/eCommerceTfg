import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // para tener disponibles los métodos .toBeInTheDocument() y otros
import { MemoryRouter } from 'react-router-dom';

import PlaceOrderScreen from './PlaceOrderScreen';
import { Store } from '../../Store';

describe('PlaceOrderScreen Component', () => {
  it('should render PlaceOrderScreen component correctly', () => {
    render(
      <MemoryRouter>
        <Store>
          <PlaceOrderScreen />
        </Store>
      </MemoryRouter>
    );

    expect(screen.getByText('Realizar Pedido')).toBeInTheDocument();
    expect(screen.getByText('Resumen del Pedido')).toBeInTheDocument();
  });

  it('should show loading box when "Realizar Pedido" button is clicked', async () => {
    render(
      <MemoryRouter>
        <Store>
          <PlaceOrderScreen />
        </Store>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Realizar Pedido'));

    expect(screen.getByText('Cargando...')).toBeInTheDocument();

    // Puedes esperar a que cierto texto aparezca en la pantalla después de un evento
    await waitFor(() => {
      expect(screen.getByText('Productos en tu carreton')).toBeInTheDocument();
    });
  });

  // Añade más pruebas según sea necesario para cubrir otros casos de uso.
});
