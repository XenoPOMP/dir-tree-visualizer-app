'use client';

import cn from 'classnames';
import type { FC } from 'react';

import { DEFAULT_SELECTOR, usePreviewSettings } from '@/zustand';

import { usePreview } from './Preview.hook';
import styles from './Preview.module.scss';

export const Preview: FC<unknown> = () => {
  const items = usePreview();
  const { padding } = usePreviewSettings(DEFAULT_SELECTOR);

  return (
    <article
      className={cn('whitespace-break-spaces', styles.previewBlock)}
      style={{
        padding,
      }}
    >
      {items}
    </article>
  );
};
