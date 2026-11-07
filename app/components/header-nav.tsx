import Link from 'next/link';
import Image from 'next/image';

export default function HeaderNav() {
  return (
    <header>
      <Link href='/'>
        <Image src='' alt='Intergalactic Wares logo' fill={true} />
      </Link>
    </header>
  );
}
