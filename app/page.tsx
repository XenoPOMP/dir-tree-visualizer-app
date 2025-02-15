import cn from 'classnames';
import type { Metadata } from 'next';

import { MainLayout } from '@/components/layout';
import { ExportImageButton, Preview, Spacer } from '@/components/ui';
import { Heading } from '@/components/ui/kit';
import { generateStaticMetadata } from '@/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <MainLayout>
      <MainLayout.Header
        className={cn('flex select-none items-center px-4 py-5')}
      >
        <Heading level={2}>Preview</Heading>

        <Spacer className={cn('min-w-[--p-level-3]')} />

        <section className={cn('flex items-center gap-[--p-level-4]')}>
          <ExportImageButton />
        </section>
      </MainLayout.Header>

      <MainLayout.Body className={cn(styles.mainPage, 'overflow-auto', 'p-4')}>
        <Preview />
      </MainLayout.Body>
    </MainLayout>
  );
}
