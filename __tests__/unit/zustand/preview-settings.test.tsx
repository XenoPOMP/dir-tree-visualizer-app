import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { usePreviewSettings } from '@/zustand';

import { assertHookRendering, createPreviewSettingsTest } from '@test/assets';

describe('Preview settings store', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    assertHookRendering(() => usePreviewSettings());
  });

  test('Setter fn works', () => {
    const { getSettings, set } = createPreviewSettingsTest();

    set({
      folderIconSize: 5,
    });

    expect(getSettings().folderIconSize).toBe(5);
  });

  test('Reset fn works', () => {
    const { getSettings, set, reset } = createPreviewSettingsTest();

    set({
      folderIconSize: 5,
    });
    reset();

    expect(getSettings().folderIconSize).toBe(16);
  });
});
