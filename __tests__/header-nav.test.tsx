import { beforeEach, describe, expect, it } from 'vitest';
import HeaderNav from '@/app/components/header-nav';
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
});
