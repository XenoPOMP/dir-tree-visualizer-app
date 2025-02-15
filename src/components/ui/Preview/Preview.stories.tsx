import type { Meta, StoryObj } from '@storybook/react';

import { Preview } from '@/components/ui';

const meta = {
  title: 'UI Kit / Preview',
  component: Preview,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Preview>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};

