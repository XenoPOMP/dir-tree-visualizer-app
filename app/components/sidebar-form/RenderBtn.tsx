import { invoke } from '@tauri-apps/api/core';
import cn from 'classnames';
import type { FC } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/kit';
import { usePathsStore } from '@/zustand';

export const RenderBtn: FC<unknown> = () => {
  const { rootFolder, set: setPaths } = usePathsStore();

  const handleClick = async () => {
    if (!rootFolder) {
      toast.error('Select folder first!');
      return;
    }

    invoke<string[]>('get_folder_tree', {
      path: rootFolder,
      hide_git_ignored: true,
    }).then(data => {
      setPaths(data);
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
