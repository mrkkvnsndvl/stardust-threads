import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'heading-1': [
        '3.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-2': [
        '3rem',
        {
          lineHeight: '120%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-3': [
        '2.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-4': [
        '2rem',
        {
          lineHeight: '130%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-5': [
        '1.5rem',
        {
          lineHeight: '140%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-6': [
        '1.25rem',
        {
          lineHeight: '140%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-mobile-1': [
        '2.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-mobile-2': [
        '2.25rem',
        {
          lineHeight: '120%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-mobile-3': [
        '2rem',
        {
          lineHeight: '120%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-mobile-4': [
        '1.5rem',
        {
          lineHeight: '140%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-mobile-5': [
        '1.25rem',
        {
          lineHeight: '140%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-mobile-6': [
        '1.125rem',
        {
          lineHeight: '140%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'large-light': [
        '1.25rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      'large-normal': [
        '1.25rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'large-medium': [
        '1.25rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '500',
        },
      ],
      'large-semi-bold': [
        '1.25rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '600',
        },
      ],
      'large-bold': [
        '1.25rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'large-extra-bold': [
        '1.25rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '800',
        },
      ],
      'large-link': [
        '1.25rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'medium-light': [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      'medium-normal': [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'medium-medium': [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '500',
        },
      ],
      'medium-semi-bold': [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '600',
        },
      ],
      'medium-bold': [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'medium-extra-bold': [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '800',
        },
      ],
      'medium-link': [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'regular-light': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      'regular-normal': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'regular-medium': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '500',
        },
      ],
      'regular-semi-bold': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '600',
        },
      ],
      'regular-bold': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'regular-extra-bold': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '800',
        },
      ],
      'regular-link': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'small-light': [
        '.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      'small-normal': [
        '.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'small-medium': [
        '.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '500',
        },
      ],
      'small-semi-bold': [
        '.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '600',
        },
      ],
      'small-bold': [
        '.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'small-extra-bold': [
        '.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '800',
        },
      ],
      'small-link': [
        '.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'tiny-light': [
        '.75rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      'tiny-normal': [
        '.75rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      'tiny-medium': [
        '.75rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '500',
        },
      ],
      'tiny-semi-bold': [
        '.75rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '600',
        },
      ],
      'tiny-bold': [
        '.75rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'tiny-extra-bold': [
        '.75rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '800',
        },
      ],
      'tiny-link': [
        '.75rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
    },
    extend: {
      colors: {
        black: '#1E1D1C',
        white: '#FFFFFF',
        grey: '#505050',
      },
      borderRadius: {
        none: '0',
        normal: '3.125rem',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(132%)' },
          '100%': { transform: 'translateX(-51.2%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
