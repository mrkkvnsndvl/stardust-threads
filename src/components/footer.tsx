import Image from 'next/image';
import Link from 'next/link';

import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center gap-10 py-10 bg-white lg:py-20 padding-x lg:gap-20'>
      <div className='flex flex-col items-center self-stretch gap-8 lg:flex-row'>
        <Link
          className='flex items-center justify-center w-full lg:justify-start'
          href='/'>
          <Image
            className='w-auto h-auto'
            src='/svgs/stardust-threads.svg'
            alt='Stardust threads logo'
            width={32}
            height={32}
          />
        </Link>
        <ul className='flex flex-col items-center justify-center w-full gap-8 lg:flex-row'>
          <li>
            <Link className='block text-regular-normal' href='/shop'>
              Shop Now
            </Link>
          </li>
          <li>
            <Link className='block text-regular-normal' href='/shop'>
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className='block text-regular-normal' href='/shop'>
              Sale Items
            </Link>
          </li>
        </ul>
        <div className='flex items-center justify-center w-full gap-3 lg:justify-end'>
          <Link
            href='https://www.facebook.com/markkevsandoval'
            target='_blank'
            aria-label='Facebook'>
            <IconBrandFacebook />
          </Link>
          <Link
            href='https://www.instagram.com/markkevsandoval'
            target='_blank'
            aria-label='Instagram'>
            <IconBrandInstagram />
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center w-full gap-8'>
        <div className='self-stretch bg-black h-[1px]' />
        <div className='flex flex-col-reverse items-center justify-center w-full gap-6 lg:flex-row'>
          <span className='inline-block text-small-normal'>
            {year} Stardust Threads. All right reserved.
          </span>
          <ul className='flex flex-col items-center justify-center gap-6 lg:flex-row'>
            <li>
              <Link className='block text-small-link' href='/'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className='block text-small-link' href='/'>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className='block text-small-link' href='/'>
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
