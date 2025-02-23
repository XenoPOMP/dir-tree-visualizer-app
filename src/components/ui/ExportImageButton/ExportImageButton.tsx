'use client';

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

    takeScreenshot()
      .then(() => {
        toast('Saved screenshot to Downloads');
      })
      .finally(() => {
        setIsLoading(false);
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
