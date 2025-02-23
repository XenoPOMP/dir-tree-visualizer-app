import { type VariantProps, cva } from 'class-variance-authority';

export type CustomLinkVariantsType = VariantProps<typeof customLinkVariants>;

export const customLinkVariants = cva('', {
  variants: {
    variant: {
      unstyled: '',
      external: 'underline',
    },
  },

  defaultVariants: {
    variant: 'unstyled',
  },
});
