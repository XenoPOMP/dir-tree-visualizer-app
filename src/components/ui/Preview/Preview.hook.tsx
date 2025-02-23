'use client';

import cn from 'classnames';
import set from 'lodash.set';
import { type ReactNode, useMemo } from 'react';
import type { RecursiveKeyValuePair } from 'tailwindcss/types/config';

import Entries from '@/components/ui/Preview/Entries.tsx';
import { usePathsStore } from '@/zustand';

export type EntryType = 'file' | 'directory';

export type FolderTree = RecursiveKeyValuePair<string, EntryType>;

// Converts array of paths to rendering FolderLabel components.
export const usePreview = (): ReactNode => {
  const paths = usePathsStore(s => s.paths);

  const formatted = useMemo(() => {
    // eslint-disable-next-line prefer-const
    let tree: FolderTree = {};

    // Loop over all paths
    for (const path of paths) {
      const parts = path.replace(/^\.\//g, '').split(/[\\/]/g);
      const lastSegment = parts.pop();
      let type: EntryType = 'directory';

      // Detect filename pattern
      if (/\.\w+$/gi.test(lastSegment || '')) {
        type = 'file';
      }

      set(tree, [...parts, lastSegment || ''], type);
    }

    return tree;
  }, [paths]);

  return (
    <>
      {paths.length === 0 && (
        <span className={cn('text-[14px] italic text-primary-font/75')}>
          Empty
        </span>
      )}

      <Entries entries={formatted} />
    </>
  );
};
