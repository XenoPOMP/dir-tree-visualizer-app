import cn from 'classnames';
import type { FC } from 'react';

import { MainLayout } from '@/components/layout';
import { ExportImageButton, Spacer } from '@/components/ui';
import { Heading } from '@/components/ui/kit';
import type { IPreviewRef } from '@/types';

export const Header: FC<IPreviewRef> = ({ previewRef }) => {
  return (
    <MainLayout.Header
      className={cn('flex select-none items-center px-4 py-5')}
    >
      <Heading level={2}>Preview</Heading>

      <Spacer className={cn('min-w-[--p-level-3]')} />

      <section className={cn('flex items-center gap-[--p-level-4]')}>
        <ExportImageButton previewRef={previewRef} />
      </section>
    </MainLayout.Header>
  );
};
