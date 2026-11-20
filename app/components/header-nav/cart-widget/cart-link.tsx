import Image from 'next/image';
import Link from 'next/link';

export default function CartLink() {
  return (
    <Link href='/cart'>
      <Image
        src='placeholder.svg'
        alt='shopping cart'
        width={800}
        height={600}
      />
    </Link>
  );
}
