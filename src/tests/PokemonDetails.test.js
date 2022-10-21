import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa Pokemon Details', () => {
  test('Testa se exibe um h2 na tela com "Pokemon" Details', () => {
    renderWithRouter(<App />);
    const inputD = screen.getByText('More details');
    userEvent.click(inputD);

    expect(screen.getByRole('heading', { name: 'Pikachu Details', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Summary', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.')).toBeInTheDocument();
    expect(screen.getByText('Game Locations of Pikachu')).toBeInTheDocument();

    expect(screen.getAllByAltText('Pikachu location')).toHaveLength(2);
    const locationPokemon = screen.getAllByAltText('Pikachu location');
    expect(locationPokemon[0]).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');

    expect(locationPokemon[1]).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('Testa checkbox do input de favoritar Pokemon', () => {
    renderWithRouter(<App />);
    const inputDetails = screen.getByText('More details');
    userEvent.click(inputDetails);

    expect(screen.getByLabelText('Pokémon favoritado?')).toBeInTheDocument();
  });
});
