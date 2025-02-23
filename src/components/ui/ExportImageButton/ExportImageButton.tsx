import cn from 'classnames';
import { ImageDown } from 'lucide-react';
import type { FC } from 'react';
import useScreenshot from 'use-screenshot-hook';

import { Button } from '@/components/ui/kit';
import type { IPreviewRef } from '@/types';

export const ExportImageButton: FC<IPreviewRef> = ({ previewRef }) => {
  const { takeScreenshot } = useScreenshot({
    ref: previewRef,
  });

  return (
    <Button
      variant='control'
      square
      className={cn('text-[--heading-2]')}
      onClick={() => takeScreenshot()}
    >
      <ImageDown size='1em' />
    </Button>
  );
};
