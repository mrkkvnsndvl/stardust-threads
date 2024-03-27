'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ProductCardProps } from '@/_types/product-card-type';
import Button from '@/components/button';

import Skeleton from '../components/skeleton';

export default function ProductCard({
  id,
  imageUrl,
  name,
  price,
}: ProductCardProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return loading ? (
    <Skeleton />
  ) : (
    <div
      className='flex flex-col items-center gap-4 w-[100%] max-w-[339px]'
      key={id}>
      <Image
        className='object-center w-full h-full aspect-square'
        src={imageUrl}
        alt={`${name}`}
        width={400}
        height={400}
        priority={true}
      />
      <div className='flex items-start self-stretch'>
        <span className='w-full h-full text-medium-semi-bold'>{name}</span>
        <span className=' text-large-semi-bold'>₱{price}</span>
      </div>
      <Button
        style='secondary'
        text='Add to Cart'
        iconPosition='no-icon'
        isWidthFull={true}
      />
    </div>
  );
}
