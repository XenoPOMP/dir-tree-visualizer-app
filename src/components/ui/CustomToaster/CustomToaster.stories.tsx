import type { Meta, StoryObj } from '@storybook/react';

import { CustomToaster } from '@/components/ui';

const meta = {
  title: 'UI Kit / CustomToaster',
  component: CustomToaster,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CustomToaster>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};

