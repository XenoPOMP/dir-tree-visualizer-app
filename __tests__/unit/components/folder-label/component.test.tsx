import { describe, test } from 'vitest';

import { FolderLabel } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('FolderLabel component', () => {
  test('It renders', () => {
    assertRendering(<FolderLabel />);
  });
});
