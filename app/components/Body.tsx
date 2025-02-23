import cn from 'classnames';
import type { FC } from 'react';

import { MainLayout } from '@/components/layout';
import { Preview } from '@/components/ui';

export const Body: FC<unknown> = () => {
  return (
    <MainLayout.Body className={cn('overflow-auto', 'p-4')}>
      <Preview />
    </MainLayout.Body>
  );
};
