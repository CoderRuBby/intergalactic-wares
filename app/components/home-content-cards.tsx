import Image from 'next/image';
import Link from 'next/link';

export default function HomeContentCards({
  contentName,
}: {
  contentName: string;
}) {
  return (
    <Link href={`/${contentName}`}>
      <Image src='' alt={contentName} fill={true} />
    </Link>
  );
}
