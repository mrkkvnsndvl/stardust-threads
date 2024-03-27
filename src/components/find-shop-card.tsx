import Image from 'next/image';
import Link from 'next/link';

import { FindShopCardProps } from '@/_types/find-shop-card-type';
import Button from '@/components/button';
import { IconChevronRight } from '@tabler/icons-react';

export default function FindShopCard({
  id,
  src,
  alt,
  heading,
  description,
  button,
}: FindShopCardProps) {
  return (
    <div
      className='flex flex-col items-center justify-between flex-1 gap-6'
      key={id}>
      <div className='flex flex-col items-center self-stretch gap-6'>
        <Image
          className='w-auto h-auto rounded-normal'
          src={src}
          alt={alt}
          width={400}
          height={400}
        />
        <div className='flex flex-col items-start self-stretch gap-6' >
          <h4 className='self-stretch text-center text-heading-mobile-5 lg:text-heading-5'>
            {heading}
          </h4>
          <p className='self-stretch text-center text-regular-normal'>
            {description}
          </p>
        </div>
      </div>
      <Link href='/shop'>
        <Button
          style='link'
          text={button}
          iconPosition='trailing'
          icon={<IconChevronRight stroke={1} size={24} />}
        />
      </Link>
    </div>
  );
}
