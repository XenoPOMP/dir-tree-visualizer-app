import { describe, test } from 'vitest';

import { AppIcon } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('AppIcon component', () => {
  test('It renders', () => {
    assertRendering(<AppIcon />);
  });
});
