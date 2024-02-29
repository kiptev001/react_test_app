import type { Meta, StoryObj } from '@storybook/react';

import { MyButton, ThemeButton } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'My button',
  component: MyButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Test: Story = {
  args: {
    children: 'TEXT'
  }
};

export const ClearTheme: Story = {
  args: {
    children: 'Clear',
    theme: ThemeButton.CLEAR
  }
};

export const OutlineTheme: Story = {
  args: {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
    className: 'dark app'
  }
};
