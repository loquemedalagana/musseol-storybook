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
  isSmall: true,
}

export const MediumParallaxLayout = Templete.bind({});
MediumParallaxLayout.args = {
  isSmall: false,
}
