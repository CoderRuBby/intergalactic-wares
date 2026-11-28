import SearchBar from './search-bar';
import LoginLink from './account-widget/login-link';
import CartLink from './cart-widget/cart-link';
import LogoLink from './logo-link';
import FilterButton from './filter-widget/filter-button';

export default function HeaderNav() {
  return (
    <header className='p-1'>
      <div className='w-full flex items-center gap-3 justify-between '>
        <LogoLink />
        <div className='flex flex-row gap-2 items-center'>
          <LoginLink />
          <CartLink />
        </div>
      </div>
      <div className='flex justify-center mt-1 gap-1'>
        <FilterButton />
        <SearchBar />
      </div>
    </header>
  );
}
