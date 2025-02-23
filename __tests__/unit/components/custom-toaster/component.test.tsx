import { describe, test } from 'vitest';

import { CustomToaster } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('CustomToaster component', () => {
  test('It renders', () => {
    assertRendering(<CustomToaster />);
  });
});
