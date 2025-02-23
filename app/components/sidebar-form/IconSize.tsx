'use client';

import { Field, Label } from '@headlessui/react';
import cn from 'classnames';
import type { FC } from 'react';

import { Input } from '@/components/ui/kit';
import { usePreviewSettings } from '@/zustand';

import parentStyles from '@app/main-page.module.scss';

export const IconSize: FC<unknown> = () => {
  const { set, folderIconSize } = usePreviewSettings();

  return (
    <Field className={cn(parentStyles.field)}>
      <Label>Icon size</Label>
      <Input
        value={folderIconSize}
        onChange={e => {
          set({
            folderIconSize: +e.currentTarget.value,
          });
        }}
        placeholder='24'
        type='number'
      />
    </Field>
  );
};
