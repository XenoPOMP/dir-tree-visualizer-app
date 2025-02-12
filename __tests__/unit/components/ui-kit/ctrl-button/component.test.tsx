import { describe, test } from 'vitest';

import { ControlButton } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('ControlButton', () => {
  test('It renders', () => {
    assertRendering(<ControlButton />);
  });
});
