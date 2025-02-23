import { cleanup } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';

import { DEFAULT_SELECTOR, usePreviewSettings } from '@/zustand';

import { assertHookRendering } from '@test/assets';
import { createPreviewSettingsTest } from '@test/assets/components/TestPreviewSettings';

describe('Preview settings store', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    assertHookRendering(() => usePreviewSettings(DEFAULT_SELECTOR));
  });

  test('Setter fn works', () => {
    createPreviewSettingsTest();
  });
});
