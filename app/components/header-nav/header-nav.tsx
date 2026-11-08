import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './search-bar';

export default function HeaderNav() {
  return (
    <header>
      <Link href='/'>
        <Image src='' alt='Intergalactic Wares logo' fill={true} />
      </Link>
      <SearchBar />
    </header>
  );
}
