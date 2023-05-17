import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@chakra-ui/react';

import { AIInputSkeleton } from '@/ui-kit';

const meta: Meta<typeof AIInputSkeleton> = {
  title: 'Components/AIInputSkeleton',
  component: AIInputSkeleton,
  tags: ['autodocs'],
  args: {
    isLoading: true,
  },
};

export default meta;
type Story = StoryObj<typeof AIInputSkeleton>;

export const docs: Story = {
  args: {},
};
