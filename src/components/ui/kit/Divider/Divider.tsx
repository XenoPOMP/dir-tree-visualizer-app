import cn from 'classnames';
import type { FC } from 'react';

import { usePreviewSettings } from '@/zustand';

export const Divider: FC<unknown> = () => {
  const { folderIconSize, showFolderGuides } = usePreviewSettings();

  return (
    <>
      {showFolderGuides && (
        <div
          aria-hidden
          className={cn('absolute w-[1px] content-[""]', 'bg-primary-border')}
          style={{
            left: folderIconSize / 2,
            top: folderIconSize,
            height: `calc(100% - ${folderIconSize * 1.5}px)`,
          }}
        >
          <></>
        </div>
      )}
    </>
  );
};
