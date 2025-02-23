'use client';

import cn from 'classnames';
import type { FC } from 'react';

import { MainLayout } from '@/components/layout';
import { Heading } from '@/components/ui/kit';
import { usePreviewSettings } from '@/zustand';

export const Sidebar: FC<unknown> = () => {
  const set = usePreviewSettings(s => s.set);

  return (
    <MainLayout.Sidebar>
      <MainLayout.Header
        className={cn('flex select-none items-center justify-start px-4 py-5')}
      >
        <Heading level={2}>Settings</Heading>
      </MainLayout.Header>

      <section className={cn('px-4 py-5 text-14')}>Sus</section>
    </MainLayout.Sidebar>
  );
};
