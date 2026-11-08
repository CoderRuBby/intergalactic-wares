import Image from 'next/image';
import Link from 'next/link';

export default function CartLink() {
  return (
    <Link href='/cart'>
      <Image src='' alt='shopping cart' fill={true}></Image>
    </Link>
  );
}
