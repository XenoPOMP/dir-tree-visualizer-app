import { describe, test } from 'vitest';

import { Divider } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Divider component', () => {
  test('It renders', () => {
    assertRendering(<Divider />);
  });
});
