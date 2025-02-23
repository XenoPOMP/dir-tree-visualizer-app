import cn from 'classnames';
import { FileText, Folder } from 'lucide-react';
import type { VariableFC } from 'xenopomp-essentials';

import { DEFAULT_SELECTOR, usePreviewSettings } from '@/zustand';

import {
  type FolderLabelVariantsType,
  folderLabelVariants,
} from './FolderLabel.variants.ts';

export const FolderLabel: VariableFC<
  'div',
  { children?: string } & FolderLabelVariantsType,
  'children'
> = ({ className, children, variant, ...props }) => {
  const { folderIconSize } = usePreviewSettings(DEFAULT_SELECTOR);

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
        <div className={cn('text-preview-dark-icon')}>
          {variant === 'folder' && <Folder size={folderIconSize} />}
          {variant === 'file' && <FileText size={folderIconSize} />}
        </div>
      )}

      <span className={cn('text-[14px] leading-normal')}>{children}</span>
    </div>
  );
};
