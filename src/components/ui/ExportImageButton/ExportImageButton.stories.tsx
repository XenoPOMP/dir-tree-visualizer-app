import type { Meta, StoryObj } from '@storybook/react';

import { ExportImageButton } from '@/components/ui';

const meta = {
  title: 'UI Kit / ExportImageButton',
  component: ExportImageButton,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExportImageButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};

