import cn from 'classnames';
import { FileText, Folder } from 'lucide-react';
import type { VariableFC } from 'xenopomp-essentials';

import {
  type FolderLabelVariantsType,
  folderLabelVariants,
} from './FolderLabel.variants.ts';

const ICON_SIZE = '1.1428571429em';

export const FolderLabel: VariableFC<
  'div',
  { children?: string } & FolderLabelVariantsType,
  'children'
> = ({ className, children, variant, ...props }) => {
  return (
    <div
      className={cn(
        folderLabelVariants({ variant }),
        'flex items-center gap-[0.5714285714em] text-14',
        'select-none',
        className,
      )}
      {...props}
    >
      {variant && (
        <div className={cn('text-preview-dark-icon')}>
          {variant === 'folder' && <Folder size={ICON_SIZE} />}
          {variant === 'file' && <FileText size={ICON_SIZE} />}
        </div>
      )}

      <span className={cn('leading-normal')}>{children}</span>
    </div>
  );
};
