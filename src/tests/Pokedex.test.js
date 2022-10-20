import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa Componente Pokedex', () => {
  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('Próximo pokémon')).toBeInTheDocument();
    userEvent.click(screen.getByText('Próximo pokémon'));
  });

  test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('heading', { name: 'Encountered pokémons', level: 2 })).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const buttOne = screen.getByRole('button', { name: /electric/i });

    expect(buttons).toHaveLength(7);
    userEvent.click(buttOne);
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
  });

  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const buttonFi = screen.getByRole('button', { name: 'All' });

    expect(buttonFi).toBeInTheDocument();
    userEvent.click(buttonFi);
  });
});
