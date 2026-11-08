import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './search-bar';
import LoginLink from './account-widget/login-link';
import CartLink from './cart-widget/cart-link';

export default function HeaderNav() {
  return (
    <header>
      <Link href='/'>
        <Image src='' alt='Intergalactic Wares logo' fill={true} />
      </Link>
      <SearchBar />
      <LoginLink />
      <CartLink />
    </header>
  );
}
