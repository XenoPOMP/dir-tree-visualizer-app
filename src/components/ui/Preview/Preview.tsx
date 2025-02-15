'use client';

import cn from 'classnames';
import type { FC } from 'react';

import { usePathsStore } from '@/zustand';

export const Preview: FC<unknown> = () => {
  const paths = usePathsStore(s => s.paths);

  return (
    <div
      className={cn(
        'whitespace-break-spaces',
        'w-max rounded-[.6rem] border-[1px] border-primary-border p-3',
      )}
    >
      {paths.join('\n')}
    </div>
  );
};
