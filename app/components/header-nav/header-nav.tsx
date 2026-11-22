import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './search-bar';
import LoginLink from './account-widget/login-link';
import CartLink from './cart-widget/cart-link';

export default function HeaderNav() {
  return (
    <header>
      <div className='w-full flex items-center gap-3 justify-between pr-5'>
        <Link href='/' className='w-[40%]'>
          <Image
            src='placeholder.svg'
            alt='Intergalactic Wares logo'
            width={800}
            height={600}
          />
        </Link>
        <div className='flex flex-row gap-3 w-[30%] items-center'>
          <LoginLink />
          <CartLink />
        </div>
      </div>
      <div className='flex justify-center w-full mt-2 mb-2'>
        <SearchBar />
      </div>
    </header>
  );
}
