import type { Meta, StoryObj } from '@storybook/react';

import { AIBoxIcon } from '@/ui-kit';

const meta: Meta<typeof AIBoxIcon> = {
  title: 'Components/AIBox',
  component: AIBoxIcon,
  tags: ['autodocs'],
  args: {
    children: 'This is the AIBox',
  },
};

export default meta;
type Story = StoryObj<typeof AIBoxIcon>;

export const docs: Story = {
  args: {
    w: '50%',
    h: '100px',
  },
};
