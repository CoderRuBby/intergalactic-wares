import Link from 'next/link';
import Image from 'next/image';

export default function LogoLink() {
  return (
    <Link href='/'>
      <Image
        src='placeholder.svg'
        alt='Intergalactic Wares logo'
        width={800}
        height={600}
        className='h-mobile-nav-height w-auto'
      />
    </Link>
  );
}
