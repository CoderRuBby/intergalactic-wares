import Image from 'next/image';

export default function FilterButton() {
  return (
    <button type='button' aria-label='filter product'>
      <Image
        src='/placeholder.svg'
        alt='filter product'
        width={800}
        height={600}
        className='h-mobile-nav-height w-auto border-2 border-primary-border rounded-md'
      />
    </button>
  );
}
