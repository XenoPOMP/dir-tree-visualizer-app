import { describe, test } from 'vitest';

import { DEFAULT_SELECTOR, usePathsStore } from '@/zustand';

import { assertHookRendering } from '@test/assets';

describe('SettingsStore', () => {
  test('It renders', () => {
    assertHookRendering(() => usePathsStore(DEFAULT_SELECTOR));
  });
});

