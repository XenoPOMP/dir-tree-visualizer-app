import type { Metadata } from 'next';

import { MainLayout } from '@/components/layout';
import { generateStaticMetadata } from '@/utils/seo';

import { Body, Header, Sidebar } from './components';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <Sidebar />
      <Body />
    </MainLayout>
  );
}
