import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, {IProps as ButtonProps} from "./Button";

export default {
  title: 'Musiclab/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: "centered",
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// primary button
export const Primary = Template.bind({});
Primary.args = {
  className: "example-button-typography",
  color: "primary",
  children: "primary button",
};

// secondary button (outlined)
export const Secondary = Template.bind({});
Secondary.args = {
  className: "example-button-typography",
  color: "outlined",
  children: "outlined button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  className: "example-button-typography",
  color: "simple",
  children: "simple button",
};

export const Success = Template.bind({});
Success.args = {
  className: "example-button-typography",
  color: "success",
  children: "success button",
};

export const Danger = Template.bind({});
Danger.args = {
  className: "example-button-typography",
  color: "danger",
  children: "danger button",
};
