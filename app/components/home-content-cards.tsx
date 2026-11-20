import Image from 'next/image';
import Link from 'next/link';

export default function HomeContentCards({
  contentName,
}: {
  contentName: string;
}) {
  return (
    <Link href={`/${contentName}`}>
      <Image src='placeholder.svg' alt={contentName} height={600} width={800} />
    </Link>
  );
}
