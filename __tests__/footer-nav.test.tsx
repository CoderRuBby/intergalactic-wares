import FooterNav from '@/app/components/footer-nav/footer-nav';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

describe('footer-nav', () => {
  let component: React.ReactElement;
  beforeEach(() => {
    component = <FooterNav />;
  });

  it('has an about link', () => {
    render(component);

    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
  it('has a careers link', () => {
    render(component);

    const careersLink = screen.getByRole('link', { name: /careers/i });

    expect(careersLink).toBeInTheDocument();
    expect(careersLink).toHaveAttribute('href', '/careers');
  });
  it.skip('has a contact link', () => {
    render(component);

    const contactLink = screen.getByRole('link', { name: /contact/i });

    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
