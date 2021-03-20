import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import LayoutWrapper, {IProps as LayoutProps} from "./LayoutWrapper";

export default {
  title: 'Musiclab/PageLayout',
  component: LayoutWrapper,
} as Meta;

const Templete: Story<LayoutProps> = (args) => <LayoutWrapper {...args} />

export const SmallParallaxLayout = Templete.bind({});
SmallParallaxLayout.args = {
  children: (
    <div>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  ),
  isSmall: true,
  isWhite: false,
}

export const MediumParallaxLayout = Templete.bind({});
MediumParallaxLayout.args = {
  children: (
    <div>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  ),
  isSmall: false,
  isWhite: false,
}
