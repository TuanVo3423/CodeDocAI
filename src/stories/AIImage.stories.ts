import type { Meta, StoryObj } from '@storybook/react';

import { AIImage } from '@/ui-kit';

const meta: Meta<typeof AIImage> = {
  title: 'Components/AIImage',
  component: AIImage,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof AIImage>;

export const docs: Story = {
  args: {
    url: 'https://i.ibb.co/H4J2Z7K/App.png',
    w: '400px',
    height: '200px',
  },
};
