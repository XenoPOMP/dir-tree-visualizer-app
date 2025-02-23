import type { Meta, StoryObj } from '@storybook/react';

import { CustomLink } from './CustomLink';

const meta = {
  title: 'UI Kit / CustomLink',
  component: CustomLink,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CustomLink>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  href: '/',
  children: 'Go',
} satisfies Partial<Story['args']>;

export const Unstyled: Story = {
  args: {
    ...sharedProps,
  },
};

export const External: Story = {
  args: {
    ...sharedProps,
    variant: 'external',
  },
};
