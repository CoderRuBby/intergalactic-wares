export default function SearchBar() {
  return (
    <search className='w-full'>
      <label htmlFor='search' />
      <input
        id='search'
        type='search'
        placeholder='search'
        className='
          border-2 w-full h-mobile-nav-height pl-5 border-primary-border rounded-md text-mobile text-primary-text focus:outline-none focus:ring-2 focus:ring-primary-focus
        '
      />
    </search>
  );
}
