import type { Meta, StoryObj } from '@storybook/react';
import { Image } from 'lucide-react';

import { AppIcon } from './AppIcon';

const meta = {
  title: 'UI Kit / AppIcon',
  component: AppIcon,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AppIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: <Image />,
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};
