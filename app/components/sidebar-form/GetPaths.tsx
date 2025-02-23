import { open } from '@tauri-apps/plugin-dialog';
import type { FC } from 'react';

import { Button } from '@/components/ui/kit';
import { usePathsStore } from '@/zustand';

export const GetPaths: FC<unknown> = () => {
  const { set } = usePathsStore();

  const onClick = () => {
    open();

    // invoke<string[]>('get_folder_tree', {
    //   hide_git_ignored: true,
    // }).then(data => {
    //   console.log(data);
    // });
  };

  return (
    <Button
      variant='control'
      instant={false}
    >
      Select folder
    </Button>
  );
};
