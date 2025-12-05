import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Button from './Button';


const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    mods: ['primary'],
    children: 'Click Me'
  },
};

export const Secondary: Story = {
  args: {
    mods: ['secondary'],
    children: 'Click Me'
  },
};

export const Disabled: Story = {
  args: {
    mods: ['primary'],
    children: 'Click Me',
    disabled: true
  },
};

export const Large: Story = {
  args: {
    mods: ['primary', 'large'],
    children: 'Click Me'
  },
};

export const Small: Story = {
  args: {
    mods: ['secondary', 'small'],
    children: 'Click Me'
  },
};

export const Link: Story = {
  args: {
    mods: ['primary', 'link'],
    children: <a href="https://www.google.com">Click Me</a>
  },
};

export const Danger: Story = {
  args: {
    mods: ['primary', 'danger'],
    children: 'Delete'
  },
};

export const Img: Story = {
  args: {
    mods: ['img'],
    children: <img src="https://avatars.githubusercontent.com/u/43832671?v=4" alt="" draggable={false} />
  }
};

export const Icon: Story = {
  args: {
    mods: ['icon', 'primary'],
    children: <img src="https://avatars.githubusercontent.com/u/43832671?v=4" alt="" draggable={false} />
  }
};

