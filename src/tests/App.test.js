import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o Componente App', () => {
  test('Testa se existe um link na aplicação para Home', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  test('Testa se existe um link na aplicação para About', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  test('Testa se existe um link na aplicação para Favorites Pokémons', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('link', { name: 'Favorite Pokémons' })).toBeInTheDocument();
  });
});
