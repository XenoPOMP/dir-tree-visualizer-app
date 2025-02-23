---
to: __tests__/unit/zustand/<%= h.changeCase.paramCase(name) %>.test.tsx
---
import { describe, test } from 'vitest';

import { DEFAULT_SELECTOR, use<%= h.changeCase.pascalCase(name) %> } from '@/zustand';

import { assertHookRendering } from '@test/assets';

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  test('It renders', () => {
    assertHookRendering(() => use<%= h.changeCase.pascalCase(name) %>(DEFAULT_SELECTOR));
  });
});

