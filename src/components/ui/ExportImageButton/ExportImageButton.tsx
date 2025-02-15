import { ImageDown } from 'lucide-react';
import type { FC } from 'react';

import { Button } from '@/components/ui/kit';

export const ExportImageButton: FC<unknown> = () => {
  return (
    <Button
      variant='control'
      square
    >
      <ImageDown />
    </Button>
  );
};
