import { describe, test } from 'vitest';

import { CustomLink } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('CustomLink component', () => {
  test('It renders', () => {
    assertRendering(<CustomLink href='/' />);
  });
});
