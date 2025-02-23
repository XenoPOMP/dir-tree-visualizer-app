import cn from 'classnames';
import { ImageDown } from 'lucide-react';
import type { FC } from 'react';

import { Button } from '@/components/ui/kit';

export const ExportImageButton: FC<unknown> = () => {
  return (
    <Button
      variant='control'
      square
      className={cn('text-[--heading-2]')}
    >
      <ImageDown size='1em' />
    </Button>
  );
};
