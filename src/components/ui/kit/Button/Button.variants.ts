import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'classnames';

import styles from './Button.module.scss';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(cn('inline-flex', styles.btn), {
  variants: {
    variant: {
      default: '',
      control: styles.ctrl,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
