import { describe, vi } from 'vitest';

import { FONT_MOCK } from '@app/constants';
import RootLayout, { generateMetadata } from '@app/layout.tsx';

import { injectMatchMediaMock, injectMocks, testNextPage } from '@test/assets';

describe('Root layout test', () => {
  injectMatchMediaMock();

  injectMocks(() => {
    vi.mock('next/font/google', () => ({
      Inter: FONT_MOCK,
      Geologica: FONT_MOCK,
    }));
  });

  testNextPage(<RootLayout children={undefined} />, {
    generateMetadata,
  });
});
