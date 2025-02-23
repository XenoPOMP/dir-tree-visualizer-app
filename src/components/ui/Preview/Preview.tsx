'use client';

import cn from 'classnames';
import type { FC } from 'react';

import { usePreviewSettings } from '@/zustand';

import { PREVIEW_NODE_ID } from '@app/constants';

import { usePreview } from './Preview.hook';
import styles from './Preview.module.scss';

export const Preview: FC<unknown> = () => {
  const items = usePreview();
  const { padding } = usePreviewSettings();

  return (
    <article
      id={PREVIEW_NODE_ID}
      className={cn('whitespace-break-spaces', styles.previewBlock)}
      style={{
        padding,
      }}
    >
      {items}
    </article>
  );
};
