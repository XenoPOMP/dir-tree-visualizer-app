'use client';

import cn from 'classnames';
import type { FC } from 'react';

import type { IPreviewRef } from '@/types';
import { usePreviewSettings } from '@/zustand';

import { PREVIEW_NODE_ID } from '@app/constants';

import { usePreview } from './Preview.hook';
import styles from './Preview.module.scss';

export const Preview: FC<IPreviewRef> = ({ previewRef }) => {
  const items = usePreview();
  const { padding } = usePreviewSettings();

  return (
    <article
      id={PREVIEW_NODE_ID}
      className={cn('whitespace-break-spaces', styles.previewBlock)}
      style={{
        padding,
      }}
      ref={previewRef}
    >
      {items}
    </article>
  );
};
