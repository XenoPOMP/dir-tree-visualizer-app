import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'classnames';

import styles from './Button.module.scss';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  cn('inline-flex rounded-[.2rem]', styles.btn),
  {
    variants: {
      variant: {
        default: '',
        control: styles.ctrl,
      },

      square: {
        true: 'aspect-square flex-center p-[.2rem]',
        false: 'px-[.3rem] py-[.2rem]',
      },
    },

    defaultVariants: {
      variant: 'default',
      square: false,
    },
  },
);
