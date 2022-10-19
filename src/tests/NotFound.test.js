import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente NotFound', () => {
  test('É exibido na tela um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    expect(screen.getByRole('heading', { name: 'Page requested not found', level: 2 })).toBeInTheDocument();
  });

  test('Existe uma imagem com o src desejado', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img', { src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif' });
    expect(img).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
