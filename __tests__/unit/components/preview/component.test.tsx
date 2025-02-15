import { describe, test } from 'vitest';

import { Preview } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('Preview component', () => {
  test('It renders', () => {
    assertRendering(<Preview />);
  });
});
