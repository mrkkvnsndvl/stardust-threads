import Link from 'next/link';

import Button from '@/components/button';
import { IconBrandGoogleFilled } from '@tabler/icons-react';

export default function SignIn() {
  return (
    <section className='flex flex-col items-center gap-6 bg-white'>
      <div className='flex flex-col items-center gap-8 p-6 border border-black lg:p-12 sm:w-[480px] max-w-[480px]'>
        <div className='flex flex-col items-center self-stretch gap-6'>
          <h2 className='self-stretch text-center text-heading-mobile-2 lg:text-heading-2'>
            Sign In
          </h2>
          <p className='self-stretch text-center text-medium-normal'>
            Enter your signin information below.
          </p>
        </div>
        <form className='flex flex-col items-center self-stretch justify-center gap-6'>
          <div className='flex flex-col items-start self-stretch gap-2'>
            <span className='self-stretch text-regular-normal'>Email*</span>
            <input
              className='flex items-center self-stretch h-12 gap-2 p-3 bg-white border border-black focus:outline-none'
              type='email'
              name='email'
              autoComplete='on'
              required
            />
          </div>
          <div className='flex flex-col items-start self-stretch gap-2'>
            <div className='flex items-start self-stretch justify-between'>
              <span className='text-regular-normal'>Password*</span>
              <Link
                className='text-center underline text-regular-link'
                href='/auth/sign-in'>
                Forgot your password?
              </Link>
            </div>
            <input
              className='flex items-center self-stretch h-12 gap-2 p-3 bg-white border border-black focus:outline-none'
              type='password'
              name='password'
              required
            />
          </div>
          <div className='flex flex-col items-start self-stretch gap-4'>
            <Button
              style='primary'
              text='Sign In'
              iconPosition='no-icon'
              isWidthFull={true}
            />
            <Button
              type='button'
              style='secondary'
              text='Sign In with Google'
              iconPosition='leading'
              icon={<IconBrandGoogleFilled stroke={1} width={24} height={24} />}
              isWidthFull={true}
            />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-center text-regular-normal '>
              Don't have an account?
            </span>
            <Link
              href='/auth/sign-up'
              className='text-center underline text-regular-link'>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
