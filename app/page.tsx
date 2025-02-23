'use client';

import { useRef } from 'react';

import { MainLayout } from '@/components/layout';

import { Body, Header, Sidebar } from './components';

export default function Home() {
  const previewRef = useRef<HTMLElement | null>(null);

  return (
    <MainLayout>
      <Header previewRef={previewRef} />
      <Sidebar />
      <Body previewRef={previewRef} />
    </MainLayout>
  );
}
