import { describe, test } from 'vitest';

import { Checkbox } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Checkbox component', () => {
  test('It renders', () => {
    assertRendering(<Checkbox />);
  });
});
