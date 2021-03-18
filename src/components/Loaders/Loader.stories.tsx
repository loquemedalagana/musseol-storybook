import React from 'react';
import { Story, Meta } from '@storybook/react';
import BottomLoader from "./BottomLoader";

export default {
  title: "Musiclab/Loader",
  component: BottomLoader,
} as Meta;

const Templete: Story<{}> = (args) => <BottomLoader />;
