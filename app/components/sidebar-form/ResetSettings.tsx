'use client';

import cn from 'classnames';
import type { FC } from 'react';

import { Button } from '@/components/ui/kit';
import { usePreviewSettings } from '@/zustand';

export const ResetSettings: FC<unknown> = () => {
  const { reset } = usePreviewSettings();

  return (
    <Button
      variant='control'
      instant
      className={cn('flex-center')}
      onClick={reset}
    >
      Reset
    </Button>
  );
};
