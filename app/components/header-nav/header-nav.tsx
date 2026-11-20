import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './search-bar';
import LoginLink from './account-widget/login-link';
import CartLink from './cart-widget/cart-link';

export default function HeaderNav() {
  return (
    <header>
      <Link href='/'>
        <Image
          src='placeholder.svg'
          alt='Intergalactic Wares logo'
          width={800}
          height={600}
        />
      </Link>
      <SearchBar />
      <LoginLink />
      <CartLink />
    </header>
  );
}
