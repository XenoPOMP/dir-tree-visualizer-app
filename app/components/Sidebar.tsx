import cn from 'classnames';
import type { FC } from 'react';

import { MainLayout } from '@/components/layout';
import { Heading } from '@/components/ui/kit';

import parentStyles from '@app/main-page.module.scss';

import { ChangePadding, IconSize, ShowGuides } from './sidebar-form';

export const Sidebar: FC<unknown> = () => {
  return (
    <MainLayout.Sidebar>
      <MainLayout.Header
        className={cn('flex select-none items-center justify-start px-4 py-5')}
      >
        <Heading level={2}>Settings</Heading>
      </MainLayout.Header>

      <section
        className={cn(
          'flex flex-col gap-5 p-4 text-14',
          parentStyles.sidebarFieldGroup,
        )}
      >
        <IconSize />
        <ChangePadding />
        <ShowGuides />
      </section>
    </MainLayout.Sidebar>
  );
};
