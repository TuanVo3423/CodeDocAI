import type { Meta, StoryObj } from '@storybook/react';

import { AIHeading1 } from '@/ui-kit';

const meta: Meta<typeof AIHeading1> = {
  title: 'Components/AIText/AIHeading1',
  component: AIHeading1,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AIHeading1>;

export const docs: Story = {
  args: {
    color: 'pri.1',
    fontWeight: 'bold',
    children: 'AIHeading1',
  },
};
