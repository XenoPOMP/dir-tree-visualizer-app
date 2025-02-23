import { describe, test } from 'vitest';

import { Stack } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('Stack component', () => {
  test('It renders', () => {
    assertRendering(<Stack />);
  });
});
