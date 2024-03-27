'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useNavbarStore } from '@/_hooks/navbar-store';
import { exploreLinks } from '@/_lib/explore-link-lib';
import { navVariants } from '@/_variants/nav-variants';
import { IconChevronDown } from '@tabler/icons-react';

import Button from './button';

export default function Navbar() {
  const {
    isMenuOpen,
    isExploreOpen,
    isExploreHover,
    handleMenuClick,
    handleExploreClick,
    handleExploreHover,
    handleExploreLeave,
  } = useNavbarStore();

  const pathname = usePathname();

  useEffect(() => {
    useNavbarStore.setState({
      isMenuOpen: false,
    });
  }, [pathname]);

  return (
    <header className='flex items-center justify-center border-b border-b-black bg-white padding-x h-[72px] sticky top-0 z-20'>
      <div className='flex items-center justify-between w-full'>
        <Link href='/'>
          <Image
            className='w-auto h-auto'
            src='/svgs/stardust-threads.svg'
            alt='Stardust Threads'
            width={32}
            height={32}
            priority={true}
          />
        </Link>
        <div className='flex gap-3'>
          <button
            className='text-medium-normal lg:hidden'
            onClick={handleMenuClick}>
            Menu
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className='absolute left-0 right-0 z-50 bg-white top-[72px] padding-x lg:hidden overflow-y-scroll pb-48 h-screen'
              variants={navVariants}
              initial='initial'
              animate='animate'
              exit='exit'>
              <div className='flex flex-col items-center gap-8 pt-8'>
                <ul className='flex flex-col w-full gap-8'>
                  <li>
                    <Link className='block text-medium-normal' href='/shop'>
                      Shop Now
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-medium-normal' href='/shop'>
                      New Arrivals
                    </Link>
                  </li>
                  <li className='cursor-pointer' onClick={handleExploreClick}>
                    <div className='flex items-center'>
                      <span className='block w-full text-medium-normal'>
                        Explore
                      </span>
                      <span className='block'>
                        <IconChevronDown
                          className={clsx('transition-transform duration-300', {
                            '-rotate-180': isExploreOpen,
                          })}
                          width={24}
                          height={24}
                          stroke={1}
                        />
                      </span>
                    </div>
                    <AnimatePresence>
                      {isExploreOpen && (
                        <motion.ul
                          className='flex flex-col gap-8 mt-8 ml-4'
                          variants={navVariants}
                          initial='initial'
                          animate='animate'
                          exit='exit'>
                          {exploreLinks.map(({ name, href }) => (
                            <li key={name}>
                              <Link
                                className='block text-medium-normal'
                                href={`/shop/${href}`}>
                                {name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>
                <div className='flex flex-col w-full gap-4 mb-8'>
                  <Link href='/auth/sign-up'>
                    <Button
                      style='secondary'
                      text='Sign Up'
                      iconPosition='no-icon'
                      isWidthFull={true}
                    />
                  </Link>
                  <Link href='/auth/sign-in'>
                    <Button
                      style='primary'
                      text='Sign In'
                      iconPosition='no-icon'
                      isWidthFull={true}
                    />
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className='items-center justify-center hidden gap-8 lg:flex'>
          <ul className='flex items-center gap-8'>
            <li>
              <Link className='block text-regular-normal-normal' href='/shop'>
                Shop Now
              </Link>
            </li>
            <li>
              <Link className='block text-regular-normal-normal' href='/shop'>
                New Arrivals
              </Link>
            </li>
            <li
              className='relative cursor-pointer'
              onMouseEnter={handleExploreHover}
              onMouseLeave={handleExploreLeave}>
              <div className='flex items-center gap-1 h-[41px]'>
                <span className='block text-regular-normal'>Explore</span>
                <span className='block'>
                  <IconChevronDown
                    className={clsx('transition-transform duration-300', {
                      '-rotate-180': isExploreHover,
                    })}
                    width={24}
                    height={24}
                    stroke={1}
                  />
                </span>
              </div>
              <AnimatePresence>
                {isExploreHover && (
                  <motion.ul
                    className='absolute flex flex-col gap-2 p-4 -translate-x-1/2 -translate-y-1/2 bg-white border border-black top-3/4 -left-1/4 text-nowrap'
                    variants={navVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'>
                    {exploreLinks.map(({ name, href }) => (
                      <li key={name}>
                        <Link
                          className='block text-regular-normal'
                          href={`/shop/${href}`}>
                          {name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
          <div className='flex items-center justify-center gap-4'>
            <Link href='/auth/sign-up'>
              <Button
                style='secondary'
                text='Sign Up'
                iconPosition='no-icon'
                isWidthFull={true}
              />
            </Link>
            <Link href='/auth/sign-in'>
              <Button
                style='primary'
                text='Sign In'
                iconPosition='no-icon'
                isWidthFull={true}
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
