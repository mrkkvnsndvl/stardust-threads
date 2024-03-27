import Image from 'next/image';
import Link from 'next/link';

import { shopData } from '@/_lib/shop-data-lib';
import ProductCard from '@/app/shop/components/product-card';
import Button from '@/components/button';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Shop() {
  return (
    <>
      <Navbar />
      <section className='flex flex-col items-start gap-20 bg-white padding-x padding-y'>
        <div className='flex max-w-[768px] lg:w-[768px] flex-col items-start gap-6'>
          <div className='flex flex-col items-start self-stretch gap-4'>
            <span className='text-center text-regular-semi-bold'>Shop</span>
            <div className='flex flex-col items-start self-stretch gap-6'>
              <h1 className='text-heading-mobile-1 lg:text-heading-1'>
                Explore Your Personal Style
              </h1>
              <p className='self-stretch text-medium-normal'>
                Discover our extensive selection of footwear, apparel, and
                activewear suitable for all occasions.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <Link href='/shop'>
              <Button
                style='primary'
                text='Learn More'
                iconPosition='no-icon'
              />
            </Link>
            <Link href='/auth/sign-up'>
              <Button style='secondary' text='Sign Up' iconPosition='no-icon' />
            </Link>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center gap-20 bg-white padding-x padding-y'>
        <div className='flex items-end self-stretch justify-between'>
          <div className='flex max-w-[768px] lg:w-[768px] flex-col items-start gap-4 '>
            <span className='text-center text-regular-semi-bold'>Discover</span>
            <div className='flex flex-col items-center self-stretch gap-4'>
              <h2 className='self-stretch text-heading-mobile-2 lg:text-heading-2 '>
                Products
              </h2>
              <p className='self-stretch text-medium-normal '>
                Browse our wide selection of high-quality products.
              </p>
            </div>
          </div>
          <Link className='hidden md:block' href='/shop'>
            <Button style='secondary' text='View all' iconPosition='no-icon' />
          </Link>
        </div>
        {shopData.map(({ title, items }) => (
          <div className='w-full' key={title}>
            <h3 className='mb-4 text-heading-mobile-3 lg:text-heading-mobile-3'>
              {title}
            </h3>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
              {items.slice(0, 4).map(({ id, imageUrl, name, price }) => (
                <ProductCard
                  key={id}
                  id={id}
                  imageUrl={imageUrl}
                  name={name}
                  price={price}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className='flex flex-col items-start gap-20 bg-white padding-x padding-y'>
        <div className='flex flex-col items-center self-stretch gap-10 lg:gap-20 lg:flex-row'>
          <div className='flex flex-col items-start flex-1 gap-6'>
            <h3 className='self-stretch text-heading-mobile-3 lg:text-heading-3 '>
              Discover the Perfect Blend of Durability, Style, and Comfort
            </h3>
            <p className='self-stretch text-medium-normal'>
              At Stardust Threads, we offer durable products without
              compromising on style or comfort. Our shoes, t-shirts, shorts, and
              more are designed with great attention to detail, so you look and
              feel good.
            </p>
          </div>
          <Image
            className='flex-1 w-auto h-auto rounded-normal'
            src='/images/discover-1.jpg'
            alt='Discover image one'
            width={640}
            height={640}
          />
        </div>
      </section>
      <section className='flex flex-col items-start gap-20 bg-white padding-x padding-y'>
        <div className='flex flex-col items-center self-stretch gap-20 sm:flex-row'>
          <div className='flex flex-col items-start flex-1 gap-6'>
            <h3 className='self-stretch text-heading-mobile-3 lg:text-heading-3 '>
              Discover Our Exclusive Deals Today
            </h3>
            <p className='self-stretch text-medium-normal'>
              Shop now and save on your favorite items
            </p>
          </div>
          <div className='flex items-start gap-4'>
            <Link href='/shop'>
              <Button style='primary' text='Shop' iconPosition='no-icon' />
            </Link>
            <Link href='/auth/sign-up'>
              <Button style='secondary' text='Sign Up' iconPosition='no-icon' />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
