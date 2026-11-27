import Link from 'next/link';

export default function FooterNav() {
  return (
    <footer className='flex w-full h-20 items-center justify-center gap-4 text-primary-text bg-secondary text-mobile flex-wrap'>
      <Link href='/about'>About</Link>
      <Link href='/careers'>Careers</Link>
      <Link href='/contact'>Contact</Link>
    </footer>
  );
}
