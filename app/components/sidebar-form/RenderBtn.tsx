import { invoke } from '@tauri-apps/api/core';
import cn from 'classnames';
import type { FC } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/kit';
import { usePathsStore, usePreviewSettings } from '@/zustand';

export const RenderBtn: FC<unknown> = () => {
  const { rootFolder, set: setPaths } = usePathsStore();
  const { hideGitIgnored } = usePreviewSettings();

  const handleClick = async () => {
    if (!rootFolder) {
      toast.error('Select folder first!');
      return;
    }

    invoke<string[]>('get_folder_tree', {
      path: rootFolder,
      hideGitIgnored,
    }).then(data => {
      const filtered = data
        .map(d =>
          d.replace(new RegExp(`^${rootFolder}`), '').replace(/^\//, ''),
        )
        .filter(i => i !== '')
        .map(i => `./${i}`);

      setPaths(filtered);
    });
  };

  return (
    <Button
      variant='control'
      instant
      className={cn('flex-center')}
      onClick={handleClick}
    >
      Render
    </Button>
  );
};
