import { MainLayout } from '@/components/layout';

import { Body, Header, Sidebar } from './components';

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <Sidebar />
      <Body />
    </MainLayout>
  );
}
