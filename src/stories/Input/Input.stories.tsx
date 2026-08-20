import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';


const meta = {
  title: 'Input',
  component: Input,
  parameters: {},
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    label: 'Default',
    mods: ['label-stack'],
    placeholder: 'text'
  }
};

export const Thin: Story = {
  args: {
    label: 'Thin',
    mods: ['thin', 'label-stack']
  }
};

export const Small: Story = {
  args: {
    label: 'Small',
    mods: ['small', 'label-stack']
  }
};

export const XSmall: Story = {
  args: {
    mods: ['x-small', 'label-stack'],
    label: 'X Small',
    type: 'number'
  }
};

export const NoArrows: Story = {
  args: {
    label: 'No Arrows',
    mods: ['no-arrows', 'x-small', 'label-stack'],
    type: 'number'
  }
};

export const LabelNoStack: Story = {
  args: {
    label: 'Label No Stack',
    mods: ['label-no-stack']
  }
};

export const LabelSpaceBetween: Story = {
  args: {
    label: 'Label Space Between',
    mods: ['label-space-between']
  }
};
