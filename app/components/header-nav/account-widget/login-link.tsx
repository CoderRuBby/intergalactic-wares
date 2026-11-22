import Link from 'next/link';

export default function LoginLink() {
  return (
    <Link
      href='/login'
      className='text-[clamp(10px,5vw,2rem)] text-primary-text text-nowrap'
    >
      Log in
    </Link>
  );
}
