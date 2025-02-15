import { cleanup, render, screen } from '@testing-library/react';
import cn from 'classnames';
import { afterEach, describe, expect, test } from 'vitest';

import { withAdditionalArgs } from '@/components/hoc';

import { assertRendering } from '@test/assets';

const Comp = withAdditionalArgs<'button', { active?: boolean }>(
  'button',
  ({ Comp, active, className, ...props }) => (
    <Comp
      className={cn(
        {
          'bg-red-500': active,
        },
        className,
      )}
      {...props}
    />
  ),
);

describe('withAdditionalArgs HOC', () => {
  afterEach(() => cleanup());

  // Just render
  test('It renders', () => {
    assertRendering(<Comp active />);
  });

  // Render and check for attributes
  test('Additional args are applied', () => {
    render(
      <Comp
        active
        type='submit'
        data-testid='btn'
      />,
    );
    const btn = screen.getByTestId<HTMLButtonElement>('btn');

    // Checking attributes
    expect(btn.getAttribute('type')).toBe('submit');
    expect(btn.className).toBe('bg-red-500');
  });
});
