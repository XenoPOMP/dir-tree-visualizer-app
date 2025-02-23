import { fireEvent, render, screen } from '@testing-library/react';

import type { InferBoundStoreType } from '@/types';
import type { IDataSettings, usePreviewSettings } from '@/zustand';

import { Component } from './Component';

export const createPreviewSettingsTest = () => {
  render(<Component />);

  const out = screen.getByTestId('output');
  const upd = screen.getByTestId<HTMLButtonElement>('upd');

  function getAttr(attr: string, fallback?: string): string | undefined {
    return out.getAttribute(attr) ?? fallback;
  }

  const setAttr = (attr: string, value: string) => {
    out.setAttribute(attr, value);
  };

  const getSettings = () =>
    JSON.parse(getAttr('data-settings', '{}') ?? '{}') as IDataSettings;

  const set: InferBoundStoreType<
    typeof usePreviewSettings
  >['set'] = partial => {
    setAttr('data-staged', JSON.stringify(partial));
    fireEvent.click(upd);
  };

  return {
    getSettings,
    set,
  };
};
