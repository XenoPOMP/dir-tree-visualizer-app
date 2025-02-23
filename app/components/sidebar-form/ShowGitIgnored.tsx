import type { FC } from 'react';

import { Checkbox } from '@/components/ui/kit';
import { usePreviewSettings } from '@/zustand';

export const ShowGitIgnored: FC<unknown> = () => {
  const { set, hideGitIgnored } = usePreviewSettings();

  return (
    <Checkbox
      checked={hideGitIgnored}
      onChange={e => {
        set({
          hideGitIgnored: e,
        });
      }}
    >
      Hide gitignored
    </Checkbox>
  );
};
