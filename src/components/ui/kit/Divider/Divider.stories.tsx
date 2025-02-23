import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta = {
  title: 'UI Kit / Divider',
  component: Divider,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};

