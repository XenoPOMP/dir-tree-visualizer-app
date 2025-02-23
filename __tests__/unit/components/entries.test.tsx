import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Entries from '@/components/ui/Preview/Entries.tsx';

import { assertRendering } from '@test/assets';

describe('Entries comp', () => {
  test('It renders', () => {
    assertRendering(<Entries />);
  });

  test('Empty folders are rendering', () => {
    render(
      <Entries
        entries={{
          a: 'directory',
          b: 'file',
        }}
      />,
    );

    const folders = screen.getAllByTestId<HTMLDivElement>('folder');
    expect(folders.length).toBe(1);
  });
});
