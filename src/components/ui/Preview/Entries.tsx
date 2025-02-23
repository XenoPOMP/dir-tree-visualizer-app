'use client';

import cn from 'classnames';
import { orderBy } from 'natural-orderby';
import { type FC, useCallback } from 'react';
import type { ArrayType } from 'xenopomp-essentials';

import { FolderLabel } from '@/components/ui';
import { Accordion, Divider } from '@/components/ui/kit';
import type { SortPredicate } from '@/types';

import type { FolderTree } from './Preview.hook';

interface EntriesProps {
  entries?: FolderTree;
  hasIntend?: boolean;
}

const Entries: FC<EntriesProps> = ({ entries, hasIntend }) => {
  const filterAndSort = useCallback(
    (entries: FolderTree | undefined) => {
      if (!entries) {
        return;
      }

      /**
       * Default object entries.
       * Also removes top-level entries with empty names.
       */
      const filteredEntries = Object.entries(entries).filter(
        ([key]) => key !== '',
      );

      const sortAlphabetically: SortPredicate<
        ArrayType<typeof filteredEntries>
      > = ([name], [nextName]) => {
        const ordered = orderBy(
          [{ item: name }, { item: nextName }],
          [v => v.item],
          ['asc'],
        ).map(v => v.item);

        return ordered.at(0) === name ? -1 : 1;
      };

      const folders = filteredEntries
        .filter(
          ([_, value]) =>
            (typeof value === 'string' && value === 'directory') ||
            typeof value === 'object',
        )
        .sort(sortAlphabetically);

      const files = filteredEntries
        .filter(([_, value]) => typeof value === 'string' && value === 'file')
        .sort(sortAlphabetically);

      // Form object from sorted entries
      return Object.fromEntries([...folders, ...files]);
    },
    [entries],
  );

  return (
    <div
      style={{
        marginLeft: hasIntend ? '14px' : undefined,
      }}
    >
      {Object.entries(filterAndSort(entries) || {}).map(([key, value], idx) => {
        if (typeof value === 'object') {
          return (
            <div
              key={`entry-${idx}`}
              className={cn('relative')}
            >
              <Divider />

              <Accordion>
                <Accordion.Collapse
                  className={cn('gap-[.2em]')}
                  noChevron
                >
                  <FolderLabel variant='folder'>{key.toString()}</FolderLabel>
                </Accordion.Collapse>

                <Accordion.Body>
                  <Entries
                    entries={filterAndSort(value)}
                    hasIntend
                  />
                </Accordion.Body>
              </Accordion>
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
