import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, {IProps as HeaderProps} from "./Header";

export default {
  title: 'Musiclab/Header',
  component: Header
} as Meta;

const Templete: Story<HeaderProps> = (args) => <Header {...args} />;

export const BasicHeader = Templete.bind({});
BasicHeader.args = {
  color: "info",
  brand: "Lorem ipsum dolor sit amet",
  position: "fixed",
  changeColorOnScroll: {
    height: 300,
    color: "info",
  },
  mobileOpen: false,
}

export const AdminHeader = Templete.bind({})
AdminHeader.args = {
  color: "rose",
  brand: "Lorem ipsum dolor sit amet",
  position: "fixed",
  changeColorOnScroll: {
    height: 300,
    color: "info",
  },
  mobileOpen: false,
}
