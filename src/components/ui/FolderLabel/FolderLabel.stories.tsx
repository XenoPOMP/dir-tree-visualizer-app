import type { Meta, StoryObj } from '@storybook/react';

import { FolderLabel } from '@/components/ui';

const meta = {
  title: 'UI Kit / FolderLabel',
  component: FolderLabel,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FolderLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  variant: 'folder',
  children: 'src',
} satisfies Partial<Story['args']>;

export const Folder: Story = {
  args: {
    ...sharedProps,
  },
};

export const File: Story = {
  args: {
    ...sharedProps,
    variant: 'file',
  },
};
