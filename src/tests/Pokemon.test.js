import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa Componente Pokemon', () => {
  test('Testa src do Card Pokemon', () => {
    renderWithRouter(<App />);
    const pokemonSrc = screen.getByRole('img', { src: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png' });

    expect(pokemonSrc).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Testa o type do pokemon do card Pokemon', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('pokemon-type')).toHaveTextContent('Electric');
  });

  test('testa o alt da imagem em Card Pokemon', () => {
    renderWithRouter(<App />);
    const altPokemon = screen.getByAltText('Pikachu sprite');

    expect(altPokemon).toHaveProperty('alt', 'Pikachu sprite');
  });

  test('Testa se tem como favoritar no Card Pokemon', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText('More details'));
    const checkboxFav = screen.getByLabelText('Pokémon favoritado?');
    expect(checkboxFav).toBeInTheDocument();
  });

  test('Testa se existe star-icon no Card Pokemon', () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByText('More details'));
    expect(screen.getByText('Pikachu Details')).toBeInTheDocument();
    const checkboxFav = screen.getByLabelText('Pokémon favoritado?');
    expect(checkboxFav).toBeInTheDocument();
    userEvent.click(checkboxFav);
    expect(screen.getByAltText('Pikachu is marked as favorite')).toBeInTheDocument();
    expect(screen.getByAltText('Pikachu is marked as favorite')).toHaveAttribute('src', '/star-icon.svg');
  });
});
