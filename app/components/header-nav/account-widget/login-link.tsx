import Link from 'next/link';

export default function LoginLink() {
  return (
    <Link href='/login' className='text-mobile text-primary-text text-nowrap'>
      Log in
    </Link>
  );
}
