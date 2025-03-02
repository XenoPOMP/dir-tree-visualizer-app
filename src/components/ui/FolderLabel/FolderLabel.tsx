import cn from 'classnames';
import { FileText, Folder } from 'lucide-react';
import type { VariableFC } from 'xenopomp-essentials';

import { usePreviewSettings } from '@/zustand';

import {
  type FolderLabelVariantsType,
  folderLabelVariants,
} from './FolderLabel.variants.ts';

export const FolderLabel: VariableFC<
  'div',
  { children?: string } & FolderLabelVariantsType,
  'children'
> = ({ className, children, variant, ...props }) => {
  const { folderIconSize } = usePreviewSettings();

  return (
    <div
      className={cn(
        folderLabelVariants({ variant }),
        'flex items-center gap-[8px]',
        'select-none',
        className,
      )}
      data-testid={variant ?? 'none'}
      {...props}
    >
      {variant && (
        <>
          {variant === 'folder' && (
            <Folder
              size={folderIconSize}
              className={cn('text-preview-dark-icon')}
            />
          )}
          {variant === 'file' && (
            <FileText
              size={folderIconSize}
              className={cn('text-preview-dark-icon')}
            />
          )}
        </>
      )}

      <span className={cn('text-[14px] leading-normal')}>{children}</span>
    </div>
  );
};
