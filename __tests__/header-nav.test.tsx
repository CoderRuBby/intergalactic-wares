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
});
