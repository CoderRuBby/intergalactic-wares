import { beforeEach, describe, expect, it } from 'vitest';
import HeaderNav from '@/app/components/header-nav/header-nav';
import { render, screen } from '@testing-library/react';

describe('HeaderNav', () => {
  let component: React.ReactElement;
  beforeEach(() => {
    component = <HeaderNav />;
  });
  it('renders a semantic header element', () => {
    render(component);

    const headerElement = screen.getByRole('banner');

    expect(headerElement).toBeInTheDocument();
  });

  it('has a logo image link', () => {
    render(component);

    const imageLink = screen.getByRole('link', {
      name: /intergalactic wares logo/i,
    });

    expect(imageLink).toHaveAttribute('href', '/');
  });

  it('has a search bar', () => {
    render(component);

    const searchBar = screen.getByRole('searchbox');

    expect(searchBar).toBeInTheDocument();
  });

  it('has a log in link', () => {
    render(component);

    const loginLink = screen.getByRole('link', { name: /log in/i });

    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('has a shopping cart link', () => {
    render(component);

    const shoppingCart = screen.getByRole('link', { name: /shopping cart/i });

    expect(shoppingCart).toBeInTheDocument();
    expect(shoppingCart).toHaveAttribute('href', '/cart');
  });
});
