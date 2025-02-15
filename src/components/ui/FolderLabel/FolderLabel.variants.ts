import { type VariantProps, cva } from 'class-variance-authority';

export type FolderLabelVariantsType = VariantProps<typeof folderLabelVariants>;

export const folderLabelVariants = cva('', {
  variants: {
    variant: {
      folder: '',
      file: '',
    },
  },

  defaultVariants: {
    variant: 'folder',
  },
});
