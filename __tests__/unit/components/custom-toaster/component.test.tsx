import { describe, test } from 'vitest';

import { CustomToaster } from '@/components/ui';

import { assertRendering, injectMatchMediaMock } from '@test/assets';

describe('CustomToaster component', () => {
  injectMatchMediaMock();

  test('It renders', () => {
    assertRendering(<CustomToaster />);
  });
});
