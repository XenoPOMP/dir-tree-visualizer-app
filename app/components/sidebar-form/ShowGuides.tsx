'use client';

import type { FC } from 'react';

import { Checkbox } from '@/components/ui/kit';
import { usePreviewSettings } from '@/zustand';

export const ShowGuides: FC<unknown> = () => {
  const { set, showFolderGuides } = usePreviewSettings();

  return (
    <Checkbox
      checked={showFolderGuides}
      onChange={e => {
        set({
          showFolderGuides: e,
        });
      }}
    >
      Show folder guides
    </Checkbox>
  );
};
