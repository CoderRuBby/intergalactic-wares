import HomeContentCards from '@/app/components/home-content-cards';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('home-contact-cards', () => {
  test('the link will match with prop passed in', () => {
    const contentName = 'flies';

    render(<HomeContentCards contentName={contentName} />);

    const linkName = screen.getByRole('link', { name: `${contentName}` });

    expect(linkName).toBeInTheDocument();
    expect(linkName).toHaveAttribute('href', `/${contentName}`);
  });
});
