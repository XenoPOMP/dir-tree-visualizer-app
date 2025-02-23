import cn from 'classnames';
import type { FC } from 'react';

import { MainLayout } from '@/components/layout';
import { Preview } from '@/components/ui';
import type { IPreviewRef } from '@/types';

export const Body: FC<IPreviewRef> = ({ previewRef }) => {
  return (
    <MainLayout.Body className={cn('overflow-auto', 'p-4')}>
      <Preview previewRef={previewRef} />
    </MainLayout.Body>
  );
};
