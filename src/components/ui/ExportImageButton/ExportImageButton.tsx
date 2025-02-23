'use client';

import { BaseDirectory, writeFile } from '@tauri-apps/plugin-fs';
import toUint8Array from 'base64-to-uint8array';
import cn from 'classnames';
import { ImageDown } from 'lucide-react';
import { type FC, useState } from 'react';
import { toast } from 'sonner';
import useScreenshot from 'use-screenshot-hook';

import { Button, Loading } from '@/components/ui/kit';
import type { IPreviewRef } from '@/types';

export const ExportImageButton: FC<IPreviewRef> = ({ previewRef }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { takeScreenshot } = useScreenshot({
    ref: previewRef,
  });

  const onClick = () => {
    setIsLoading(true);

    const saveScreenshot = async () => {
      const content = await takeScreenshot();
      const withoutHead =
        content?.replace(/^data:image\/png;base64,/, '') ?? '';

      const data = toUint8Array(withoutHead);

      await writeFile(`screenshot.png`, data, {
        baseDir: BaseDirectory.Download,
      });
    };

    toast.promise(saveScreenshot, {
      loading: 'Saving screenshot...',
      success: 'Screenshot saved to Downloads folder',
      error: data => {
        // eslint-disable-next-line no-console
        console.log(data);
        return 'Failed to save screenshot';
      },
      finally: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <>
      <Button
        variant='control'
        square
        className={cn('text-[--heading-2] disabled:hover:bg-block-hover')}
        onClick={onClick}
        disabled={isLoading}
      >
        {!isLoading ? <ImageDown size='1em' /> : <Loading variant='circle' />}
      </Button>
    </>
  );
};
