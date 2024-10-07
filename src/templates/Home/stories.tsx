import React from 'react';
import { Meta, Story } from '@storybook/react';
import Home from './index';

export default {
  title: 'Home',
  component: Home,
} as Meta;

const Template: Story<{
  placeholder: string;
  onSubmit: (value: string) => void;
}> = (args) => {
  return <Home />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Insira seu Instagram',
};
