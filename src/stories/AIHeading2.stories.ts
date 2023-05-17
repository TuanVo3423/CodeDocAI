import type { Meta, StoryObj } from '@storybook/react';

import { AIHeading2 } from '@/ui-kit';

const meta: Meta<typeof AIHeading2> = {
  title: 'Components/AIText/AIHeading2',
  component: AIHeading2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AIHeading2>;

export const docs: Story = {
  args: {
    color: 'pri.1',
    fontWeight: 'bold',
    children: 'AIHeading2',
  },
};
