import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputTextField from './index';

export default {
  title: 'InputTextField',
  component: InputTextField,
} as Meta;

const Template: Story<{
  placeholder: string;
  onSubmit: (value: string) => void;
}> = (args) => {
  const handleSubmit = (value: string) => {
    alert(`Submitted value: ${value}`);
  };

  return <InputTextField {...args} onSubmit={handleSubmit} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Insira seu Instagram',
};
