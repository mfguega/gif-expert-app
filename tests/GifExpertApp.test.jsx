import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { getGifs } from '../src/helpers/getGifs';

describe('Pruebas en <GifExpertApp />', () => {
  test('Debe de agregar los header de las nuevas categorias', () => {
    const inputValue = 'Saitama';
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: inputValue + '2' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);

  });

  test('No debe agregar una categoria repetida', () => { 
    const inputValue = 'Saitama';
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');


    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);

   })
});
