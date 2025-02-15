import { describe, test } from 'vitest';

import { ExportImageButton } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('ExportImageButton component', () => {
  test('It renders', () => {
    assertRendering(<ExportImageButton />);
  });
});
