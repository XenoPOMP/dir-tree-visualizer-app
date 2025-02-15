'use client';

import cn from 'classnames';
import { type FC, useCallback } from 'react';

import { FolderLabel } from '@/components/ui';

import type { FolderTree } from './Preview.hook';

interface EntriesProps {
  entries?: FolderTree;
  hasIntend?: boolean;
}

const Entries: FC<EntriesProps> = ({ entries, hasIntend }) => {
  const filterEntries = useCallback(
    (entries: FolderTree | undefined) => {
      if (!entries) {
        return;
      }

      /**
       * Default object entries.
       * Also removes top-level entries with empty names.
       */
      let sortedEntries = Object.entries(entries).filter(([key]) => key !== '');

      // Move folders to top
      sortedEntries = sortedEntries.sort(([_, value]) => {
        if (typeof value === 'object' || value === 'directory') {
          return -1;
        }

        return 1;
      });

      // Form object from sorted entries
      return Object.fromEntries(sortedEntries);
    },
    [entries],
  );

  return (
    <div
      className={cn({
        'ml-[calc(var(--p14)*1.5714285714)]': hasIntend,
      })}
    >
      {Object.entries(filterEntries(entries) || {}).map(([key, value], idx) => {
        if (typeof value === 'object') {
          return (
            <div key={`entry-${idx}`}>
              <FolderLabel variant='folder'>{key.toString()}</FolderLabel>

              <Entries
                entries={value}
                hasIntend
              />
            </div>
          );
        }

        if (value === 'directory') {
          return (
            <FolderLabel
              variant='folder'
              key={`entry-${idx}`}
            >
              {key.toString()}
            </FolderLabel>
          );
        }

        return (
          <FolderLabel
            key={`entry-${idx}`}
            variant='file'
          >
            {key.toString()}
          </FolderLabel>
        );
      })}
    </div>
  );
};

export default Entries;
