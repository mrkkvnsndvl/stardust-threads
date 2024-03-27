import Link from 'next/link';

import Button from '@/components/button';
import { IconBrandGoogleFilled } from '@tabler/icons-react';

export default function Signup() {
  return (
    <section className='flex flex-col items-center gap-6'>
      <div className='flex flex-col items-center gap-8 p-6 lg:p-12 border border-black sm:w-[480px] max-w-[480px] mx-3 sm:mx-0'>
        <div className='flex flex-col items-center gap-6'>
          <h2 className='w-full text-center text-heading-mobile-2 lg:text-heading-2'>
            Sign Up
          </h2>
          <p className='text-center text-medium-normal'>
            Please provide your signup details below.
          </p>
        </div>
        <form className='flex flex-col self-stretch justify-center gap-4'>
          <input
            className='flex items-center gap-2 p-3 border border-black text-regular-normal focus:outline-none'
            type='text'
            name='username'
            placeholder='Username'
            autoComplete='on'
            required
          />
          <input
            className='flex p-3 border border-black items-centergap-2 text-regular-normal focus:outline-none'
            type='email'
            name='email'
            autoComplete='on'
            placeholder='Email'
            required
          />
          <input
            className='flex items-center gap-2 p-3 border border-black text-regular-normal focus:outline-none'
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <Button style='primary' text='Sign Up' iconPosition='no-icon' />
          <div className='w-full h-[1px] bg-black my-4' />
          <Button
            style='secondary'
            text='Sign Up with Google'
            iconPosition='leading'
            icon={<IconBrandGoogleFilled stroke={1} width={24} height={24} />}
            isWidthFull={true}
          />
          <div className='flex items-center justify-center w-full gap-1'>
            <span className='text-center text-regular-normal '>
              Already have an account?
            </span>
            <Link className='underline text-regular-link' href='/auth/sign-in'>
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
