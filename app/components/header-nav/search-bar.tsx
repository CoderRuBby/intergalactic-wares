export default function SearchBar() {
  return (
    <search className='w-[80%]'>
      <label htmlFor='search' />
      <input
        id='search'
        type='search'
        placeholder='search'
        className='
          border-2 w-full h-[clamp(40px,6vh,6rem)] pl-5 border-primary-border rounded-md text-mobile text-primary-text focus:outline-none focus:ring-2 focus:ring-primary-focus
        '
      />
    </search>
  );
}
