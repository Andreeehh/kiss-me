// stories.tsx
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger'],
      },
    },
  },
} as Meta<ButtonProps>;

export const Template: Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
