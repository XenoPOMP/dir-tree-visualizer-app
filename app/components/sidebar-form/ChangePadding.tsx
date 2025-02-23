'use client';

import { Field, Label } from '@headlessui/react';
import cn from 'classnames';
import type { FC } from 'react';

import { Input } from '@/components/ui/kit';
import { usePreviewSettings } from '@/zustand';

import parentStyles from '@app/main-page.module.scss';

export const ChangePadding: FC<unknown> = () => {
  const { set, padding } = usePreviewSettings();

  return (
    <Field className={cn(parentStyles.field)}>
      <Label>Padding</Label>
      <Input
        value={padding}
        onChange={e => {
          set({
            padding: +e.currentTarget.value,
          });
        }}
        placeholder='24'
        type='number'
      />
    </Field>
  );
};
