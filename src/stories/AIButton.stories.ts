import type { Meta, StoryObj } from '@storybook/react';

import { AIButton } from '@/ui-kit';

const meta: Meta<typeof AIButton> = {
  title: 'Components/Button',
  component: AIButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'primary-fill',
        'primary-ghost',
        'primary-fill-while',
        'while-line',
        'while-line-while',
        'dark-fill',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['lg', 'md', 'sm', 'sx'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AIButton>;

export const docs: Story = {
  args: {
    children: 'AIButton',
    variant: 'primary-fill',
    size: 'md',
    w: '200px',
  },
};
