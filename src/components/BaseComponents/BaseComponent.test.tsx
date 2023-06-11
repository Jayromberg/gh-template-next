import { render, screen } from '@testing-library/react';
import BaseComponent from '.';

describe('BaseComponent', () => {
  test('Testando a renderização do componente h1', () => {
    render(<BaseComponent tag="h1">Hello World</BaseComponent>);
    const element = screen.getByText(/Hello World/i);
    const elementTag = screen.getByRole('heading', { level: 1 });
    expect(element).toBeInTheDocument();
    expect(elementTag).toBeInTheDocument();
  });

  test('Testando o estilo do componente', () => {
    render(<BaseComponent tag="h2">Hello World</BaseComponent>);
    const elementTag = screen.getByRole('heading', { level: 2 });
    expect(elementTag).toHaveClass('flex flex-col content-start shrink-0');
  });
});
