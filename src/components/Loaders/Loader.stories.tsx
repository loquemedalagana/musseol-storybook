import React from 'react';
import { Story, Meta } from '@storybook/react';
import LoaderLayout, {IProps as LoaderProps} from "./LoaderLayout";
import { BottomLoaderElement } from "./Loaders";

export default {
  title: "Musiclab/Loader",
  component: LoaderLayout,
  parameters: {
    layout: "centered",
  }
} as Meta;

const Templete: Story<LoaderProps> = (args) => <LoaderLayout {...args} />;

export const BottomLoader = Templete.bind({});
BottomLoader.args = {
  children: <BottomLoaderElement />
}
