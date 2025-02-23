import { type ComponentRef, type FC, useRef } from 'react';

import { type IDataSettings, usePreviewSettings } from '@/zustand';

export const Component: FC<unknown> = () => {
  const { set, ...preview } = usePreviewSettings();
  const ref = useRef<ComponentRef<'div'>>(null);

  const update = () => {
    const comp = ref.current;

    if (!comp) {
      return;
    }

    const getStaged = () => comp.getAttribute('data-staged') ?? '{}';

    const staged = JSON.parse(getStaged()) as Partial<IDataSettings>;
    set(staged);
  };

  return (
    <div
      data-testid='output'
      data-settings={JSON.stringify(preview)}
      data-staged=''
      ref={ref}
    >
      <button
        data-testid='upd'
        onClick={update}
      >
        Upd
      </button>
    </div>
  );
};
