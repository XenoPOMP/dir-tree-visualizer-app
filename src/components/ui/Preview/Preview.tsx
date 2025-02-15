'use client';

import cn from 'classnames';
import type { FC } from 'react';

import { usePreview } from './Preview.hook';
import styles from './Preview.module.scss';

export const Preview: FC<unknown> = () => {
  const items = usePreview();

  return (
    <article className={cn('whitespace-break-spaces', styles.previewBlock)}>
      {items}
    </article>
  );
};
