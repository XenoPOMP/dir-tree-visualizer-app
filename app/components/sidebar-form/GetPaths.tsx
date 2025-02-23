import { invoke } from '@tauri-apps/api/core';
import { open } from '@tauri-apps/plugin-dialog';
import { type FC, useEffect } from 'react';

import { Button } from '@/components/ui/kit';
import { usePathsStore, usePreviewSettings } from '@/zustand';

export const GetPaths: FC<unknown> = () => {
  const { setRootFolder, rootFolder, set: setPaths } = usePathsStore();
  const { hideGitIgnored } = usePreviewSettings();

  const onClick = () => {
    open({ directory: true }).then(data => {
      if (!data) {
        return;
      }

      setRootFolder(data);
    });
  };

  const getPaths = async () => {
    if (!rootFolder) {
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

  useEffect(() => {
    getPaths();
  }, [rootFolder, hideGitIgnored]);

  return (
    <Button
      variant='control'
      instant={false}
      onClick={onClick}
    >
      <span className='truncate'>{rootFolder ?? 'Select folder'}</span>
    </Button>
  );
};
