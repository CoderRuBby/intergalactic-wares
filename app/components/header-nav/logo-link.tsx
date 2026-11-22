import Link from 'next/link';
import Image from 'next/image';

export default function LogoLink() {
  return (
    <Link href='/' className='w-[40%]'>
      <Image
        src='placeholder.svg'
        alt='Intergalactic Wares logo'
        width={800}
        height={600}
      />
    </Link>
  );
}
