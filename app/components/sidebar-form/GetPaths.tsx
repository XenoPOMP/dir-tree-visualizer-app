import { open } from '@tauri-apps/plugin-dialog';
import type { FC } from 'react';

import { Button } from '@/components/ui/kit';
import { usePathsStore } from '@/zustand';

export const GetPaths: FC<unknown> = () => {
  const { setRootFolder, rootFolder } = usePathsStore();

  const getPaths = () => {
    open({ directory: true }).then(data => {
      if (!data) {
        return;
      }

      setRootFolder(data);
    });
  };

  return (
    <Button
      variant='control'
      instant={false}
      onClick={getPaths}
    >
      {rootFolder ?? 'Select folder'}
    </Button>
  );
};
