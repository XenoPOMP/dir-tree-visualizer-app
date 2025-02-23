import { fireEvent, render, screen } from '@testing-library/react';
import { type ComponentRef, type FC, useEffect, useRef } from 'react';

import { DEFAULT_SELECTOR, usePathsStore } from '@/zustand';

/** Parses data-paths from element. */
function getPathsFromAttr<E extends HTMLElement>(elem: E): string[] {
  return (
    elem
      .getAttribute('data-paths')
      ?.split(';')
      .filter(v => v !== '') ?? []
  );
}

const TestPathsStore: FC<unknown> = () => {
  const { paths, clear, set } = usePathsStore(DEFAULT_SELECTOR);
  const setterRef = useRef<ComponentRef<'button'>>(null);

  useEffect(() => {
    const comp = setterRef.current;

    if (comp === null) {
      return;
    }

    comp.addEventListener('click', () => {
      const paths = getPathsFromAttr(comp);
      const append = comp.getAttribute('data-append') === 'true';

      if (append) {
        set(prev => [...prev, ...paths]);
        return;
      }

      set(paths);
    });
  }, [setterRef.current]);

  return (
    <div>
      <div
        data-testid='output'
        data-paths={paths.join(';')}
      >
        <></>
      </div>

      <button
        data-testid='set'
        data-paths='./src;./src/sus'
        data-append='false'
        ref={setterRef}
      >
        Set
      </button>

      <button
        data-testid='clear'
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
};

/**
 * Renders usePathsStore and allows to manipulate with it
 * to test it out.
 *
 * @example
 * const { clear } = createPathsStoreTest();
 *
 * // Call clear func and expect that it wont throw
 * assertNotThrowing(() => clear());
 */
export const createPathsStoreTest = () => {
  render(<TestPathsStore />);

  // Components
  const setterBtn = screen.getByTestId<HTMLButtonElement>('set');
  const clearBtn = screen.getByTestId<HTMLButtonElement>('clear');
  const outputDiv = screen.getByTestId<HTMLDivElement>('output');

  // Methods
  const getOutput = (): string[] => getPathsFromAttr(outputDiv);

  const set = (act: string[], options?: { append?: boolean }) => {
    const setAttr = (attr: string, data: string) =>
      setterBtn.setAttribute(attr, data);

    const setPaths = (paths: string[]) =>
      setAttr('data-paths', paths.join(';'));

    const enableAppendMode = () => setAttr('data-append', 'true');

    if (options?.append) {
      enableAppendMode();
    }

    setPaths(act);

    fireEvent.click(setterBtn);
  };

  const clear = () => fireEvent.click(clearBtn);

  return {
    getOutput,
    set,
    clear,
  };
};
