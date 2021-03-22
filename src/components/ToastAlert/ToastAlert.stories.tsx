import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import ToastAlert, {IProps as AlertProps} from "./ToastAlert";

export default {
  title: 'Musiclab/ToastAlert',
  component: ToastAlert,
} as Meta;

const Templete: Story<AlertProps> = (args) => <ToastAlert {...args} />;

export const SuccessAlert = Templete.bind({});
SuccessAlert.args = {
  type: "success",
  message: "This is success alert!",
};

export const DangerAlert = Templete.bind({});
DangerAlert.args = {
  type: "danger",
  message: "This is danger alert",
}

export const InfoAlert = Templete.bind({});
InfoAlert.args = {
  type: "info",
  message: "This is success alert!",
}
