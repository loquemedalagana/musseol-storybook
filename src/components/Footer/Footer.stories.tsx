import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Footer, {IProps as FooterProps} from "./Footer";

export default {
  title: 'Musiclab/Footer',
  component: Footer,
} as Meta;

const Templete: Story<FooterProps> = (args) => <Footer {...args} />;

export const BasicFooter = Templete.bind({});

export const WhiteFooter = Templete.bind({});
WhiteFooter.args = {
  whiteFont: true,
}
