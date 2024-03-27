import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='flex w-full items-center justify-center bg-white h-[72px] padding-x'>
      <Link href='/'>
        <Image
          className='w-auto h-auto'
          src='/svgs/stardust-threads.svg'
          alt='Stardust threads logo'
          width={32}
          height={32}
        />
      </Link>
    </header>
  );
}
