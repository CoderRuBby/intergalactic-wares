import SearchBar from './search-bar';
import LoginLink from './account-widget/login-link';
import CartLink from './cart-widget/cart-link';
import LogoLink from './logo-link';

export default function HeaderNav() {
  return (
    <header>
      <div className='w-full flex items-center gap-3 justify-between pr-5'>
        <LogoLink />
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
