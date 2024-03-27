'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useFaqStore } from '@/_hooks/faq-store';
import { brandLogos } from '@/_lib/brand-logo-lib';
import { faqs } from '@/_lib/faq-lib';
import { findShops } from '@/_lib/find-shop-lib';
import { faqHideVariants, faqShowVariants } from '@/_variants/faq-variants-';
import Button from '@/components/button';
import FaqCard from '@/components/faq-card';
import FindShopCard from '@/components/find-shop-card';
import Footer from '@/components/footer';
import HeroParallax from '@/components/hero-parallax';
import Navbar from '@/components/navbar';
import { IconChevronRight, IconStarFilled } from '@tabler/icons-react';

export default function Home() {
  const { showQuestion, handleQuestionClick } = useFaqStore();

  return (
    <>
      <Navbar />
      <section className='flex flex-col items-center gap-10 bg-white lg:gap-20 padding-y'>
        <div className='flex flex-col items-center gap-6 padding-x max-w-[768px]'>
          <div className='flex flex-col items-center self-stretch gap-6'>
            <h1 className='text-center text-heading-mobile-1 lg:text-heading-1'>
              Discover the Latest Trends in Fashion
            </h1>
            <p className='text-center text-medium-normal'>
              Shop our collection of stylish shoes, comfortable t-shirts, trendy
              shorts, and other fashionable accessories for a complete and
              fashionable look.
            </p>
          </div>
          <div className='flex items-start gap-4 pt-4'>
            <Link href='/shop'>
              <Button style='primary' text='Shop' iconPosition='no-icon' />
            </Link>
            <Link href='/auth/sign-up'>
              <Button style='secondary' text='Sign Up' iconPosition='no-icon' />
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-start gap-4 overflow-hidden'>
          <HeroParallax baseVelocity={-20} isRowOne={true}></HeroParallax>
          <HeroParallax baseVelocity={20} isRowOne={false}></HeroParallax>
        </div>
      </section>
      <section className='flex bg-white padding-x padding-y'>
        <div className='flex flex-col items-start gap-5 lg:flex-row lg:gap-20'>
          <div className='flex flex-col gap-4'>
            <span className='block text-regular-normal'>Quality</span>
            <h2 className=' text-heading-mobile-2 lg:text-heading-2'>
              Explore the Latest Fashion Trends at Stardust Threads
            </h2>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-8'>
              <p className=' text-medium-normal'>
                At Stardust Threads, we offer a wide selection of high-quality
                shoes, t-shirts, shorts, and more, all with a focus on style,
                comfort, and durability. Trust us for the best fashion options.
              </p>
              <div className='flex flex-col gap-6 lg:flex-row'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-heading-mobile-2 lg:text-heading-2'>
                    50%
                  </h2>
                  <p className='text-regular-normal'>
                    Discount on All Summer Collection Items
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-heading-mobile-2 lg:text-heading-2'>
                    50%
                  </h2>
                  <p className=' text-regular-normal'>
                    Limited Time Offer on Winter Collection Items
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <Link href='/shop'>
                <Button
                  style='secondary'
                  text='Shop Now'
                  iconPosition='no-icon'
                />
              </Link>
              <Link href='/shop'>
                <Button
                  style='link'
                  text='Learn More'
                  iconPosition='trailing'
                  icon={<IconChevronRight stroke={1} width={24} height={24} />}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center gap-10 bg-white lg:gap-20 padding-x padding-y'>
        <h3 className='text-center text-heading-mobile-3 lg:text-heading-3'>
          Find the Coolest Deals on Awesome <br /> Shoes, T-Shirts, and More
        </h3>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          {findShops.map(
            ({ id, src, alt, heading, description, button_text }) => (
              <FindShopCard
                key={id}
                src={src}
                alt={alt}
                heading={heading}
                description={description}
                button={button_text}
              />
            ),
          )}
        </div>
      </section>
      <section className='flex items-center justify-center bg-white padding-x padding-y'>
        <div className='flex flex-col items-center gap-8 max-w-[768px]'>
          <div className='flex gap-1'>
            <IconStarFilled width={20} height={19.89} stroke={1} />
            <IconStarFilled width={20} height={19.89} stroke={1} />
            <IconStarFilled width={20} height={19.89} stroke={1} />
            <IconStarFilled width={20} height={19.89} stroke={1} />
            <IconStarFilled width={20} height={19.89} stroke={1} />
          </div>
          <h4 className='text-center text-heading-mobile-5 lg:text-heading-5'>
            Stardust Threads has completely changed the way I shop for clothes.
            Their selection is amazing and the quality is top-notch.
          </h4>
          <div className='flex flex-col items-center justify-center w-auto gap-5 lg:flex-row'>
            <Image
              className='w-auto h-auto rounded-normal'
              width={56}
              height={56}
              src='/images/avatar-1.jpg'
              alt='Avatar one'
            />
            <div className='flex flex-col'>
              <span className='inline-block text-center text-regular-semi-bold lg:text-start'>
                Ava Smith
              </span>
              <span className='inline-block text-center text-regular-normal lg:text-start'>
                Fashion Blogger, StyleCo
              </span>
            </div>
            <div className='w-[1px] h-[61px] bg-black hidden lg:block' />
            <Image
              className='w-1/5 h-1/5'
              width={32}
              height={32}
              src='/svgs/prada.svg'
              alt='Prada logo'
            />
          </div>
        </div>
      </section>
      <section className="flex items-start padding-x padding-y bg-no-repeat bg-cover bg-center bg-[url('/images/cta-1.jpg')]">
        <div className='flex flex-col items-start gap-6 max-w-[768px]'>
          <div className='flex flex-col gap-6'>
            <h2 className='text-white text-heading-mobile-2 lg:text-heading-2'>
              Introducing the Latest Collection
            </h2>
            <p className='text-white text-medium-normal'>
              Shop our wide range of trendy shoes, t-shirts, shorts, and more.
            </p>
          </div>
          <div className='flex gap-4'>
            <Link href='/shop'>
              <Button
                style='primary'
                text='Shop'
                iconPosition='no-icon'
                isDarkMode={true}
              />
            </Link>
            <Link href='/auth/sign-up'>
              <Button
                style='secondary'
                text='Sign Up'
                iconPosition='no-icon'
                isDarkMode={true}
              />
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-white padding-x padding-y'>
        <div className='flex flex-col gap-20 lg:flex-row'>
          <div className='flex flex-col gap-8 max-w-[500px]'>
            <div className='flex flex-col gap-6'>
              <h2 className=' text-heading-mobile-2 lg:text-heading-2'>
                Frequently Asked Questions
              </h2>
              <p className='text-medium-normal'>
                Find answers to common questions about our products, shipping,
                and returns.
              </p>
            </div>
            <Link href='/'>
              <Button style='secondary' text='Contact' iconPosition='no-icon' />
            </Link>
          </div>
          <div className='flex flex-col flex-1 gap-4'>
            {faqs.map(({ id, question, answer }) => (
              <FaqCard
                key={id}
                id={id}
                question={question}
                answer={answer}
                showQuestion={showQuestion}
                handleQuestionClick={handleQuestionClick}
                faqShowVariants={faqShowVariants}
                faqHideVariants={faqHideVariants}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center gap-12 py-20 overflow-hidden bg-white padding-x'>
        <p className='text-center text-medium-bold'>
          Trusted by top-tier brands around the globe
        </p>
        <div className='flex items-center justify-center gap-20 animate-[scroll_10s_linear_infinite]'>
          {brandLogos.map(({ id, src, alt }) => (
            <Image
              className='w-auto h-auto'
              key={id}
              src={src}
              alt={alt}
              width={100}
              height={100}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
