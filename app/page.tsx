import cn from 'classnames';
import type { Metadata } from 'next';

import { MainLayout } from '@/components/layout';
import { Spacer } from '@/components/ui';
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

        <Spacer />

        <section>Buttons</section>
      </MainLayout.Header>

      <main className={cn(styles.mainPage)}>index page</main>
    </MainLayout>
  );
}
