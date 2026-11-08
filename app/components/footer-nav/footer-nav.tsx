import Link from 'next/link';

export default function FooterNav() {
  return (
    <footer>
      <Link href='/about'>About</Link>
      <Link href='/careers'>Careers</Link>
    </footer>
  );
}
