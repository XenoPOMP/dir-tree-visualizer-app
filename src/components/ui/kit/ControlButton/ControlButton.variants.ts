import { type VariantProps, cva } from 'class-variance-authority';

export type ControlButtonVariantsType = VariantProps<
  typeof controlButtonVariants
>;

export const controlButtonVariants = cva('');
