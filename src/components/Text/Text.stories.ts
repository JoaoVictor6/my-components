import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'LABEL'
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Small: Story = {
  args: {
    size: 'SMALL'
  },
};
export const Base: Story = {
  args: {
    size: 'BASE'
  },
};
export const Large: Story = {
  args: {
    size: 'LARGE',
  },
};
export const ExtraLarge: Story = {
  args: {
    size: 'EXTRA_LARGE',
  },
};
export const Super: Story = {
  args: {
    size: 'SUPER',
  },
};
export const Mega: Story = {
  args: {
    size: 'MEGA'
  },
};

