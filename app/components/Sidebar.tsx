import cn from 'classnames';
import type { FC } from 'react';

import { MainLayout } from '@/components/layout';
import { Heading } from '@/components/ui/kit';

import parentStyles from '@app/main-page.module.scss';

import {
  ChangePadding,
  Divider,
  GetPaths,
  IconSize,
  ResetSettings,
  ShowGitIgnored,
  ShowGuides,
} from './sidebar-form';

export const Sidebar: FC<unknown> = () => {
  return (
    <MainLayout.Sidebar
      style={{
        width: 'calc(var(--p-level-4) * 2 + 260px)',
      }}
    >
      <MainLayout.Header
        className={cn('flex select-none items-center justify-start px-4 py-5')}
      >
        <Heading level={2}>Settings</Heading>
      </MainLayout.Header>

      <section
        className={cn(
          'flex flex-col gap-[.5rem] p-4 text-14',
          parentStyles.sidebarFieldGroup,
        )}
      >
        <GetPaths />

        <Divider />

        <IconSize />
        <ChangePadding />
        <ShowGitIgnored />
        <ShowGuides />

        <Divider />

        <ResetSettings />
      </section>
    </MainLayout.Sidebar>
  );
};
