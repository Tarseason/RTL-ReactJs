import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Testa se existe um link na aplicação para Home About e Favorites Pokémons', () => {
  renderWithRouter(<App />);

  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Favorite Pokémons' })).toBeInTheDocument();
});
