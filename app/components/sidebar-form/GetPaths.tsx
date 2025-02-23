import { invoke } from '@tauri-apps/api/core';
import { open } from '@tauri-apps/plugin-dialog';
import { type FC, useEffect } from 'react';

import { Button } from '@/components/ui/kit';
import { usePathsStore, usePreviewSettings } from '@/zustand';

export const GetPaths: FC<unknown> = () => {
  const { set: setPaths, setRootFolder, rootFolder } = usePathsStore();
  const { hideGitIgnored } = usePreviewSettings();

  const getPaths = () => {
    open({ directory: true }).then(data => {
      if (!data) {
        return;
      }

      setRootFolder(data);
    });
  };

  useEffect(() => {
    if (!rootFolder) {
      return;
    }

    invoke<string[]>('get_folder_tree', {
      path: rootFolder,
      hide_git_ignored: true,
    }).then(data => {
      setPaths(data);
    });
  }, [hideGitIgnored, rootFolder]);

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
