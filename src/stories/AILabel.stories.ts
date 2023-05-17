import type { Meta, StoryObj } from '@storybook/react';

import { AILabel } from '@/ui-kit';

const meta: Meta<typeof AILabel> = {
  title: 'Components/AILabel',
  component: AILabel,
  tags: ['autodocs'],
  args: {
    isRequired: true,
    children: 'This is the lable!',
  },
};

export default meta;
type Story = StoryObj<typeof AILabel>;

export const docs: Story = {
  args: {
    fontSize: 'sm',
  },
};
