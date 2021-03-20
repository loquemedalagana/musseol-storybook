import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {AboutModalMessages} from "./ModalExamples";
import ModalWrapper, {IProps as ModalProps} from "./ModalWrapper";

export default {
  title: 'Musiclab/Modal',
  component: ModalWrapper,
} as Meta;

const Template: Story<ModalProps> = (args) => <ModalWrapper {...args} />

export const Basic = Template.bind({});
Basic.args = {
  children: <AboutModalMessages />
}
