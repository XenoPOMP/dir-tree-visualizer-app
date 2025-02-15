import type { Meta, StoryObj } from '@storybook/react';
import { ImageDown } from 'lucide-react';
import Link from 'next/link';

import { Button } from './Button';

const meta = {
  title: 'UI Kit/Button',
  component: Button,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: 'Click me',
} satisfies Partial<Story['args']>;

export const Default: Story = {
  args: {
    ...sharedProps,
  },
};

export const Control: Story = {
  args: {
    ...sharedProps,
    variant: 'control',
  },
};

export const AppIcon: Story = {
  name: 'UI icon',
  args: {
    ...sharedProps,
    variant: 'control',
    square: true,
    children: <ImageDown />,
  },
};

export const AsLink: Story = {
  name: 'As link',
  decorators: [
    _story => (
      <Button asChild>
        <Link href='https://www.google.com'>google.com</Link>
      </Button>
    ),
  ],
};
