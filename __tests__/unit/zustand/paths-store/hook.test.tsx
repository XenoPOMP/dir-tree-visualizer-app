import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { usePathsStore } from '@/zustand';

import {
  assertHookRendering,
  assertNotThrowing,
  createPathsStoreTest,
} from '@test/assets';

describe('Paths store', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    assertHookRendering(() => usePathsStore());
  });

  test('Clear func works', () => {
    const { clear, getOutput } = createPathsStoreTest();

    const firstLength = getOutput().length;

    // Call clear func and expect that it wont throw
    assertNotThrowing(() => clear());

    const secondLength = getOutput().length;

    // Cleared paths should be empty anyway
    expect(secondLength).toBe(0);

    // Length before should be gte length after
    expect(firstLength).gte(secondLength);
  });

  test('Set func works', () => {
    function double<T>(val: T): [T, T] {
      return [val, val];
    }

    const { clear, getOutput, set } = createPathsStoreTest();
    clear();

    // Pass array
    set(['./story']);
    expect(getOutput()).toStrictEqual(['./story']);
    set(['./src']);
    expect(getOutput()).toStrictEqual(['./src']);

    // Appending paths
    clear();
    set(['./src'], { append: true });
    set(['./data'], { append: true });
    expect(getOutput()).toStrictEqual([
      ...double('./src'),
      ...double('./data'),
    ]);

    clear();
    set(['./base']);
    set(['./a'], { append: true });
    expect(getOutput()).toStrictEqual([...double('./base'), ...double('./a')]);
  });
});
