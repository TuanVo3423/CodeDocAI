import type { Meta, StoryObj } from '@storybook/react';

import { AILink } from '@/ui-kit';

const meta: Meta<typeof AILink> = {
  title: 'Components/AILink',
  component: AILink,
  tags: ['autodocs'],
  argTypes: {
    href: {
      defaultValue: '#', // set the default value for href
      InputType: '#',
    },
    color: {
      options: ['pri.1', 'pri.2', 'pri.1', 'sec.1', 'sec.2', 'sec.3', 'sec.4'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AILink>;

export const docs: Story = {
  args: {
    fontSize: 'sm',
    children: 'AILink primary',
    href: '#',
    color: 'pri.1',
  },
};
