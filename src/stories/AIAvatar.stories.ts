import type { Meta, StoryObj } from '@storybook/react';

import { AIAvatar } from '@/ui-kit';

const meta: Meta<typeof AIAvatar> = {
  title: 'Components/AIAvatar',
  component: AIAvatar,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof AIAvatar>;

export const docs: Story = {
  args: {
    url: 'https://i.ibb.co/H4J2Z7K/App.png',
    bgSize: 'contain',
    wAvatar: '200px',
    hAvatar: '200px',
    name: '',
  },
};
