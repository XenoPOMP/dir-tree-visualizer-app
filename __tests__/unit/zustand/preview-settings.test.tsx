import { describe, test } from 'vitest';

import { DEFAULT_SELECTOR, usePreviewSettings } from '@/zustand';

import { assertHookRendering } from '@test/assets';

describe('Preview settings store', () => {
  test('It renders', () => {
    assertHookRendering(() => usePreviewSettings(DEFAULT_SELECTOR));
  });
});
