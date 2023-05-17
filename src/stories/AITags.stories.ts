import type { Meta, StoryObj } from '@storybook/react';

import { AITags } from '@/ui-kit';

const TAGS = [
  {
    title: 'overview',
    href: '/dashboard/overview',
  },
  {
    title: 'vision goals',
    href: '/dashboard/vision-goals',
  },
  {
    title: 'to do list',
    href: '/dashboard/todo-list',
  },
];

const meta: Meta<typeof AITags> = {
  title: 'Components/AITags',
  component: AITags,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AITags>;

export const docs: Story = {
  args: {
    tags: TAGS,
    id: 'AITAGS',
  },
};
